import React from 'react'
import useForm from "./useForm";
import validateInfo from './validateInfo';
import "./Form.css";

const FormSignup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo);
  
    return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Get started with us today! 
                Create your account by filling 
                out the information below.
            </h1>
            <div className="form-inputs">
                <label htmlFor="username" 
                className="form-label">
                    Username
                </label>
                <input type="text"
                    id="username"
                    name="username"
                    className="form-input"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="email" 
                className="form-label">
                    Email
                </label>
                <input type="text"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email" 
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password" 
                className="form-label">
                    Password
                </label>
                <input type="password"
                    id="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange} 
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password2" 
                className="form-label">
                    Confirm password
                </label>
                <input type="password"
                    id="password2"
                    name="password2"
                    className="form-input"
                    placeholder="Re-type password"
                    value={values.password2}
                    onChange={handleChange} 
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="form-input-btn" type="submit">
                Sign up
            </button>
            
        </form>
    </div>
  )
}

export default FormSignup