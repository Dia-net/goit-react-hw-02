import css from "./Options.module.css";
function Options({ total, handleResetFeedback, updateFeedback }) {
    return (
      <div className="Options">
        <button className={css.buttonFeedback} onClick={() => updateFeedback('good')}>Good</button>
        <button className={css.buttonFeedback} onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button className={css.buttonFeedback} onClick={() => updateFeedback('bad')}>Bad</button>
        {total > 0 && (
          <button className={css.buttonFeedback} onClick={handleResetFeedback}>Reset</button>
        )}
      </div>
    );
  }
  
  export default Options;