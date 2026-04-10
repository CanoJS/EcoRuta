import logo from "../assets/logo.jpeg";
import logoRec from "../assets/logo-rec.webp"; 

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
            className="bg-green-600 text-white px-3 md:px-4 py-1 rounded-md text-sm"
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
        </div>

        {/* Imagen final logo-rec con tamaño mediano */}
        <div className="mt-16 md:mt-15">
          <img 
            src={logoRec} 
            alt="Logo Reciclaje" 
            className="w-40 md:w-56 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
      </div>

    </div>
  );
}

export default Home;