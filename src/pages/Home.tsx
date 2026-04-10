import logo from "../assets/logo.jpeg";
import { Leaf, Award, MapPin } from "lucide-react";

type Props = {
  setPage: (page: string) => void;
};

function Home({ setPage }: Props) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-100 via-green-50 to-green-200 pb-10 pt-4">
      
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white/70 backdrop-blur rounded-xl shadow max-w-6xl w-[92%] mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="EcoRuta" className="h-8" />
          <span className="font-bold text-lg">EcoRuta</span>
        </div>

        <div className="flex gap-2 md:gap-4">
          <button
            onClick={() => setPage("login")}
            className="px-3 md:px-4 py-1 text-sm font-medium"
          >
            Login
          </button>
          <button
            onClick={() => setPage("login")}
            className="bg-green-600 text-white px-3 md:px-4 py-1 rounded-md text-sm shadow-sm"
          >
            Sign up
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center mt-12 md:mt-20 px-6">
        <p className="text-xs md:text-sm text-gray-500 mb-2 uppercase tracking-wide">
          Plataforma de reciclaje inteligente
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-green-800 leading-tight">
          Reciclar nunca fue <br className="hidden md:block" /> tan fácil
        </h1>

        <p className="text-gray-600 max-w-xl mb-8 text-sm md:text-base">
          EcoRuta te permite registrar tus reciclajes, acumular puntos y
          canjear recompensas mientras ayudas al medio ambiente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => setPage("login")}
            className="bg-black text-white px-8 py-3 rounded-md shadow-lg"
          >
            Comenzar gratis
          </button>
          <button className="bg-white px-8 py-3 rounded-md border shadow-sm">
            Ver más
          </button>
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-green-100 p-3 rounded-full text-green-600 mb-4">
            <Leaf size={24} />
          </div>
          <h3 className="font-bold text-green-900 mb-2">Economía Circular</h3>
          <p className="text-sm text-gray-600">Impulsamos un modelo que convierte los residuos en activos digitales valiosos.</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-green-100 p-3 rounded-full text-green-600 mb-4">
            <Award size={24} />
          </div>
          <h3 className="font-bold text-green-900 mb-2">Incentivos Reales</h3>
          <p className="text-sm text-gray-600">Canjea tus EcoPuntos por descuentos en trámites o recargas de transporte.</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-green-100 p-3 rounded-full text-green-600 mb-4">
            <MapPin size={24} />
          </div>
          <h3 className="font-bold text-green-900 mb-2">Puntos Cercanos</h3>
          <p className="text-sm text-gray-600">Localiza centros de acopio oficiales fácilmente a través de nuestra red inteligente.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;