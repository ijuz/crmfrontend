"use client";
// components/ContactForm.tsx
import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Import the CSS module

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Placeholder for form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.left} p-4`}>
        <h2 className="text-2xl mb-4">Get In Touch With Us!</h2>
        <div className="mb-4">
          <h3 className="text-xl">Phone</h3>
          <p>+44 7418365876</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl">Email</h3>
          <p>marketing@cloudqlobe.com</p>
          <p>sales@cloudqlobe.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl">Address</h3>
          <p>44 Heung Yip Road, Southern District, Hong Kong</p>
          <p>ZIP CODE: 999077</p>
        </div>
      </div>

      <div className={styles.center}>
        <iframe 
          className={styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d472676.00361975416!2d114.16303100000002!3d22.248376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404001eb448682f%3A0x41aecc11649f1e65!2s44%20Heung%20Yip%20Rd%2C%20Wong%20Chuk%20Hang%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1727621829893!5m2!1sen!2sus" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <form className={`${styles.right} p-4`} onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Contact Us</h2>
        
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="border p-2 w-full" 
            required 
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border p-2 w-full" 
            required 
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="subject">Subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            className="border p-2 w-full" 
            required 
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="border p-2 w-full" 
            rows={4} 
            required 
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Send Message
        </button>
        {submitted && <p className="text-green-500 mt-4">Message sent!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
