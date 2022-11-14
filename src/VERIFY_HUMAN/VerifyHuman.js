import React from 'react'
import RandomImages from './RandomImages'
import useCustomHook from './useCustomHook'
import './style.css'

function VerifyHuman() {

    const [imgArr, shuffle] = useCustomHook()

    return (
        <div>
            <RandomImages shuffle={shuffle} imgArr={imgArr}/>
        </div>
    )
}

export default VerifyHuman