import * as React from 'react';
import {EditorComponent} from '../editor/EditorComponent';

export interface ApplicationState {}

export class ApplicationComponent extends React.Component<{}, ApplicationState> {
    constructor(props) {
        super(props);
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
      }
      onChange(newValue, e) {
        console.log('onChange', newValue, e);
      }

    render() {
        const code = 'hello world';
        const options = {
            selectOnLineNumbers: true
        }
        return(
            <div>
                <EditorComponent/>
            </div>
        );
    }
}
