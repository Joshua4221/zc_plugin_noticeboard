import React from "react";
import "./CreateNotice.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextEditor from "./Text-editor/Rich-text";
import NewNotice from "./New_Notice/new_notice";

function EditNotice(){

    return(
        <div className="dashboard-container">
            <header>
                <h3 className="heading">Edit Notice</h3>
                <Link to="/admin-notice">
                <Button variant="contained">Save</Button>
                </Link>
            </header>
            <form>
                <NewNotice />
            <div className="TextEditor-wrapper">
                <TextEditor />
            </div>
            </form>
            <div className="publish-notice-button">
                <Link to="/admin-notice">
                    <Button variant="contained">Publish Notice</Button>
                </Link>
            </div>
        </div>
    );
}