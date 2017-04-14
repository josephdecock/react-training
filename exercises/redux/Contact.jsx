import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// TODO Maybe the middleware could generate the type names? Pass in "CONTACTS" and let this middle ware tack on fetching, fetched, etc
const fetchMiddleware = (store) => (next) => (action) => {
	if(action.type === 'FETCH_ACTIONS') {
		next({
			type: action.pendingActionType
		});
		fetch(action.url, action.fetchParameters).then(
			response => {
				console.log(response);
				next({
					type: action.successActionType,
					data: response.data
				});
			},
			error => {
				next({
					type: action.errorActionType,
					error: error
				});
			}); 
	} else {
		next(action);
	}
}

function getContacts() {
	return {
		type: 'FETCH_ACTIONS',
		url: 'http://localhost:3000/contact',
		pendingActionType: 'FETCHING_CONTACTS',
		successActionType: 'FETCHED_CONTACTS',
		errorActionType: 'FAILED_FETCHING_CONTACTS',
	};
}

function addContact(contact) {
	return {
		type: 'POST_ACTIONS',
		url: 'http://localhost:3000/contact',
		fetchParameters: {
			method: "POST",
			body: JSON.stringify(contact)
		},
		pendingActionType: 'POSTING_CONTACT',
		successActionType: 'POSTED_CONTACT',
		errorActionType: 'FAILED_POSTING_CONTACT',
	};
}

function contactsReducer(state = { contacts: [] }, action) {
	if(action.type === "FETCHED_CONTACTS") {
		return { contacts: action.data };
	} else {
		return state;
	}
}

class ContactsComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul>
				{
					this.props.contacts.map(c => <li>c.id</li>)
				}
			</ul>
		);
	}

	componentDidMount() {
		this.props.getContacts();
		this.props.addContact();
		this.props.getContacts();
	}
}
const mapStateToProps = state => ({
	contacts: state.contacts || []
});
const mapDispatchToProps = {
	getContacts: getContacts,
	addContact: addContact
};
const Contacts = connect(mapStateToProps, mapDispatchToProps)(ContactsComponent)

const App = () => {
	const store = createStore(contactsReducer, applyMiddleware(fetchMiddleware));
	return (
		<Provider store={store}>
			<div>
				<h1>Redux Contact Form</h1>
				<Contacts />
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('appRoot'));
