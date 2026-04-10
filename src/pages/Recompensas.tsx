type Props = {
  setPage: (page: string) => void;
  puntos: number;
  setPuntos: (puntos: number) => void;
};
const recompensas = [
  {
    id: "ecobici",
    titulo: "Viaje Sencillo ECOBICI",
    descripcion: "Código de un solo uso · 45 min",
    costo: 45,
    
  },
  {
    id: "metro",
    titulo: "Recarga Metro ($15 MXN)",
    descripcion: "Abono directo a tarjeta MI",
    costo: 38,
    
  },
  {
    id: "predial",
    titulo: "Descuento Predial",
    descripcion: "Bonificación en pago anual",
    costo: 60,
    
  },
];

function Recompensas({ setPage, puntos, setPuntos}: Props) {
  return (
    <div className=" p-6">
      <div className="bg-green-100 border border-green-400 rounded-2xl p-8 mb-8 text-center">
        <p className="text-gray-500 text-base ">Mis EcoPuntos</p>
        <p className="text-4xl font-bold text-green-600">{puntos}</p>
      </div>
      <h2 className="text-2xl mb-4">Canjear recompensas:</h2>

      <div className="space-y-3 mb-6">
        {recompensas.map((r) => {
          const puedeCanjear = puntos >= r.costo;
          return (
            <div
              key={r.id}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{r.titulo}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{r.descripcion}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (puedeCanjear) {
                    setPuntos(puntos - r.costo); 
                    alert(`¡"${r.titulo}" canjeado!`);
                  }
                }}
                disabled={!puedeCanjear}
                className={`ml-4 shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all
                  ${puedeCanjear
                    ? "bg-green-500 text-white hover:bg-green-600 active:scale-95"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {r.costo} pts
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setPage("dashboard")}
        className="w-full py-3 rounded-2xl border border-gray-200 text-gray-500 text-sm font-medium hover:bg-gray-100 transition-all"
      >
        ← Volver al dashboard
      </button>
    </div>
  );
}

export default Recompensas;