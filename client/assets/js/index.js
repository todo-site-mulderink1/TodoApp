document.getElementById("save").addEventListener("click", buildMessage);

function buildMessage() {
  const message = document.getElementById("desc").value,
    htmlNode = document.getElementById("message-list"),
    divNode = document.createElement('div'),
    liNode = document.createElement('li'),
    button = document.createElement("BUTTON");

  if (message === '') {
    return;
  } else {
    document.getElementById("desc").value = '';
    divNode.setAttribute('class', 'del');
    liNode.appendChild(document.createTextNode(message));
    button.innerHTML = "Delete";
    button.addEventListener("click", deleteFunc);
    liNode.appendChild(button);
    divNode.appendChild(liNode);
    htmlNode.appendChild(divNode);
  };
};

function deleteFunc() {
  document.activeElement.parentElement.remove();
};