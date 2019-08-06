$(document).ready(main);

function main() {
  const save = document.getElementById("save");
  save.addEventListener("click", buildMessage)
}

function buildMessage() {
  let message = document.getElementById("desc").value;
  if (message === '') return;
  const htmlNode = document.getElementById("message-list");
  document.getElementById("desc").value = '';
  const divNode = document.createElement('div');
  divNode.setAttribute('class', 'del');
  const liNode = document.createElement('li');
  liNode.appendChild(document.createTextNode(message));
  const button = document.createElement("BUTTON");
  button.innerHTML = "Delete";
  button.addEventListener("click", deleteFunc);
  liNode.appendChild(button);
  divNode.appendChild(liNode);
  htmlNode.appendChild(divNode);
}

function deleteFunc() {
  document.activeElement.parentElement.remove()
}