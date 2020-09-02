import React, { useEffect, useReducer } from "react";
import { API } from "aws-amplify";
import { LIST } from "antd";
import "antd/dist/antd.css";
import { listNotes } from "./graphql/queries";

// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const initialState = {
    notes: [],
    loading: true,
    error: false,
    form: { name: "", description: "" },
};
function reducer(state, action) {
    switch (action.type) {
        case "SET_NOTES":
            return { ...state, notes: action.notes, loading: false };
        case "ERROR":
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
}
export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    async function fetchNotes() {
        try {
            const notesData = await API.graphqlApi({
                query: listNotes,
            });
            dispatch({
                type: "SET_NOTES",
                notes: notesData.data.listNotes.items,
            });
        } catch (err) {
            console.log("error: ", err);
            dispatch({ type: "ERROR" });
        }
    }
}
