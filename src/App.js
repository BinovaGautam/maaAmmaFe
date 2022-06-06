import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RouterPage from './main-components/RouterPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterPage/>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
