import { Action, createAction, props } from "@ngrx/store"

export const increment = createAction(
    //Com a standarització, el nom s'indica amb el prefix []
    '[Counter] Increment',
    //value pot ser email and password
    props<{value: number}>()
);

// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action {
//     readonly type = INCREMENT;

//     // The parameter can be an object {whatever} or directly the type (number for example)
//     constructor(public value: number){}
// }

// export type CounterActions = IncrementAction;