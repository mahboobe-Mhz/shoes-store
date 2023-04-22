
import publicAxios from "./publicAxios";


async function fetchShoes(end="shoes"){
    const res =await publicAxios(`${end}`)


return res
}
export {fetchShoes}

