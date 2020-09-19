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
  mostrarAutos(autos);

  llenarSelect();
});

marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});

yearOptions.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});

function mostrarAutos(autos) {
  limpiarHTML();

  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    resultado.appendChild(autoHTML);
  });
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
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

function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarAño)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarHTML();

  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent = "No hay resultados";
  resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }

  return auto;
}

function filtrarAño(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }

  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  console.log(minimo);
  if (minimo) {
    return auto.precio >= minimo;
  }

  return auto;
}

function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;

  if (maximo) {
    return auto.precio <= maximo;
  }

  return auto;
}

function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;

  if (puertas) {
    return auto.puertas == puertas;
  }

  return auto;
}

function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;

  if (transmision) {
    return auto.transmision === transmision;
  }

  return auto;
}

function filtrarColor(auto) {
  const { color } = datosBusqueda;

  if (color) {
    return auto.color === color;
  }

  return auto;
}
