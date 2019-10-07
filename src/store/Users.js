const addUser = 'ADD_USER';
const removeUser = 'REMOVE_USER';

const initialState = { count: 0 };

export const actionCreators = {
    addUser: () => ({ type: addUser }),
    removeUser: () => ({ type: removeUser }) 
};

export const reducer = (state, action) => {
    
    state = state || initialState;

    if (action.type === addUser) {
        return { ...state, user: this.state.user };
    }

    if (action.type === removeUser) {
        return { ...state, user: { id: 1 } };
    }

    return state;
};
