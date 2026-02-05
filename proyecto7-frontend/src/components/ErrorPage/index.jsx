import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirigir a home después de 3 segundos
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="max-w-4xl mx-4 py-8 md:mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Pago Cancelado</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Tu pago ha sido cancelado.
                </p>
                <p className="text-md text-gray-600">
                    Serás redirigido a la página principal en unos momentos...
                </p>
            </div>
        </div>
    );
}