import { configureAxe } from 'jest-axe';
import { axeConfig } from './config';

const axe = configureAxe({
  ...axeConfig,
});

export default axe;
