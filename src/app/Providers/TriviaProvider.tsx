'use client'

import React, { useState, ReactNode } from 'react'
import { TriviaContext, TriviaContextType } from '../Context/TriviaContext'

interface Props {
  children: ReactNode
}

export function TriviaProvider({ children }: Props) {
  const [puntaje, setPuntaje] = useState(0)
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0)

  const incrementarPuntaje = (puntos: number) => setPuntaje(p => p + puntos)
  const incrementarPreguntasRespondidas = () => setPreguntasRespondidas(p => p + 1)
  const reiniciarJuego = () => {
    setPuntaje(0)
    setPreguntasRespondidas(0)
  }

  const contextValue: TriviaContextType = {
    puntaje,
    preguntasRespondidas,
    incrementarPuntaje,
    incrementarPreguntasRespondidas,
    reiniciarJuego,
  }

  return <TriviaContext.Provider value={contextValue}>{children}</TriviaContext.Provider>
}
