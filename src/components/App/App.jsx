import React, { useState, useEffect } from 'react';
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notifications/Notifications";
import css from "./App.module.css"

const stateFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
export default function App (){
    const [feedback, setFeedback] = useState(() => {
        const feedbackSave= localStorage.getItem("feedback");
        const setFeedback = JSON.parse(feedbackSave) ?? stateFeedback;
        return setFeedback;
      });
    
      const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    
      const feedbackPercentage =
        totalFeedback > 0
          ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
          : 0;
    
      const handleResetFeedback = () => {
        setFeedback(stateFeedback);
      };
    
      const updateFeedback = (feedbackType) => {
        setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
      };
    
      useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
      }, [feedback]);
    
      return (
        <div className={css.container}>
          <Description />
    
          <Options
            total={totalFeedback}
            handleResetFeedback={handleResetFeedback}
            updateFeedback={updateFeedback}
          />
    
          {totalFeedback > 0 ? (
            <Feedback
              feedback={feedback}
              totalFeedback={totalFeedback}
             feedbackPercentage={feedbackPercentage}
            />
          ) : (
            <Notification />
          )}
        </div>
      );
    }
