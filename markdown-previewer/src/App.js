import React, { useState } from 'react';
import marked from 'marked';
import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import Preview from './components/Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const placeholder = `# This is a sample text...

## to show you how this page lets you preview your [Markdown](http://daringfireball.net/projects/markdown/).

You can enter your sample inside the editor.

Just in case you're new to **Markdown**, I'll show you some examples:

## a sub-heading...

- A link: [an example](http://example.com/ "Title")
- Some \`inline code\`
- A code block:

      You can write a block of code.
      You just need to indent every line of the block
      by at least 4 spaces or 1 tab.
- A blockquote:
>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
>Ut enim ad minim veniam, quis nostrud exercitation
>ullamco laboris nisi ut aliquip ex ea commodo consequat.
- An image: 

![fcc logo](https://avatars2.githubusercontent.com/u/9892522?s=200&v=4)
`;

  const [markdown, setMarkdown] = useState(placeholder);
  const [parsedMarkdown, setParsedMarkdown] = useState(
    marked(placeholder, { breaks: true })
  );

  function handleChange(event) {
    setMarkdown(event.target.value);
    setParsedMarkdown(marked(event.target.value, { breaks: true }));
  }

  return (
    <div class="window container-fluid">
      <Header />
      <Editor onChange={handleChange} markdown={markdown} />
      <Preview parsedMarkdown={parsedMarkdown} />
      <Footer />
    </div>
  );
}

export default App;
