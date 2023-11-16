// Reducer.js
export const ProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case 'ajoute':
        return { ...state, products: [...state.products, action.product] };
      default:
        return { ...state };
    }
  };
  