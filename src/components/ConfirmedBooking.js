import React from 'react';

const style = {
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'var(--secondary-font-fam)',
  fontSize: '40px',
  fontWeight: '700',
  color: '#495E57',
  textAlign: 'center',
};

export const ConfirmedBooking = () => {
  return <div style={style}> Your booking has been confirmed!</div>;
};
