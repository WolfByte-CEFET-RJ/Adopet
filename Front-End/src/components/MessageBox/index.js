import React, {useState} from 'react'

import {
  MessageDiv,
  YourMessage,
  Time,
  Div,
} from './styles';


  export default function MessageBox(props){
    const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();

    const[hours, setHours] = useState(``);
    const[num, setNum] = useState(0);

    const MudarHora = ()=> {

      if(props.time == 'agora' && x==0){
        setNum(num++);
        MudarHora;
      }else{
        setInterval(setHours(`${hora}:${min}`),5000)
        props.time = hours;
      }

      return props.time;

    }
    return(
      <Div>
      <MessageDiv background={props.background} align={props.align}>
        <YourMessage >
        {props.text}
        </YourMessage>
      </MessageDiv>
      <Time timeAlign={props.align}>

      {`${hora}:${min}`}
      
      </Time>

      </Div>
    );
  }



  