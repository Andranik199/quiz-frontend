import { createSelector } from "@reduxjs/toolkit";
import {RootState} from "../../index";

const SocketSelector = (state: RootState) => state.socket;
export const selectClient = createSelector(SocketSelector, (state) => state.client);
