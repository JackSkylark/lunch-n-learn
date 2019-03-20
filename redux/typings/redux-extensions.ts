import * as Redux from "redux";

export type ActionWithPayload<ActionType, Payload> = 
    Redux.Action<ActionType> & {
        type: ActionType,
        payload: Payload
    };
