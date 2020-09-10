module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '8562',
    database: 'chat'
  },
  migrations: {
    directory: './models/migrations'
  },
  useNullAsDefault : true
}
