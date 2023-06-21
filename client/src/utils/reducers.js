import { useReducer } from "react";

const UPDATE_CRYPTID = "UPDATE_CRYPTID";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_CRYPTID:
            return {
                ...state,
                cryptids: [...action.cryptids],
            }

        default:
            return state;
        }
};

export function useCryptidReducer(initialState) {
    return useReducer(reducer, initialState)
}