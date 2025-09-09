import { useState, useEffect } from 'react';

export default function BreedEdit({ breed, onUpdate }) {
  const [formData, setFormData] = useState({ ...breed });

  useEffect(() => {
    setFormData(breed);
  }, [breed]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input name="name" value={formData.name} onChange={handleChange} className="w-full border p-2" />
      <input name="origin" value={formData.origin} onChange={handleChange} className="w-full border p-2" />
      <input name="lifespan" value={formData.lifespan} onChange={handleChange} className="w-full border p-2" />
      <input name="image" value={formData.image} onChange={handleChange} className="w-full border p-2" />
      <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">Update Breed</button>
    </form>
  );
}