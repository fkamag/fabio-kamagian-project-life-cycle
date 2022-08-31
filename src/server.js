const app = require('./app');
const conn = require('./db/connection');

app.listen(3001, async () => {
    console.log('App running on port 3001');

    const [ result ] = await conn.execute('SELECT 1');
    if (result) {
        console.log('Mysql Up');
    }
})