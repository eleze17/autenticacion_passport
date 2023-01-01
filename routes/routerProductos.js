import { Router } from "express"
export const productsRouter = Router()
import {crudMongo} from '../contenedorMongo/mongo.js'
const mongoProd = new crudMongo('productos')



productsRouter.get('/:id?',
(req,res)=>{
   mongoProd.leer(req.params.id,res)}
)

productsRouter.post('/',(req,res)=>{

    mongoProd.insertar(req.body,res)
    

   })


productsRouter.put('/:id?',
    (req,res)=>{
        mongoProd.actualizar(req.params.id,req.body,res)}
    )


productsRouter.delete('/:id?',(req,res)=>{
    mongoProd.eliminar(req.params.id,res)
})

