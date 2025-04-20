'use client';
import './ForgotPasswordModal.css';

export default function ForgotPasswordModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Reset Your Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <input type="email" placeholder="Enter your email" className="form-input" />
        <div className="modal-buttons">
          <button className="send-button">Send Reset Link</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
