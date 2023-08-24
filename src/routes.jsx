import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PassingProps from './learn/1-passing-props';
import LiftingStateUp from './learn/2-lifting-state-up';
import PropsDrillingIssue from './learn/3-props-drilling-issue';
import ReactContextAPI from './learn/4-react-context-api';
import RefExampleMemoValues from './learn/5-ref-1-memo-values';
import RefExampleReferencingDOM from './learn/6-ref-2-referencing-dom';
import GSAP_Animation from './learn/7-ref-3-gsap-animation';
import FramerMotion_Animation from './learn/8-framer-motion-declaration-animation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
      {/* 학습 주제 */}
      <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} />
      <Route path="learn/03" element={<PropsDrillingIssue />} />
      <Route path="learn/04" element={<ReactContextAPI />} />
      <Route path="learn/05" element={<RefExampleMemoValues />} />
      <Route path="learn/06" element={<RefExampleReferencingDOM />} />
      <Route path="learn/07" element={<GSAP_Animation />} />
      <Route path="learn/08" element={<FramerMotion_Animation />} />
    </Route>
  )
);

export default router;
