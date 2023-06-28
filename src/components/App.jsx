import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import AppName from './AppName';

import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /**
   * a function that updates the value of the state of the corresponding reviews by increasing it by +1
   * @param {Number} opt
   */
  onLeaveFeedback = opt => {
    this.setState(prevState => {
      return { [opt]: prevState[opt] + 1 };
    });
  };

  /**
   * a function that determines the total number of reviews
   * @returns the total number of reviews
   */
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };

  /**
   * the function determines the percentage of positive reviews
   * @returns  a numeric expression - the percentage of positive reviews or "0"
   */
  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return positivePercentage ? positivePercentage : 0;
  };

  render() {
    return (
      <AppContainer>
        <AppName title="Cafe Espresso costumer feedback" />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppContainer>
    );
  }
}
