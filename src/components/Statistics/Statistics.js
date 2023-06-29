import PropTypes from 'prop-types';

import {
  StatContainer,
  StatItem,
  StatText,
  StatNum,
} from './Statistics.styled';

export default function Statistics(props) {
  const arrOfKeysValues = Object.entries(props);

  return (
    <StatContainer>
      {arrOfKeysValues.map(([key, value]) => {
        return (
          <StatItem key={key}>
            <StatText>
              {key === 'positivePercentage' ? 'Positive feedback:' : key}
            </StatText>
            <StatNum>
              {key === 'positivePercentage' ? `${value}%` : value}
            </StatNum>
          </StatItem>
        );
      })}
    </StatContainer>
  );
}

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
