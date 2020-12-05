const Cars = require('../model/Cars')


module.exports = {
     async create(req, res){
        try {
            const cars = req.body
            await Cars.create(cars)

            res.json({message: 'Cadastrado com Sucesso'})
        } catch (error) {
            res.json({error: 'Não foi possivel cadastrar'})
        }
     },
     async update(req, res){
         try {
            const cars = req.body
            const {id} = req.params

            const CarsReturn = await Cars.findByIdAndUpdate(id, cars, {
                new: true,
            })

            await CarsReturn.save()

             res.json({message: 'Atualizado com sucesso'})
         } catch (error) {
             res.json({error: 'Não foi possivel atualizar'})
         }
     },
     async destroy(req, res){
         try {
            const {id} = req.params

            await Cars.findByIdAndDelete(id)
            res.json({message: 'Deletado com sucesso'})
         } catch (error) {
            res.json({error: 'Não foi possivel deletar'})
        }
     },
     async consulta(req, res){
        try {
            const {id} = req.params
            const carsGet = await Cars.findById(id)            

            res.json(carsGet) 
        } catch (error) {
            res.json({error: 'Não foi possivel realizar consulta'})
        }
     },
     async consultaAll(req, res){
         try {
             const carsReturn = await Cars.find()

             res.json(carsReturn)
         } catch (error) {
             res.json({error: 'Não foi possivel realizar consulta completa'})
         }
     }
}