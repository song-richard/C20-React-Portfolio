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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Page</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name='name' value={name} onChange={handleForm} placeholder='Name' className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
                <input name='email' value={email} onChange={handleForm} placeholder='Email' className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
                <input name='message' value={message} onChange={handleForm} placeholder='Message' className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
        </>
    );
};