
window.addEventListener("DOMContentLoaded", async () => {
  const editor = document.getElementById("editor");
  const getCode = document.getElementById("get-code");
  const result = document.getElementById("result")
  const initialState = cm6.createEditorState("SELECT * FROM employee;",{oneDark:true});
  const view = cm6.createEditorView(initialState, editor);
  getCode.addEventListener("click",()=>{
    // console.log(view.state.doc.toString());
    result.innerText = view.state.doc.toString();
  })
});
