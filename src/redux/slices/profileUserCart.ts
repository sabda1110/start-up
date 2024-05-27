import { createSlice } from '@reduxjs/toolkit';

const initialState: ReduxProfileUser = {
  data: []
};

const profileUserCart = createSlice({
  name: 'profileUser',
  initialState,
  reducers: {
    addToData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { addToData } = profileUserCart.actions;
export default profileUserCart.reducer;
