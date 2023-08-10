/* eslint-disable react/prop-types */
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  return(
    <>
      <HeaderBar />
      <main>{props.children}</main>
      <FooterBar/>
    </>
  )
  // return [
  //   <HeaderBar key="header-bar" />, 
  //   <main key="main">{props.children}</main>, 
  //   <FooterBar key="footer-bar" />
  // ];
}

export default RootLayout;
