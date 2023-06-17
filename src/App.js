import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Switch from '@mui/material/Switch';
import { Line } from "react-chartjs-2";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function App() {
  const [state, setState] = useState({})
  useEffect(() => {
    const functions = async () => {
      const fetching = await axios.get('http://localhost:3001/data')
      setState(fetching.data)
    }
    functions()
  }, [])
  return (
    <div className="App" >
      <div className='div-1'>
        <div className='logo-div'>
          <img className='images-logo' src='/assets/profit.png'></img> <span style={{ color: 'white', fontWeight: 'bold', marginTop: '.3em', marginLeft: '.3em' }}>InvestBank</span>
        </div>
        <div style={{ color: 'gray', borderBottom: '1px solid gray' }}></div>
        <div className='logo-div'>
          <img className='images-logo' src='/assets/dashboard.png'></img> <span style={{ color: 'white', marginTop: '.3em', marginLeft: '.3em' }}>Dashboard</span>
        </div>
        <div className='logo-div' >
          <img className='images-logo' src='/assets/analysis.png'></img> <span style={{ color: 'gray', marginTop: '.3em', marginLeft: '.3em' }}>Analytical</span>
        </div>
        <div className='logo-div' >
          <img className='images-logo' src='/assets/credit-card.png'></img> <span style={{ color: 'gray', marginTop: '.3em', marginLeft: '.3em' }}>Payments</span>
        </div>
        <div className='logo-div'>
          <img className='images-logo' src='/assets/bank.png'></img> <span style={{ color: 'gray', marginTop: '.3em', marginLeft: '.3em' }}>Deposits</span>
        </div>
        <div className='logo-div' >
          <img className='images-logo' src='/assets/shield.png'></img> <span style={{ color: 'gray', marginTop: '.3em', marginLeft: '.3em' }}>Securities</span>
        </div>
        <div style={{ marginTop: '2em', color: 'gray', borderBottom: '1px solid gray' }}></div>
        <div className='logo-div'>
          <img className='images-logo' src='/assets/question.png'></img> <span style={{ color: 'gray', marginTop: '.3em', marginLeft: '.3em' }}>Help</span>
        </div>
        <div className='logo-div'>
          <img className='images-logo' src='/assets/settings.png'></img> <span style={{ color: 'gray', marginTop: '.3em', marginLeft: '.3em' }}>Settings</span>
        </div>
      </div>
      <div className='div-2'>
        <div className='second-div'>
          <input placeholder='Search...' style={{ width: '20%', paddingLeft: '.5em', height: '2em' }}></input>
          <img className='images-logo' style={{ width: '2%' }} src='/assets/notification.png'></img>
        </div>
        <div style={{ color: 'gray', borderBottom: '1px solid gray' }}></div>
        <div className='hello'>
          <h1>Hello,</h1>
          <div style={{ marginLeft: '80%', marginTop: '1.5em' }}>
            <button className='btn'>Add Payment +</button>
            <img className='images-logo' style={{ width: '10%', marginLeft: '1em' }} src='/assets/more.png'></img>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '80%' }} >
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'row' }}>
              <div style={{ backgroundColor: 'white', padding: '1em', width: '27%', borderRadius: '.5em' }}>
                <p style={{ color: 'gray' }}>Total Income</p>
                <p style={{ fontWeight: 'bold' }}>${state.totalIncome}</p>
                <p style={{ color: 'gray' }}>from last week <img className='images-logo' style={{ width: '10%' }} src='/assets/rise.png'></img><span style={{ color: 'green' }}>+4.34%</span></p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1em', width: '27%', borderRadius: '.5em', marginLeft: '10px' }}>
                <p style={{ color: 'gray' }}>Total Expence</p>
                <p style={{ fontWeight: 'bold' }}>${state.totalExpence}</p>
                <p style={{ color: 'gray' }}>from last week <img className='images-logo' style={{ width: '10%' }} src='/assets/decrease.png'></img><span style={{ color: 'red' }}>+22.34%</span></p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1em', width: '27%', borderRadius: '.5em', marginLeft: '10px' }}>
                <p style={{ color: 'gray' }}>Total Savings</p>
                <p style={{ fontWeight: 'bold' }}>${state.savings}</p>
                <p style={{ color: 'gray' }}>from last week <img className='images-logo' style={{ width: '10%' }} src='/assets/rise.png'></img><span style={{ color: 'green' }}>+9.34%</span></p>
              </div>
            </div>
            <div style={{width:'87%',padding:'20px',backgroundColor:'white',marginLeft:'1em',borderRadius:'.5em'}}>
              <div>
                <span style={{fontWeight:'bold'}}>Wallet  </span>
                <span style={{ color: 'gray' }}>Cards | 1 out of 4</span>
                <img className='images-logo' style={{ width: '5%',marginLeft:'55%' }} src='/assets/left.png'></img>
                <img className='images-logo' style={{ width: '5%',marginLeft:'5%' }} src='/assets/arrow-right.png'></img>
              </div>
              <div style={{display:'flex',flexDirection:'row'}}>
                <div className='cards'>
                  <p>{state.card}</p>
                  <p style={{marginTop:'14%'}}>Card Number</p>
                  <p>{state.cardNum}</p>
                </div>
                <div style={{borderLeft:'1px solid gray',marginLeft:'5%'}}>
                </div>
                <div style={{padding:'1em',display:'flex',flexDirection:'column'}}>
                  <span style={{color:'gray'}}>Balance</span>
                  <span style={{fontWeight:'bold'}}>${state.balance}</span>
                  <span style={{color:'gray',marginTop:'2em'}}>Currency</span>
                  <span style={{fontWeight:'bold'}}>{state.dollar}</span>
                  <span style={{color:'gray',marginTop:'2em'}}>Deactiviate Card</span>
                  <span><Switch {...label} defaultChecked /></span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '.4em',width:'30%' }}>
            <span>Transactions </span>
            <span style={{ color: 'gray' }}>| upcoming </span>
            <span style={{ textDecoration: 'underline', marginLeft: '60px' }}>View</span>
            <div style={{marginTop:'1em',display:'flex',flexDirection:'row'}}>
              <img className='images-logo' style={{ width: '10%' }} src='/assets/netflix.png'></img>
              <div style={{marginLeft:'.4em',marginTop:'1em',display:'flex',flexDirection:'column'}}>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Netfilx</span>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Apr 25 2023 at 21.25</span>
              </div>
              <span style={{color:'red',marginLeft:'50px'}}>-$56.7</span>
            </div>
            <div style={{marginTop:'1em',display:'flex',flexDirection:'row'}}>
              <img className='images-logo' style={{ width: '10%' }} src='/assets/spotify.png'></img>
              <div style={{marginLeft:'.4em',marginTop:'1em',display:'flex',flexDirection:'column'}}>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Spotify</span>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Apr 25 2023 at 21.25</span>
              </div>
              <span style={{color:'green',marginLeft:'50px'}}>$256.7</span>
            </div>
            <div style={{marginTop:'1em',display:'flex',flexDirection:'row'}}>
              <img className='images-logo' style={{ width: '10%' }} src='/assets/figma.png'></img>
              <div style={{marginLeft:'.4em',marginTop:'1em',display:'flex',flexDirection:'column'}}>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>figma</span>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Apr 25 2023 at 21.25</span>
              </div>
              <span style={{color:'red',marginLeft:'50px'}}>-$26.7</span>
            </div>
            <div style={{marginTop:'1em',display:'flex',flexDirection:'row'}}>
              <img className='images-logo' style={{ width: '10%' }} src='/assets/shopify.png'></img>
              <div style={{marginLeft:'.4em',marginTop:'1em',display:'flex',flexDirection:'column'}}>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Shopify</span>
                <span style={{ color: 'gray',fontFamily:'monospace' }}>Apr 25 2023 at 21.25</span>
              </div>
              <span style={{color:'green',marginLeft:'50px'}}>$156.7</span>
            </div>
          </div>
        </div>
        {/* <div style={{width:'60%',backgroundColor:'red',padding:'20px'}}> */}
          {/* <Line/> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
