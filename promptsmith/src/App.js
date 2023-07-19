import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Prompt from './component/Prompt';
import Answer from './component/Answer';
import './App.css';
import { Typography } from '@mui/material'
import { red } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
 <Router>
  <Routes>
    <Route path="*" element={<Prompt />} />
    <Route path="/answer" element={<Answer />} />
  </Routes>
 </Router>
 <div className='algo'>
      <Typography variant='h6' component="h6" color={red}>
        -Powered by Algohype
      </Typography>
      </div>
    </div>
  );
}

export default App;
