import React, { memo, useState } from 'react'

const Images = ({ imgNo, id, setSelectedImages, selectedImages }) => {
    console.log('Images.js')
    const [selected, setSelected] = useState(false)
    const style = selected ? 'selected' : ''

    const UniqueImgHandler = (src, id) => {
        for (const obj of selectedImages) {
            if (obj.id === id) {
                console.log('matched:::::::')
                return
            }
        }
        setSelectedImages(prev => {
            return [
                ...prev,
                { src, id }
            ]
        })
    }
    return (
        <img
            data-ns-test={`img${imgNo}`}
            className={`img-tile ${style} `}
            id={id}
            src={`/Images/${imgNo}.jpg`}
            onClick={(e) => {
                console.log(e.target.src, e.target.id)
                setSelected(true)
                for (const obj of selectedImages) {
                    if (obj.id === e.target.id) {
                        console.log('matched:::::::')
                        return
                    }
                }
                UniqueImgHandler(e.target.src, e.target.id)

            }}
            alt='icon'
        />
    )
}

export default memo(Images)