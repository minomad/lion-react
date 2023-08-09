/* eslint-disable react/prop-types */
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

function RootLayout(props) {
  console.log(props);
  return (
    <div>
      <HeaderBar />
      <main>{props.children}</main>
      <FooterBar />
    </div>
  );
}

export default RootLayout;
