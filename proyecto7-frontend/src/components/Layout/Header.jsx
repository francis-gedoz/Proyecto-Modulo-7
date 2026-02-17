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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-gradient-to-r from-green-600 via-yellow-400 to-blue-500">
            <nav className="mx-3 md:mx-8 py-3 md:py-4">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 md:gap-6 min-w-0">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-full border border-white/80 bg-white/10 hover:bg-white/20 transition-all duration-300"
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

                        <ul className="hidden md:flex md:items-center md:gap-8">
                            <li>
                                <Link to="/viaja-brasil" className="font-bold text-white text-lg whitespace-nowrap">
                                    Viaja por Brasil
                                </Link>
                            </li>
                            <li>
                                <Link to="/platos" className="font-bold text-white text-lg whitespace-nowrap">
                                    Menú Completo
                                </Link>
                            </li>
                            <li>
                                <Link to="/udd-4.0" target="_blank" rel="noopener noreferrer" className="font-bold text-white text-lg whitespace-nowrap">
                                    UDD 4.0
                                </Link>
                            </li>
                        </ul>

                        <Link to="/viaja-brasil" onClick={closeMobileMenu} className="md:hidden font-bold text-white text-base truncate">
                            Viaja por Brasil
                        </Link>
                    </div>

                    <section className="hidden md:flex md:items-center md:justify-end md:gap-3 shrink-0">
                        {authStatus ? (
                            <>
                                <Link to="/perfil" className="btn-nav px-4 py-2 text-sm lg:text-base">
                                    Perfil
                                </Link>

                                <Link to="/" className="btn-nav px-3 py-2 text-sm lg:text-base" onClick={logout}>
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

                                <Link to="/carrito" className="btn-cart">
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
                                <Link to="/registro" className="btn-nav px-4 py-2 text-sm lg:text-base">
                                    Registrarse
                                </Link>
                                <Link to="/iniciar-sesion" className="btn-nav px-4 py-2 text-sm lg:text-base">
                                    Iniciar sesión
                                </Link>
                            </>
                        )}
                    </section>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center rounded-md border border-white/80 px-3 py-2 text-white bg-white/10"
                        aria-label="Abrir menú"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 rounded-lg border border-white/30 bg-white/25 backdrop-blur-md p-3 space-y-3 text-white shadow-md">
                        <div className="grid gap-2">
                            <Link to="/viaja-brasil" onClick={closeMobileMenu} className="font-semibold py-2 px-2 rounded-md hover:bg-white/20">
                                Viaja por Brasil
                            </Link>
                            <Link to="/platos" onClick={closeMobileMenu} className="font-semibold py-2 px-2 rounded-md hover:bg-white/20">
                                Menú Completo
                            </Link>
                            <Link to="/udd-4.0" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="font-semibold py-2 px-2 rounded-md hover:bg-white/20">
                                UDD 4.0
                            </Link>
                        </div>

                        <div className="border-t border-white/30 pt-3">
                            {authStatus ? (
                                <div className="grid grid-cols-2 gap-2">
                                    <Link to="/perfil" onClick={closeMobileMenu} className="btn-nav text-center px-3 py-2 text-sm !ml-0">
                                        Perfil
                                    </Link>
                                    <Link to="/carrito" onClick={closeMobileMenu} className="btn-nav text-center px-3 py-2 text-sm !ml-0">
                                        Carrito ({total})
                                    </Link>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            logout();
                                            closeMobileMenu();
                                        }}
                                        className="btn-nav col-span-2 text-center px-3 py-2 text-sm !ml-0"
                                    >
                                        Cerrar sesión
                                    </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-2">
                                    <Link to="/registro" onClick={closeMobileMenu} className="btn-nav text-center px-3 py-2 text-sm !ml-0">
                                        Registrarse
                                    </Link>
                                    <Link to="/iniciar-sesion" onClick={closeMobileMenu} className="btn-nav text-center px-3 py-2 text-sm !ml-0">
                                        Iniciar sesión
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
