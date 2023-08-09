import RootLayout from './layout/RootLayout';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Home />
      </RootLayout>
    </div>
  );
}
export default App;
