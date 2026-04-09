type Props = {
  setPage: (page: string) => void;
};

function Recompensas({ setPage }: Props) {
  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Canjear recompensas</h2>

      <ul className="space-y-2">
        <li>Descuento en transporte</li>
        <li>Descuento en predial</li>
      </ul>

      <button
        onClick={() => setPage("dashboard")}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Volver
      </button>
    </div>
  );
}

export default Recompensas;