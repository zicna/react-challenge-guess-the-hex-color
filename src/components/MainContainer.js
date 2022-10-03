import React, { useMemo, memo, useState } from 'react'
import styles from './main-container.module.css'
import { randHex } from '../helpers/helper'

const MainContainer = ({
  setAnswer,
  setGameNum,
  gameNum,
  setCountCorrect,
  setCorrectAnswer,
}) => {
  const [btnDisabled, setBtnDisabled] = useState(false)
  const color = useMemo(() => randHex(), [gameNum])
  const colors = useMemo(() => {
    return [color, randHex(), randHex()].sort(() => 0.5 - Math.random())
  }, [gameNum])

  const btnClickHandler = (event) => {
    setBtnDisabled(true)
    if (event.target.value === color) {
      setAnswer('correct')
      setCountCorrect((prevValue) => prevValue + 1)
    } else {
      setAnswer('wrong')
    }

    setCorrectAnswer(color)

    setTimeout(() => {
      setBtnDisabled(false)
      setGameNum((prevValue) => prevValue + 1)
      setAnswer('Please guess hex color')
      setCorrectAnswer('')
    }, 4000)
  }

  const btnsJSX = () => {
    return colors.map((color) => {
      return (
        <button
          className={styles.btn}
          onClick={btnClickHandler}
          value={color}
          disabled={btnDisabled}
          key={color}
        >
          {color}
        </button>
      )
    })
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.randColor}
          style={{ backgroundColor: color }}
        ></div>
        <div className={styles.btnContainer}>{btnsJSX()}</div>
      </div>
    </>
  )
}

export default memo(MainContainer)
