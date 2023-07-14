// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {details, trigger} = props
  const {id, emojiUrl, emojiName} = details

  const clicked = () => {
    console.log(id)
    trigger(id)
  }

  return (
    <li className="em-container row">
      <button type="button" className="emo-button" onClick={clicked}>
        <img className="emoj" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
