export const a11yRules = ['best-practice', 'wcag22aaa'];

export const axeConfig = {
  // From: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#axe-core-tags
  preload: true,
  runOnly: a11yRules,
};
