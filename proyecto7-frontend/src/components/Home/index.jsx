import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main className="text-center px-4 mt-24 mx-auto">
                <h1 className="text-5xl font-extrabold text-gray-900">Viaje por Brasil a través de sus sabores</h1>
                <p className="mt-3 mx-auto text-gray-500">Accede al menú gastronónico y revisa todos nuestros platos típicos.</p>
                <section className="mt-16 mx-auto max-w-md">
                    <article>
                        <Link to="/platos" className="btn-product">Ver platos típicos</Link>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Home;