import { IPregunta } from '../Modelos/IPrergunta'

const preguntasSimuladas: IPregunta[] = [
  {
    idPregunta: '1',
    descripcionPregunta: 'La tierra es plana.',
    opcionRespuesta1: false,
    opcionRespuesta2: true,
    respuestaCorrecta: false,
    puntajePregunta: 1,
  },
  {
    idPregunta: '2',
    descripcionPregunta: 'El sol es una estrella.',
    opcionRespuesta1: true,
    opcionRespuesta2: false,
    respuestaCorrecta: true,
    puntajePregunta: 1,
  },
  // ... hasta 5 preguntas
]

export default preguntasSimuladas
