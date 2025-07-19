import {useEffect, useRef, useState} from 'react';
import './App.css'
import {getMemos, saveMemo} from './repositories/MemoRepository.ts';

export const App = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const [memos, setMemos] = useState<string[]>([])

    useEffect(()=>{
        getMemos().then((res)=>{
            setMemos(res.memos)})
    }, [])

    return (
        <>
            <h1>memo app example</h1>
            <div className="input">
                <input ref={inputRef} type='text' placeholder='メモを入力'/>
                <label htmlFor="date-input">日付</label>
                <input ref={dateRef} id="date-input" type='date'/>
                <button onClick={async ()=>{
                    if(inputRef.current){
                        await saveMemo(inputRef.current.value)
                        const res = await getMemos()
                        setMemos(res.memos)
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
