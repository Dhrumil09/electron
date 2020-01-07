var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('reliance');

let init=function() {
  db.run("CREATE TABLE IF NOT EXISTS user(cust_id integer PRIMARY KEY AUTOINCREMENT,cust_name char NOT NULL,cust_mobile integer NOT NULL)");
  db.run("CREATE TABLE IF NOT EXISTS trousers (trousers_id integer PRIMARY KEY AUTOINCREMENT, cust_id integer, length float NOT NULL, waist float NOT NULL, shit float NOT NULL, thigh float NOT NULL, mori float NOT NULL, knee float NOT NULL, dates date, amount integer NULL,FOREIGN key(cust_id)REFERENCES user(cust_id))");
  db.run("CREATE TABLE IF NOT EXISTS shirt (shirt_id integer PRIMARY KEY AUTOINCREMENT, cust_id integer, length float NOT NULL,chest float NOT NULL,stomach float NOT NULL,shit float NOT NULL,shoulder float NOT NULL,sleev float NOT NULL,cuff float NOT NUll,colar float NOT NULL,dates date, amount integer NULL,FOREIGN key(cust_id)REFERENCES user(cust_id));");
  db.run("CREATE TABLE IF NOT EXISTS suit (suit_id integer PRIMARY KEY AUTOINCREMENT, cust_id integer, length float NOT NULL,chest float NOT NULL,stomach float NOT NULL,shit float NOT NULL,shoulder float NOT NULL,sleev float NOT NULL,dates date, amount integer NULL,FOREIGN key(cust_id)REFERENCES user(cust_id));");
  db.run("CREATE TABLE IF NOT EXISTS kurta(kurta_id integer PRIMARY KEY AUTOINCREMENT, cust_id integer, length float NOT NULL,chest float NOT NULL,stomach float NOT NULL,shit float NOT NULL,shoulder float NOT NULL,sleev float NOT NULL,dates date, amount integer NULL,FOREIGN key(cust_id)REFERENCES user(cust_id));");
  db.run("CREATE TABLE IF NOT EXISTS paijama(paijama_id integer PRIMARY KEY AUTOINCREMENT, cust_id integer, length float NOT NULL,waist float NOT NULL,shit float NOT NULL,mori float not NULL,dates date, amount integer NULL,FOREIGN key(cust_id)REFERENCES user(cust_id));");
  db.run("CREATE TABLE IF NOT EXISTS koti(koti_id integer PRIMARY KEY AUTOINCREMENT, cust_id integer, length float NOT NULL,chest float NOT NULL,stomach float NOT NULL,shit float not NULL,shoulder float not null,neck float NOT NULL,dates date, amount integer NULL,FOREIGN key(cust_id)REFERENCES user(cust_id));");
};
init()
module.exports={
  init:init,
  db:db
}