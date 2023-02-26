import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const variableContent =
    total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <>
        <span>Good:{good}</span>
        <br />
        <span>Neutral:{neutral}</span>
        <br />
        <span>Bad:{bad}</span>
        <br />
        <span>Total:{total}</span>
        <br />
        <span>Positive feedback:{positivePercentage}%</span>
      </>
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
