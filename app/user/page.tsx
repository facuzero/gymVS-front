'use client';

import { useRef } from 'react';

const healthConditions = [
  'Patología de columna',
  'Enfermedades cardíacas',
  'Lesiones recientes',
  'Practica otros deportes',
  'Sufre mareos',
  'Tiene dolor de cabeza con frecuencia',
  'Ha sufrido desmayos',
  'Sufre de hemorragias nasales',
  'Tiene dolores articulares',
  'Presenta pie plano',
  'Suele tener convulsiones',
];

// Componente genérico para los campos de entrada
const InputField = ({ label, type, id, placeholder }: { label: string; type: string; id: string; placeholder?: string }) => (
  <div className='flex flex-col mb-4'>
    <label className='text-black' htmlFor={id}>
      {label}
    </label>
    <input className='w-80 p-2 rounded-lg border border-gray-300' type={type} id={id} placeholder={placeholder} />
  </div>
);

// Componente genérico para las casillas de verificación
const CheckboxField = ({ label, id }: { label: string; id: string }) => (
  <div className='flex items-center mb-2'>
    <input type='checkbox' className='mr-2 cursor-pointer' id={id} />
    <label className='cursor-pointer' htmlFor={id}>
      {label}
    </label>
  </div>
);

const User = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  /* const newClient = useState({
    name: '',
    lastName: '',
    address: '',
    phone: 0,
    age: 0,
    height: 0,
    bloodType: '',
    spinalPathology: false,
    heartDisease: false,
    recentInjuries: false,
    practiceSports: false,
    imgProfile: 'urlImagen',
    subscription: new Date(),
  }); */

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      const formData: { [key: string]: string | boolean } = {};
      Array.from(formRef.current.elements).forEach((element) => {
        if ((element as HTMLInputElement).id) {
          const input = element as HTMLInputElement;
          if (input.type === 'checkbox') {
            formData[input.id] = input.checked;
          } else {
            formData[input.id] = input.value;
          }
        }
      });
      console.log(formData);
    }
  };
  return (
    <div className='p-4'>
      <h2 className='text-2xl text-center mb-4'>Nuevo Cliente</h2>
      <form onSubmit={handleSubmit} ref={formRef} className='flex flex-col items-center bg-gradient-to-t from-yellow-950 via-yellow-500 to-yellow-400 w-2/4 rounded-lg p-4 mx-auto'>
        <InputField label='Nombre' type='text' id='name' placeholder='Ingrese el nombre del cliente' />
        <InputField label='Apellido' type='text' id='lastName' placeholder='Ingrese el apellido del cliente' />
        <InputField label='Dirección' type='text' id='address' placeholder='Ingrese la dirección del cliente' />
        <InputField label='Teléfono' type='number' id='phone' placeholder='Ingrese el teléfono del cliente' />
        <InputField label='Edad' type='number' id='age' placeholder='Ingrese la edad del cliente' />
        <InputField label='Altura' type='number' id='height' placeholder='Ingrese la altura aproximada del cliente' />
        <InputField label='Tipo de sangre' type='text' id='bloodType' placeholder='Ingrese el tipo de sangre del cliente' />
        <InputField label='Imagen de perfil' type='file' id='img' />
        <InputField label='Fecha de ingreso' type='date' id='subscription' />

        <h3 className='text-lg mt-4 mb-2'>Seleccione en caso de ser afirmativo</h3>
        <ul className='grid grid-cols-2 gap-2'>
          {healthConditions.map((condition, index) => (
            <li key={index}>
              <CheckboxField label={condition} id={`pat${index}`} />
            </li>
          ))}
        </ul>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default User;
