import fastify from "fastify";
import DatabaseMemory from "./DatabaseMemory.js";


const server = fastify()


server.get('/videos', () => {
  const videos = DatabaseMemory.list()


  return videos
})

server.post('/videos', (req, res) => {
  const {title, description, duration } = req.body


  DatabaseMemory.create({
    title: 'Video 01',
    description: 'This is a video 01',
    duration: 180
  })

  return res.status(201).send()
})

server.put('/videos/:id', (req, res) => {
  const videoId = req.params.id
  const {title, description, duration } = req.body


  DatabaseMemory.update(videoId, { 
    title,
    description,
    duration
  })

  return res.status(204).send()
})


server.delete('/videos/:id', (req, res) => {
  const videoId = req.params.id

  DatabaseMemory.delete(videoId)

  return res.status(204).send()
})


server.listen({
  port: 3333,
})