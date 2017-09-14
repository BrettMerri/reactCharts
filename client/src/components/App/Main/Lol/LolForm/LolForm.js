import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LolForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <label>Display Name</label>
        <div>
            <Field
                name="displayName"
                component="input"
                type="text"
                placeholder="Display Name"
            />
            <button type="submit">Submit</button>
        </div>
    </form>
    );
}

export default reduxForm({
    form: 'lol'
})(LolForm);