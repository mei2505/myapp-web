import {
    editor,
    languages,
    Range,
    CancellationToken,
    Position,
    MarkerSeverity,
    IRange,
  } from 'monaco-editor';

const text = [
    'function x() {',
    '\tconsole.log("Hello world!");',
    '}'
].join('\n');

const text2 = `
#ハロー
##　ハロー
`

const editor1 = editor.create(document.getElementById('container1'), {});
const editor2 = editor.create(document.getElementById('container2'), {});
const session = editor.createModel(text,"javascript");
const session2 = editor.createModel(text2,"javascript");

editor1.setModel(session);
editor2.setModel(session2);

document.getElementById('mybutton').onclick = () =>{
    alert(session.getValue());
}

