  const libros = [
    {
      titulo: "Voces de Chernóbil",
      autor: "Svetlana Alexiévich",
      anopublico: 1997,
      genero: "Debate",
      cantidadDisponible: 15,
      precio: 70000,
      imagen:
        "https://www.penguinlibros.com/co/288479-thickbox_default/voces-de-chernobil.jpg",
    },
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      anopublico: 1967,
      genero: "Realismo mágico",
      cantidadDisponible: 20,
      precio: 85000,
      imagen:
        "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      anopublico: 1949,
      genero: "Distopía",
      cantidadDisponible: 10,
      precio: 60000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/ab/54/ab54a82815e061d7fc8f22bcd22f2605.jpg",
    },
    {
      titulo: "Crimen y castigo",
      autor: "Fiódor Dostoyevski",
      anopublico: 1866,
      genero: "Novela psicológica",
      cantidadDisponible: 8,
      precio: 75000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/520x520/1d/c7/1dc7efb8101e02d6196c79c2c2518346.jpg",
    },
    {
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      anopublico: 1813,
      genero: "Romántica",
      cantidadDisponible: 12,
      precio: 50000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/46/6b/466b0b47e932561b186c56358acbe55e.jpg",
    },
    {
      titulo: "El Gran Gatsby",
      autor: "F. Scott Fitzgerald",
      anopublico: 1925,
      genero: "Tragedia",
      cantidadDisponible: 7,
      precio: 64000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/e4/01/e401faaab2124ec3aeccf86467857807.jpg",
    },
    {
      titulo: "Rayuela",
      autor: "Julio Cortázar",
      anopublico: 1963,
      genero: "Novela",
      cantidadDisponible: 9,
      precio: 72000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/c8/25/c8254b8aca6fc23f8da1d5dec8fc6aee.jpg",
    },
    {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      anopublico: 1943,
      genero: "Fábula",
      cantidadDisponible: 25,
      precio: 45000,
      imagen:
        "https://nidodelibros.com/wp-content/uploads/2024/02/9789877979015-.jpeg",
    },
    {
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      anopublico: 1605,
      genero: "Novela de caballería",
      cantidadDisponible: 18,
      precio: 88000,
      imagen: "https://images-na.ssl-images-amazon.com/images/I/61HOpyVqSeL.jpg",
    },
    {
      titulo: "Matar a un ruiseñor",
      autor: "Harper Lee",
      anopublico: 1960,
      genero: "Drama",
      cantidadDisponible: 10,
      precio: 69000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/1b/d7/1bd7b432c94ccdcf816c917d8abe8e83.jpg",
    },
    {
      titulo: "La Odisea",
      autor: "Homero",
      anopublico: -800,
      genero: "Épico",
      cantidadDisponible: 5,
      precio: 95000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/30/0d/300dff10bb14e05d86944f2c9ce8f7ec.jpg",
    },
    {
      titulo: "La Ilíada",
      autor: "Homero",
      anopublico: -750,
      genero: "Épico",
      cantidadDisponible: 6,
      precio: 96000,
      imagen: "https://www.elejandria.com/covers/La_Iliada-Homero-lg.png",
    },
    {
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      anopublico: 1953,
      genero: "Ciencia ficción",
      cantidadDisponible: 14,
      precio: 67000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/39/0c/390cf389c0c83ef393d8a0b763e856c0.jpg",
    },
    {
      titulo: "La Metamorfosis",
      autor: "Franz Kafka",
      anopublico: 1915,
      genero: "Novela corta",
      cantidadDisponible: 8,
      precio: 48000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2psYyC4I1jvkPIUATmukpF186WIBo8RrzQ&s",
    },
    {
      titulo: "Los Miserables",
      autor: "Victor Hugo",
      anopublico: 1862,
      genero: "Novela",
      cantidadDisponible: 4,
      precio: 96000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/6d/ff/6dffa9565827544a81ada85c50c2400b.jpg",
    },
    {
      titulo: "Ensayo sobre la ceguera",
      autor: "José Saramago",
      anopublico: 1995,
      genero: "Distopía",
      cantidadDisponible: 11,
      precio: 73000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/cd/83/cd83064665e73f29b479105109608cdd.jpg",
    },
    {
      titulo: "La Divina Comedia",
      autor: "Dante Alighieri",
      anopublico: 1320,
      genero: "Épico",
      cantidadDisponible: 7,
      precio: 105000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/01/e0/01e04c600c7b7bfaf5a14c17a640e5af.jpg",
    },
    {
      titulo: "Los hermanos Karamazov",
      autor: "Fiódor Dostoyevski",
      anopublico: 1880,
      genero: "Novela filosófica",
      cantidadDisponible: 9,
      precio: 82000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/7b/b1/7bb12823686e96de54d1827f51c07114.jpg",
    },
    {
      titulo: "Madame Bovary",
      autor: "Gustave Flaubert",
      anopublico: 1857,
      genero: "Realismo",
      cantidadDisponible: 13,
      precio: 74000,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Madame_Bovary_1857_%28hi-res%29.jpg",
    },
    {
      titulo: "Hamlet",
      autor: "William Shakespeare",
      anopublico: 1609,
      genero: "Tragedia",
      cantidadDisponible: 15,
      precio: 68000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/08/a4/08a45da18327d8388b74e7e94c7ad3be.jpg",
    },
    {
      titulo: "Drácula",
      autor: "Bram Stoker",
      anopublico: 1897,
      genero: "Terror",
      cantidadDisponible: 10,
      precio: 79000,
      imagen:
        "https://www.tornamesa.co/imagenes/9788418/978841876549.GIF",
    },
    {
      titulo: "El hombre invisible",
      autor: "H.G. Wells",
      anopublico: 1897,
      genero: "Ciencia ficción",
      cantidadDisponible: 8,
      precio: 53000,
      imagen:
        "https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/654b63831a2d37b38783791e_03Dv9FzxNqd4bD6zrPzd5b6EKybwKcaAaum0pqR15d0.jpeg",
    },
    {
      titulo: "Ana Karenina",
      autor: "León Tolstói",
      anopublico: 1878,
      genero: "Novela",
      cantidadDisponible: 12,
      precio: 78000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/42/be/42be3fae8b5074daefa9717ba1d3f983.jpg",
    },
    {
      titulo: "El retrato de Dorian Gray",
      autor: "Oscar Wilde",
      anopublico: 1890,
      genero: "Filosófico",
      cantidadDisponible: 9,
      precio: 62000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg",
    },
    {
      titulo: "El perfume",
      autor: "Patrick Süskind",
      anopublico: 1985,
      genero: "Suspenso",
      cantidadDisponible: 5,
      precio: 70000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/520x520/a6/ce/a6cee3390585e27d1258944ed98ad960.jpg",
    },
    {
      titulo: "La insoportable levedad del ser",
      autor: "Milan Kundera",
      anopublico: 1984,
      genero: "Filosófico",
      cantidadDisponible: 10,
      precio: 68000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/f9/43/f943196aef88fa5a22723a8740e09b60.jpg",
    },
    {
      titulo: "El amor en los tiempos del cólera",
      autor: "Gabriel García Márquez",
      anopublico: 1985,
      genero: "Realismo mágico",
      cantidadDisponible: 13,
      precio: 85000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/3e/b03e98118b9e2cf5b94bb0548bfa59c5.jpg",
    },
    {
      titulo: "Cumbres borrascosas",
      autor: "Emily Brontë",
      anopublico: 1847,
      genero: "Romántica",
      cantidadDisponible: 7,
      precio: 65000,
      imagen:
        "https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/625454187128ea32cdb140e8_6034d7d1f3e0f5072bb2b1ca_Cumbres-borrascosas-emily-bronte-editorial-alma.jpeg",
    },
    {
      titulo: "Las aventuras de Sherlock Holmes",
      autor: "Arthur Conan Doyle",
      anopublico: 1892,
      genero: "Misterio",
      cantidadDisponible: 14,
      precio: 72000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/07/c8/07c8ab4dfef3c9dcd62c9685707492b3.jpg",
    },
    {
      titulo: "La sombra del viento",
      autor: "Carlos Ruiz Zafón",
      anopublico: 2001,
      genero: "Misterio",
      cantidadDisponible: 16,
      precio: 75000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/4a/f8/4af862174ba709db62744f988c62e3b6.jpg",
    },
    {
      titulo: "La casa de los espíritus",
      autor: "Isabel Allende",
      anopublico: 1982,
      genero: "Realismo mágico",
      cantidadDisponible: 11,
      precio: 71000,
      imagen:
        "https://imagessl8.casadellibro.com/a/l/s5/98/9788401352898.webp",
    },
    {
      titulo: "Memorias de mis putas tristes",
      autor: "Gabriel García Márquez",
      anopublico: 2004,
      genero: "Novela",
      cantidadDisponible: 8,
      precio: 58000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/36/bc/36bc084b6b8c736e28c32125f6a2144a.jpg",
    },
    {
      titulo: "Pedro Páramo",
      autor: "Juan Rulfo",
      anopublico: 1955,
      genero: "Realismo mágico",
      cantidadDisponible: 17,
      precio: 49000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/520x520/4b/7e/4b7ee861b9f473b4dcd55bbea2893916.jpg",
    },
    {
      titulo: "El extranjero",
      autor: "Albert Camus",
      anopublico: 1942,
      genero: "Filosófico",
      cantidadDisponible: 12,
      precio: 69000,
      imagen:
        "https://www.tornamesa.co/imagenes/9789962/978996272402.GIF",
    },
    {
      titulo: "El hombre en busca de sentido",
      autor: "Viktor Frankl",
      anopublico: 1946,
      genero: "Psicológico",
      cantidadDisponible: 9,
      precio: 53000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/f6/d0/f6d0aba3e83069dee397322df8889ec4.jpg",
    },
    {
      titulo: "La carretera",
      autor: "Cormac McCarthy",
      anopublico: 2006,
      genero: "Distopía",
      cantidadDisponible: 15,
      precio: 67000,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W446dq7qkOGKZDp_efi1Q-oMN2pTMFsHHQ&s",
    },
    {
      titulo: "El nombre de la rosa",
      autor: "Umberto Eco",
      anopublico: 1980,
      genero: "Misterio",
      cantidadDisponible: 10,
      precio: 73000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/4d/b9/4db9da291dbd3e39949c68bfd8e364b9.jpg",
    },
    {
      titulo: "El túnel",
      autor: "Ernesto Sabato",
      anopublico: 1948,
      genero: "Psicológico",
      cantidadDisponible: 12,
      precio: 55000,
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/90/9a/909a6478080bd205668e665c97b2f137.jpg",
    },
    {
      titulo: "Siddhartha",
      autor: "Hermann Hesse",
      anopublico: 1922,
      genero: "Filosófico",
      cantidadDisponible: 13,
      precio: 52000,
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/97/82/97822208af909f07ea67963d470b5171.jpg",
    },
    {
      titulo: "Frankenstein",
      autor: "Mary Shelley",
      anopublico: 1818,
      genero: "Terror",
      cantidadDisponible: 14,
      precio: 76000,
      imagen:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/9a/e8/9ae837a621fdc1ad2d8a39d94017dfcf.jpg",
    },
  ];
  
