import { Dispatch, Action } from "redux";

export const loggerMiddleware = () =>
    (next: Dispatch) =>
        <A extends Action>(action: A): A => {
            console.log('ACTION-> ', action);
            return next(action);
          };

