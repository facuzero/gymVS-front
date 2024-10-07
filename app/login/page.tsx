'use client';
import { useNavigation } from '@/hooks/handlers';

const Login = () => {
  const { handleNavigate } = useNavigation();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    handleNavigate('/profile');
  };
  return (
    <div className='bg-gradient-to-t from-yellow-950 via-yellow-500 to-yellow-400 w-2/4 rounded-lg mx-auto'>
      <aside className='flex justify-center text-center'>
        <div className='text-white'>
          <h3 className='my-5'>Iniciar sesión</h3>
          <form className='flex flex-col items-center' onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre</label>
            <input className='rounded-lg' type='text' name='' id='name' autoFocus autoComplete='additional-name' required />
            <label htmlFor='password'>Contraseña</label>
            <input className='rounded-lg' type='password' name='' id='password' required />
            <button className='my-3' type='submit'>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};
export default Login;
