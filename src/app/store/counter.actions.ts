import { createAction } from "@ngrx/store"

export const increment = createAction(
    //Com a standarització, el nom s'indica amb el prefix []
    '[Counter] Increment'
);