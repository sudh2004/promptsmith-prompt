import { Button, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Configuration, OpenAIApi } from 'openai';


function Prompt() {
  const llm = ['Chatgpt', 'Midjourney','Google Bard','Stable Diffusion'] 
  const content = ['BLOG','POLICY','NEWSLETTER','PROPOSAL','RESUME','SCRIPT','CASESTUDY','PRESSRELEASE','ADCOPY','DOCUMENT','PROFILE']
  const theam = ['NEUTRAL','PLAYFULL','EMPATHETIC','CRITICLE','URGENT','DRAMA','INSPERATIONAL','FUNNY','HUMOROUS','POETIC','AUTHORITATIVE']
  const length = ['Large','Small']
  const [llms, setllms] = useState('')
  const [contents,setcontents]=useState('')
  const [theams,settheams]=useState('')
  const [lengths,setlength]=useState('')
  const changingvalue = (event) =>
  {
    setllms(event.target.value)
    setcontents(event.target.value)
    settheams(event.target.value)
    setlength(event.target.value)
    setlength(event.target.value)
  }

  const [textFieldValues,setTextFieldValue] = useState('');
  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

    /* opening the prompts */
    const handler = async () => {
      const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);
      console.log("clicked")
      try {
        const completion1 = await openai.createCompletion({
          model: "text-davinci-003",
          prompt:  llms +' You are 20years old professional to design the prompt. Your are well known about the' +{textFieldValues} + 'Generating the prompt for the theam' +theams + 'and the content of prompt is the'+ contents+'prompt will be generate the prompt. the length of prompts will be genrerated as'+ lengths ,
          max_tokens : 200,
        });
        const completion2 = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: llms +' You are 20years old professional to design the prompt for the theam' +theams + 'and the content of prompt is the'+ contents+'prompt will be generate the prompt on'+ lengths +'word and prompt is' + textFieldValues,
          max_tokens : 200,
        });
        const completion3 = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: llms +' You are 20years old professional to design the prompt for the theam' +theams + 'and the content of prompt is the'+ contents+'prompt will be generate the prompt on'+ lengths +'word and prompt is' + textFieldValues,
          max_tokens : 200,
        });
        const completion4 = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: llms +' You are 20years old professional to design the prompt for the theam' +theams + 'and the content of prompt is the'+ contents+'prompt will be generate the prompt on'+ lengths +'word and prompt is' + textFieldValues,
          max_tokens : 200,
        });
        const completion5 = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: llms +' You are 20years old professional to design the prompt for the theam' +theams + 'and the content of prompt is the'+ contents+'prompt will be generate the prompt on'+ lengths +'word and prompt is' + textFieldValues,
          max_tokens : 200,
        });
        console.log("error")
        document.getElementById('dataanswer1').innerHTML = completion1.data.choices[0].text;
        document.getElementById('dataanswer2').innerHTML = completion2.data.choices[0].text;
        document.getElementById('dataanswer3').innerHTML = completion3.data.choices[0].text;
        document.getElementById('dataanswer4').innerHTML = completion4.data.choices[0].text;
        document.getElementById('dataanswer5').innerHTML = completion5.data.choices[0].text;
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
    }

  return (
    <div className='content'> 
   <div>
   <Typography variant='h4' className='heading'>
      AI Prompts By PromptSmith
    </Typography>
   </div>

    <div className='fieldsets-inline'>
    <div className='fieldset-prompt'>
    <Typography variant='h6' className='headings'>
      LLM
    </Typography>
   <select className='select'>
   {
      llm.map((llm)=><option className='options' value={llms} onChange={changingvalue}>{llm}</option>)
    }
   </select>
   </div>
      
    <div className='fieldset-prompt'>
    <Typography variant='h6' className='headings'>
      Content
    </Typography>
   <select className='select'>
   {
      content.map((content)=><option className='options' value={contents} onChange={changingvalue}>{content}</option>)
    }
   </select>
   </div>
   <div className='fieldset-prompt'>
    <Typography variant='h6' className='headings'>
      Theam
    </Typography>
   <select className='select'>
   {
      theam.map((theam)=><option className='options' value={theams} onChange={changingvalue}>{theam}</option>)
    }
   </select>
   </div>
   <div className='fieldset-prompt'>
    <Typography variant='h6' className='headings'>
      Length
    </Typography>
   <select className='select'>
   {
      length.map((length)=><option className='options' value={lengths} onChange={changingvalue}>{length}</option>)
    }
   </select>
   </div>
    </div>
    <div className='content-search'>
      <TextField placeholder='Search' className='search' multiline="true" value={textFieldValues}
        onChange={handleTextFieldChange}/>
    <Link to="/answer"><Button variant='contained' color='primary' startIcon={<SendIcon />} className='button' sx={{ml:2,color:'white',mt:3}} onClick={()=>handler()}></Button> </Link>
    </div>
   </div>
  )
}

export default Prompt
