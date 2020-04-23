// var data = [
//     { id: 1, name: "Kajak", category: "Sporty wodne", description: "Kajak dla jednej osoby", price: 275 },
//     { id: 2, name: "Kamizelka ratunkowa", category: "Sporty wodne", description: "Skuteczna i modna", price: 48.95 },
//     { id: 3, name: "Piłka nożna", category: "Piłka nożna", description: "Zaakceptowana przez federację pod względem wagi i wymiarów", price: 19.50 },
//     { id: 4, name: "Chorągiweki narożne boiska", category: "Piłka nożna", description: "Odmień swoje boisko nadając mu profesjonalny szyk", price: 34.95 },
//     { id: 5, name: "Stadion", category: "Piłka nożna", description: "Stadion na 35 000 miejsc", price: 79500 },
//     { id: 6, name: "Myśląca czapeczka", category: "Szachy", description: "Zwiększa wydajność mózgu o 75%", price: 16 },
//     { id: 7, name: "Chwiejne krzesełko", category: "Szachy", description: "Potajemnie doprowadza przeciwnika do irytacji", price: 29.95 },
//     { id: 8, name: "Szachownica", category: "Szachy", description: "Zabawa dla całej rodziny", price: 75 },
//     { id: 9, name: "Królu złoty", category: "Szachy", description: "Pozłacana, zdobiona diamentami figura króla", price: 1200 }
// ];

var faker = require("faker");
var data = [];
var categories = ["Sporty wodne", "Piłka nożna", "Szachy", "Bieganie"];
faker.locale = "pl";
faker.seed(100);
for (let i = 1; i <= 500; i++) {
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: faker.commerce.price()
    })
}

module.exports = function () {
    return {
        products: data,
        categories: categories,
        orders: []
    };
};