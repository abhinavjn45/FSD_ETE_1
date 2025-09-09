export default function BreedList({ breeds, onDelete, onEdit, onView }) {
  return (
    <div className="grid gap-4">
      {breeds.map((breed) => (
        <div key={breed.id} className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-bold">{breed.name}</h2>
          <div className="space-x-2 mt-2">
            <button onClick={() => onView(breed.id)} className="text-blue-600">View</button>
            <button onClick={() => onEdit(breed.id)} className="text-green-600">Edit</button>
            <button onClick={() => onDelete(breed.id)} className="text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
