const mongoose = require('mongoose')
const dbURL = process.env.DbURL

const ConnectionParams = {
    useNewURLParser: true,
    useUnifiedTopology: true

}
const connect = mongoose.connect(dbURL, ConnectionParams).then(() => {
    console.log('Connected to Database!')
}).catch((e) => {
    console.log('ERROR!', e)
})
module.exports = connect