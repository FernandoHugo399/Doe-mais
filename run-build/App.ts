import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(express.static(path.resolve() + '/dist/app'))
      dotenv.config()
    }

    private routes (): void {
      this.express.use('/*', (req, res) => {
        res.sendFile(path.resolve() + '/dist/app/index.html')
      })
    }
}

export default new App().express
