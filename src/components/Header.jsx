import logoImg from '../assets/logoImg.png';

function Header(){
    return(
        <>       
        <header className="header flex justify-between items-center px-[30px] py-[15px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
            <div className="logo">
                <a href="">
                <img img src={logoImg} alt="Logo clinica" className="h-[50px] w-auto block"></img>
                </a>
            </div>

            <nav className="nav-menu flex items-center gap-3.75">
                <a href="#contacto" className=" text-[#333333] bg-transparent border border-[#ccc] font-sans font-semibold text-[14px] px-5 py-[10px] rounded-[5px] transition-all duration-300 ease-in-out hover:bg-[#f5f5f5]">Contáctanos</a>
                <a href="#reservar" className="text-white bg-[#099181] border border-[#099181] font-sans font-semibold text-[14px] px-5 py-[10px] rounded-[5px] transition-all duration-300 ease-in-out hover:bg-[#156a60] hover:border-[#156a60]">Reservar Hora</a>
                <a href="#login" className="text-[#099181] bg-transparent border-none font-sans font-semibold text-[14px] px-5 py-[10px] transition-all duration-300 ease-in-out hover:underline">Ingresa</a>
            </nav>
        </header>
        </>
    )
}
export default Header