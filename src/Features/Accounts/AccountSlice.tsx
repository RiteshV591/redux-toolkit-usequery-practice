import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance = state.balance + action.payload.amount;
    },
    payLoan(state, action) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

// type Payload = {
//   balance: number;
//   loan: number;
//   loanPurpose: string;
// };

// type Action = {
//   type: string;
//   payload?: Payload;
// };

// export const AccountReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = (amount) => {
//   return { type: "account/deposit", payload: amount };
// };
// export const withdraw = (amount) => {
//   return { type: "account/withdraw", payload: amount };
// };
// export const requestLoan = (amount, purpose) => {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// };
// export const payLoan = () => {
//   return { type: "account/payLoan" };
// };
