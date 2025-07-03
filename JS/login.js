const passInput = document.querySelector("#contrasena");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Mostrar";
toggleBtn.type = "button";

passInput.parentNode.insertBefore(toggleBtn, passInput.nextSibling);

toggleBtn.addEventListener("click", () => {
  if (passInput.type === "password") {
    passInput.type = "text";
    toggleBtn.textContent = "Ocultar";
  } else {
    passInput.type = "password";
    toggleBtn.textContent = "Mostrar";
  }
});
