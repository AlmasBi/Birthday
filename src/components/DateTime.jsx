import React, {useState,useEffect} from 'react';
import './DateTime.css';


function DateTime(){
  const [time,setTime] = useState(new Date());



useEffect(()=>{
 var timer = setInterval(()=>setTime(new Date()),1000);
 return function cleanup(){
    clearInterval(timer);
 } 
});


var startDate =new Date(`${time.getMonth()+1}/${time.getDate()}/2023`);

var endDate   =  new Date("09/04/2023");
var months = 0;
var days = 0;
var hours = 0;
var minutes=0;
var seconds =0;


if(endDate.getTime()-startDate.getTime()>0){
    if (endDate.getDate()>startDate.getDate()){
        months= endDate.getMonth()-startDate.getMonth();
        days= endDate.getDate()-startDate.getDate()-1;
      
    }else if(endDate.getDate()<startDate.getDate()){
        months= endDate.getMonth()-startDate.getMonth()-1;
        days= 30-startDate.getDate()+endDate.getDate();
    }else if(endDate.getDate()==startDate.getDate()){
        months= endDate.getMonth()-startDate.getMonth()-1;
        days=30-1;
    }
}else if(endDate.getTime()-startDate.getTime()<0){
    if (endDate.getDate()<startDate.getDate()){
        months= 12 + endDate.getMonth()-startDate.getMonth()-1;
        days= 30-startDate.getDate()+endDate.getDate();
    }else if(endDate.getDate()<startDate.getDate()){
        months= 12 + endDate.getMonth()-startDate.getMonth();
        days= endDate.getDate()-startDate.getDate();
    }else if(endDate.getDate()==startDate.getDate()){
        months= 12 + endDate.getMonth()-startDate.getMonth()-1;
       days=30-1;
    }
}
seconds=60-time.getSeconds()-1;
minutes=60-time.getMinutes()-1;
hours=24-time.getHours()-1;




    return (
        <div className='container'>
        <p className='container-title'>COUNTDOWN TO MY BIRTHDAY:</p>
            <div className='container-box'>
            <p className='container-number'>{months}</p>
            <p className='container-text'>MONTHS</p>
            </div>
            <div className='container-box'>
            <p className='container-number'>{days}</p>
            <p className='container-text'>DAYS</p>
            </div>
            <div className='container-box'>
            <p className='container-number'>{hours}</p>
            <p className='container-text'>HOURS</p>
            </div>
            <div className='container-box'>
            <p className='container-number'>{minutes}</p>
            <p className='container-text'>MINUTES</p>
            </div>
            <div className='container-box'>
            <p className='container-number'>{seconds}</p>
            <p className='container-text'>SECONDS</p>
            </div>
      
        </div>
    )
    }
export default DateTime;