import './index.css'

const WinOrLoseCard = props => {
  const {restart, score} = props
  console.log(score)

  const playAgain = () => {
    console.log('hi')
    restart()
  }

  const h = score === 12 ? 'You Won' : 'You Lose'

  return (
    <div className="result-card col">
      <div>
        <h1>{h}</h1>
        <p>Best Score</p>
        <p className="score-show">{score} / 12</p>
        <button className="again-button" onClick={playAgain} type="button">
          Play Again
        </button>
      </div>
      <img
        className="result-img"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="decor"
      />
    </div>
  )
}

export default WinOrLoseCard
