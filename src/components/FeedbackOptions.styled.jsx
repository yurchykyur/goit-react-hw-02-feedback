import styled from '@emotion/styled';

export const FeedbackContainer = styled.ul`
  display: flex;
  column-gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;

  padding: 0;

  list-style: none;
`;

export const FeedbackItem = styled.li`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
`;

export const FeedbackBtn = styled.button`
  width: 180px;
  padding: 20px 40px;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 30px;
  }

  :after,
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid #000;
    transition: transform 0.2s;
  }

  :after {
    transform: translate(3px, 3px);
  }

  :before {
    transform: translate(-3px, -3px);
  }

  :hover:after,
  :hover:before {
    transform: translate(0);
  }
`;
