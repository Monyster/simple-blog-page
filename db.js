const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "simple_blog_rest_api_db"
});


module.exports = pool