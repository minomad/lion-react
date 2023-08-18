import { Outlet } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout(props) {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
