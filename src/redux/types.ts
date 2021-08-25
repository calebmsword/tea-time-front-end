export interface State {
}
  
export const initialState: State = {
};

export enum ActionType {
    ACTION_TYPE,
  }

export interface Action {
    type: ActionType,
    payload?: any,
}