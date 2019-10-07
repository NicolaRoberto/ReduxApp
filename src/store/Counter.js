const incrementaCountType = 'INCREMENTA_COUNT';
const decrementaCountType = 'DECREMENTA_COUNT';
const moltiplicaCountType = 'MOLTIPLICA_COUNT';
const dividiCountType = 'DIVIDI_COUNT';

const initialState = { count: 0 };

export const actionCreators = {
    incremento: () => ({ type: incrementaCountType }),
    decremento: () => ({ type: decrementaCountType }),
    moltiplicazione: () => ({ type: moltiplicaCountType }),
    divisione: () => ({ type: dividiCountType })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === incrementaCountType) {
        return { ...state, count: state.count + 1 };
    }

    if (action.type === decrementaCountType) {
        return { ...state, count: state.count - 1 };
    }

    if (action.type === moltiplicaCountType) {
        return { ...state, count: state.count * 2 };
    }

    if (action.type === dividiCountType) {
        return { ...state, count: state.count / 2 };
    }

    return state;
};
