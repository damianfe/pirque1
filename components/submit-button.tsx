import { FaPaperPlane } from "react-icons/fa"

export default function SubmitButton(){
    return(
<button
type="submit" 
className={`group focus:scale-110 active:scale-100 hover:scale-110 flex rounded-full justify-center bg-gray-900  hover:bg-gray-950 gap-2 items-center flex-row transition-all text-white font-bold focus:outline-none focus:shadow-outline w-[7.1rem] h-[2.6rem]`}> 

Enviar
<FaPaperPlane className="text-xs hover:translate-x-1 group-hover:translate-x-1"/>
</button>
    )
}