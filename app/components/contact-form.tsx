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
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
        }

        checkTheme()

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)

        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

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
            }, 3000);
        }
    };

    

    return (
        <form onSubmit={handleSubmit} className={`p-6 rounded-lg border ${isDark ? 'border-neutral-800 bg-black' : 'border-neutral-200 bg-white'} shadow-sm`}>
        <div>
        <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${formErrors.email ? 'border-red-500' : 'border-neutral-300'} ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-black'}`}
        />
        {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
        </div>
        </form>
    )
}