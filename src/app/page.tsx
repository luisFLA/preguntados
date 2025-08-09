'use client'

import React, { useState, useContext, useEffect } from 'react'
import Pregunta from './Componentes/Pregunta'
import preguntasSimuladas from './informacion/preguntas'
import { IPregunta } from './Modelos/IPrergunta'
import { TriviaContext } from './Context/TriviaContext'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const trivia = useContext(TriviaContext)
  const router = useRouter()

  const [preguntas, setPreguntas] = useState<IPregunta[]>([])
  const [indicePregunta, setIndicePregunta] = useState(0)
  const [mostrarSiguiente, setMostrarSiguiente] = useState(false)

  useEffect(() => {
    setPreguntas(preguntasSimuladas)
  }, [])

  if (!trivia) return <p>Cargando...</p>

  const { incrementarPuntaje, incrementarPreguntasRespondidas } = trivia
  const preguntaActual = preguntas[indicePregunta]

  const handleRespuesta = (correcta: boolean, puntaje: number) => {
    if (correcta) incrementarPuntaje(puntaje)
    incrementarPreguntasRespondidas()
    setMostrarSiguiente(true)
  }

  const siguientePregunta = () => {
    if (indicePregunta + 1 >= preguntas.length) {
      router.push('/results')
    } else {
      setIndicePregunta(i => i + 1)
      setMostrarSiguiente(false)
    }
  }

  if (!preguntaActual) {
    return <p>Cargando pregunta...</p>
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Pregunta pregunta={preguntaActual} onRespuesta={handleRespuesta} />
      {mostrarSiguiente && (
        <button onClick={siguientePregunta} style={{ marginTop: '1rem' }}>
          Siguiente Pregunta
        </button>
      )}
    </div>
  )
}
