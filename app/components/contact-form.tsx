'use client'

import { useEffect, useState } from 'react'

interface FormProps {
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    email?: string;
    subject?: string;
    message?: string;
}



export default function ContactForm() {
    const [formData, setFormData] = useState<FormProps>({
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (formErrors[name as keyof FormErrors]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);

            setTimeout(() => {
                setFormData({ email: '', subject: '', message: '' });
                setSubmitted(false);
            }, 6000);
        }
    };



    return (
        <form onSubmit={handleSubmit} className={`p-6 rounded-lg border border-neutral-200 bg-white shadow-sm`}>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none ${formErrors.email ? 'border-red-500' : 'border-neutral-300'}  bg-white text-black`}
                    placeholder='Email'
                />
                {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject:</label>
                <input
                    type="subject"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none ${formErrors.subject ? 'border-red-500' : 'border-neutral-300'}  bg-white text-black`}
                    placeholder='Email'
                />
                {formErrors.subject && <p className="text-red-500 mt-1">{formErrors.subject}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none ${formErrors.message ? 'border-red-500' : 'border-neutral-300'}  bg-white text-black`}
                    placeholder='Message'
                />
                {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
            </div>

            <button
                type="submit"
                className="cursor-pointer w-full px-6 py-2 bg-black text-white rounded hover:bg-neutral-800 transition">
                Send Message
            </button>
            {submitted && <p className="text-green-800 mt-4 text-center">Your message has been sent</p>}
        </form>
    );
}