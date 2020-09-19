const resultado = document.querySelector("#resultado");
const yearOptions = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();

  llenarSelect();
});

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
