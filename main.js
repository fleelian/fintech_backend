const database = require("./database"); // this is to import the file "database.js" into this, adding ./ and no js at the end.

// query(what query to run, what to do with the results -> callback function)
// database.connection.query("select * from seller", (errors, results) => {
//   if (errors) {
//     console.log("Errors: " + errors);
//   } else {
//     console.log(results);
//   }
// });

// //another way to query a database
// database.connection.query(
//     "select customer_name, customer_wallet from customer where customer_type = 0",
//     (errors, results) => {
//     if (errors) {
//       console.log("Errors: " + errors);
//     } else {
//       console.log(results);
//     }
//   });

// to insert data into the database
  database.connection.query(
    "insert into seller (seller_name, seller_wallet) values ('Dixant','10000')",
    (errors, results) => {
      if (errors) {
        console.log("Errors: " + errors);
      } else {
        console.log(results);
      }
    }
  );

// instead of putting hard data like "Dixant or 10000", use placeholders
var name = "Mittal";
var balance = 5000;

database.connection.query(
  `insert into seller (seller_name, seller_wallet) values ('${name}','${balance}')`,
  (errors, results) => {
    if (errors) {
      console.log("Errors: " + errors);
    } else {
      console.log(results);
    }
  }
);



