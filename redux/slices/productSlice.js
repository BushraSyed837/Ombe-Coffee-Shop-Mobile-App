import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Creamy coffee',
      price: '12.6',
      originalPrice: '16.0',
      points: '50 Pts',
      rating: '3.8',
      image: require('../../assets/1.png'),
      category: 'Beverages',
      price: 6.3,
      reviews: '2k Review',
      quantity: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    },
    {
      id: 2,
      name: 'Creamy Mocha',
      price: '12.6',
      originalPrice: '16.0',
      points: '50 Pts',
      rating: '3.8',
      image: require('../../assets/2.png'),
      category: 'Beverages',
      reviews: '2k Review',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    },
    {
      id: 3,
      name: 'Cappuccino',
      price: '12.6',
      originalPrice: '16.0',
      points: '50 Pts',
      rating: '3.8',
      reviews: '2k Review',
      image: require('../../assets/1.png'),
      category: 'Brewed Coffee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    },
    {
      id: 4,
      name: 'Cold Coffee',
      price: '12.6',
      originalPrice: '16.0',
      points: '50 Pts',
      rating: '3.8',
      reviews: '2k Review',
      image: require('../../assets/2.png'),
      category: 'Blended Coffee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    },
    {
      id: 5,
      name: 'Hot Coffee',
      price: '12.6',
      originalPrice: '16.0',
      points: '50 Pts',
      rating: '3.8',
      reviews: '2k Review',
      image: require('../../assets/2.png'),
      category: 'Blended Coffee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
    },
  ],
  selectedProduct: null, // Added selectedProduct field
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {setSelectedProduct} = productSlice.actions;
export default productSlice.reducer;
