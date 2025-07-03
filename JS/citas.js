const formCitas = document.querySelector("form");
formCitas.addEventListener("submit", function(e) {
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  if (!fecha || !hora) {
    e.preventDefault();
    alert("Por favor completa la fecha y la hora.");
  } else {
    alert(`¡Cita reservada para el ${fecha} a las ${hora}!`);
  }
});
