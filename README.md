# codemirror-iecst

Structured Text language support, includes syntax highlight based on IEC 61131-3.

This package implements iecst language support for the CodeMirror code editor.

# API Reference

<dt id="user-content-javascript">
  <code>
    <strong>iecst</strong>() → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a>
  </code>
</dt>

iecst language support

# How to use

```bash
$ npm install codemirror codemirror-iecst
```

```jsx
import React, { useEffect, useRef } from 'react';
import { iecst } from 'codemirror-iecst';
import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';

const StructuredTextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const state = EditorState.create({
      doc: "PROGRAM END_PROGRAM",
      extensions: [
        basicSetup,
        iecst()
      ]
    });
    const editor = new EditorView({
      state,
      parent: editorRef.current as HTMLDivElement
    });
    return () => {
      editor.destroy();
    };
  }, []);
  
  return (
    <div ref={editorRef}></div>
  );
};
```

# Live Demo

[Demo](https://demo.jsmile.top/codemirror-iecst-editor)

[寂山智工组态编程调试软件（Jishan Tech）](http://www.softplc.online/login)