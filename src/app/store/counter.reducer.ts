import { createReducer } from "@ngrx/store";

//this initialState pot ser un objecte, un string, un boolean, un number...
const initialState = 0;

export const counterReducer = createReducer(
    initialState
);