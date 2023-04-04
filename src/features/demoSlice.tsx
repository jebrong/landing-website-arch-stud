import { createSlice } from "@reduxjs/toolkit";

export interface DemoState {
  area: number;
  finish: string;
  total: number;
}

const initialState: DemoState = {
  area: 0,
  finish: "BARE",
  total: 0,
};
export const demoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    computeTotal: (state) => {
      if (state.finish === "BARE") {
        state.total = state.area * 20000;
      } else if (state.finish === "STANDARD") {
        state.total = state.area * 25000;
      } else if (state.finish === "LUXURY") {
        state.total = state.area * 35000;
      } else if (state.finish === "ICONIC") {
        state.total = state.area * 40000;
      }
    },
    changeFinish: (state, actions) => {
      const { payload } = actions;
      state.finish = payload;
    },
    changeArea: (state, actions) => {
      const { payload } = actions;
      state.area = payload;
    },
  },
});

export const { computeTotal, changeFinish, changeArea } = demoSlice.actions;

// the reducer
export default demoSlice.reducer;
