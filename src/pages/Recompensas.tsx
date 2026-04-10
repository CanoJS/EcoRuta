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
      <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 rounded-2xl p-8 mb-8 text-center">
        <p className="text-gray-500 uppercase font-bold dark:text-white text-base  mb-2">Saldo Disponible</p>
        <p className="text-4xl  font-bold text-green-600 dark:text-green-400">{puntos} puntos</p>
      </div>
      <h2 className="text-2xl dark:text-white mb-4">Canjear recompensas:</h2>

      <div className="space-y-4 mb-8">
        {recompensas.map((r) => {
          const puedeCanjear = puntos >= r.costo;
          return (
            <div
              key={r.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm pb-5 flex items-center justify-between"
            >
              <div className="text-left gap-4">
                <div>
                  <p className="font-bold text-gray-800 dark:text-white text-lg mb-1">{r.titulo}</p>
                  <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{r.descripcion}</p>
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
                className={`ml-4 shrink-0 px-4 py-2 rounded-xl text-sm fontpx-6 py-3 rounded-full text-base font-semibold transition-all
                  ${puedeCanjear
                    ? "bg-green-500 text-white hover:bg-green-600 active:scale-95"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {r.costo} puntos
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setPage("dashboard")}
        className="w-full py-3 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      >
        ← Volver al dashboard
      </button>
    </div>
  );
}

export default Recompensas;