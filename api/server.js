const cors = require('cors')
const express = require('express')
const fs = require('fs')
const multer  = require('multer')
const path = require('path')
const watsonRecognition = require('watson-developer-cloud/visual-recognition/v3')

const env = require('./env.json')

const storage = multer.memoryStorage()
const upload = multer({ storage })

const app = express()
app.use(cors())

const recognizer = new watsonRecognition({
  version:    env.VISUAL_RECOGNITION_API_VERSION,
  iam_apikey: env.VISUAL_RECOGNITION_API_KEY
});

let images = []

app.listen(env.PORT, () => {
  console.log(`Servidor iniciado: Porta: ${env.PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.get('/api/v1/photos', (req, res) => {
  res.send(images)
})

app.post('/api/v1/recognize', upload.single('image'), (req, res) => {
  const images_file = req.file.buffer
  recognizer.detectFaces({images_file}, (err, prediction) => {
    const { faces } = prediction.images[0]

    images.push({
      image: `data:image/jpeg;charset=utf-8;base64,${Buffer.from(images_file).toString('base64')}`,
      faces
    })
    res.send(faces)
  })
})
