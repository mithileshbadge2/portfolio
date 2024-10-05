import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Assuming you have a CSS file for styling

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS setup to send the form data
        emailjs.send('badgemithilesh7@gmail.com', 'template_ybffl5g', {
            from_name: name,
            from_email: email,
            message: message,
        }, '5mkTiBcxo7eYdav0j') // Use your actual User ID here
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                setFormSubmitted(true); // Update to show success message
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
            });

        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>

            {formSubmitted && (
                <div className="success-message">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    ); 
}

export default Contact;
