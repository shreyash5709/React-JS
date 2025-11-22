import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authenticationService from './appwrite/authentication';
import { login, logout } from './store/authenticationSlice';  
import { Header, Footer } from './components';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authenticationService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
