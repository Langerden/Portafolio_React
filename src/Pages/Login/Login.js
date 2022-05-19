import React, { useState } from "react";
import { useLocation } from "wouter";
import './Login.css'

export default function Login() {
    const [formValues, setFormValues] = useState({
        email: ""
    });
    const [path, pushLocation] = useLocation();

    function handleChange(evt) {
        const { name, value } = evt.target;

        const newValues = {
            ...formValues,
            [name]: value,
        };
        setFormValues(newValues);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        pushLocation(`/homepage/${formValues.email}`);
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-form-label">Ingresa tu email</label>
                <input className="login-form-input" type="email" name="email" onChange={handleChange} required="required" />
                <button className="login-form-btn" type="submit" >Login</button>
            </form>
        </div>
    );
}