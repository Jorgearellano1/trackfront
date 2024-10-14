import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact">
            <h2>Contacto</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </section>
    );
};

export default ContactSection;
