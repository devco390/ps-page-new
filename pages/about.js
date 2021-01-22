import react from 'react';
import Main from '../Main/Main';

const PsLayout = () => {
  return (
    <div className='ps-container'>
      <div className='ps-container__wrapper'>
        <div className='ps-header'>{/* <ps-header></ps-header> */}</div>
        <div className='ps-banner'>{/* <ps-banner></ps-banner> */}</div>

        <div className='ps-main'>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default PSLayout;
