const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y{' '}
          <span className="text-indigo-600 font-bold">administralos</span>  
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label 
              htmlFor="mascota" 
              className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text" 
              placeholder="Nombre de la Mascota"
              id="mascota"
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="propietario" 
              className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text" 
              placeholder="Nombre del Propietario"
              id="propietario"
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="email" 
              className="block text-gray-700 uppercase font-bold">
              Email
            </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email" 
              placeholder="Email Contacto Propietario"
              id="email"
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="alta" 
              className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="date" 
              id="alta"
            />
          </div>
          <div className="mb-5">
            <label 
              htmlFor="sintomas" 
              className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>
            <textarea 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="sintomas"
              placeholder="Describe los Síntomas"
            />
          </div>
          <input type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value="Agregar Paciente"
          />
        </form>
    </div>
  )
}

export default Formulario


