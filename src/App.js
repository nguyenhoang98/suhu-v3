import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayOut from './components/AppLayOut/AppLayOut';
function App(props) {
  return (
    <Router>
      <AppLayOut />
    </Router>
  );
}

export default App;
