'use client'
import { useRouter } from "next/navigation";
export default function home(){
    const router=useRouter();
    const handleclick=()=>{
        router.push('/landingpage');
    };
    return (
        <div>
<div className="flex flex-col md:flex-row md:justify-between p-6 border md:border-amber-400 rounded-lg bg-red-200">
    <h1 className="text-black font-bold">welcome</h1>
    <p className="text-black font-bold"> Teaching you how can we make  things</p>
    </div>
<button onClick={handleclick} className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">Got to login</button>
    <div><img className="w-20 h-20 mt-4" src="\file.svg" alt="" /></div>
    </div>
    )
}