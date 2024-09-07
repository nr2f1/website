// From https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
// Create <br> tag for new line in text
export const renderText = (text: string) => {
  return text
    .split('\n')
    .reduce((children: React.ReactNode[], textSegment, index) => {
      return children.concat(
        index > 0 && <br key={crypto.randomUUID()} />,
        textSegment,
      );
    }, []);
};
