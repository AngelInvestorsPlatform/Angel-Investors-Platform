import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftBox from "components/SoftBox";



const CountdownTimer = ({ deadline }) => {
  const [daysLeft, setDaysLeft] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();
      const difference = deadlineTime - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        if (days > 7) {
          setDaysLeft(new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
          setTextColor('light'); // or set your desired color for more than 7 days
        } else if (days > 1) {
          setDaysLeft(`${days} days left`);
          setTextColor('warning'); // set color for more than 1 day
        } else if (days === 1) {
          setDaysLeft('1 day left');
          setTextColor('warning'); // set color for 1 day
        } else {
          setDaysLeft('Less than 1 day');
          setTextColor('error'); // set color for less than 1 day
        }
      } else {
        setDaysLeft('Deadline passed');
        setTextColor('secondary'); // set color for passed deadline
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <SoftBox>
      <SoftBadge variant="contained" badgeContent={daysLeft} color={textColor} size="xs" container />
    </SoftBox>
  );
};

CountdownTimer.propTypes = {
  deadline: PropTypes.string.isRequired,
};

export default CountdownTimer;