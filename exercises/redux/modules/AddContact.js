import { createAjaxAction } from './middleware/Ajax';

const ADDING_CONTACT = 'Contacts/ADDING_CONTACT';
const CONTACT_ADDED = 'Contacts/CONTACT_ADDED';
const ADDING_CONTACT_FAILED = 'Contacts/ADDING_CONTACT_FAILED';

export const LOADING_STATE = {
    'LOADING': 'LOADING',
    'NONE': 'NONE',
    'FAILED': 'FAILED',
};

const initialState = {
    loadingState: LOADING_STATE.NONE,
    errorMessage: null,
    submittingContact: false,
};

export const errorMessageSelector = (state) => state.addContact.errorMessage;
export const submittingSelector = (state) => state.addContact.submittingContact;
export const loadingSelector = (state) => state.addContact.loadingState;

export default function addContactReducer(state = initialState, action) {
    switch(action.type) {
        case (ADDING_CONTACT): {
            return Object.assign({}, state, { submittingContact: true, errorMessage: null });
        }
        case (CONTACT_ADDED): {
            return Object.assign({}, state, { submittingContact: false, errorMessage: null });
        }
        case (ADDING_CONTACT_FAILED): {
            return Object.assign({}, state, { submittingContact: false, errorMessage: action.error });
        }
        default: {
            return state;
        }
    }
}

export function createContact(newContact) {
    return createAjaxAction('http://localhost:3000/contact', {
        pendingActionType: ADDING_CONTACT,
        successActionType: CONTACT_ADDED,
        failedActionType: ADDING_CONTACT_FAILED,
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: [
            {
                name: 'Content-Type',
                value: 'application/json',
            },
        ],
    });
}