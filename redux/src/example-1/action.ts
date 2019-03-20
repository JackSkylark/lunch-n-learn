import { Action } from "redux";
import { ActionWithPayload } from "redux-extensions";
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SET_COUNTER
} from "./actionTypes";

export const incrementCounter = (): Action<typeof INCREMENT_COUNTER> => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = (): Action<typeof DECREMENT_COUNTER> => ({
    type: DECREMENT_COUNTER
});

export const setCounter = (value: number): ActionWithPayload<typeof SET_COUNTER, number> => ({
    type: SET_COUNTER,
    payload: value
});

export type Actions =
    ReturnType<typeof incrementCounter> |
    ReturnType<typeof decrementCounter> |
    ReturnType<typeof setCounter>;
