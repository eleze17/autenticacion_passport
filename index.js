import express from 'express' 
const app = express()
import {productsRouter} from './routes/routerProductos.js' 
import {cartRouter} from './routes/routerCarritos.js'
import {logRouter} from './routes/routerLogin.js'
import {regRouter} from './routes/routerRegister.js'
import {infoRouter} from './routes/infoRouter.js'
import {randomRouter} from './routes/randomRouter.js'
import { engine } from 'express-handlebars'
import yargs  from 'yargs' 
const argv = yargs(process.argv.slice(2))


const args =  argv
.alias({
    p: 'puerto'
})
.default({
    puerto : 8080
})
.argv

const puerto = args.p

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productsRouter)
app.use('/api/carritos', cartRouter)
app.use('/api/login', logRouter)
app.use('/api/register', regRouter)
app.use('/info', infoRouter)
app.use('/api/randoms', randomRouter)

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', './views')

 

const PORT = puerto
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))


