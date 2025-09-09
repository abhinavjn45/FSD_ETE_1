import { useState } from 'react';

export default function BreedCreate({ onCreate }) {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    lifespan: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({ name: '', origin: '', lifespan: '', image: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input name="name" placeholder="Breed Name" onChange={handleChange} value={formData.name} className="w-full border p-2" />
      <input name="origin" placeholder="Origin" onChange={handleChange} value={formData.origin} className="w-full border p-2" />
      <input name="lifespan" placeholder="Lifespan" onChange={handleChange} value={formData.lifespan} className="w-full border p-2" />
      <input name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} className="w-full border p-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} className="w-full border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Breed</button>
    </form>
  );
}