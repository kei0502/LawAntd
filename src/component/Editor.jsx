import React from 'react';
var ReactQuill = require('react-quill');
import QuillToolbar from '../../node_modules/react-quill/src/toolbar';

const Editor = React.createClass({
  getInitialState: function() {

    return {
      value: ''
    };
  },

  onEditorChange: function(value) {
    this.setState({ value:value });
  },

  render: function() {
    return (
        //不知道为什么不能转换成下面的
        //<div className="app">
        //  <ReactQuill className="editor" theme="snow" toolbar={QuillToolbar.defaultItems}
        //      value={this.state.value} onChange={this.onEditorChange}/>
        //</div>
        React.DOM.div({ className: 'app' },
            // The editor
            ReactQuill({
              className: 'editor',
              theme: 'snow',
              style: {minHeight:'500px'},
              toolbar: QuillToolbar.defaultItems,
              value: this.state.value,
              onChange: this.onEditorChange
            })
        //    // The preview pane
        //    //React.DOM.pre({ className:'preview' },
        //    //    React.DOM.code({ className:'language-markup'},
        //    //        this.state.value
        //    //    )
        //    //)
        )
    );
  }
});

//Editor = React.createFactory(Editor);
ReactQuill = React.createFactory(ReactQuill);
export default Editor;