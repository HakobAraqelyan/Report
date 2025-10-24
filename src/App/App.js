import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRoute from '../AuthRoute/AuthRoute';
import Login from '../Auth/Login/Login';
import store from '../store';

import './App.scss'
import Registration from '../Auth/Registration/Registration';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Unit from '../Menu/Reports/Unit/Unit';
import Welcome from '../Welcome/Welcome';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword';

function App() {
  return (
    <Provider className="App" store={store}>
      <Router>
        <div className='Log-in'>
          <Routes>
            <Route
              path="/Login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
              />
          </Routes>
        </div>
        <div className='App-body'>
          <Routes>
            <Route
              path="/"
              element={
                <AuthRoute>
                  <div className='Log-in'>
                    <Login />
                  </div>
                </AuthRoute>
              }
              />
            <Route
              path="/Unit"
              element={
                <ProtectedRoute>
                  <Unit />
                </ProtectedRoute>
              }
              />
            {/* <Route
              path="/Document"
              element={
                <ProtectedRoute>
                  <Document />
                </ProtectedRoute>
              }
              /> */}
            {/* <Route
              path="/Checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
              /> */}
            {/* <Route
              path="/Products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
              /> */}
            {/* <Route
              path="/More"
              element={
                <ProtectedRoute>
                  <More />
                </ProtectedRoute>
              }
              /> */}
            {/* <Route
              path="BusinessList"
              element={
                <ProtectedRoute>
                  <BusinessList />
                </ProtectedRoute>
              } /> */}
            

            {/* <Route path="/About" element={<About />} /> */}
            {/* <Route path="/Contact" element={<Contact />} /> */}
            <Route path="/Registration" element={<Registration />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Welcome" element={<Welcome /> } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
