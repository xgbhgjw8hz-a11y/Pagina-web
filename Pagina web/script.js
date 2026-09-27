let productos = [];

async function cargarProductos() {
    try {
        const respuesta = await fetch("productos.json");
        productos = await respuesta.json();
        console.log("productos cargados desde el json con exito", productos);
    }catch(error) {
        console.error("error al cargar archivo Json:", error )
    }
}

cargarProductos();

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResult = document.getElementById('searchResult');

// 3. FUNCIÓN DE BÚSQUEDA
function realizarBusqueda() {
  const termino = searchInput.value.trim().toLowerCase();
  searchResult.innerHTML = '';

  if (termino === '') {
    searchResult.innerHTML = '<p class="mensaje-alerta">⚠️ Por favor, ingresa un término de búsqueda.</p>';
    return;
  }

  // Filtramos sobre el array 'productos' que llenamos con el JSON
  const productosFiltrados = productos.filter(function (producto) {
    return producto.nombre.toLowerCase().includes(termino);
  });

  if (productosFiltrados.length === 0) {
    searchResult.innerHTML = `<p class="mensaje-alerta">❌ No se encontraron productos para "${termino}".</p>`;
    return;
  }

  productosFiltrados.forEach(function (producto) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card-producto');

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">${producto.precio}</p>
      <button class="btn-comprar">Comprar</button>
    `;

    searchResult.appendChild(tarjeta);
  });
}

// 4. EVENTOS
searchButton.addEventListener('click', realizarBusqueda);

searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    realizarBusqueda();
  }
});