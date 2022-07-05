import { memo } from 'react';
import Copyright from 'components/utils/Copyright';

export const Footer = memo(() => {
  return (
    <footer>
      <Box>footer</Box>
      <Box><Copyright /></Box>
    </footer>
  );
});

export default Footer