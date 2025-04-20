'use client';
import { useState } from 'react';
import SubscriptionTier from '../components/auth/SubscriptionTier';

export default function SignupPage() {
  const [selectedPlan, setSelectedPlan] = useState('');
  
  return (
    <div style={{ background: '#0f1115', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '2rem' }}>Create Account</h1>

      {/* Basic Form Inputs */}
      <form style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
        <input placeholder="First Name" className="form-input" />
        <input placeholder="Last Name" className="form-input" />
        <input placeholder="Email" type="email" className="form-input" />
        <input placeholder="Phone (with + code)" className="form-input" />
        <input placeholder="Password" type="password" className="form-input" />
        <input placeholder="Re-type Password" type="password" className="form-input" />

        <SubscriptionTier selected={selectedPlan} onSelect={setSelectedPlan} />

        <button className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
}
