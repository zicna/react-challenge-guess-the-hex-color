import MainContainer from './components/MainContainer'
import AnswerContainer from './components/AnswerContainer'
import React, { useState } from 'react'
function App() {
  const [answer, setAnswer] = useState('Please guess hex color')
  const [gameNum, setGameNum] = useState(1)
  const [countCorrect, setCountCorrect] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')

  return (
    <>
      <AnswerContainer
        answer={answer}
        gameNum={gameNum}
        countCorrect={countCorrect}
        correctAnswer={correctAnswer}
      />
      <MainContainer
        setAnswer={setAnswer}
        setGameNum={setGameNum}
        gameNum={gameNum}
        setCountCorrect={setCountCorrect}
        setCorrectAnswer={setCorrectAnswer}
      ></MainContainer>
    </>
  )
}

export default App
