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
        "https://www.penguinlibros.com/co/232993-thickbox_default/madame-bovary.jpg",
    },
    {
      titulo: "Hamlet",
      autor: "William Shakespeare",
      anopublico: 1609,
      genero: "Tragedia",
      cantidadDisponible: 15,
      precio: 68000,
      imagen:
        "https://www.penguinlibros.com/co/299993-thickbox_default/hamlet.jpg",
    },
    {
      titulo: "Drácula",
      autor: "Bram Stoker",
      anopublico: 1897,
      genero: "Terror",
      cantidadDisponible: 10,
      precio: 79000,
      imagen:
        "https://www.penguinlibros.com/co/300110-thickbox_default/dracula.jpg",
    },
    {
      titulo: "El hombre invisible",
      autor: "H.G. Wells",
      anopublico: 1897,
      genero: "Ciencia ficción",
      cantidadDisponible: 8,
      precio: 53000,
      imagen:
        "https://www.penguinlibros.com/co/295510-thickbox_default/el-hombre-invisible.jpg",
    },
    {
      titulo: "Ana Karenina",
      autor: "León Tolstói",
      anopublico: 1878,
      genero: "Novela",
      cantidadDisponible: 12,
      precio: 78000,
      imagen:
        "https://www.penguinlibros.com/co/297010-thickbox_default/ana-karenina.jpg",
    },
    {
      titulo: "El retrato de Dorian Gray",
      autor: "Oscar Wilde",
      anopublico: 1890,
      genero: "Filosófico",
      cantidadDisponible: 9,
      precio: 62000,
      imagen:
        "https://www.penguinlibros.com/co/296010-thickbox_default/el-retrato-de-dorian-gray.jpg",
    },
    {
      titulo: "El perfume",
      autor: "Patrick Süskind",
      anopublico: 1985,
      genero: "Suspenso",
      cantidadDisponible: 5,
      precio: 70000,
      imagen:
        "https://www.penguinlibros.com/co/240110-thickbox_default/el-perfume.jpg",
    },
    {
      titulo: "La insoportable levedad del ser",
      autor: "Milan Kundera",
      anopublico: 1984,
      genero: "Filosófico",
      cantidadDisponible: 10,
      precio: 68000,
      imagen:
        "https://www.penguinlibros.com/co/259883-thickbox_default/la-insoportable-levedad-del-ser.jpg",
    },
    {
      titulo: "El amor en los tiempos del cólera",
      autor: "Gabriel García Márquez",
      anopublico: 1985,
      genero: "Realismo mágico",
      cantidadDisponible: 13,
      precio: 85000,
      imagen:
        "https://www.penguinlibros.com/co/299583-thickbox_default/el-amor-en-los-tiempos-del-colera.jpg",
    },
    {
      titulo: "Cumbres borrascosas",
      autor: "Emily Brontë",
      anopublico: 1847,
      genero: "Romántica",
      cantidadDisponible: 7,
      precio: 65000,
      imagen:
        "https://www.penguinlibros.com/co/298110-thickbox_default/cumbres-borrascosas.jpg",
    },
    {
      titulo: "Las aventuras de Sherlock Holmes",
      autor: "Arthur Conan Doyle",
      anopublico: 1892,
      genero: "Misterio",
      cantidadDisponible: 14,
      precio: 72000,
      imagen:
        "https://www.penguinlibros.com/co/232983-thickbox_default/las-aventuras-de-sherlock-holmes.jpg",
    },
    {
      titulo: "La sombra del viento",
      autor: "Carlos Ruiz Zafón",
      anopublico: 2001,
      genero: "Misterio",
      cantidadDisponible: 16,
      precio: 75000,
      imagen:
        "https://www.penguinlibros.com/co/237013-thickbox_default/la-sombra-del-viento.jpg",
    },
    {
      titulo: "La casa de los espíritus",
      autor: "Isabel Allende",
      anopublico: 1982,
      genero: "Realismo mágico",
      cantidadDisponible: 11,
      precio: 71000,
      imagen:
        "https://www.penguinlibros.com/co/278833-thickbox_default/la-casa-de-los-espiritus.jpg",
    },
    {
      titulo: "Memorias de mis putas tristes",
      autor: "Gabriel García Márquez",
      anopublico: 2004,
      genero: "Novela",
      cantidadDisponible: 8,
      precio: 58000,
      imagen:
        "https://www.penguinlibros.com/co/236583-thickbox_default/memorias-de-mis-putas-tristes.jpg",
    },
    {
      titulo: "Pedro Páramo",
      autor: "Juan Rulfo",
      anopublico: 1955,
      genero: "Realismo mágico",
      cantidadDisponible: 17,
      precio: 49000,
      imagen:
        "https://www.penguinlibros.com/co/238783-thickbox_default/pedro-paramo.jpg",
    },
    {
      titulo: "El extranjero",
      autor: "Albert Camus",
      anopublico: 1942,
      genero: "Filosófico",
      cantidadDisponible: 12,
      precio: 69000,
      imagen:
        "https://www.penguinlibros.com/co/299477-thickbox_default/el-extranjero.jpg",
    },
    {
      titulo: "El hombre en busca de sentido",
      autor: "Viktor Frankl",
      anopublico: 1946,
      genero: "Psicológico",
      cantidadDisponible: 9,
      precio: 53000,
      imagen:
        "https://www.penguinlibros.com/co/290883-thickbox_default/el-hombre-en-busca-de-sentido.jpg",
    },
    {
      titulo: "La carretera",
      autor: "Cormac McCarthy",
      anopublico: 2006,
      genero: "Distopía",
      cantidadDisponible: 15,
      precio: 67000,
      imagen:
        "https://www.penguinlibros.com/co/299583-thickbox_default/la-carretera.jpg",
    },
    {
      titulo: "El nombre de la rosa",
      autor: "Umberto Eco",
      anopublico: 1980,
      genero: "Misterio",
      cantidadDisponible: 10,
      precio: 73000,
      imagen:
        "https://www.penguinlibros.com/co/297083-thickbox_default/el-nombre-de-la-rosa.jpg",
    },
    {
      titulo: "El túnel",
      autor: "Ernesto Sabato",
      anopublico: 1948,
      genero: "Psicológico",
      cantidadDisponible: 12,
      precio: 55000,
      imagen:
        "https://www.penguinlibros.com/co/299873-thickbox_default/el-tunel.jpg",
    },
    {
      titulo: "Siddhartha",
      autor: "Hermann Hesse",
      anopublico: 1922,
      genero: "Filosófico",
      cantidadDisponible: 13,
      precio: 52000,
      imagen:
        "https://www.penguinlibros.com/co/277673-thickbox_default/siddhartha.jpg",
    },
    {
      titulo: "Frankenstein",
      autor: "Mary Shelley",
      anopublico: 1818,
      genero: "Terror",
      cantidadDisponible: 14,
      precio: 76000,
      imagen:
        "https://www.penguinlibros.com/co/298301-thickbox_default/frankenstein.jpg",
    },
  ];
  console.log(libros);
  
