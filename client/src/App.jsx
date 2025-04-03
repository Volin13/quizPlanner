import React, { Suspense } from 'react';


import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// import store from './redux/store';

import HeaderBar from './components/bars/HeaderBar';
// import FooterBar from './components/bars/FooterBar';
import AppRouter from './components/AppRouter';
import MainLoader from './UI/Loader/Loader';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Suspense fallback={<MainLoader />}>
              <HeaderBar />
              <ToastContainer
                style={{ marginTop: '60px' }}
                position="top-right"
                newestOnTop={false}
                autoClose={5000}
                closeOnClick
                theme="dark"
              />
              <div className="mainSection" style={{ flex: 1 }}>

                <AppRouter />

              </div>
              {/* <FooterBar /> */}
            </Suspense>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;