/* eslint-disable @typescript-eslint/no-explicit-any */
export const asyncFunctionMiddleware =
  (storeAPI: { dispatch: any; getState: any }) =>
  (next: (arg0: any) => any) =>
  (action: (arg0: any, arg1: any) => any): any => {
    if (typeof action === "function") {
      return action(storeAPI.dispatch, storeAPI.getState);
    }
    return next(action);
  };
