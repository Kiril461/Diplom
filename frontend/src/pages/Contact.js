import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/feedback', formData);
      setSuccess('Повідомлення надіслано!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSuccess('Помилка при надсиланні.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Зв’язатися з нами</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Ім’я"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Повідомлення"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Надіслати</button>
      </form>
      {success && <p className="mt-4 text-green-600">{success}</p>}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Контакти</h3>
        <p>Адреса: вул. Книжкова, 1, Київ</p>
        <p>Email: library@example.com</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          className="w-full h-64 mt-4"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
