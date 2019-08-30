import React from 'react';
import './App.css';
import {Button, AppBar, Toolbar, IconButton} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <IconButton></IconButton>

      </AppBar>

      <Button variant="contained" color="primary" >primary</Button>
      <Button  variant="contained">normar</Button>

    </div>
  );
}

export default App;
