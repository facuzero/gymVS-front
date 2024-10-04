'use client';
import { useNavigation } from '@/hooks/handlers';

const Login = () => {
  const { handleNavigate } = useNavigation();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    handleNavigate('/profile');
  };
  return (
    <div>
      <aside>
        <div>
          <h3>Iniciar sesión</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre</label>
            <input type='text' name='' id='name' autoFocus autoComplete='additional-name' />
            <label htmlFor='password'>Contraseña</label>
            <input type='password' name='' id='password' />
            <button type='submit' onClick={() => handleNavigate('/profile')}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};
export default Login;
