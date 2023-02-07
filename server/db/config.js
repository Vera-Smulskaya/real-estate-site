const { join } = require('path');
const config = require('config');
const database = config.get('database_url');


// sqlite://:memory | sqlite://db/main.db
function parseSQLite(string) {
  const [dialect, address] = string.split('://')
  if (address === ':memory:') {
    return { dialect, storage: ':memory:' };
  }

  return { dialect, storage: join(__dirname, '..', address ) };
}


// mysql://user:Passw0rd@my.sql.com:123/test-db
function parseServer(string) {
  const [dialect, url] = string.split('://');
  const [credentials, server] = url.split('@');
  const [username, password] = credentials.split(':');
  const [address, database] = server.split('/');
  const [host, port] = address.split(':');

  return { dialect, username, password, host, port, database };
}


const development = test = production = database.startsWith('sqlite')
  ? parseSQLite(database)
  : parseServer(database);

module.exports = { development, test, production };