function redir1(){

  const formulario = document.getElementById("formulario");
    const inputs = formulario.getElementsByTagName("input");
    
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Te falta campos por llenar.");
            return;
        }
}
}
function redir2(){

  const formulario = document.getElementById("form");
    const inputs = formulario.getElementsByTagName("input");
    
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Te falta campos por llenar.");
            return;
        }
}
  window.location.href = "index.html";
}
function redir3(){

  const formulario = document.getElementById("form1");
    const inputs = formulario.getElementsByTagName("input");
    
    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Te falta campos por llenar.");
            return;
        }
}
  window.location.href = "vista3.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const productosGuardados = JSON.parse(localStorage.getItem('libros'));
  const catalogo = document.querySelector('.catalogo');
  const aside = document.querySelector('aside');
  const filtro1 = document.getElementById('filtro1');
  const filtroProveedor = document.getElementById('filtro-proveedor');
  const filtrarBtn = document.getElementById('filtrar-btn');
  const limpiarFiltrosBtn = document.getElementById('limpiar-filtros');

  aside.classList.add('oculto');

  let productosCargados = 0;
  const productosPorPagina = 15;
  let estadoScroll = true;
  let productosFiltrados = [...productosGuardados];
})
function scrollInfinito() {
  if (estadoScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    cargarProductos(productosFiltrados);
  }
}

