import logoImg from '../assets/logoImg.png';

export default function Footer(){
    return(
        <>
            <footer className="bg-[#099181] text-white px-5 py-12.5">
                <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between gap-y-[30px]">
            
                        <div className="flex-1 min-w-[200px] pr-[20px]">
                            <img img src={logoImg} alt="Logo clinica" className="mb-[15px] block"></img>
                            <p className="text-[14px] leading-[1.6] text-[#D3E0EA]">Cuidando tu salud en el <br /> corazón de Chile.</p>
                        </div>

                        <div className="flex-1 min-w-[200px] pr-[20px]">
                            <h3 className="text-[16px] font-medium mb-[20px] text-white uppercase tracking-[1px]">Contacto</h3>
                            <p className="text-[14px] leading-[1.6] text-[#D3E0EA] mb-[10px]">Av. Providencia 2045, <br /> Santiago, Chile</p>
                            <p className="text-[14px] leading-[1.6] text-[#D3E0EA] mb-[10px]">+56 2 2345 6789 <br /> info@clinicaandina.cl</p>
                        </div>

                        <div className="flex-1 min-w-[200px] pr-[20px]">
                            <h3 className="text-[16px] font-medium mb-[20px] text-white uppercase tracking-[1px]">Servicios</h3>
                            <ul className="list-none p-0 m-0">
                                {['Medicina General', 'Pediatría', 'Ginecología', 'Especialistas'].map((servicio) => (
                                <li key={servicio} className="mb-[10px] text-[14px] text-[#D3E0EA] before:content-['•_'] before:text-[#00B4CC] before:font-bold">
                                <a href="#" className="text-[#D3E0EA] no-underline transition-colors duration-300 hover:text-[#00B4CC]">
                                {servicio}
                                </a>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 min-w-[200px] pr-[20px]">
                            <h3 className="text-[16px] font-medium mb-[20px] text-white uppercase tracking-[1px]">Horarios</h3>
                            <p className="text-[14px] leading-[1.6] text-[#D3E0EA] mb-[10px]">Lunes a Viernes: 8:00 - 20:00</p>
                            <p className="text-[14px] leading-[1.6] text-[#D3E0EA] mb-[10px]">Sábados: 9:00 - 13:00</p>
                            <p className="text-[14px] leading-[1.6] text-[#D3E0EA] mb-[10px]">Domingos: Cerrado</p>
                        </div>
                </div>
            </footer>
        </>
    )
}
