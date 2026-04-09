type Props = {
  setPage: (page: string) => void;
};

function Home({ setPage }: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">EcoRuta</h1>
      <p className="mb-6 text-center">
        Recicla y gana EcoPuntos que puedes canjear por beneficios.
      </p>

      <button
        onClick={() => setPage("login")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Iniciar sesión
      </button>
    </div>
  );
}

export default Home;