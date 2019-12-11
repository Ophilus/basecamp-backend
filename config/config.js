const adminName = 'admin',
    adminPassword = 'admin',
    cluster = 'cluster0-unrti.mongodb.net',
    dbName = 'tv_series',
    MongoLink = `mongodb+srv://${adminName}:${adminPassword}@${cluster}/${dbName}?retryWrites=true&w=majority`;

module.exports = MongoLink;