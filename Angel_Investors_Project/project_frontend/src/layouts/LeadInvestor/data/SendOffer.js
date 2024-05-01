import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SoftBox from 'components/SoftBox';
import SoftInput from 'components/SoftInput';
import SoftButton from 'components/SoftButton';
import SoftTypography from 'components/SoftTypography';
import SoftAlert from 'components/SoftAlert'; // Assuming you have a SoftAlert component

function SendOffer({ round, token }) {
  const [offerDetails, setOfferDetails] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleInputChange = (event) => {
    setOfferDetails(event.target.value);
  };

  const handleSendOffer = async () => {
    const postData = {
      round,
      post: offerDetails
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DJANGO_API}/startups/send-offer/`,
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          }
        }
      );
      setAlert({
        message: 'Your offer has been sent successfully.',
        type: 'success'
      });
      setOfferDetails('');  // Optionally clear the input after sending
    } catch (error) {
      console.error('Failed to send offer:', error);
      setAlert({
        message: 'Error sending offer: ' + (error.response?.data?.detail || 'Unexpected error occurred'),
        type: 'error'
      });
    }
  };

  return (
    <div>
      {alert.message && (
        <SoftAlert color={alert.type} dismissible onClose={() => setAlert({ message: '', type: '' })}>
          {alert.message}
        </SoftAlert>
      )}
      <SoftBox p={-5} px={1} display="flex" alignItems="center" gap={5}>
        <SoftInput
          pr={3} // Reduced padding right for spacing
          py={3}
          placeholder="Your offer details"
          icon={{ component: "message", direction: "left" }}
          multiline
          rows={3}
          value={offerDetails}
          onChange={handleInputChange}
        />
        <SoftButton color="info" size="small" variant="contained" onClick={handleSendOffer}>
          <SoftTypography variant="caption" color="light" px={-1}>
            Send Offer
          </SoftTypography>
        </SoftButton>
      </SoftBox>
    </div>
  );
}

SendOffer.propTypes = {
  round: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired
};

export default SendOffer;
