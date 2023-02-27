import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { Info, List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const variableContent =
    total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <List>
        <Info>Good: {good}</Info>

        <Info>Neutral: {neutral}</Info>

        <Info>Bad: {bad}</Info>

        <Info>Total: {total}</Info>

        <Info>Positive feedback: {positivePercentage}%</Info>
      </List>
    );

  return (
    <>
      <h1>Statistics</h1>
      {variableContent}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
