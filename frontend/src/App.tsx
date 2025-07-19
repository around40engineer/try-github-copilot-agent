import {useEffect, useRef, useState} from 'react';
import './App.css'
import {getMemos, saveMemo} from './repositories/MemoRepository.ts';

export const App = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [memos, setMemos] = useState<string[]>([])
    const [date, setDate] = useState<string>('')

    useEffect(()=>{
        getMemos().then((res)=>{
            setMemos(res.memos)})
    }, [])

    return (
        <>
            <h1>memo app example</h1>
            <div className="date-input">
                <label htmlFor="date">日付</label>
                <input 
                    id="date"
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="input">
                <input ref={inputRef} type='text' placeholder='メモを入力'/>
                <button onClick={async ()=>{
                    if(inputRef.current){
                        await saveMemo(inputRef.current.value)
                        setMemos([...memos, inputRef.current.value])
                        inputRef.current.value = ''
                    }
                }}>save</button>
            </div>
            <div className="display">
                <ul>
                    {memos.map((memo, index)=>{
                        return <li key={index}>{memo}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default App
