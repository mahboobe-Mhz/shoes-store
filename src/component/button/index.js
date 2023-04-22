import { El } from "../../library/El";
const variants = {
    gray: ' bg-gray-300 text-gray-900  ',
    black: ' text-slate-100 w-full py-2 bg-black  hover:bg-gray-800',
 
  }
export const Button =({
    element ="button",
    child,
    classes,
    variant = 'gray',
    ...rest
})=>{
    return El({
        element,
        className: `${variants[variant]} ${classes} inline-block rounded-full py-1 px-4`,
        child,
        ...rest 
    })
}