const mysql = require("mysql"); //means please import the node modules mysql to the const mysql

var properties = {
  host: "fintechsg08.mysql.database.azure.com",
  port: 3306,
  user: "fintechlab@fintechsg08",
  password: "FinTechSG2021",
  database: "market",
};

var connection = mysql.createConnection(properties);

connection.connect((errors) => {
  if (errors) {
    console.log("Couldn't connect to the MySQL Server. Error: " + errors);
  } else {
    console.log("Connected to MySQL successfully!");
  }
});

setInterval(() => {   // to close connection after query which is a good practice and don't waste resources
    connection.query("select 1");
  }, 60 * 1000);

module.exports = { connection };



