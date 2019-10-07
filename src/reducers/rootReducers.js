export default (state, action) => {
    
    switch(action.type){
        case 'ADD_USER':
            return {
                todo: action.payload
            };

        default: 
            return state;
    }
}