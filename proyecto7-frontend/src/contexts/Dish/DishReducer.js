const DishReducer = (globalState, action) => {
    switch (action.type) {
        case 'OBTENER_PLATOS':
            return {
                ...globalState,
                platos: action.payload
            }

        case 'OBTENER_PLATO':
            return {
                ...globalState,
                currentPlato: action.payload
            }
            
        default:
            return globalState;
    }
}

export default DishReducer;