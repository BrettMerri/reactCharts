import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LolForm.css';

const validate = values => {
    const errors = {}
    if (!values.displayName) {
        errors.displayName = 'Required';
    } else if (values.displayName.length < 3 || values.displayName.length > 16) {
        errors.displayName = 'Must be 3 to 16 characters';
    } else if (!/^[\w\s.]+$/i.test(values.displayName)) {
        errors.displayName = 'Invalid display name';
    }
    return errors
}


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div className="form-group mx-sm-3">
            <label htmlFor="displayName" className="sr-only">Display name</label>
            <input {...input} className="form-control" id="displayName" placeholder={label} type={type}/>
        </div>
        {touched && (error && <span className="error">{error}</span>)}
    </div>
  )
  
const LolForm = (props) => {
    return (
    <form className="form-inline" onSubmit={props.handleSubmit}>
        <Field
            name="displayName"
            label="Display Name"
            component={renderField}
            type="text"
            placeholder="Display Name"
        />
        <button type="submit" className="btn btn-default" disabled={props.submitting}>Submit</button>
    </form>
    );
}

export default reduxForm({
    form: 'lol',
    validate
})(LolForm);