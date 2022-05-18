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
                <span>Ingresa tu email</span>
                <input type="text" name="email" onChange={handleChange} />
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}