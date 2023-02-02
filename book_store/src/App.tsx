import React from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { CardsList } from './components/CardsList/CardsList';
import { Header } from './components/Header/Header';
import { IconHeart } from './components/Icon/IconHeart';
import { IconSearch } from './components/Icon/IconSearch';
import { IconUser } from './components/Icon/IconUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllCards } from './components/pages/AllCards';
import { SelectedBook } from './components/pages/SelectedBook';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/'>
            <Route index element={<AllCards/>}/>
            <Route path='book/:isbn13' element={<SelectedBook/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
