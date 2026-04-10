
import Header from "../components/Header";
import AcopioList from "../components/AcopioList";
import ReciclajeForm from "../components/ReciclajeForm";

type Props = {
  setPage: (page: string) => void;
  puntos: number;
  setPuntos: (puntos: number) => void;
};

function Dashboard({ setPage, setPuntos, puntos }: Props) {

  return (
    /* Aplicamos el mismo fondo degradado que el Home */
    <div className="w-full min-h-screen bg-fixed bg-gradient-to-r from-green-100 via-green-50 to-green-200 pb-10">
      
      {/* El Header ya debería tener la estructura del Nav del Home */}
      <Header setPage={setPage} />

      <main className="mt-8 md:mt-12 px-4 md:px-6">
        <div className="max-w-5xl w-[92%] mx-auto space-y-8">
          
          {/* Banner de Bienvenida Estilo "Home" */}
          <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-green-50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-green-800">¡Bienvenido de nuevo!</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Tu esfuerzo está transformando la Ciudad de México.
                </p>
              </div>
              <div className="bg-green-600 text-white px-8 py-4 rounded-2xl shadow-lg text-center min-w-[160px]">
                <span className="block text-3xl font-black">{puntos}</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">EcoPuntos Totales</span>
              </div>
            </div>
          </section>
          <br /><br />

          {/* Grid de Contenido Responsivo */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* Mapa: Ocupa 3 columnas en pantallas grandes */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex justify-between items-center px-1">
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-50 p-2">
                <AcopioList />
              </div>
            </div>

            {/* Registro: Ocupa 2 columnas en pantallas grandes */}
            <div className="lg:col-span-2 space-y-3">
              <div className="bg-white rounded-2xl shadow-xl border border-green-50 overflow-hidden">
                <ReciclajeForm setPuntos={setPuntos} puntos={puntos} />
              </div>
            </div>

          </div>
        </div>
      </main>
      <br /><br /><br />
    </div>
  );
}

export default Dashboard;