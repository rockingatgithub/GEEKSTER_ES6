const arr = [1, 1, 1, 2, 2, 3]
const newMap = new Map()
arr.forEach( ele => {

    if(newMap.has(ele)) {
        const count = newMap.get(ele)
        newMap.set(ele, count+1)
    } else {
        newMap.set(ele, 1)
    }
    
}  )