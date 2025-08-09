import './globals.css'
import React from 'react'
import { TriviaProvider } from './Providers/TriviaProvider'
import Header from './Componentes/Header'

export const metadata = {
  title: 'Preguntados',
  description: 'Juego de trivia con React y Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <TriviaProvider>
          <Header />
          {children}
        </TriviaProvider>
      </body>
    </html>
  )
}
