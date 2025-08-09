'use client'

import React, { useState, useEffect } from 'react'
import { IPregunta } from '../Modelos/IPrergunta'  

interface PreguntaProps {
  pregunta: IPregunta
  onRespuesta: (correcta: boolean, puntaje: number) => void
}

export default function Pregunta({ pregunta, onRespuesta }: PreguntaProps) {
  const [seleccion, setSeleccion] = useState<boolean | null>(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)

  useEffect(() => {
    setSeleccion(null)
    setMostrarResultado(false)
  }, [pregunta])

  const handleSeleccion = (valor: boolean) => {
    if (seleccion === null) {
      setSeleccion(valor)
      setMostrarResultado(true)
      const correcta = valor === pregunta.respuestaCorrecta
      onRespuesta(correcta, correcta ? pregunta.puntajePregunta : 0)
    }
  }

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        margin: '2rem auto',
        maxWidth: '600px',
      }}
      role="group"
      aria-labelledby="pregunta-titulo"
    >
      <h2 id="pregunta-titulo">{pregunta.descripcionPregunta}</h2>
      <div style={{ marginTop: '1rem' }}>
        <button
          disabled={seleccion !== null}
          onClick={() => handleSeleccion(pregunta.opcionRespuesta1)}
          style={{ marginRight: '1rem' }}
          aria-pressed={seleccion === pregunta.opcionRespuesta1}
        >
          Verdadero
        </button>
        <button
          disabled={seleccion !== null}
          onClick={() => handleSeleccion(pregunta.opcionRespuesta2)}
          aria-pressed={seleccion === pregunta.opcionRespuesta2}
        >
          Falso
        </button>
      </div>
      {mostrarResultado && (
        <p
          style={{ marginTop: '1rem', fontWeight: 'bold' }}
          role="alert"
          aria-live="assertive"
        >
          {seleccion === pregunta.respuestaCorrecta ? '¡Respuesta correcta!' : 'Respuesta incorrecta.'}
        </p>
      )}
    </div>
  )
}
