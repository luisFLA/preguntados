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
  {
    idPregunta: '3',
    descripcionPregunta: 'El agua hierve a 100 grados Celsius.',
    opcionRespuesta1: true,
    opcionRespuesta2: false,
    respuestaCorrecta: true,
    puntajePregunta: 1,
  },
  {
    idPregunta: '4',
    descripcionPregunta: 'Los gatos pueden volar.',
    opcionRespuesta1: false,
    opcionRespuesta2: true,
    respuestaCorrecta: false,
    puntajePregunta: 1,
  },
  {
    idPregunta: '5',
    descripcionPregunta: 'La capital de Francia es París.',
    opcionRespuesta1: true,
    opcionRespuesta2: false,
    respuestaCorrecta: true,
    puntajePregunta: 1,
  },
]

export default preguntasSimuladas
