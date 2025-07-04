import React from 'react';
import './Contact.css';

const Contact = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Kontaktieren Sie uns</h2>
        <form>
          <input type="text" placeholder="Namen" required />
          <input type="email" placeholder="email" required />
          <input type="number" placeholder="Ihre Nummer" required />
          <textarea placeholder="Ihre Nachricht" required></textarea>
          <button type="submit">Senden</button>
        </form>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Contact;
