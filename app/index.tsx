import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApplicationComponent } from "./components/ApplicationComponent";

ReactDOM.render(
    <ApplicationComponent title="Pokemon!" />,
    document.getElementById("react-mount-point"),
);
