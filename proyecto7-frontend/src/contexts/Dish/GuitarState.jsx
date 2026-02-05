import { useReducer } from 'react';
import DishContext from './DishContext';
import DishReducer from './DishReducer';
import axiosClient from '../../config/axios';

const DishState = (props) => {
    const initialState = {
        platos: [],
        currentPlato: {
            _id: null,
            idProd: '',
            name: '',
            img: '',
            price: '',
            description: '',
            slug: ''
        }
    }

    const [globalState, dispatch] = useReducer(DishReducer, initialState);

    const getPlatos = async () => {
        try {
            const response = await axiosClient.get('/platos');
            console.log('Endpoint Obtener Platos', response);

            dispatch({
                type: 'OBTENER_PLATOS',
                payload: response.data.platos
            })
        } catch (error) {
            console.error(error);
        }
    }

    const setCurrentPlato = (platoData) => {
        dispatch({
            type: 'OBTENER_PLATO',
            payload: platoData
        })
    }

    return (
        <DishContext.Provider 
            value={{ 
                platos: globalState.platos,
                currentPlato: globalState.currentPlato,
                getPlatos,
                setCurrentPlato
            }}
        >
            {props.children}
        </DishContext.Provider>
    )
}

export default DishState;