'use client'

import { createContext } from 'react'

export interface TriviaContextType {
  puntaje: number
  preguntasRespondidas: number
  incrementarPuntaje: (puntos: number) => void
  incrementarPreguntasRespondidas: () => void
  reiniciarJuego: () => void
}

export const TriviaContext = createContext<TriviaContextType | undefined>(undefined)
