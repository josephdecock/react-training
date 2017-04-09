import React from 'react';
import { connect } from 'react-redux';
import { loadContacts, sortContacts, loadingSelector, contactsSelector, sortColumnSelector, LOADING_STATE } from '../modules/Contacts';
import Loading from './Loading';
import AddContact from './AddContact';

export class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.contactCreated = this.contactCreated.bind(this);
        this.onSort = this.onSort.bind(this);
    }

    componentDidMount() {
        this.props.loadContacts();
    }

    onSort(e) {
        this.props.sortContacts(e.target.value);
    }

    contactCreated() {
        // refresh the data
        this.props.loadContacts();
    }

    render() {
        // this example is using a controlled input (passing value to select)
        return (
            <Loading isLoading={this.props.isLoading}>
                <div>
                    <AddContact onContactCreated={this.contactCreated} />
                </div>
                <h2>Contacts</h2>
                <div>
                    <label htmlFor="contactSortColumn">Sort Column</label>
                    <select id="contactSortColumn" onChange={this.onSort} value={this.props.sortColumn}>
                        <option value="Name">Name</option>
                        <option value="Phone Number">Phone Number</option>
                        <option value="Email">Email</option>
                        <option value="Message">Message</option>
                    </select>
                </div>
                <ul>
                {this.props.contacts.map((contact) => (
                    <li key={contact.id}>
                        <h3>{contact.name}</h3>
                        <div>{contact.phoneType} - {contact.phoneNumber} - {contact.email}</div>
                        <div>{contact.message}</div>
                    </li>
                ))}
                </ul>
            </Loading>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: loadingSelector(state) === LOADING_STATE.LOADING,
        contacts: contactsSelector(state),
        sortColumn: sortColumnSelector(state),
    };
};

const mapDispatchToProps = {
    loadContacts,
    sortContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);