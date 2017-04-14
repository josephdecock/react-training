import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory, Link } from 'react-router';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			contacts: []
		};

		this.fetchContacts = this.fetchContacts.bind(this);
	}

	fetchContacts() {
		fetch("http://localhost:3000/contact")
			.then(response => response.json()
				.then(json => this.setState({contacts: json})));
	}

	componentDidMount() {
		this.fetchContacts();
	}

	render() {
		return (
		    <div>
		        <h1>React Contact Form</h1>
		        <ContactCounter numContacts={this.state.contacts.length} />
		        <ContactForm/>
		    </div>
    	)
	}
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
		e.preventDefault();
		fetch("http://localhost:3000/contact", { 
			method: "POST",
			body: JSON.stringify({
				name: this.name.value,
				phoneNumber: this.phoneNumber.value,
				phoneType: this.phoneType.value,
				email: this.email.value,
				message: this.message.value
			})
		}).then(() => {
			hashHistory.push("/confirmation");
		});
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                Name: <input type="text" ref={(name) => this.name = name} />  <br />
                Phone: <input type="text" ref={(phoneNumber) => this.phoneNumber = phoneNumber} /> <br />
                Phone Type: <input type="text" defaultValue="CELL" ref={(phoneType) => this.phoneType = phoneType} /> <br />
                E-Mail: <input type="text" ref={(email) => this.email = email} /> <br />
                Message: <input type="text" ref={(message) => this.message = message} /> <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const ContactCounter = (props) => (
	<div>
		There are {props.numContacts} contact(s)
	</div>
);

const Confirmation = () => (
	<div>
		<h1>Great Success!</h1>
		<Link to="/home">Add Another</Link>
	</div>
);

const Routes = () => (
	<Router history={hashHistory}>
		<Route path="/"><IndexRedirect to="/home" /></Route>
		<Route path="/home" component={App} />
		<Route path="/confirmation" component={Confirmation} />
	</Router>
);

ReactDOM.render(<Routes />, document.getElementById('appRoot'));