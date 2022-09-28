import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    // const interValueRef = useRef<number | undefined>(undefined)
    const interValueRef = useRef<number | null>(null)

    const stopTimer = () => {
        interValueRef.current && window.clearInterval(interValueRef.current)
        // window.clearInterval(interValueRef.current)
    }

    useEffect(() => {
        interValueRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        return () => stopTimer()
    }, [])
    
    return (
        <div style={{padding: 30}}>
            Hook timer {timer}
            <button style={{marginLeft: 20}} onClick={() => stopTimer()}>Stop timer</button>
        </div>
    )
}