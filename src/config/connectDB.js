const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '63.250.32.230',
    user: ' trxdefff_admin',
    password: 'Dph51mO5qkS8U1k',
    database: ' trxdefff_admin'
});

// const connection = mysql.createPool({
//     host: '63.250.32.230',
//     user: 'trxdefff_admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: 'trxdefff_admin'
// });

export default connection;