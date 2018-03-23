import * as React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';

require('codemirror/mode/javascript/javascript.js');
require('./editor.scss');

export class EditorComponent extends React.Component<any, any> {
  state;

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onBeforeChange(editor, data, value) {
    this.setState({value});
  }

  onChange(editor, data, value) {
    console.log('Value', value);
  }

  render() {
    const options = {
      lineNumbers: true,
      theme: 'material',
      autofocus: true
    }
    return (
      <CodeMirror
        value={this.state.value}
        options={options}
        onBeforeChange={this.onBeforeChange.bind(this)}
        onChange={this.onChange.bind(this)}/>
    )
  }
}
