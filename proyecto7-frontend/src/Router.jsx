import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/Home";
import DishState from "./contexts/Dish/DishState";
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import DishList from "./components/Dish/List";
import SingleDish from "./components/Dish/Single";
import UserState from "./contexts/User/UserState";
import AuthRoute from "./routes/Auth";
import PrivateRoute from "./routes/Private";
import Profile from "./components/Profile";
import Checkout from "./components/Checkout";
import SuccessPage from "./components/SuccessPage";
import CancelPage from "./components/ErrorPage";
import ViajaBrasilPage from "./components/ViajaBrasilPage";
import UDD40Page from "./components/UDD40";

const Router = () => {
    return (
        <UserState>
            <DishState>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/platos" element={<DishList />} />
                            <Route path="/platos/region/:region" element={<DishList />} />
                            <Route path="/region/:region" element={<DishList />} />
                            <Route path="/platos/:slug" element={<SingleDish />} />
                            <Route path="/viaja-brasil" element={<ViajaBrasilPage />} />
                            <Route path="/udd-4.0" element={<UDD40Page />} />
                            <Route path="/registro" element={<Register />} />
                            <Route path="/pago-exitoso" element={<SuccessPage />} />
                            <Route path="/pago-cancelado" element={<CancelPage />} />

                            <Route 
                                path="/iniciar-sesion" 
                                element={<AuthRoute component={Login} />}
                            />

                            <Route 
                                path="/carrito"
                                element={<PrivateRoute component={Checkout} />}
                            />

                            <Route 
                                path="/perfil"
                                element={<PrivateRoute component={Profile} />}
                            />

                        </Route>
                    </Routes>
                </BrowserRouter>
            </DishState>
        </UserState>
    )
}

export default Router;