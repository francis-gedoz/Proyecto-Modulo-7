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
            <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {platos.length === 0 ? (
                    <p>No hay platos disponibles</p>
                ) : (
                    platos.map(plato => {
                        return (
                            <div key={plato._id} className="card flex flex-col">
                                <div className="card-img-container">
                                    <Link to={`/platos/${plato.slug}`} state={{ plato }}>
                                        <img
                                            src={plato.img}
                                            alt={plato.description}
                                            className="card-img"
                                        />
                                    </Link>
                                </div>
                                <div className="flex-1 p-4 space-y-2 flex flex-col justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 text-center">{plato.name}</h3>
                                    <p className="text-gray-500 pb-4">{plato.description}</p>
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