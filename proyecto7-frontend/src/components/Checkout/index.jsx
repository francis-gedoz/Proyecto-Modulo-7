import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/User/UserContext";
import { formatCLP } from "../../utils/formatCLP";

export default function Checkout() {
    const userCtx = useContext(UserContext);

    const { cart, sessionURL, getCheckoutSession, editCart } = userCtx;

    const [total, setTotal] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        getCheckoutSession();
    };

    useEffect(() => {
        if (sessionURL) window.location.href = sessionURL;
    }, [sessionURL]);

    useEffect(() => {
        const reduceTotalFromOrder = () => {
        return cart.reduce((acc, cv) => {
            const updatedQuantity = cv.price * cv.quantity;

            return updatedQuantity + acc;
        }, 0);
        };

        const getOrderDetails = () => {
        const total = reduceTotalFromOrder();

        setTotal(total);
        };

        getOrderDetails();
    }, [cart]);

    const handleChange = (e) => {
        const updatedCart = cart.map((elt) => {
        return elt.priceID === e.target.name
            ? {
                ...elt,
                quantity: parseInt(e.target.value),
            }
            : elt;
        });

        editCart(updatedCart);
    };

    const handleRemove = (e, currentPriceID) => {
        e.preventDefault();

        const updatedCart = cart.filter((elt) => {
        return elt.priceID !== currentPriceID;
        });

        editCart(updatedCart);
    };

    return (
        <>
        <div className="max-w-4xl mx-4 py-8 md:mx-auto">
            <h1 className="text-3xl font-bold mt-8 mb-6">🛒 Carrito</h1>

            <form className="mt-12 space-y-6">
            <div className="form-container">
            <ul>
                {cart.map((e) => {
                return (
                    <li key={e._id} className="flex py-6 border-b last:border-b-0">
                    <figure className="flex-shrink-0">
                        <img
                        src={e.img}
                        alt={e.name}
                        className="checkout-figure-img"
                        />
                    </figure>

                    <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                            <h3 className="text-sm font-semibold text-gray-900">{e.name}</h3>
                        </div>

                        <p className="text-sm font-bold text-emerald-600 text-right">
                            {formatCLP(e.price * e.quantity)}
                        </p>
                        </div>

                        <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                        <select
                            id="quantity-0"
                            value={e.quantity}
                            name={e.priceID}
                            onChange={(e) => {
                            handleChange(e);
                            }}
                            className="block border border-gray-300 px-2 py-1 text-sm rounded-md"
                        >
                            {Array(5)
                            .fill(null)
                            .map((_, i) => {
                                const initial = i + 1;

                                return initial === e.quantity ? (
                                <option key={initial} value={initial}>
                                    {initial}
                                </option>
                                ) : (
                                <option key={initial} value={initial}>
                                    {initial}
                                </option>
                                );
                            })}
                        </select>

                        <button
                            type="button"
                            onClick={(evt) => {
                            handleRemove(evt, e.priceID);
                            }}
                            className="text-sm font-semibold ml-4 md:ml-0 mt-2 text-red-600 hover:text-red-800 transition"
                        >
                            <span>Eliminar</span>
                        </button>
                        </div>
                    </div>
                    </li>
                );
                })}
            </ul>
            </div>

            <div className="form-container">
                <div>
                <dl className="text-sm ">
                    <div className="py-4 flex items-center justify-between">
                    <dt className="font-bold text-gray-900">Total</dt>
                    <dd className="text-lg font-bold text-emerald-600">{formatCLP(total)}</dd>
                    </div>
                </dl>
                </div>
            </div>
            <div className="mt-6">
                <button
                onClick={(e) => {
                    handleSubmit(e);
                }}
                className="form-button"
                >
                Procesar pago
                </button>
            </div>
            </form>
        </div>
        </>
    );
}
