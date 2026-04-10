import { useState } from "react";

type Props = {
  puntos: number;
  setPuntos: (puntos: number) => void;
};

function ReciclajeForm({ puntos, setPuntos }: Props) {
  const [foto, setFoto] = useState<File | null>(null);
  const [validando, setValidando] = useState(false);

  const handleValidacion = () => {
    if (!foto) {
      alert("Por favor, toma una foto de tus residuos en el punto de acopio para continuar.");
      return;
    }

    setValidando(true);

    setTimeout(() => {
      setPuntos(puntos + 20);
      alert("¡Validación exitosa! Has recibido 20 EcoPuntos por tu contribución.");
      setFoto(null);
      setValidando(false);
    }, 2500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Registrar Entrega</h2>
      <p className="text-sm text-gray-600">
        Captura una foto de tus materiales en el contenedor oficial para validar tu participación.
      </p>
      
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-green-200 rounded-lg p-6 bg-green-50/30">
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          onChange={(e) => setFoto(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700 cursor-pointer"
        />
        {foto && (
          <p className="mt-3 text-sm text-green-700 font-medium">
            ✅ Evidencia lista: {foto.name}
          </p>
        )}
      </div>

      <button
        onClick={handleValidacion}
        disabled={validando}
        className={`w-full py-3 rounded-lg font-bold text-white transition-all shadow-lg ${
          validando ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 active:scale-95'
        }`}
      >
        {validando ? "Validando evidencia..." : "Obtener EcoPuntos"}
      </button>
      
      <p className="text-[10px] text-center text-gray-400 italic">
        Al registrarte, confirmas que estás en un punto de acopio oficial de la red EcoRuta.
      </p>
    </div>
  );
}

export default ReciclajeForm;