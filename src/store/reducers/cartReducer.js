/**
 * Reducer:
 * An arrow function that receives state and action
 * should return a new state
 */

 const cartReducer = (state = [], action) => {

    var copy = [...state];

    switch (action.type) {
        case "ADD_TO_CART":
            //if the product exists inside the cart, just increase the quantity
            var found = false;

                for (var i=0; i < copy.length; i++){

                    if (copy[i].title === action.payload.title){
                        copy[i].quantity += action.payload.quantity;
                        found = true;
                        break;
                    };
                };

                if (!found) {
                        copy.push(action.payload);
            };
            break;
        case "REMOVE_FROM_CART":

            copy = copy.filter((t) => t !== action.payload);
            return copy;

        default:
            return state;
            };
            return copy;
    };

export default cartReducer;