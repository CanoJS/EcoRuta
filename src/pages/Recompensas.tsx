type Props = {
  setPage: (page: string) => void;
  puntos: number;
};

function Recompensas({ setPage, puntos}: Props) {
  return (
    <div className="p-6">
      <div className="bg-green-100 border border-green-400 rounded-xl p-4 mb-6 text-center">
        <p className="text-gray-500 text-sm">Mis EcoPuntos</p>
        <p className="text-4xl font-bold text-green-600">{puntos}</p>
      </div>
      <h2 className="text-2xl mb-4">Canjear recompensas:</h2>

      <div className="descuento_EcoBici">
        <h4>Viaje Sencillo ECOBICI</h4>
        <p>Código de un solo Uso 45 min</p>
        <button
        onClick={() => alert("Recompensa canjeada!")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        45 EcoPuntos
      </button>
      </div>

      <div className="descuento_Metro">
        <h4>Viaje Sencillo ECOBICI</h4>
        <p>Código de un solo Uso 45 min</p>
        <button
        onClick={() => alert("Recompensa canjeada!")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        45 EcoPuntos
      </button>
      </div>

      <div className="descuento_Predial">
        <h4>Viaje Sencillo ECOBICI</h4>
        <p>Código de un solo Uso 45 min</p>
        <button
        onClick={() => alert("Recompensa canjeada!")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        45 EcoPuntos
      </button>
      </div>

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