import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./gameReducer";

export const rootReducer = combineReducers({ gameReducer });
