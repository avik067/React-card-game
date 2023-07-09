// Write your code here.

import './index.css'

const NavBar = props => {
  const {sc, tp} = props

  return (
    <nav className="nav row-space-between">
      <div className="row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      <div className="score-div row">
        <p className="score">Score: {sc}</p>
        <p className="score">Top Score: {tp}</p>
      </div>
    </nav>
  )
}

export default NavBar
