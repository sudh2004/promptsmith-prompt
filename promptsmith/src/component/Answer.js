import {Typography, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Answer() {
  /* answer */
  const textRef1 = useRef(null);
  const [customtextvalue1, setcustomtextref1] = useState('')
  const handleCopyClicks1 = () => {
    const textToCopy = textRef1.current.innerText;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert("your Promptsmith has been copied")
    console.log('Text copied to clipboard:', textToCopy);
    navigator.clipboard.writeText(customtextvalue1)
      .then(() => {
        alert('your Promptsmith has been copied ');
      })
      .catch((error) => {
        console.error('Failed to copy value:', error);
      });
  };
  /* answer */
  const textRef2 = useRef(null);
  const [customtextvalue2, setcustomtextref2] = useState('')
  const handleCopyClicks2 = () => {
    const textToCopy = textRef1.current.innerText;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert("your Promptsmith has been copied")
    console.log('Text copied to clipboard:', textToCopy);
    navigator.clipboard.writeText(customtextvalue2)
      .then(() => {
        alert('your Promptsmith has been copied ');
      })
      .catch((error) => {
        console.error('Failed to copy value:', error);
      });
  };
    /* answer */
    const textRef3 = useRef(null);
    const [customtextvalue3, setcustomtextref3] = useState('')
    const handleCopyClicks3 = () => {
      const textToCopy = textRef1.current.innerText;
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      alert("your Promptsmith has been copied")
      console.log('Text copied to clipboard:', textToCopy);
      navigator.clipboard.writeText(customtextvalue3)
        .then(() => {
          alert('your Promptsmith has been copied ');
        })
        .catch((error) => {
          console.error('Failed to copy value:', error);
        });
    };
      /* answer */
  const textRef4 = useRef(null);
  const [customtextvalue4, setcustomtextref4] = useState('')
  const handleCopyClicks4 = () => {
    const textToCopy = textRef1.current.innerText;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert("your Promptsmith has been copied")
    console.log('Text copied to clipboard:', textToCopy);
    navigator.clipboard.writeText(customtextvalue4)
      .then(() => {
        alert('your Promptsmith has been copied ');
      })
      .catch((error) => {
        console.error('Failed to copy value:', error);
      });
  };
    /* answer */
    const textRef5 = useRef(null);
    const [customtextvalue5, setcustomtextref5] = useState('')
    const handleCopyClicks5 = () => {
      const textToCopy = textRef1.current.innerText;
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      alert("your Promptsmith has been copied")
      console.log('Text copied to clipboard:', textToCopy);
      navigator.clipboard.writeText(customtextvalue5)
        .then(() => {
          alert('your Promptsmith has been copied ');
        })
        .catch((error) => {
          console.error('Failed to copy value:', error);
        });
    };
  return (
    <div className='content-answer'> 
      <>
     <Typography variant='h6' className='heading'>
      PromptSmith - Lettest AI Prompt
     </Typography>
     <div>
            <h3 className='prompts-answers'>Prompt 1:</h3>
            <p id='dataanswer1' ref={textRef1} className='loadinganswer' >Loading... Please Wait</p>
            <Button variant='contained' color='primary' endIcon={<ContentCopyIcon />} onClick={handleCopyClicks1} sx={{ ml: 40, height: 35,mt:3 }}>Copy</Button>

            <h3 className='prompts-answers'>Prompt 2:</h3>
            <p id='dataanswer2' ref={textRef2} className='loadinganswer' >Loading... Please Wait</p>
            <Button variant='contained' color='primary' endIcon={<ContentCopyIcon />} onClick={handleCopyClicks2} sx={{ ml: 40, height: 35 ,mt:3 }}>Copy</Button>

            <h3 className='prompts-answers'>Prompt 3:</h3>
            <p id='dataanswer3' ref={textRef3} className='loadinganswer' >Loading... Please Wait</p>
            <Button variant='contained' color='primary' endIcon={<ContentCopyIcon />} onClick={handleCopyClicks3} sx={{ ml: 40, height: 35,mt:3 }}>Copy</Button>
         
            <h3 className='prompts-answers'>Prompt 4:</h3>
            <p id='dataanswer4' ref={textRef4} className='loadinganswer' >Loading... Please Wait</p>
            <Button variant='contained' color='primary' endIcon={<ContentCopyIcon />} onClick={handleCopyClicks4} sx={{ ml: 40, height: 35,mt:3 }}>Copy</Button>

            <h3 className='prompts-answers'>Prompt 5:</h3>
            <p id='dataanswer5' ref={textRef5} className='loadinganswer' >Loading... Please Wait</p>
            <Button variant='contained' color='primary' endIcon={<ContentCopyIcon />} onClick={handleCopyClicks5} sx={{ ml: 40, height: 35 ,mt:3}}>Copy</Button>
          </div>
     <div>
      <Link to="/"><Button variant='contained' sx={{ml:20,mt:3}}>New Chat</Button></Link>
     </div>
     <div className='prompts-expert'>
     <Typography variant='h6' className='heading'>
      Customise Your Prompt By Expert
     </Typography>
    <Link href='https://api.whatsapp.com/send/?phone=%2B918826559303&text&type=phone_number&app_absent=0'><Button variant='outlined' sx={{ml:37,mt:3}}>PromptSmith Expert</Button></Link>
     </div>
     </>
    </div>
  )
}

export default Answer
