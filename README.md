
# watson-age-estimator



Application of facial recognition and age estimation using Watson

Aplicação de reconhecimento facial e estimação de idade utilizando o Watson.

![enter image description here](https://github.com/pstwh/watson-age-estimator/raw/master/samples/1.gif)

### About

A NodeJS / Express server was used to maintain the Watson application key and avoid exposure.

React was used in the frontend consuming the express API. The Express API responds to the faces detected , shortly, the client uses react (react-konva) to draw rectangles a layer above the faces. When the mouse passes over a face, information already delivered by the API is shown, for example, age and gender.

___

### Sobre

Foi utilizado um servidor NodeJS/Express para manter a chave de aplicação e evitar exposição para o cliente.

React foi utilizado no frontend consumindo a API express. A API Express responde as faces detectadas para o cliente, logo após o cliente utiliza react (react-konva) para desenhar retangulos uma camada acima dos rostos. Quando o mouse passa sobre um rosto informações já entregues pela API são mostradas, como por exemplo, idade e gênero.

### Instalation/Instalação (dependencies: Node8)

<b><p style="color: red">You need to configure an env.json file in the api / folder as follows:</p></b>

```json
{
"VISUAL_RECOGNITION_API_KEY": "YOUR KEY",
"VISUAL_RECOGNITION_API_VERSION":  "2018-03-19"
}
```

É necessário configurar um arquivo env.json na pasta api/ da seguinte forma:

```json
{
"VISUAL_RECOGNITION_API_KEY": "SUA CHAVE",
"VISUAL_RECOGNITION_API_VERSION":  "2018-03-19"
}
```

After:
Depois:

```bash
git clone https://github.com/pstwh/watson-age-estimator.git
chmod +x run.sh
./run.sh
```

After that, the server opens on local port 3001
It can be accessed at: https://agestimator.herokuapp.com/
___
Depois disso, o servidor abre na porta 3001 local
Pode ser acessado em: https://agestimator.herokuapp.com/



### Checklist
- [x] API Receiving Images.
- [x] Send reply with demarcation of faces.
- [x] Render rectangles a layer above the image.
- [x] Show information about a particular face when the mouse is over.
- [x] Rendering in grid form.
- [ ] Add a database.
- [ ] Accept more than one file simultaneously.
- [ ] Pages with richer layout

___

### Checklist
- [x] API Receber Imagens.
- [x] Enviar resposta com demarcação dos rostos.
- [x] Renderizar retângulos umas layer acima da imagem.
- [x] Mostrar informações referentes  a determinado rosto quando o mouse está sobre.
- [x] Renderização em forma de grid.
- [ ] Adição de banco de dados.
- [ ] Aceitar mais de um arquivo simultaneamente.
- [ ] Páginas com layout mais rico

___

### Build With

*  [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
*   [Material-UI](https://github.com/mui-org/material-ui) - React components that implement Google's Material Design.
*  [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
*   [ReactKonva](https://github.com/konvajs/react-konva) - React + Canvas = Love. JavaScript library for drawing complex canvas graphics using React.
