import React, { useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import RowStepper from './Components/RowStepper';

function App() {
  const patternKey = "StoredPattern"
  const [patt, setPatt] = useState<string>(localStorage.getItem(patternKey)??"");
  function handlepatt(event:React.ChangeEvent<HTMLTextAreaElement>) {
    setPatt(event.target.value);
  }
  const rows=useMemo(()=>{
      return patt.split("$")
  },[patt])
  useEffect(()=>{
    localStorage.setItem(patternKey,patt)
  },[patt])
  return (
    <div className="App p-4">
      <header className="App-header">
        <div className="my-4">Welcome to PlaceMarker</div>
        <div className="row form-text justify-content-end w-100"><div className="col-auto">Last Updated: 18-Jan-2022</div></div>
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
        The pattern is stored locally on your device. If you clear your local storage, all data will vanish (and you may lose your place on your pattern)<br/>
        <a href='https://ko-fi.com/waywardfacets' target='_blank'><img height='35' style={{border:"0px",height:"46px"}} src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' alt='Buy Me a Coffee at ko-fi.com'/></a>
      </div></div>
    </div>
  );
}

export default App;
