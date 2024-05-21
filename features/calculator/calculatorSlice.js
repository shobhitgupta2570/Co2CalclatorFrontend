import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calculateResult, fetchCount } from './calculatorApi';

const initialState = {
  value: 0,
  status: 'idle',
  result: null
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const calculateResultAsync = createAsyncThunk(
  'calculator/calculateResult',
  async (info ) => {
    try{
      const response = await calculateResult(info);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
    }catch(error){
      console.log(error);
      // return rejectWithValue(error);
    }
  }
);

export const calculatorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(calculateResultAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(calculateResultAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.result = action.payload;
      })
      .addCase(calculateResultAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;

      });
  },
});

// export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectCalculator = (state)=>state.calculator.result;
export const selectCalculatorError = (state)=>state.calculator.error;

export default calculatorSlice.reducer;