import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/product-list/productSlice';
import authReducer from '../features/auth/authSlice'
import calculatorReducer from '../features/calculator/calculatorSlice'
// import cartReducer from '../features/cart/cartSlice';
// import orderReducer from '../features/order/orderSlice';
// import userReducer from '../features/user/userSlice';

export default store = configureStore({
  reducer: {
    // product: productReducer,
    auth: authReducer,
    calculator: calculatorReducer,
    // cart: cartReducer,   
    // order: orderReducer,
    // user: userReducer,
  },
});
