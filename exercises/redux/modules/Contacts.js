import { createAjaxAction } from './middleware/Ajax';

const LOADING_CONTACTS = 'Contacts/LOADING_CONTACTS';
const CONTACTS_LOADED = 'Contacts/CONTACTS_LOADED';
const LOADING_CONTACTS_FAILED = 'Contacts/LOADING_CONTACTS_FAILED';

export const LOADING_STATE = {
    'LOADING': 'LOADING',
    'NONE': 'NONE',
    'FAILED': 'FAILED',
};

const initialState = {
    contactsById: {},
    contactIds: [],
    loadingState: LOADING_STATE.NONE,
    errorMessage: null,
};

export const loadingSelector = (state) => state.contacts.loadingState;
export const contactsSelector = (state) => {
    const contacts = [];
    return state.contacts.contactIds.map((id) => {
        return contactsById[id];
    });
};

export default function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case (LOADING_CONTACTS): {
            return Object.assign({}, state, { loadingState: LOADING_STATE.LOADING, errorMessage: null });
        }
        case (CONTACTS_LOADED): {
            const contactIds = [];
            const contactsById = {};
            action.data.forEach((contact) => {
                contactIds.push(contact.id);
                contactsById[contact.id] = contact;
            });
            return Object.assign({}, state, { contactIds, contactsById, loadingState: LOADING_STATE.NONE });
        }
        case (LOADING_CONTACTS_FAILED): {
            return Object.assign({}, state, { loadingState: LOADING_STATE.FAILED, errorMessage: action.error });
        }
        default: {
            return state;
        }
    }
}

export function loadContacts() {
    return createAjaxAction('http://localhost:3000/contact', {
        pendingActionType: LOADING_CONTACTS,
        successActionType: CONTACTS_LOADED,
        failedActionType: LOADING_CONTACTS_FAILED,
    });
}