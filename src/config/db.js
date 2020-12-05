const mongoose = require('mongoose')


const inicializaMongoServer = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useFindAndModify: false, 
            useUnifiedTopology: true
        })
        console.log('Conectado com sucesso')
    } catch (error) {
        console.log('Erro de conexão')
        console.log(error)
    }
}

module.exports = inicializaMongoServer