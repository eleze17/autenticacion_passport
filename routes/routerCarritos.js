import { Router } from "express"
export const cartRouter = Router()
import {crudMongo} from '../contenedorMongo/mongo.js'
const mongoProd = new crudMongo('carritos')




cartRouter.get('/:id?',
(req,res)=>{
    mongoProd.leer(req.params.id,res)})

cartRouter.post('/',(req,res)=>{

    mongoProd.insertar(req.body,res)
    

   })


   cartRouter.put('/:id?',
    (req,res)=>{
        mongoProd.actualizar(req.params.id,req.body,res)}
   
    )


    cartRouter.delete('/:id?',(req,res)=>{
    mongoProd.eliminar(req.params.id,res)}
    )

