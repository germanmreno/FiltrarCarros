const resultado = document.querySelector("#resultado");

const marca = document.querySelector("#marca");
const yearOptions = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const puertas = document.querySelector("#puertas");

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
  marca: "",
  year: "",
  puertas: "",
  transmision: "",
  minimo: "",
  maximo: "",
  color: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();

  llenarSelect();
});

marca.addEventListener("change", (e) => (datosBusqueda.marca = e.target.value));
yearOptions.addEventListener(
  "change",
  (e) => (datosBusqueda.year = e.target.value)
);
minimo.addEventListener(
  "change",
  (e) => (datosBusqueda.minimo = e.target.value)
);
maximo.addEventListener(
  "change",
  (e) => (datosBusqueda.maximo = e.target.value)
);
puertas.addEventListener(
  "change",
  (e) => (datosBusqueda.puertas = e.target.value)
);
transmision.addEventListener(
  "change",
  (e) => (datosBusqueda.transmision = e.target.value)
);
color.addEventListener("change", (e) => (datosBusqueda.color = e.target.value));

function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    resultado.appendChild(autoHTML);
  });
}

function llenarSelect() {
  for (i = max; i > min; i--) {
    const yearHTML = document.createElement("option");
    yearHTML.setAttribute("value", `${i}`);

    yearHTML.textContent = `
      ${i}
    `;

    yearOptions.appendChild(yearHTML);
  }
}
