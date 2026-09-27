
const productos = [
    {
        nombre: "audifonos bluetooth",
        precio: "$29.99",
        imagen: "https://via.placeholder.com/150?text=Audifonos"
    },
    {
        nombre: "Zapatillas deportivas",
        precio: "$59.99",
        imagen: "https://via.placeholder.com/150?text=Zapatillas"
    },
    {
        nombre: "camiseta urbana",
        precio: "$19.99",
        imagen: "https://via.placeholder.com/150?text=Camiseta"
    },
    {
        nombre: "reloj inteligente",
        precio: "$89.99",
        imagen: "https://via.placeholder.com/150?text=Smartwatch"
    }
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");

function realizarBusqueda() {
    const termino = searchInput.value.trim().toLowerCase();
    searchResult.innerHTML = '<p class="mensaje-alerta">⚠️ Por favor, ingresa un término de búsqueda.</p>';
    


if (productosFiltrados.lenght === 0) {
    searchResult.innerHTML = `<p class="mensaje-alerta">❌ No se encontraron productos para "${termino}".</p>`;
    return;
}

productosFiltrados.forEach(function(producto) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card-producto");

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">${producto.precio}</p>
      <button class="btn-comprar">Comprar</button>
    `;

    searchResult.appendChild(tarjeta);
   });
}

searchButton.addEventListener("click", realizarBusqueda);

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "enter") {
        realizarBusqueda();
    }
});
