import * as React from 'react';

export interface ApplicationState {title: string; }

export class ApplicationComponent extends React.Component<ApplicationState, {}> {
    props: ApplicationState;

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <h1>Hello {this.props.title}</h1>
        );
    }
}
