const addButton = document.querySelector("#addButton");
const addInput = document.querySelector("#addInput");
addButton.addEventListener("click", () => {
  if (addInput.value == "") {
    return;
  }
  aNewDiv = document.createElement("div");
  closeButton = document.createElement("button");
  aNewDiv.style =
    "color:white; background-color:rgb(0, 195, 255); padding:10px; width:50%; margin:20px auto; border-radius:10px; font-size:1.3rem;position:relative; ";
  closeButton.style =
    "position:absolute; right:5px; top:2px;cursor:pointer;color:red;border-radius:10px;border:none";
  closeButton.innerText = "X";
  aNewDiv.innerText = addInput.value;
  addInput.value = "";
  document.body.append(aNewDiv);
  aNewDiv.append(closeButton);
  closeButton.addEventListener("click", function () {
    this.parentNode.remove();
  });
});
