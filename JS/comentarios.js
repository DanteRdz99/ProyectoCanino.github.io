const formComentario = document.querySelector("form");
formComentario.addEventListener("submit", function(e) {
  const titulo = document.getElementById("titulo").value.trim();
  const comentario = document.getElementById("experiencia").value.trim();
  if (!titulo || !comentario) {
    e.preventDefault();
    alert("Por favor completa todos los campos.");
  } else {
    alert("¡Gracias por tu comentario!");
  }
});
