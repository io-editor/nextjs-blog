import { Header, Footer } from '@src/component/layouts';
import Container from '@mui/material/Container';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </>
  );
}