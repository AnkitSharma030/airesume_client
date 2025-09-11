'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function Login(){
  const router = useRouter();
const[formdata,setFormdata]=useState({
    email:"",
    password:""
});

const handleChange=(e)=>{
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
}
const handleLogin=async(e)=>{
    const res= await fetch ('/api/login',{
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formdata),
    })
      const data = await res.json();
      console.log("login data is: ", data);
      
    if (res.ok) {
      alert("✅ Login successful!");
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("userEmail", data.user.email);
      // localStorage.setItem("token", data.token);
      router.push('/dashboard')
    } else {
      alert("❌ " + data.error);
    }
}
    return (
       <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-200">
    {/* Title */}
    <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Welcome Back 👋</h2>
    <p className="text-gray-500 text-center mb-8">Login to continue</p>

    {/* Input fields */}
    <div className="flex flex-col space-y-4">
      <input
        className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formdata.email}
        onChange={handleChange}
      />
      <input
        className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        type="password"
         name="password"
        placeholder="Enter your password"
        value={formdata.password}
        onChange={handleChange}
      />
    </div>

    {/* Button */}
    <button onClick={handleLogin} className="w-full mt-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200">
      Login
    </button>

    {/* Extra links */}
    <div className="text-sm text-gray-500 text-center mt-4">
      <p>
        Don’t have an account?{" "}
        <a href="/signup" className="text-green-600 font-medium hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  </div>
</section>

    )
}