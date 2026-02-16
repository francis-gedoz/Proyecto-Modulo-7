import { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/User/UserContext";

export default function Header() {
    const {
        currentUser,
        cart,
        authStatus,
        verifyUser,
        logout,
        getCart,
        setLoading,
    } = useContext(UserContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setLoading(true);
        verifyUser();
        getCart();
        setLoading(false);
    }, []);

    useEffect(() => {
        getCart();
    }, [currentUser]);

    useEffect(() => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotal(totalItems);
    }, [cart]);

    return (
        <header className="bg-gradient-to-r from-green-600 via-yellow-400 to-blue-500">
        <nav className="flex items-center justify-between gap-2 mx-3 md:mx-8 py-3 md:py-4">
            <ul className="flex items-center">
            <li className="ml-1 md:ml-4">
                <Link
                    to="/"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/80 bg-white/10 hover:bg-white/20 transition-all duration-300"
                    aria-label="Volver a la página principal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-6 h-6"
                        aria-hidden="true"
                    >
                        <rect x="4" y="8" width="40" height="32" rx="4" className="fill-emerald-600" />
                        <polygon points="24,13 37,24 24,35 11,24" className="fill-yellow-300" />
                        <circle cx="24" cy="24" r="5.8" className="fill-blue-600" />
                        <path d="M18.5 24c1.8-1.6 3.6-2.3 5.5-2.3 1.9 0 3.7.7 5.5 2.3" className="fill-none stroke-white stroke-[1.3]" />
                    </svg>
                </Link>
            </li>
            <li className="ml-2 md:ml-10">
                <Link to="/viaja-brasil" className="font-bold text-white text-sm md:text-lg">
                Viaja por Brasil
                </Link>
            </li>
            <li className="ml-4 md:ml-8">
                <Link to="/platos" className="font-bold text-white text-sm md:text-lg">
                Menú Completo
                </Link>
            </li>
            <li className="ml-4 md:ml-8">
                <Link to="/udd-4.0" target="_blank" rel="noopener noreferrer" className="font-bold text-white text-sm md:text-lg">
                UDD 4.0
                </Link>
            </li>
            </ul>

            <section className="flex items-center justify-end gap-1 md:gap-0 shrink-0">
            {authStatus ? (
                <>
                <Link to="/perfil" className="btn-nav ml-2 md:ml-4 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base">
                    Perfil
                </Link>

                <Link to="/" className="btn-nav ml-2 md:ml-4 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base" onClick={logout}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                    </svg>
                </Link>

                <Link to="/carrito" className="btn-cart ml-2 md:ml-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="btn-cart-quantity">{total}</span>
                </Link>
                </>
            ) : (
                <>
                <Link to="/registro" className="btn-nav ml-2 md:ml-4 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base">
                    Registrarse
                </Link>
                <Link to="/iniciar-sesion" className="btn-nav ml-2 md:ml-4 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base">
                    Iniciar sesión
                </Link>
                </>
            )}
            </section>
        </nav>
        </header>
    );
}
