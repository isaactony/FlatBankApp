import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
     <Navbar />
     <Form list={list} setList={setList}/>
     <Table list={list}/>

    </div>
  );
}

export default App;
