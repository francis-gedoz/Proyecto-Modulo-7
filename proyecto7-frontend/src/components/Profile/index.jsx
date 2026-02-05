import { useState, useContext, useEffect } from "react";

import UserContext from "../../contexts/User/UserContext";

export default function Profile() {

    const userCtx = useContext(UserContext);

    const { updateUser } = userCtx;

    const { username, email, country, address, zipcode } =
        userCtx.currentUser;

    const [userForm, setUserForm] = useState({
        username: "",
        country: "",
        address: "",
        zipcode: "",
    });

    useEffect(() => {
        const updateData = () => {
        return setUserForm({
            ...userForm,
            username,
            country,
            address,
            zipcode,
        });
        };

        updateData();
    }, []);

    const handleChange = async (event) => {
        setUserForm({
        ...userForm,
        [event.target.name]: event.target.value,
        });
    };

    const sendData = async (event) => {
        event.preventDefault();

        await updateUser(userForm);
    };

    return (
        <>
        <div className="mx-auto py-4 px-8">
            <div className="space-y-16 max-w-4xl mx-auto">
            <section className="form-container">
                <form
                onSubmit={(e) => {
                    sendData(e);
                }}
                >
                <div className="">
                    <div className="">
                    <div>
                        <h2 className="text-3xl font-bold">Tu perfil</h2>
                        <p className="mt-2 mb-8 text-sm text-gray-600">
                        Recuerda que estás en un proyecto académico. No coloques
                        información real. 😉
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-6">
                        <div className="col-span-4 sm:col-span-2">
                        <label className="form-label font-semibold">Tu nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            value={userForm.username}
                            onChange={(e) => {
                            handleChange(e);
                            }}
                            className="form-input rounded-md"
                        />
                        </div>

                        <div className="col-span-4 sm:col-span-2">
                        <label className="form-label font-semibold">Tu email</label>
                        <input
                            disabled
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                            handleChange(e);
                            }}
                            className="form-input rounded-md bg-gray-100"
                        />
                        </div>

                        <div className="col-span-4 sm:col-span-2">
                        <label className="form-label font-semibold">Tu país</label>
                        <input
                            type="text"
                            name="country"
                            value={userForm.country}
                            onChange={(e) => {
                            handleChange(e);
                            }}
                            className="form-input rounded-md"
                        />
                        </div>

                        <div className="col-span-4 sm:col-span-1">
                        <label className="form-label font-semibold">
                            <span>Código postal</span>
                        </label>
                        <input
                            type="number"
                            name="zipcode"
                            value={userForm.zipcode}
                            onChange={(e) => {
                            handleChange(e);
                            }}
                            className="form-input rounded-md"
                        />
                        </div>

                        <div className="col-span-4 sm:col-span-3">
                        <label className="form-label font-semibold">Dirección</label>
                        <input
                            type="text"
                            name="address"
                            value={userForm.address}
                            onChange={(e) => {
                            handleChange(e);
                            }}
                            className="form-input rounded-md"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="mt-8 py-3">
                    <button type="submit" className="form-button">
                        Guardar cambios
                    </button>
                    </div>
                </div>
                </form>
            </section>
            </div>
        </div>
        </>
    );
}