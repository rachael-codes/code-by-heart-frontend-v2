import PropTypes from "prop-types";
import CodeMirror from "@uiw/react-codemirror"
import 'codemirror/theme/yonce.css'
import './flashcard-front.styles.scss'

const FlashcardFront = ({ front, deleteFlashcard }) => {
  // console.log("flashcardFront:", front)
  let frontMsg = "";

  if (!front) {
    frontMsg = "You have no cards to review.";
  } else {
    frontMsg = front;
  }

  return (
    <div className="flashcard-front">
      <div>
        <CodeMirror className="code-mirror"
          value={frontMsg}
          options={{
              theme: 'yonce',
              indentUnit: 4,
              mode: 'python',
              lineNumbers: false,
            }}
          height="150px"
          width="320px"
          onChange={(editor) => {
            console.log('value:', editor.getValue());
          }}/>
      </div>
    </div>
  );
};

FlashcardFront.propTypes = {
  deleteFlashcard: PropTypes.func,
  front: PropTypes.string
};

export default FlashcardFront;