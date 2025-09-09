export default function BreedShow({ breed }) {
  if (!breed) return <div>Select a breed to view details.</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{breed.name}</h2>
      <img src={breed.image} alt={breed.name} className="w-full h-64 object-cover rounded mb-2" />
      <p><strong>Origin:</strong> {breed.origin}</p>
      <p><strong>Lifespan:</strong> {breed.lifespan}</p>
      <p className="mt-2">{breed.description}</p>
    </div>
  );
}