function mostrarDetallesProducto(producto) {
  if (producto) {
    document.getElementById('imagenGrande').src = producto.img;
    document.getElementById('nombreArtGrande').textContent = producto.nombre;
    document.getElementById('proveedor').textContent = `Proveedor: ${producto.proveedor}`;
    document.getElementById('stockGrande').textContent = `Stock: ${producto.stock}`;
    document.getElementById('idProducto').textContent = `ID: ${producto.id}`;
    document.getElementById('precioGrande').textContent = `Precio: $${producto.precio.toLocaleString('es-CO')}`;
    document.getElementById('categoria').textContent = `Categoría: ${producto.categoria}`;
    aside.classList.remove('oculto'); 
    
    const agregarCarritoBtn = document.getElementById('agregar-carrito');
    agregarCarritoBtn.onclick = () => agregarAlCarrito(producto);
  } else {
    console.error('Producto no encontrado');
  }
}

function filtrarProductos() {
  estadoScroll = false;
  const categoriaSeleccionada = filtro1.value.trim();
  const proveedorSeleccionado = filtroProveedor.value;


  productosFiltrados = productosGuardados.filter(producto => {
    const coincideCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
    const coincideProveedor = proveedorSeleccionado ? producto.proveedor.toLowerCase().includes(proveedorSeleccionado) : true;
    return coincideCategoria && coincideProveedor;
  });

  catalogo.innerHTML = '';
  productosCargados = 0;
  cargarProductos(productosFiltrados);
  window.addEventListener('scroll', scrollInfinito);
}

