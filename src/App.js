import './App.css';

import Main from './pages/Main/Main';
import InputTest from './pages/InputTest/InputTest';
import CustomerInputTest from './pages/CustomerInputTest/CustomerInputTest';
import MyPage from './pages/MyPage/MyPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Main />}/>
        <Route path='/customerinputtest' element={<CustomerInputTest />} />
        <Route path='/inputtest' element={<InputTest />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;






