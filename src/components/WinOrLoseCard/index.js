import './index.css'

const WinOrLoseCard = props => {
  const {restart, score} = props
  console.log(score)

  const playAgain = () => {
    console.log('play again')
    restart()
  }

  const h = score === 12 ? 'You Won' : 'You Lose'
  const s = score === 12 ? 'Best Score' : 'Score'
  const i =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="result-card col">
      <div>
        <h1>{h}</h1>
        <p>{s}</p>
        <p className="score-show">{score} / 12</p>
        <button className="again-button" onClick={playAgain} type="button">
          Play Again
        </button>
      </div>
      <img className="result-img" src={i} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
