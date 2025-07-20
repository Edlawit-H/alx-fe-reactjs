import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: 'navy',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </PageWrapper>
  );
}

export default Contact;
