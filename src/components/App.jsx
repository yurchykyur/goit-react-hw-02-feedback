import React, { Component } from 'react';

import Section from './FeeadbackForm/Section';
import FeedbackOptions from './FeeadbackForm/FeedbackOptions';
import Statistics from './FeeadbackForm/Statistics';
import Notification from './FeeadbackForm/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => {
      return { [opt]: prevState[opt] + 1 };
    });
  };

  countTotal = () => this.state.good + this.state.neutral + this.state.bad;

  countPositivePercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );

    return positivePercentage ? positivePercentage : 0;
  };

  makeArrOfOption = () => Object.keys(this.state);

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.makeArrOfOption()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotal() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

// export const App = () => {
//   // state = {
//   //   good: 0,
//   //   neutral: 0,
//   //   bad: 0,
//   // };

//   return (
//     <div>
//       <FeeadbackForm></FeeadbackForm>
//     </div>
//   );
// };
