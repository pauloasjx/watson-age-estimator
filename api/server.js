// Imports
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const multer  = require('multer')
const path = require('path')
const watsonRecognition = require('watson-developer-cloud/visual-recognition/v3')

// Importa o arquivo de configuração ambiente
const env = require('./env.json')

const storage = multer.memoryStorage()
const upload = multer({ storage })

// Para o dyno no herokuapp não dormir
require('heroku-self-ping')("http://agestimator.herokuapp.com");

const app = express()
app.use(cors())

// Definidas Keys do Watson
const recognizer = new watsonRecognition({
  version:    env.VISUAL_RECOGNITION_API_VERSION,
  iam_apikey: env.VISUAL_RECOGNITION_API_KEY
});

// Apenas um cache de arquivos, deveria ser um banco
// porém, pela simplicidade
let images = []



// Iniciado Servidor
app.listen(env.PORT, () => {
  console.log(`Servidor iniciado: Porta: ${env.PORT}`)
})

// Devolve diretório estático
app.use(express.static(path.join(__dirname, "public")));

// Devolve a variável de cache
app.get('/api/v1/photos', (req, res) => {
  res.send(images)
})

// Recebe a imagem, utiliza o watson e manda apenas a resposta para o cliente
app.post('/api/v1/recognize', upload.single('image'), (req, res) => {
  const images_file = req.file.buffer
  recognizer.detectFaces({images_file}, (err, prediction) => {
    const { faces } = prediction.images[0]

    // Apenas pelo cache, poderia ser armazenamento em banco de dados
    images.push({
      image: `data:image/jpeg;charset=utf-8;base64,${Buffer.from(images_file).toString('base64')}`,
      faces
    })

    // Manda um json com a demarcação das faces
    res.send(faces)
  })
})
