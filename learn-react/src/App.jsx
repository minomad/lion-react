import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <RootLayout>
        <Home />
      </RootLayout>
    </div>
  );
}
export default App;
