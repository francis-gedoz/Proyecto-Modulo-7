import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main className="text-center px-4 mt-24 mx-auto">
                <h1 className="text-5xl font-extrabold text-gray-900">Aplicación de platos</h1>
                <p className="mt-3 mx-auto text-gray-500">Accede al menú y revisa todos nuestros platos.</p>
                <section className="mt-16 mx-auto max-w-md">
                    <article>
                        <Link to="/platos" className="btn-product">Ver el menú de platos</Link>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Home;