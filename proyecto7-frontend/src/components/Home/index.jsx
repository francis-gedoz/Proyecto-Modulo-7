import { useNavigate } from "react-router-dom";
import encabezado from "../../assets/encabezado-brasil.jpg";

const Home = () => {
    const navigate = useNavigate();

    const handleRegionChange = (event) => {
        const { value } = event.target;

        if (!value) return;

        navigate(`/platos/region/${value}`);
    };

    return (
        <>
            <main className="mx-4 md:mx-8 mt-8">
                <section className="mt-16 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 min-h-[70vh]">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
                        <h1 className="text-[2.4rem] md:text-[3.25rem] font-extrabold text-gray-900 leading-tight">Restaurante<br />Sabor do Brasil</h1>
                        <p className="mt-4 text-gray-500 max-w-xl">Accede a nuestra variada gastronomía brasileña</p>

                        <div className="mt-10 w-full max-w-xs mx-auto">
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

                    <div className="w-full md:w-12/12 flex justify-center md:justify-end">
                        <div className="w-full md:w-[150%] h-64 md:h-[480px] rounded-md overflow-hidden shadow-lg">
                            <img src={encabezado} alt="Encabezado Brasil" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;