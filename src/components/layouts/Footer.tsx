import { memo } from 'react';
import Copyright from 'src/components/utils//Copyright';

export const Footer = memo(() => {
  return (
    <footer>
      <Box>footer</Box>
      <Box><Copyright /></Box>
    </footer>
  );
});

export default Footer