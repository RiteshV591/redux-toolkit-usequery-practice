/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from "@reduxjs/toolkit";

export const accountInfo = (state: { account: any }) => state?.account;

export const getBalance = createSelector(accountInfo, (data) => data.balance);
