
window.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("container");
  const initialState = cm6.createEditorState("SELECT * FROM employee;");
  const view = cm6.createEditorView(initialState, container);
  
});
