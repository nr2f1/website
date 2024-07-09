import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import { afterEach } from 'vitest';

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});
