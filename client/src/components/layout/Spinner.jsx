import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', marign: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};
