import React from 'react';
import { reduxForm, Field } from 'redux-form';

export class ContactForm extends React.Component {
    onSubmit(values) {
        console.log(values)
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}
            >
                <label htmlFor="name">Your Name</label>
                <Field component="input" type="text" id="name" name="name" />
                <label htmlFor="email">Email address</label>
                <Field component="input" type="email" id="email" name="email" />
                <label htmlFor="message">Message</label>
                <Field component="textarea" id="message" name="message" />
                <button type="submit" disabled={ this.props.pristine || this.props.submitting }>Submit</button>
            </form>
        );
    }
    
}

export default reduxForm({
    form: 'contact'
})(ContactForm);