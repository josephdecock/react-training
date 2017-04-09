import React from 'react';
import { connect } from 'react-redux';
import { submittingSelector, errorMessageSelector, createContact } from '../modules/AddContact';
import Loading from './Loading';

export class AddContact extends React.Component {
    constructor(props) {
        super(props);

        this.addContact = this.addContact.bind(this);
    }

    addContact() {
        const newContact = {
            name: this.nameInput.value,
            phoneNumber: this.phoneNumberInput.value,
            phoneType: this.phoneNumberTypeInput.value,
            email: this.emailInput.value,
            message: this.messageInput.value,
        };

        this.props.createContact(newContact);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isSubmitting && this.props.isSubmitting && nextProps.errorMessage === null) {
            // the submission was successful
            this.nameInput.value = '';
            this.phoneNumberInput.value = '';
            this.phoneNumberTypeInput.value = '';
            this.emailInput.value = '';
            this.messageInput.value = '';

            this.props.onContactCreated && this.props.onContactCreated();
        }
    }

    render() {
        return (
            <div>
                <h3>Add Contact</h3>
                <div>
                    <div>
                        <label htmlFor="newContactName">Name: </label>
                        <input type="text" id="newContactName" name="newContactName" ref={(input) => this.nameInput = input} />
                    </div>
                    <div>
                        <label htmlFor="newContactPhoneNumber">Phone Number (xxxxxxxxxx): </label>
                        <input type="number" id="newContactPhoneNumber" name="newContactPhoneNumber" ref={(input) => this.phoneNumberInput = input} />
                    </div>
                    <div>
                        <label htmlFor="newContactPhoneType">Phone Type: </label>
                        <select id="newContactPhoneType" name="newContactPhoneType" ref={(input) => this.phoneNumberTypeInput = input}>
                            <option value=""></option>
                            <option value="CELL">CELL</option>
                            <option value="HOME">HOME</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="newContactEmail">Email: </label>
                        <input type="email" id="newContactEmail" name="newContactEmail" ref={(input) => this.emailInput = input} />
                    </div>
                    <div>
                        <label htmlFor="newContactMessage">Message: </label>
                        <input type="text" id="newContactMessage" name="newContactMessage" ref={(input) => this.messageInput = input} />
                    </div>
                    <div>
                        <button type="button" onClick={this.addContact} disabled={this.props.isSubmitting}>
                            {this.props.isSubmitting && <span>Submitting...</span>}
                            {!this.props.isSubmitting && <span>Add Contact</span>}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSubmitting: submittingSelector(state),
        errorMessage: errorMessageSelector(state),
    };
};

const mapDispatchToProps = {
    createContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);