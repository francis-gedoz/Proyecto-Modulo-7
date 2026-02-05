import { useContext, useEffect } from "react";
import DishContext from "../../../contexts/Dish/DishContext";
import { Link } from "react-router-dom";

const DishList = () => {
    const ctx = useContext(DishContext);
    const { platos, getPlatos } = ctx;

    useEffect(() => {
        getPlatos();
    }, [])

    return (
        <>
            <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2 flex-column">
                {platos.length === 0 ? (
                    <p>No hay platos disponibles</p>
                ) : (
                    platos.map(plato => {
                        return (
                            <div key={plato._id} className="border flex flex-col">
                                <div className="bg-gray-200">
                                    <Link to={`/platos/${plato.slug}`} state={{ plato }}>
                                        <img
                                            src={plato.img}
                                            alt={plato.description}
                                            className="w-full h-96 object-center object-cover"
                                        />
                                    </Link>
                                </div>
                                <div className="flex-1 p-4 space-y-2 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900">{plato.name}</h3>
                                    <p className="text-gray-500 pb-8">{plato.description}</p>
                                    <Link to={`/platos/${plato.slug}`} state={{ plato }} className="btn-product">
                                        <button type="button" className="w-full">Ver plato</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                )}
            </section>
        </>
    )
}

export default DishList;