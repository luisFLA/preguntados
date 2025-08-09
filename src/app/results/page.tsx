'use client'

import React, { useContext } from 'react'
import { TriviaContext } from '../Context/TriviaContext'
import { useRouter } from 'next/navigation'

export default function Results() {
  const trivia = useContext(TriviaContext)
  const router = useRouter()

  if (!trivia) {
    return <p>Cargando resultados...</p>
  }

  const reiniciar = () => {
    trivia.reiniciarJuego()
    router.push('/')
  }

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Resultados Finales</h1>
      <p>
        Puntaje final: <strong>{trivia.puntaje}</strong>
      </p>
      <button onClick={reiniciar} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Reiniciar Trivia
      </button>
    </main>
  )
}
