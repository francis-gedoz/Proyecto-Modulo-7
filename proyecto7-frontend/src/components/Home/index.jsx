import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import encabezado from "../../assets/encabezado-brasil.jpg";
import tacacaNorte from "../../assets/tacaca-norte.jpg";
import moquecaNoreste from "../../assets/moqueca-noreste.jpg";
import pequiCentroOeste from "../../assets/pequi-centro-oeste.jpg";
import feijoadaSudeste from "../../assets/feijoada-sudeste.jpg";
import picanhaSur from "../../assets/picanha-sur.jpg";

const Home = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = [
        encabezado,
        tacacaNorte,
        moquecaNoreste,
        pequiCentroOeste,
        feijoadaSudeste,
        picanhaSur,
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, [heroImages.length]);

    const handleRegionChange = (event) => {
        const { value } = event.target;

        if (!value) return;

        navigate(`/platos/region/${value}`);
    };

    return (
        <>
            <main className="mx-4 md:mx-8 mt-4 md:mt-8">
                <section className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 md:gap-10 min-h-[60vh] md:min-h-[70vh]">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
                        <h1 className="text-5xl sm:text-[3rem] md:text-[3.25rem] font-extrabold leading-[0.95] tracking-tight">
                            <span className="inline-block bg-gradient-to-r from-green-500 via-yellow-400 to-slate-400 bg-clip-text text-transparent">Restaurante</span>
                            <br />
                            <span className="inline-block bg-gradient-to-r from-green-500 via-yellow-400 to-blue-600 bg-clip-text text-transparent">Sabor do Brasil</span>
                        </h1>
                        <p className="mt-3 md:mt-4 text-gray-500 text-base md:text-lg max-w-xl">Accede a nuestra variada gastronomía brasileña</p>

                        <div className="mt-7 md:mt-10 w-full max-w-sm mx-auto">
                            <select
                                defaultValue=""
                                onChange={handleRegionChange}
                                className="w-full px-4 py-3 bg-emerald-600 text-white font-medium text-center rounded-md shadow focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            >
                                <option value="" disabled className="text-center">Seleccione Región</option>
                                <option value="norte" className="text-left pl-3">Platos Típicos - Región Norte</option>
                                <option value="noreste" className="text-left pl-3">Platos Típicos - Región Noreste</option>
                                <option value="centro-oeste" className="text-left pl-3">Platos Típicos - Región Centro-Oeste</option>
                                <option value="sudeste" className="text-left pl-3">Platos Típicos - Región Sudeste</option>
                                <option value="sur" className="text-left pl-3">Platos Típicos - Región Sur</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full md:w-12/12 flex items-center justify-center md:justify-end">
                        <div className="w-full md:w-[150%] h-56 sm:h-72 md:h-[480px] rounded-md overflow-hidden shadow-lg">
                            <img
                                src={heroImages[currentImageIndex]}
                                alt="Platos típicos de Brasil"
                                className="w-full h-full object-cover object-center transition-opacity duration-700"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;