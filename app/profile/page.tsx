const profile = () => {
  return (
    <div>
      <h3 className='text-center my-4'>Clientes</h3>
      <ul className='grid grid-cols-10'>
        <li>Nombre</li>
        <li>Apellido</li>
        <li>Edad</li>
        <li>DNI</li>
        <li>Direcciòn</li>
        <li>Teléfono</li>
        <li>Altura</li>
        <li>Tipo de sangre</li>
        <li>Fecha de pago</li>
        <li>Registros médicos</li>
      </ul>
    </div>
  );
};
export default profile;
