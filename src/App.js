import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <>
      <div>
        <Toaster
          position='top-right'
          toastOptions={{
            succes: {
              theme: {
                primary: '#4aed88'
              }
            }
          }}
        >
        </Toaster>
      </div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/editor/:roomId' element={<EditorPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
