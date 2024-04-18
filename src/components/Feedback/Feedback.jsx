export default function Feedback ({ feedback, totalFeedback, feedbackPercentage })  {
    return (
      <div>
        <ul>
          <li>Good: {feedback.good}</li>
          <li>Neutral: {feedback.neutral}</li>
          <li>Bad: {feedback.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {feedbackPercentage}%</li>
        </ul>
      </div>
    );
  };