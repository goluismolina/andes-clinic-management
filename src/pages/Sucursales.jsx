import imgSantiago from '../assets/santiago.jpg';
import imgRancagua from '../assets/rancagua.jpg';
import imgOHiggins from '../assets/ohiggins.jpg';

export default function Sucursales(){
      const clinicas = [
    {
      id: 1,
      nombre: 'Clinica Andina Santiago',
      imagen: imgSantiago,
      descripcion: 'Ubicada en un sector estratégico de la capital, nuestra sede central ofrece una amplia cobertura en medicina general, urgencias 24/7 y más de 20 especialidades médicas. Contamos con estacionamiento exclusivo y conectividad directa a pasos del metro.',
      direccion: 'Av. Providencia 2045, Providencia, Región Metropolitana.',
      contacto: '+56 2 2345 6789'
    },
    {
      id: 2,
      nombre: 'Clinica Andina Rancagua',
      imagen: imgRancagua,
      descripcion: 'Pensada para el cuidado integral de la comunidad local, esta sucursal destaca por su moderno centro de imágenes, laboratorio clínico automatizado y un completo pabellón de cirugía ambulatoria. Brindamos una atención cálida y eficiente sin necesidad de viajar a Santiago.',
      direccion: 'Av. Rancagua 1234, Rancagua, Región del Maule.',
      contacto: '+56 73 234 5678'
    },
    {
      id: 3,
      nombre: 'Clinica Andina O\'Higgins',
      imagen: imgOHiggins,
      descripcion: 'Nuestra sede regional está especialmente equipada para la atención familiar, medicina preventiva y consultas pediátricas. Diseñada con espacios cómodos y seguros, buscamos descentralizar la salud llevando la mejor calidad médica a los valles de la región.',
      direccion: 'Av. O\'Higgins 5678, O\'Higgins, Región del Maule.',
      contacto: '+56 73 234 5678'
    }
];
  return (
    <section className="max-w-[1200px] mx-auto px-[20px] py-[40px] text-center font-sans">
      <h1 className="text-3xl font-bold mb-4">Conoce Nuestra Red De Clinicas</h1>
      <p className="max-w-[600px] mx-auto mb-[40px] text-gray-600 text-justify">
        En Red de Clínicas Andina estamos comprometidos con tu bienestar y el de tu familia. 
        Ponemos a tu disposición infraestructura médica de primer nivel, tecnología de vanguardia 
        y un equipo de profesionales de la salud altamente calificados, listos para brindarte una 
        atención humana, oportuna y de calidad en todas nuestras sucursales.
      </p>

      {/* 3. Contenedor Grid (2 columnas en desktop, 1 columna en móvil) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-center">
        {clinicas.map((clinica) => (
          <div 
            key={clinica.id} 
            className="bg-[#f9f9f9] rounded-[8px] p-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.05)] text-justify overflow-hidden
                       last:odd:md:col-span-2 last:odd:md:justify-self-center last:odd:md:max-w-[calc(50%-15px)] last:odd:w-full"
          >
            <img 
              src={clinica.imagen} 
              alt={clinica.nombre} 
              className="w-full h-[250px] object-cover rounded-[6px] mb-[15px]"
            />
            <h2 className="text-xl font-bold mb-2 text-gray-800">{clinica.nombre}</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{clinica.descripcion}</p>
            <p className="text-sm font-medium text-gray-700 mb-1">📍 Dirección: {clinica.direccion}</p>
            <p className="text-sm font-medium text-gray-700">📞 Contacto: {clinica.contacto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}