import React from 'react';

function Editor(props) {
  return (
    <textarea
      onChange={props.onChange}
      class="form-control"
      id="editor"
      value={props.markdown}
      rows="10"
      placeholder="Write your markdown here!"
    ></textarea>
  );
}

export default Editor;