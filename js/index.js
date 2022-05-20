class formulario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let forms = JSON.parse(localStorage.getItem("form")) || [];
let cartas = document.querySelector("#cartas");

function formMax(e) {
  e.preventDefault();
  //let id = new Date().getTime();
  let nick = document.getElementById("nombre").value;
  let lastName = document.getElementById("apellido").value;

  forms.push(new formulario(nick, lastName));
  localStorage.setItem("form", JSON.stringify(forms));
  document.getElementById("formulario").reset();

  document.getElementById("nombre").focus();
  cargarTarjeta();
}

const cargarTarjeta = () => {
  cartas.innerHTML = "";
  forms.map(function (nombreApllido) {
    let div = document.createElement("div");
    div.classList = "card mb-1";
    let tarjeta = `<div class="card-body"> ${nombreApllido.nick}  ${nombreApllido.lastName}</div>`;
    div.innerHTML = tarjeta;
    cartas.appendChild(div);
  });
};

document.getElementById("formulario").addEventListener("submit", formMax);

cargarTarjeta();
