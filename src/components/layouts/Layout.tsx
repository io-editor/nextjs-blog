// import { Header, Footer } from '@src/component/layouts';
import { Header } from 'components/layouts/Header';
import { Footer } from 'components/layouts/Footer';
import Container from '@mui/material/Container';
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;