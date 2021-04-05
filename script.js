const initialData = `Hello!<img src="none" onerror="alert('This data has become code!')">`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("taData").value = initialData;
  document.getElementById("btnRender").addEventListener("click", render);
});

function render() {
  let data = document.getElementById("taData").value;
  let div = document.getElementById("divRender");

  console.log(`Rendering data in the div: ${data}`);

  div.innerHTML = data;
}
