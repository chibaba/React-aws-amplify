import React, { useEffect, useReducer } from "react";
import { API } from "aws-amplify";
import { LIST } from "antd";
import "antd/dist/antd.css";
import { listNotes } from "./graphql/queries";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

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
function App() {
    return (
        <div>
            <h1>Hello from AWS Amplify</h1>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);
