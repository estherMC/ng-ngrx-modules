import { createAction, props } from "@ngrx/store"

export const increment = createAction(
    //Com a standarització, el nom s'indica amb el prefix []
    '[Counter] Increment',
    //value pot ser email and password
    props<{value: number}>()
);