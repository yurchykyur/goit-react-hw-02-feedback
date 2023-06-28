import PropTypes from 'prop-types';

import { ComponentsSection, SectionTitle } from './Section.styled';

/**
 * function that creates the markup for the component
 * @param {Props} props
 * @returns the generated markup for the component
 */
export default function Section({ title, children }) {
  return (
    <ComponentsSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </ComponentsSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
