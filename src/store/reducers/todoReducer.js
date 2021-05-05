/**
 * Reducer:
 * An arrow function that receives state and action
 * should return a new state
 */

const todoReducer = (state = [], action) => {

    var copy = [...state];
    
    switch (action.type) {
        case "ADD_TODO":

            copy.push(action.payload);
            return copy;

        case "REMOVE_TODO":

            copy = copy.filter((t) => t !== action.payload);
            return copy;

        case "CLEAR_TODOS":
            copy = [];
            return copy;

        default:
            return state;
    }

};

export default todoReducer;