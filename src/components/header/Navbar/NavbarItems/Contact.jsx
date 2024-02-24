import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState('');

    return (
        <>
            <h1>Contact Page</h1>
            <form>
                <input name='name' placeholder='Name'/>
                <input name='email' placeholder='Email'/>
                <input name='message' placeholder='Message'/>
                <button>Submit</button>
            </form>
        </>
    );
};