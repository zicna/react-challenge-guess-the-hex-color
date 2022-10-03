import React, { useMemo, memo, useState } from 'react'
import styles from './main-container.module.css'
import { randHex, randNum } from '../helpers/helper'

const MainContainer = ({
  setAnswer,
  setGameNum,
  gameNum,
  setCountCorrect,
  setCorrectAnswer,
}) => {
  const colors = useMemo(() => {
    return { 0: randHex(), 1: randHex(), 2: randHex() }
  }, [gameNum])

  const randomIndex = randNum(0, 2)
  const choosenColor = colors[randomIndex]

  const btnClickHandler = (event) => {
    if (event.target.value === choosenColor) {
      setAnswer('correct')
      setCountCorrect((prevValue) => prevValue + 1)
    } else {
      setAnswer('wrong')
    }

    setCorrectAnswer(choosenColor)

    setTimeout(() => {
      setGameNum((prevValue) => prevValue + 1)
      setAnswer('Please guess hex color')
      setCorrectAnswer('')
    }, 4000)
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.randColor}
          style={{ backgroundColor: choosenColor }}
        ></div>
        <div className={styles.btnContainer}>
          <button
            onClick={btnClickHandler}
            className={styles.btn}
            value={colors[0]}
          >
            {colors[0]}
          </button>
          <button
            onClick={btnClickHandler}
            className={styles.btn}
            value={colors[1]}
          >
            {colors[1]}
          </button>
          <button
            onClick={btnClickHandler}
            className={styles.btn}
            value={colors[2]}
          >
            {colors[2]}
          </button>
        </div>
      </div>
    </>
  )
}

export default memo(MainContainer)
