/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojiList: emojisList,
      clickedIdList: [],
      gameOver: false,
      top: 0,
      score: 0,
      win: false,
    }
  }

  storeId = idPassed => {
    const {clickedIdList, top, score} = this.state
    const a = top <= score ? score : top
    if (clickedIdList.length === 0) {
      this.setState(pre => ({
        clickedIdList: [...pre.clickedIdList, idPassed],
        score: pre.score + 1,
      }))
    } else {
      const result = clickedIdList.find(each => each === idPassed)

      if (result || result === 0) {
        this.setState(pre => ({
          top: a,
          gameOver: !pre.gameOver,
        }))
      } else if (clickedIdList.length === 11) {
        this.setState(pre => ({
          clickedIdList: [...pre.clickedIdList, idPassed],
          score: pre.score + 1,
          gameOver: !pre.gameOver,
          top: 12,
        }))
      } else {
        this.setState(pre => ({
          clickedIdList: [...pre.clickedIdList, idPassed],
          score: pre.score + 1,
        }))
      }
    }
  }

  restartGame = () => {
    const {top, score} = this.state
    const newTop = score > top ? score : top
    console.log(newTop)
    this.setState(pre => ({
      ...pre,
      clickedIdList: [],
      gameOver: !pre.gameOver,
      score: 0,
      top: newTop,
    }))
  }

  listRandom = () => {
    const {emojiList} = this.state
    emojiList.sort(() => Math.random() - 0.5)
    return emojiList
  }

  render() {
    const random = this.listRandom()
    const {score, top, gameOver, clickedIdList} = this.state

    let content
    if (!gameOver && clickedIdList.length <= 12) {
      content = (
        <ul className="main">
          <NavBar sc={score} tp={top} key="sd45" />
          <div className="middle row">
            <ul className="row">
              {random.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  trigger={this.storeId}
                />
              ))}
            </ul>
          </div>
        </ul>
      )
    } else {
      //   console.log('over')
      content = (
        <ul className="main">
          <div className="middle row">
            <ul className="row">
              <WinOrLoseCard
                score={score}
                restart={this.restartGame}
                key="e43"
              />
            </ul>
          </div>
        </ul>
      )
    }

    return content
  }
}

export default EmojiGame
