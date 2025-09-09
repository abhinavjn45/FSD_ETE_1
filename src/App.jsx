import { useState } from 'react';
import HeroSection from './components/HeroSection';
import BreedCreate from './components/BreedCreate';
import BreedEdit from './components/BreedEdit';
import BreedList from './components/BreedList';
import BreedShow from './components/BreedShow';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleCreate = (newBreed) => {
    const id = Date.now(); // Simple unique ID
    setBreeds([...breeds, { ...newBreed, id }]);
  };

  const handleDelete = (id) => {
    setBreeds(breeds.filter(b => b.id !== id));
    if (selectedId === id) setSelectedId(null);
    if (editingId === id) setEditingId(null);
  };

  const handleUpdate = (updatedBreed) => {
    setBreeds(breeds.map(b => b.id === updatedBreed.id ? updatedBreed : b));
    setEditingId(null);
  };

  const selectedBreed = breeds.find(b => b.id === selectedId);
  const editingBreed = breeds.find(b => b.id === editingId);

  return (
    <div className="w-full mx-auto">
      <HeroSection />

      <div className="max-w-4xl my-20 mx-auto pt-10 p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Dog Breed Management Application</h1>
        <BreedCreate onCreate={handleCreate} />
      </div>
      <div className="w-full my-20 mx-auto pt-10 grid grid-cols-2 gap-4 mt-8">
        <BreedList breeds={breeds} onDelete={handleDelete} onEdit={setEditingId} onView={setSelectedId} />
        {editingId ? (
          <BreedEdit breed={editingBreed} onUpdate={handleUpdate} />
        ) : (
          <BreedShow breed={selectedBreed} />
        )}
      </div>
    </div>
  );
}

export default App;