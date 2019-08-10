var sql = require('mssql');
/*
 config = {
    server : 'GRAHAMP\\SQLEXPRESS',
    database : 'TestDB',
    user : 'sa',
    password : 'sa',
    port : 1433
};
*/
/*
var config = {  
    userName: 'sa',  
    password: 'sa',  
    server: 'localhost\\SQLEXPRESS',  
    // If you are on Microsoft Azure, you need this:  
    options: {encrypt: true, database: 'TestDB'}  
};  
*/
var config = {
    user: 'testusername',
    password: 'passwordtest',
    server: 'localhost',
    database: 'TestDB',
    port: 1433,
    options: {
        truestedConnection: true,
        instanceName: 'SQLEXPRESS'
   }
  
};
/*
var config = {
  server: "localhost\\SQLEXPRESS",
  database: "TestDB",
  user: "sa",
  password: "sa",
  port: 1433
};
*/

/*
var connection = new Connection(config);

connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    executeStatement();
  }
});

function executeStatement() {
  request = new Request("select 123, 'hello world'", function(err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }
    connection.close();
  });

  request.on('row', function(columns) {
    columns.forEach(function(column) {
      if (column.value === null) {
        console.log('NULL');
      } else {
        console.log(column.value);
      }
    });
  });

  //connection.execSql(request);
*/
  function listProducts() {
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        request.query("select * from [users]").then(function (recordSet) {
            console.log(recordSet);
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

listProducts();
