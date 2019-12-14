const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const existe = state.imagenesFavoritas.find((item) => item.id === action.payload.id);
      if (existe) return state;
      return {
        ...state,
        imagenesFavoritas: [...state.imagenesFavoritas, action.payload],
      };
    }
    case 'ELIMINAR_ITEM': {
      return {
        ...state,
        imagenesFavoritas: state.imagenesFavoritas.filter(
          (item) => item.id !== action.payload.itemId,
        ),
      };
    }
    case 'LOGIN_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'LOGOUT_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'REGISTER_REQUEST': {
      console.log(action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
