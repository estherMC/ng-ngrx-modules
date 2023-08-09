import { createSelector } from "@ngrx/store";

export const selectCount = (state: {counter: number}) => state.counter;
//Crear un selector a partir d'un altre:
export const selectDoubleCount = createSelector(
  selectCount,
  (state) => state * 2  
);