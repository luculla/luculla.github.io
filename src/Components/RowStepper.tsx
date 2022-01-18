import React, { useMemo, useState } from "react";


interface RowStepperProps{
    rows:string[];
}
export default function RowStepper({rows}:RowStepperProps){
        const [rowIndex, setRowIndex] = useState<number>(0);
        function nextRow(){
            setRowIndex(rowIndex+1)
        }
        const canNext=useMemo(()=>{
            return rows.length && rowIndex < (rows.length -1)
        },[rowIndex,rows])
        function backRow(){
            setRowIndex(rowIndex-1)
        }
        const canPrev=useMemo(()=>{
            return rowIndex > 0
        },[rowIndex,rows])
        function homeRow(){
            setRowIndex(0)
        }
        return<>
        <div>{rows[rowIndex]}</div>
        <br/>
        <div className="row align-items-center">
            <div className="col d-grid"><button className="btn btn-secondary" onClick={backRow} disabled={!canPrev}>Previous<br/>Row</button></div>
            <div className="col">{rowIndex+1} / {rows.length}</div>
            <div className="col d-grid"><button className="btn btn-secondary" onClick={nextRow} disabled={!canNext}>&nbsp;&nbsp;Next&nbsp;&nbsp;<br/>Row</button></div>
        </div>
        <br/>
        <button className="btn btn-secondary" onClick={homeRow}>Restart</button>
        </>
    }