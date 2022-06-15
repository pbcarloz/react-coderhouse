const SHOP_DATA = [
  {
    title: 'Gorras',
    items: [
      {
        id: 1,
        name: 'Sombrero Cafe',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        stock: 5,
        text: "Sombrero cafe de fieltro con cordon negro"
      },
      {
        id: 2,
        name: 'Gorro Azul',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
        stock: 3,
        text: "Gorro Azul de Lana con despunte"
      },
      {
        id: 3,
        name: 'Sombrero Vaquero',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
        stock: 2,
        text: "Sombrero Vaquero color Cafe con strap en piel"
      },
      {
        id: 4,
        name: 'Sombrero Gris',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
        stock: 5,
        text: "Sombrero Gris con strap grueso en piel cafe"
      },
      {
        id: 5,
        name: 'Gorro Verde',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
        stock: 5,
        text: "Gorro Verde Botella con despunte y patron tejido"
      },
      {
        id: 6,
        name: 'Gorra de Mezclilla',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
        stock: 2,
        text: "Gorra de Mezclilla clara con bordado Palm"
      },
      {
        id: 7,
        name: 'Gorro Rojo',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
        stock: 3,
        text: "Gorro Rojo de Lana con despunte"
      },
      {
        id: 8,
        name: 'Gorra Wolf',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
        stock: 7,
        text: "Gorra Azul con bordado Brand Wolf"
      },
    ],
  },
  {
    title: 'Tenis',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
        stock: 5,
        text: "Adidas NMD Premium Negros Edicion 2019"
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
        stock: 3,
        text: "Adidas Yeezy ultra light color rosa edicion 350"
      },
      {
        id: 12,
        name: 'Converse Negros',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
        stock: 3,
        text: "Converse all-black botin con straps negros "

      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        stock: 2,
        text: "Nike White Airforce edition botin all white "
      },
      {
        id: 14,
        name: 'Nike High Tops Rojos',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
        stock: 6,
        text: "Nike High Tops Rojos Edition Limited Air 2019"
      },
      {
        id: 15,
        name: 'Nike High Tops Cafe',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
        stock: 4,
        text: "Nike High Tops Cafe Edition Limited Air 2019"
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
        stock: 3,
        text: "Air Jordan Limited Keep Fliying Edition Limited 2019"
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
        stock: 1,
        text: "Classic Beige Timberlands High heel boot"
      },
    ],
  },
  {
    title: 'Chamarras',
    items: [
      {
        id: 18,
        name: 'Chamarra Mezclilla Negra',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
        stock: 5,
        text: "Chamarra Mezclilla Negra deslavada, estilo bomber all black"
      },
      {
        id: 19,
        name: 'Chamarra Mezclilla Azul',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
        stock: 3,
        text: "Chamarra Mezclilla azul clasico, estilo relaxed fit"
      },
      {
        id: 20,
        name: 'Chaqueta Jean Gris',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
        stock: 3,
        text: "Chamarra Jean Claro Deslavado, corte relaxed fit"
      },
      {
        id: 21,
        name: 'Chamarra Cafe',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 265,
        stock: 2,
        text: "Chamarra Bomber Gamusa Cafe adjusted fit interior de lana"
      },
      {
        id: 22,
        name: 'Abrigo Beige',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
        stock: 8,
        text: "Long Coat Beige de fieltro con stratps beige corte female fit"
      },
    ],
  },
  {
    title: 'Mujeres',
    items: [
      {
        id: 23,
        name: 'Tanktop Azul',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
        stock: 5,
        text: "Tanktop Azul relaxed straps con patron petroleo"
      },
      {
        id: 24,
        name: 'Floral Blusa',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
        stock: 4,
        text: "Blusa low hang con patron floral color blanca slim fit"
      },
      {
        id: 25,
        name: 'Vestido Floral',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
        stock: 7,
        text: "Vestido corte relax con patron floral y strap de ajuste a la cintura"
      },
      {
        id: 26,
        name: 'Vestido Red Dot',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
        stock: 3,
        text: "Vestido Rojo Polka White Dot ajuste a la cintura con resorte"
      },
      {
        id: 27,
        name: 'Sweater de Lineas',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
        stock: 2,
        text: "Sweater ajustado tejido con patron de lineas doradas cuello ajustado"
      },
      {
        id: 28,
        name: 'Jumper Mostaza',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
        stock: 5,
        text: "Jumper relaxed fit color Mostaza hombliguera con gorro"
      },
      {
        id: 29,
        name: 'Blusa Blanca',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
        stock: 3,
        text: "Blusa blanca de lino relaxed fit con despuntes en patron de flores"
      },
    ],
  },
  {
    title: 'Hombres',
    items: [
      {
        id: 30,
        name: 'Chaleco Camuflaje',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        stock: 3,
        text: "Chaleco patron camuflaje osculo en poliester interior en fieltro"
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        stock: 5,
        text: "Camisa relaxed fit patron floral manga corta"
      },
      {
        id: 32,
        name: 'Manga Larga Blanco con Negro',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
        stock: 4,
        text: "Playera manga larga bicolor blanco con mangas negras relaxed fit"
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
        stock: 2,
        text: "Camisa Rosa relaxed fit con estampado de flores"
      },
      {
        id: 34,
        name: 'Manga Larga Jean',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
        stock: 2,
        text: "Camisa slim fit manga larga tela jean color azul"
      },
      {
        id: 35,
        name: 'T-shirt Punteada',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
        stock: 2,
        text: "Camisa manga corta color vino slim fit punteado blanco"
      },
    ],
  },
];


export default SHOP_DATA;