window.addEventListener('scroll', scrollInfinito);
cargarProductos(productosGuardados);

catalogo.addEventListener('click', (e) => {
  if (e.target.classList.contains('ver-detalles')) {
    const idProducto = e.target.getAttribute('data-id');
    const productoSeleccionado = productosGuardados.find(p => p.id == idProducto);
    mostrarDetallesProducto(productoSeleccionado);
  }
});

filtrarBtn.addEventListener('click', filtrarProductos);
limpiarFiltrosBtn.addEventListener('click', () => {
  filtro1.value = '';
  filtroProveedor.value = '';
  catalogo.innerHTML = '';
  productosCargados = 0;
  productosFiltrados = [...productosGuardados];
  cargarProductos(productosFiltrados);
  estadoScroll = true;
});

function agregarAlCarrito(producto) {
  const cantidad = document.getElementById('cantidad').value;

if (isNaN(cantidad) || cantidad <= 0) {
  alert("La cantidad debe ser un número positivo.");
  return;
}
const productoCarrito = {
    ...producto,
    cantidad: parseInt(cantidad)
};

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const indiceExistente = carrito.findIndex(item => item.id === productoCarrito.id);
if (indiceExistente > -1) {
    carrito[indiceExistente].cantidad += productoCarrito.cantidad;
} else {
    carrito.push(productoCarrito);
}}


let totalCompra = 0;
let totalProductos = 0;

function actualizarCostoTotal() {
    const cargoDomicilio = document.getElementById('cargoDomicilio').checked;
    const costoDomicilio = cargoDomicilio ? 15000 : 0;
    const costoTotal = totalCompra + costoDomicilio;
    document.getElementById('totalCompra').textContent = costoTotal;
}

function continuarComprando() {
    // Redirigir a la página de productos
    window.location.href = 'productos.html';
}

function cancelarCompra() {
    // Redirigir a la página inicial
    window.location.href = 'index.html';
}

function toggleCodigo() {
    const codigoInput = document.getElementById('codigoSeguridad');
    if (codigoInput.type === 'password') {
        codigoInput.type = 'text';
    } else {
        codigoInput.type = 'password';
    }
}

function confirmarCompra(event) {
    event.preventDefault();

    // Validar campos de tarjeta
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const fechaExpiracion = document.getElementById('fechaExpiracion').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;

    if (!numeroTarjeta || !fechaExpiracion || !codigoSeguridad) {
        alert('Por favor, complete toda la información de la tarjeta.');
        return;
    }

    // Ejecutar la promesa de confirmación
    const confirmarPromesa = new Promise((resolve, reject) => {
        const tiempo = Math.floor(Math.random() * 1000) + 2000;
        setTimeout(() => {
            if (totalProductos > 20) {
                reject('No puede seleccionar más de 20 productos.');
            } else {
                resolve('Pago realizado con éxito.');
            }
        }, tiempo);
    });

    confirmarPromesa
        .then((mensaje) => {
            alert(mensaje);
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(error);
        });
}

  localStorage.setItem('libro', JSON.stringify(libros));
