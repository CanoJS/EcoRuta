import logo from "../assets/logo.jpeg";

type Props = {
  setPage: (page: string) => void;
};

function Login({ setPage }: Props) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-100 via-green-50 to-green-200 py-12 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white border border-gray-200 p-6 shadow-xl">
        
        <div className="py-4 flex justify-center">
          <button onClick={() => setPage("home")}>
            <img src={logo} alt="EcoRuta Logo" className="h-12 w-auto" />
          </button>
        </div>

        <h1 className="mb-6 text-center text-2xl font-bold text-green-800">Crear cuenta</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="nombre@ejemplo.com" 
              className="py-2.5 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Contraseña" 
              className="py-2.5 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all" 
            />
          </div>

          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">¿Olvidaste tu contraseña?</a>
          </div>

          <button
            onClick={() => setPage("dashboard")}
            className="py-2.5 font-semibold w-full rounded-lg bg-green-600 text-white transition-colors duration-300 hover:bg-green-700 shadow-md"
          >
            Registrarse
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute top-1/2 left-0 h-px w-full bg-gray-200"></div>
          <span className="relative z-10 bg-white px-3 text-xs uppercase text-gray-400 font-medium">O continuar con</span>
        </div>

        <div className="space-y-3">
          <button type="button"
            className="flex py-2.5 w-full items-center justify-center gap-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#166fe5] transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#fff"></path>
            </svg>
            Facebook
          </button>

          <button type="button"
            className="flex py-2.5 w-full items-center justify-center gap-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path>
              <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691"></path>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path>
            </svg>
            Google
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 leading-relaxed">
          Al registrarte, aceptas nuestros{" "}
          <a href="#" className="underline hover:text-green-600">Términos de Servicio</a> y{" "}
          <a href="#" className="underline hover:text-green-600">Política de Privacidad</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;