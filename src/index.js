import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('£0,0.00');
console.log(`i would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
