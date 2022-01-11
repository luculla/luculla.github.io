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
        function homeRow(){
            setRowIndex(0)
        }
        return<>
        <div>{rows[rowIndex]}</div>
        <br/>
        <button className="btn btn-secondary" onClick={nextRow} disabled={!canNext}>Next Row</button>
        <br/>
        <button className="btn btn-secondary" onClick={homeRow}>Restart</button>
        </>
    }