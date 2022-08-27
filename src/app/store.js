import { configureStore } from '@reduxjs/toolkit';
import financialReduser from '../features/Financial/financialReduser'
import memberReduser from '../features/Member/memberReduser'
export const store = configureStore({
  reducer: {
    financials:financialReduser,
    members:memberReduser
  },
});
