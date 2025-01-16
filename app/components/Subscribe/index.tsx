"use client"
import type { NextPage } from 'next'
import {FormEvent, useState} from "react";

const Subscribe: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            name,
            email,
            phone,
            message
        }

        const rawResponse = await fetch(`/api/submit?name=${name}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        alert( 'Thank you for sending us your feedback')

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')
    }

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto py-16">
                <form className="py-4 space-y-4" onSubmit={handleSubmit}>

                    <div className="flex items-center justify-center">  
                        <h2>Send us request to book a lesson</h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Name" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Email" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Phone" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Your Message" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="flex items-center justify-center text-lg w-64 rounded-md shadow py-3 px-2 text-blue bg-indigo-600">Request a lesson</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Subscribe