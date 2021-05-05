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
            console.log("payload" + action.payload.title);
            console.log(" title" + copy.length);
            var found = false;
            if (copy.length !== 0){
                console.log(" title" + copy.length);
                for (var i=0; i < copy.length; i++){
                    console.log(" title" + copy[i].title);
                    console.log(" title" + action.payload.title);
                    if (copy[i].title === action.payload.title){
                        copy[i].quantity += action.payload.quantity;
                        found = true;
                        console.log(" found a match at" + i );
                        break;
                    };
                };
            };
            if (!found || copy.length === 0) {
                        copy.push(action.payload);
            };
            break;
            default:
                return state;
            };
            return copy;
    };

export default cartReducer;