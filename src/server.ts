import autoLoad from '@fastify/autoload'
import fastify from 'fastify'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = fastify({
  logger: true,
})

app.register(autoLoad, {
  dir: join(__dirname, 'plugins'),
})

app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
})

app.listen({ port: 3000 })
