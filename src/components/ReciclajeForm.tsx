type Props = {
  puntos: number;
  setPuntos: (puntos: number) => void;
};

function ReciclajeForm({ puntos, setPuntos }: Props) {
  const handleClick = () => {
    setPuntos(puntos + 20);
    alert("Reciclaje validado correctamente");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Registrar reciclaje
      </button>
    </div>
  );
}

export default ReciclajeForm;