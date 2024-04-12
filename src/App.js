import logo from './logo.svg';
import './App.css';
import { FaClipboardList } from "react-icons/fa";
import { LC, SC, NC, UC } from './Password';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {

  // let w= "welcometows";
  // var t=w.length;
  // var random='';
  // for(var i=0; i<3; i++){
  //   random+=w[Math.floor(Math.random()*t)]
  // }

  // console.log(random)
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setlowercase] = useState(false)
  let [number, setNumbers] = useState(false)
  let [symbols, setSymbols] = useState(false)
  let [randompassword,setRandompassword]=useState('');
  let [txtlength,setTxtlength]=useState(10)

  let passwordCreate = () => {
    let passchar = ''
    if ((uppercase) || (lowercase) || (number) || (symbols)) {
      if (uppercase) {
        passchar += UC
      }

      if (lowercase) {
        passchar += LC
      }

      if (number) {
        passchar += NC
      }

      if (symbols) {
        passchar += SC
      }

      var t=passchar.length;
      let finalpassword = ''
      for(var i=0; i<txtlength; i++){
        finalpassword+=passchar.charAt(Math.floor(Math.random()*t))
      }

      console.log(finalpassword)
      setRandompassword(finalpassword)


      NotificationManager.success('Password generated successfully',"Succssfully", 5000, () => {
        alert('callback');
      });

    }
    else {
      NotificationManager.error('please check at least one check box', 'Error', 5000, () => {
        alert('callback');
      });
    }
  }
  return (
    <>
      <div className='password'>
        <h1>Password Generator</h1>

        <div className='input_section'>
         <div className='input'>{randompassword}</div>
          <button className='copy_button'><FaClipboardList /></button>
        </div>


        <ul>
          <li>Password length <input type='number' min={0} max={20} onChange={(event)=>setTxtlength(event.target.value) } className='char_input'   ></input></li>
          <li>Include Uppercase Letters <input type='checkbox' onChange={() => setUppercase(!uppercase)} checked={uppercase} name='uppercase'></input></li>
          <li>Include lowercase Letters <input type='checkbox' onChange={() => setlowercase(!lowercase)} checked={lowercase} name='uppercase'></input></li>
          <li>Include numbers  <input type='checkbox' name='number' onChange={() => setNumbers(!number)} checked={number}></input></li>
          <li>Include symbols <input type='checkbox' name='symbols' onChange={() => setSymbols(!symbols)} checked={symbols}></input></li>
        </ul>


        <button className='generate' id="generate"  onClick={passwordCreate}>Generate Password</button>
      </div>
      <NotificationContainer />
    </>
  );
}

export default App;
