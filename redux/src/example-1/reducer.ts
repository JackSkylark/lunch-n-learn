import { Reducer } from "redux";
import { Actions } from "./action";
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SET_COUNTER
} from "./actionTypes";

export type CountState = number;

export const countReducer: Reducer<CountState, Actions> = (state: number = 0, action) =>
{
    switch(action.type)
    {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        case SET_COUNTER:
            return action.payload;
        default:
            return state;
    }
};
