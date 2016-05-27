import React from 'react';
var ReactQuill = require('react-quill');
import { Modal } from 'antd';
require('../../node_modules/react-quill/node_modules/quill/dist/quill.snow.css');
var defaultColors = [
  'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
  'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
  'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
  'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
  'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
  'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
  'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
  'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
  'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
  'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
  'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
  'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
].map(function (color) {
  return {value: color}
});

var defaultItems = [

  {
    label: 'Formats', type: 'group', items: [
    {
      label: 'Font', type: 'font', items: [
      {label: 'Sans Serif', value: 'sans-serif', selected: true},
      {label: 'Serif', value: 'serif'},
      {label: 'Monospace', value: 'monospace'}
    ]
    },
    {type: 'separator'},
    {
      label: 'Size', type: 'size', items: [
      {label: 'Small', value: '10px'},
      {label: 'Normal', value: '13px', selected: true},
      {label: 'Large', value: '18px'},
      {label: 'Huge', value: '32px'}
    ]
    },
    {type: 'separator'},
    {
      label: 'Alignment', type: 'align', items: [
      {label: '', value: 'left', selected: true},
      {label: '', value: 'center'},
      {label: '', value: 'right'},
      {label: '', value: 'justify'}
    ]
    },
    {type: 'separator'}
  ]
  },

  {
    label: 'Text', type: 'group', items: [
    {type: 'bold', label: 'Bold'},
    {type: 'italic', label: 'Italic'},
    {type: 'strike', label: 'Strike'},
    {type: 'underline', label: 'Underline'},
    {type: 'separator'},
    {type: 'color', label: 'Color', items: defaultColors},
    {type: 'background', label: 'Background color', items: defaultColors},
    {type: 'separator'},
    {type: 'link', label: 'Link'},
    {type: 'separator'}
  ]
  },

  {
    label: 'Blocks', type: 'group', items: [
    {type: 'bullet', label: 'Bullet'},
    {type: 'separator'},
    {type: 'list', label: 'List'},
    {type: 'separator'}
  ]
  },

  //{ label:'Blocks', type:'group', items: [
  //  { type:'image', label:'Image' }
  //]}

];
const Editor = React.createClass({
  getInitialState: function () {
    return {value: ''};
  },

  onEditorChange: function (value) {
    this.setState({value: value});
  },

  onImageClick: function () {
    this.refs.file.click();
  },

  onImageChange: function (e) {
    var that = this;
    if (e.target.files.length == 1) {
      var file = e.target.files[0];
      if (!/image\/\w+/.test(file.type)) {
        Modal.info({title: '图片格式错误', content: "请确保文件为图像类型:jpg/jpeg/png"});
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        var editor = that.refs.editor.state.editor.editor;
        let index = editor.selection.range;
        if (!index)
          index = 0;
        else
          index = index.end;
        editor.quill.insertEmbed(index, 'image', this.result, 'user');
        editor.quill.setSelection(index + 1, index + 1);
      }
    }
  },

  render: function () {
    return (
      //不知道为什么不能转换成下面的
      //<div className="app">
      //  <ReactQuill className="editor" theme="snow" toolbar={QuillToolbar.defaultItems}
      //      value={this.state.value} onChange={this.onEditorChange}/>
      //</div>
        React.DOM.div({className: 'app'},
            React.DOM.div({
                  className: 'quill-toolbar ql-toolbar ql-snow',
                  style: {position: 'absolute', top: '1px', left: '550px'}
                },
                React.DOM.span({className: "ql-format-group"},
                    React.DOM.span({className: "ql-format-button ql-image", title: "Image", onClick: this.onImageClick})
                ),
                React.DOM.input({
                  type: 'file',
                  ref: 'file',
                  style: {width: 0, height: 0, visibility: 'hidden'},
                  onChange: this.onImageChange,
                  multiple: false
                })
            ),
            // The editor
            ReactQuill({
              ref: 'editor',
              className: 'editor',
              theme: 'snow',
              style: {minHeight: '500px'},
              toolbar: defaultItems,
              value: this.state.value,
              onChange: this.onEditorChange
            })
        )
    );
  }
});

//Editor = React.createFactory(Editor);
ReactQuill = React.createFactory(ReactQuill);
export default Editor;