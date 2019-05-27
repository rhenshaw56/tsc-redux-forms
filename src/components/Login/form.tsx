import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';


const Form: React.FC<InjectedFormProps> = (props) => {
  return (
    <div className={"col-md-12 form-wrapper"}>
      <h2>Sign Up</h2>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group col-md-12">
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </div>
        <div className="form-group col-md-12">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;