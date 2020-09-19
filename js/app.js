const resultado = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", mostrarAutos);

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
