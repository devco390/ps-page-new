import react from 'react';
import './Header.scss';

const PsHeader = () => {
  const redirectHome = () => {
    window.location.href = '/';
  };

  return (
    <header>
      <div
        className='ps-logo'
        onClick={redirectHome}
        itemScope
        itemType='http://schema.org/LocalBusiness'
      >
        <div>
          <h1 itemProp='name'>Printing Solutions</h1>
        </div>
        <div className='dots'>
          <div className='dot lightblue cyan'></div>
          <div className='dot lightblue yellow'></div>
          <div className='dot lightblue magenta'></div>
        </div>
      </div>
    </header>
  );
};

export default PsHeader;
