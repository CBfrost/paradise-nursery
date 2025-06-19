export const initialState = {
  cart: [],
  totalItems: 0,
  totalCost: 0
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalCost: state.totalCost + action.payload.price
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalCost: state.totalCost + action.payload.price
        };
      }

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalItems: state.totalItems + 1,
        totalCost: state.totalCost + state.cart.find(item => item.id === action.payload).price
      };

    case 'DECREASE_QUANTITY':
      const itemToDecrease = state.cart.find(item => item.id === action.payload);
      if (itemToDecrease.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
          totalItems: state.totalItems - 1,
          totalCost: state.totalCost - itemToDecrease.price
        };
      } else {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalItems: state.totalItems - 1,
          totalCost: state.totalCost - itemToDecrease.price
        };
      }

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cart.find(item => item.id === action.payload);
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalCost: state.totalCost - (itemToRemove.price * itemToRemove.quantity)
      };

    default:
      return state;
  }
};
