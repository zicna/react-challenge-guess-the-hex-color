import styles from './answer-container.module.css'

const AnswerContainer = ({ answer, gameNum, countCorrect, correctAnswer }) => {
  const cl = () => {
    if (answer === 'wrong') return 'wrong'
    if (answer === 'correct') return 'correct'
    return 'neutral'
  }
  return (
    <div className={styles.container}>
      <h1 className={styles[cl()]}>{answer} </h1>
      <p>Game: {gameNum}</p>
      <p>Correct answers: {countCorrect}</p>
      {correctAnswer !== '' && (
        <p>
          Correct Answer was:{' '}
          <span style={{ backgroundColor: correctAnswer }}>
            {correctAnswer}
          </span>
        </p>
      )}
    </div>
  )
}

export default AnswerContainer
