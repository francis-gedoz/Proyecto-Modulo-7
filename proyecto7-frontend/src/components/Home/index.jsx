import { Link } from "react-router-dom";
import encabezado from "../../assets/encabezado-brasil.jpg";

const Home = () => {
    return (
        <>
            <main className="mx-4 md:mx-8 mt-8">
                <section className="mt-16 flex flex-col-reverse md:flex-row items-center md:items-stretch gap-8 min-h-[70vh]">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Conozca Brasil a través de sus sabores</h1>
                        <p className="mt-4 text-gray-500 max-w-xl">Accede a todos nuestros platos típicos.</p>

                        <div className="mt-10 w-48 mx-auto">
                            <Link to="/platos" className="btn-product block text-center">Ver platos típicos</Link>
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