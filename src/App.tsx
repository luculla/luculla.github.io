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
      return patt.split("$")
  },[patt])
  return (
    <div className="App p-4">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="my-4">Welcome to PlaceMarker</div>
      </header>
      <div className="row"><div className="col">
        <br/>
        Enter your pattern below, delimiting each line with a "$"
        <br/>
        <br/>
        If you are using a word processor to edit your pattern into this format; you can "Find and replace" (ctrl + h) the line breaks by entering "^p" into the find box and "$" into the replace box.
        <br/>
        <br/>
        <textarea className="form-control" style={{height: "400px"}} value={patt} onChange={handlepatt}/>
        <br/>
        <RowStepper rows={rows}/>
        <br/>
        <a href='https://ko-fi.com/waywardfacets' target='_blank'><img height='35' style={{border:"0px",height:"46px"}} src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' alt='Buy Me a Coffee at ko-fi.com'/></a>
      </div></div>
    </div>
  );
}

export default App;
