import React from 'react'

function Preview(props) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: props.parsedMarkdown
      }}
    />
  );
}

export default Preview;