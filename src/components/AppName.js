import PropTypes from 'prop-types';

import { AppTitle } from './AppName.styled';

/**
 * a function that, depending on the incoming data, forms a markup for rendering
 * @param {String} title
 * @returns  a markup to render or nothing to render
 */
export default function AppName({ title }) {
  return <>{title && <AppTitle>{title}</AppTitle>}</>;
}

AppName.propTypes = {
  title: PropTypes.string,
};
