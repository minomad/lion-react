import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from '@/contexts/Theme';
import AuthProvider from '@/contexts/Auth';
import router from './routes';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <div className="App">
            <RouterProvider router={router} />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
