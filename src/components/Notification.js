import PropTypes from 'prop-types';

import { NotificationContainer, NotificationText } from './Notification.styled';

/**
 * function that creates the markup for the component
 * @param {Props} props
 * @returns the generated markup for the component
 */
export default function Notification({ message }) {
  return (
    <NotificationContainer>
      <NotificationText>{message}</NotificationText>
    </NotificationContainer>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
