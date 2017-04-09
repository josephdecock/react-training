import { createAjaxAction } from './middleware/Ajax';

const LOADING_CONTACTS = 'Contacts/LOADING_CONTACTS';
const CONTACTS_LOADED = 'Contacts/CONTACTS_LOADED';
const LOADING_CONTACTS_FAILED = 'Contacts/LOADING_CONTACTS_FAILED';

const CHANGE_SORT = 'Contacts/CHANGE_SORT';

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
    sort: {
        sortColumn: 'Name',
    },
};

export const sortColumnSelector = (state) => state.contacts.sort.sortColumn;
export const errorMessageSelector = (state) => state.contacts.errorMessage;
export const loadingSelector = (state) => state.contacts.loadingState;
export const contactsSelector = (state) => {
    const contacts = [];
    return state.contacts.contactIds.map((id) => {
        return state.contacts.contactsById[id];
    }).sort((a, b) => {
        switch (state.contacts.sort.sortColumn) {
            case ('Name'): {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1;
                } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                }

                return 0;
            }
            case ('Phone Number'): {
                if (a.phoneNumber < b.phoneNumber) {
                    return -1;
                } else if (a.phoneNumber > b.phoneNumber) {
                    return 1;
                }

                return 0;
            }
            case ('Email'): {
                if (a.email.toUpperCase() < b.email.toUpperCase()) {
                    return -1;
                } else if (a.email.toUpperCase() > b.email.toUpperCase()) {
                    return 1;
                }

                return 0;
            }
            case ('Message'): {
                if (a.message.toUpperCase() < b.message.toUpperCase()) {
                    return -1;
                } else if (a.message.toUpperCase() > b.message.toUpperCase()) {
                    return 1;
                }

                return 0;
            }
        }
    });
};

export default function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case (CHANGE_SORT): {
            return Object.assign({}, state, { sort: { sortColumn: action.column }});
        }
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

export function sortContacts(sortColumn) {
    return {
        type: CHANGE_SORT,
        column: sortColumn,
    };
}
