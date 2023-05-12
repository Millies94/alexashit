let guests = [
  {
    firstName: "Tifani",

    lastName: "Lee",

    species: "Horse",
  },

  {
    firstName: "Betty",

    lastName: "White",

    species: "Human",
  },

  {
    firstName: "Big",

    lastName: "Player",

    species: "Slug",
  },

  {
    firstName: "King",

    lastName: "Scott",

    species: "Royalty",
  },

  {
    firstName: "Von",

    lastName: "Smith",

    species: "Human",
  },

  {
    firstName: "Shrek",

    lastName: "Ogre",

    species: "Ogre",
  },

  {
    firstName: "Steward",

    lastName: "Little",

    species: "Mouse",
  },

  {
    firstName: "Billy",

    lastName: "Bates",

    species: "Mafia",
  },

  {
    firstName: "Greg",

    lastName: "Frogger",

    species: "Frog",
  },

  {
    firstName: "John",

    lastName: "Spade",

    species: "Human",
  },
];

let teaPartyTable = {};

for (let i = 0; i < guests.length; i++) {
  let guest = guests[i];

  smallDessertOptions = [
    "Brownie",
    "Rocky Road Ice Cream",
    "Whipped Cream Cake",
    "Key Lime Pie",
    "Vanilla Custard",
    "Peach Cobbler",
    "Butter Pecan Ice Cream",
    "Oreo Ice Cream",
    "Blue Moon Ice Cream",
  ];

  smallDessert =
    smallDessertOptions[Math.floor(smallDessertOptions.length * Math.random())];

  teaGuest = {};

  teaGuest.firstName = guest.firstName;

  teaGuest.lastName = guest.lastName;

  teaGuest.species = guest.species;

  teaGuest.teaCup = true;

  teaGuest.teaPlate = true;

  teaGuest.smallDessert = `${smallDessert}`;

  teaPartyTable[guest.firstName] = teaGuest;
}

for (let guest in teaPartyTable) {
  console.log(`First Name: ${teaPartyTable[guest].firstName}`);

  console.log(`Last Name: ${teaPartyTable[guest].lastName}`);

  console.log(`Species: ${teaPartyTable[guest].species}`);

  console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);

  console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);

  console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);

  console.log();
}
