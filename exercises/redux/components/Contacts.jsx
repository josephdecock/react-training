import React from 'react';
import { connect } from 'react-redux';
import { loadContacts, loadingSelector, contactsSelector, LOADING_STATE } from '../modules/Contacts';
import Loading from './Loading';

export class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadContacts();
    }

    render() {
        return (
            <Loading isLoading={this.props.isLoading}>
                <h2>Contacts</h2>
                <div>
                </div>
                <ul>
                {this.props.contacts.map((contact) => {
                    <li key={contact.id}>{contact.name}</li>
                })}
                </ul>
            </Loading>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: loadingSelector(state) === LOADING_STATE.LOADING,
        contacts: contactsSelector(state),
    };
};

const mapDispatchToProps = {
    loadContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);