'use client'

import React, { useContext } from 'react'
import { TriviaContext } from '../Context/TriviaContext'

export default function Header() {
  const trivia = useContext(TriviaContext)

  if (!trivia) return null

  return (
    <header style={{ backgroundColor: '#222', color: 'white', padding: '1rem' }}>
      <h1>Preguntados</h1>
      <p>
        Puntaje: {trivia.puntaje} | Preguntas respondidas: {trivia.preguntasRespondidas}
      </p>
    </header>
  )
}
