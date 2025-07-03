console.log("Panel Admin listo.");

document.querySelectorAll('.btn-eliminar').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Simulación: Usuario eliminado.");
  });
});
