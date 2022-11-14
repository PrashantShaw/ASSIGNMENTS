import React, { memo, useState } from 'react'
import Images from './Images'

const RandomImages = ({ imgArr }) => {
    const [selectedImages, setSelectedImages] = useState([])
    const [isValidHuman, setIsValidHuman] = useState('')
    console.log('randomImages.js', selectedImages)
    let len = selectedImages.length

    function verificationHandler() {
        if (selectedImages[0].src === selectedImages[1].src
            && selectedImages[0].id !== selectedImages[1].id) {
            setIsValidHuman('Yes')
        }
        else setIsValidHuman('No')
    }
    return (
        <div>
            <div className='img-container'>
                {imgArr.map((imgNo, idx) => {
                    return (
                        <Images key={idx} imgNo={imgNo} id={idx + 1}
                            setSelectedImages={setSelectedImages}
                            selectedImages={selectedImages} />
                    )
                })}
            </div>

            <div className='btn-para'>
                {len === 0 &&
                    <p>Please click on the identical tiles to verify that you are not a robot and no</p>}
                {len >= 1 &&
                    <button id="reset" onClick={() => {
                        window.location.reload(false)
                    }}
                    >
                        Reset
                    </button>}
                {len === 2 &&
                    <button id="btn" onClick={verificationHandler} >Verify</button>}

                {len === 2 && isValidHuman === 'Yes'
                    && <p id="para">You are a human. Congratulations!</p>}
                {len === 2 && isValidHuman === 'No'
                    && <p id="para">We can't verify you as a human. You selected the non-identical tiles.</p>}

            </div>
        </div>
    )
}

export default memo(RandomImages)