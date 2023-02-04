import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllCards } from './components/pages/AllCards';
import { SelectedBook } from './components/pages/SelectedBook';
import { SignIn } from './components/pages/SignIn';
import { SignUp } from './components/pages/SignUp';
import { ResetPass } from './components/pages/ResetPass';
import { NewPass } from './components/pages/NewPass';
import { Success } from './components/pages/Success';
import { Activation } from './components/Activation/Activation';
import { FavoriteBooks } from './components/pages/FavoriteBooks';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/'>
            <Route index element={<AllCards/>}/>
            <Route path='book/:isbn13' element={<SelectedBook/>}/>
            <Route path='favorite' element={<FavoriteBooks/>}/>
            <Route path='sign_in' element={<SignIn/>} />
            <Route path='sign_up' element={<SignUp/>} />
            <Route path='reset_pass' element={<ResetPass/>} />
            <Route path='new_pass' element={<NewPass/>} />
            <Route path='success' element={<Success/>} />
            <Route path='activate'>
                <Route path='*' element={<Activation/>}/>  
            </Route> 
          </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
