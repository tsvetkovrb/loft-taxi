const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
