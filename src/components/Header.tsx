type Props = {
  puntos: number;
  setPage: (page: string) => void;
};

function Header({ puntos, setPage }: Props) {
  return (
    <div className="bg-green-600 text-white p-4 flex justify-between">
      <h1>EcoRuta</h1>

      <div className="relative group cursor-pointer">
        <span>EcoPuntos: {puntos}</span>

        <div className="absolute hidden group-hover:block bg-white text-black p-2 mt-2 rounded shadow">
          <button onClick={() => setPage("recompensas")}>
            Canjear puntos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;