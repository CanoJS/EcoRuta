type Props = {
  setPage: (page: string) => void;
};

function Login({ setPage }: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-4">Login</h2>

      <input placeholder="Correo" className="border p-2 mb-2" />
      <input placeholder="Contraseña" className="border p-2 mb-4" />

      <button
        onClick={() => setPage("dashboard")}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;