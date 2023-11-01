import{useState} from 'react'
import './App.css'

export default function App(){
  const[minutes,setMinutes]= useState('00');
  const[seconds,setSeconds]= useState('00');
  const[mili,setMili] = useState('000');
  const[ligado, setLigado] = useState(false);

  function start() {

  }
  function pause(){

  }
  function reset(){

  }
  
  if(ligado){

  }

  return(
    <div>
      <div className="timer">
        <p>{`${minutes}:${seconds}:${mili}`}</p>
      </div>
      <div className="control">
        <button onClick={start} className='green'>start</button>
        <button onClick={pause} className='red'>pause</button>
        <button onClick={reset} className='yellow'>reset</button>
      </div>

    </div>
  );
}

