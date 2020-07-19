const models = require("./models");

async function getProducts() {
    try {
        const productA = await models.Products.findByPk(3);
        console.log(productA.dataValues);

        const productB = await models.Products.findByPk(7);
        console.log(productB.dataValues);
    } catch (err) {
        console.log("에러발생");
        console.log(err);
    }
}

getProducts();
