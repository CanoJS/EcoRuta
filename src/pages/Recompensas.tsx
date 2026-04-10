import Header from "../components/Header";

type Props = {
  setPage: (page: string) => void;
  puntos: number;
  setPuntos: (puntos: number) => void;
};

const recompensas = [
  { id: "ecobici", titulo: "Viaje Sencillo ECOBICI", descripcion: "Código de un solo uso · 45 min", costo: 45 },
  { id: "metro", titulo: "Recarga Metro ($15 MXN)", descripcion: "Abono directo a tarjeta MI", costo: 38 },
  { id: "predial", titulo: "Descuento Predial", descripcion: "Bonificación en pago anual", costo: 60 },
];

function Recompensas({ setPage, puntos, setPuntos }: Props) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-100 via-green-50 to-green-200 pb-10">
      <Header setPage={setPage} />

      <main className="mt-8 md:mt-12 px-4 md:px-6">
        <div className="max-w-5xl w-[92%] mx-auto space-y-8">

          
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-green-50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-green-800">Mis Recompensas</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Canjea tus EcoPuntos por beneficios reales.
                </p>
              </div>
              <div className="bg-green-600 text-white px-8 py-4 rounded-2xl shadow-lg text-center min-w-[160px]">
                <span className="block text-3xl font-black">{puntos}</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">EcoPuntos Disponibles</span>
              </div>
            </div>
          </section>

          
          <div className="bg-white rounded-2xl shadow-xl border border-green-50 p-6 md:p-8">
            <h2 className="text-xl font-bold text-green-800 mb-6">Catálogo de Canje</h2>

            <div className="space-y-4">
              {recompensas.map((r) => {
                const puedeCanjear = puntos >= r.costo;
                return (
                  <div
                    key={r.id}
                    className="flex text-left justify-between p-4 rounded-2xl border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-all"
                  >
                    <div>
                      <p className="font-bold text-gray-800 text-base mb-0.5">{r.titulo}</p>
                      <p className="text-gray-400 text-sm">{r.descripcion}</p>
                    </div>
                    <button
                      onClick={() => {
                        if (puedeCanjear) {
                          setPuntos(puntos - r.costo);
                          alert(`¡"${r.titulo}" canjeado!`);
                        }
                      }}
                      disabled={!puedeCanjear}
                      className={`ml-4 shrink-0 px-5 py-2 rounded-xl text-sm font-bold transition-all
                        ${puedeCanjear
                          ? "bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-200 active:scale-95"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                      {r.costo} pts
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          
          <button
            onClick={() => setPage("dashboard")}
            className="w-full py-3 rounded-2xl border border-green-200 text-green-800 text-sm font-semibold hover:bg-white/60 transition-all"
          >
            ← Regresar al Panel Principal
          </button>

        </div>
      </main>
    </div>
  );
}

export default Recompensas;