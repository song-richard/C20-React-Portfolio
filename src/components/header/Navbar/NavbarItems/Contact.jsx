import { useState } from 'react';

export default function Contact() {
    //Variables for Name, Email, and Message
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //Form Logic
    const handleForm = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else {
            setMessage(value);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form Submitted! Name: ${name}, Email: ${email}, Message: ${message}`);
    };

    return (
        <>
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <input name='name' value={name} onChange={handleForm} placeholder='Name'/>
                <input name='email' value={email} onChange={handleForm} placeholder='Email'/>
                <input name='message' value={message} onChange={handleForm} placeholder='Message'/>
                <button>Submit</button>
            </form>
        </>
    );
};