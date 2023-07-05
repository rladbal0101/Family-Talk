import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Calendar from './pages/Calendar';
import Photo from './pages/Photo';

import Members from './pages/Members';
import WritePhoto from './components/photo/WritePhoto';

import EditPhoto from './components/photo/EditPhoto';

import LogIn from './pages/LogIn';
import AuthCheck from './components/AuthCheck';
import SignUp from './pages/SignUp';



const GlobalStyled = createGlobalStyle`
  ${reset}
  
  body {
    /* margin-top: 100px; */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'GmarketSansMedium';
    /* background-color: #e9ecef; */
  }
  
  * {
    font-size: 14px;
    /* user-select: none; */
  }

  .show-content {
    /* padding: 20px; */
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    /* 스크롤 커스텀 */
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
      cursor: pointer;
    }
  }

  .cursor-point {
    cursor: pointer;
  }

  .inner {
    width: 900px;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  `;

const Wrapper = styled.div`
    width: 900px;
    /* height: 850px; */
  `;

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Wrapper>
          <Routes>
            <Route path='/' element={<AuthCheck><Layout /></AuthCheck>}>
              <Route index element={<Main />} />
              <Route path='/members' element={<Members />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/photo' element={<Photo />} />
              <Route path='/writePhoto' element={<WritePhoto />} />
              <Route path='/editPhoto/:editPhotoId' element={<EditPhoto />} />
            </Route>
            <Route path='/login' element={<LogIn />} />
            <Route path='/SignUp' element={<SignUp />} />
          </Routes>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;

// 가짜 Api 주소
// https://my-json-server.typicode.com/evejin9/db-familyTalk/db

