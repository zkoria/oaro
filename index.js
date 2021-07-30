
'use strict';

var AWSXRay = require('aws-xray-sdk-core')
var captureMySQL = require('aws-xray-sdk-mysql')
var mysql = captureMySQL(require('mysql2'))
const username = 'admin'
const password = 'Schito98'
const host = 'database-metlife.cmutd1p8nozi.us-east-2.rds.amazonaws.com'


// To allow Cross-origin resource sharing
const headers = {
    'Access-Control-Allow-Origin': '*',
};

// var contador=1;
//exports.handler = async (event, context, callback) => {
exports.handler = async (event) => {

//console.log("-----------------------------------------> contador: ", contador%6)
//contador++;

    var connection = mysql.createConnection({
      host     : host,
      user     : username,
      password : password,
      database : 'metlife',
      queryTimeout: 60000 // setting timeout
    })

/*
    var connection1 = mysql.createConnection({
      host     : host,
      user     : username,
      password : password,
      database : 'metlife',
      queryTimeout: 60000 // setting timeout
    })


var query1 = "UPDATE polizas SET id='xyz' WHERE assetID =asset0 + count;
    var query1 = 'select * from polizas;';
    connection1.connect()
    connection1.query(query1, function (error, results, fields) {
      if (error) throw error
        connection.end( async err => {
            if ( err ) throw error
        })
    })
*/



var query2 = "SELECT * FROM metlife.registros cl join metlife.polizas p on p.idpoliza = cl.idpoliza where cl.ineClv='"+event.clvine+"'";

   console.log('query2: ', query2);


    var result
    let resultado = [];




    connection.connect()

    return new Promise( ( resolve, reject ) => {

    connection.query(query2, function (error, results, fields) {
      if (error) throw error


        connection.end( async err => {
            if ( err )
                return reject( err )
            //resolve(results[0]);
            resolve(results);
        })
    })
    })


}

