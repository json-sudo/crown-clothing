import React from 'react';

import './contact.styles.scss';

const ContactPage = () => (
    <section className="contact-page">
        <h1>Thank you for shopping with us</h1>

        <div className="contact-card">
            <span className="contact-item">You can call us at: +01 2134 555</span>
            <span className="contact-item">Email us <p>@ crwn-clothing-support@nomail.com</p></span>
            <span className="contact-item">We have our offices at 12 Street Drive, Townsville, Nigeria</span>

            <p>
                Reach out to us if you have any complaints, issues or enquiries. We look forward to hearing from you.
            </p>
        </div>
    </section>
)

export default ContactPage;