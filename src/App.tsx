import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import RowStepper from './Components/RowStepper';

function App() {
  const [patt, setPatt] = useState<string>("");
  function handlepatt(event:React.ChangeEvent<HTMLTextAreaElement>) {
    setPatt(event.target.value);
  }
  const rows=useMemo(()=>{
      return patt.split("|")
  },[patt])
  return (
    <div className="App p-4">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="mb-5">Welcome to PlaceMarker</div>
      </header>
      <div className="row"><div className="col">
        Enter your pattern below, delimiting each line with a "|" (pipe)
        <br/>
        <textarea className="form-control" style={{height: "400px"}} value={patt} onChange={handlepatt}/>
        <br/>
        <RowStepper rows={rows}/>
      </div></div>
    </div>
  );
}

export default App;
