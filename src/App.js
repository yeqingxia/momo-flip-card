import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import shuffle from './utilities/shuffle';
import Card from "./components/Card";
import Header from './components/Header';


function App() {
  const [cards, setCards] = useState(shuffle)
  const [pickOne, setPickOne] = useState(null)
  const [pickTwo, setPickTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [wins, setWins] = useState(0)

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card)
    }
    console.log('handleClick');
  }

  const handleTurn = () => {
    setPickOne(null)
    setPickTwo(null)
    setDisabled(false)
  }

  const handleNewGame = () => {
    handleTurn()
    setCards(shuffle)
  }

  useEffect(() => {
    let pickTimer
    if (pickOne && pickTwo) {
      if (pickOne.image === pickTwo.image) {
        setCards((preCards) => {
          return preCards.map((card) => {
            if (card.image === pickOne.image) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        handleTurn();
      } else {
        setDisabled(true)
        pickTimer = setTimeout(() => {
          handleTurn()
        }, 1000);
      }

    }
    return () => {
      clearTimeout(pickTimer)
    }
  }, [cards, pickOne, pickTwo])

  useEffect(() => {
    const checkWin = cards.filter((card) => !card.matched)
    if (cards.length && checkWin.length < 1) {
      setWins(wins + 1)
      handleTurn()
      setCards(shuffle)
    }

  }, [cards, wins])

  return (
    <>
      <Header wins={wins} handleNewGame={handleNewGame} />
      <div className='grid'>
        {cards.map((card) => {
          return <Card
            key={card.id}
            image={card.image}
            selected={card === pickOne || card === pickTwo || card.matched}
            onClick={() => { console.log("click"); handleClick(card) }}
          />
        })}
      </div>
    </>
  );
}

export default App;
