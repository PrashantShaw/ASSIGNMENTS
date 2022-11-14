
function useCustomHook() {
    console.log('useCustomHooks.js')
    const imgArr = [1, 2, 3, 4, 5]
    function shuffle(imgArr = [1, 2, 3, 4, 5]) {
        // generating a random no. copy
        let k = Math.floor(Math.random() * 5)
        imgArr.push(imgArr[k])

        for (let i = imgArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swapping
            [imgArr[i], imgArr[j]] = [imgArr[j], imgArr[i]];
        }
    }
    shuffle(imgArr)
    console.log(imgArr)
    return (
        [
            imgArr,
            shuffle
        ]
    )
}

export default useCustomHook