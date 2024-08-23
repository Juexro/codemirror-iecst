# codemirror-iecst

Structured Text language support, includes syntax highlight based on IEC 61131-3.

This package implements iecst language support for the CodeMirror code editor.

# API Reference

+ `setup(options: SetupOptions): Extension[]` provide an example configuration for the editor
+ `iecst(): LanguageSupport`  iecst language support, includes syntax highlight
+ `autocomplete(): Extension` code completion
+ `breakpointGutter(): Extension` allow breakpoints
+ `getMarkLines(view: EditorView): Line[]`  get lines where breakpoints are located

#### Interfaces

```typescript
// All default values are true.
interface SetupOptions {
  lineNumbers: boolean;
  highlightActiveLineGutter: boolean;
  highlightSpecialChars: boolean;
  history: boolean;
  foldGutter: boolean;
  drawSelection: boolean;
  dropCursor: boolean;
  allowMultipleSelections: boolean;
  indentOnInput: boolean;
  syntaxHighlighting: boolean;
  bracketMatching: boolean;
  closeBrackets: boolean;
  autocompletion: boolean;
  rectangularSelection: boolean;
  crosshairCursor: boolean;
  highlightActiveLine: boolean;
  highlightSelectionMatches: boolean;
  keymap: boolean;
  breakpointGutter: boolean;
}
```

# How to use

```bash
$ npm install codemirror-iecst
```

#### React Demo

```jsx
import React, { useEffect, useRef } from 'react';
import { setup } from 'codemirror-iecst';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';

const StructuredTextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const state = EditorState.create({
      doc: "PROGRAM END_PROGRAM",
      extensions: [
        setup()
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