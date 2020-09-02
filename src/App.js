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
function App() {
    return (
        <div>
            <h1>Hello from AWS Amplify</h1>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);
