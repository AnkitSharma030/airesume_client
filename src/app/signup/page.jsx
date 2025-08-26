'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Signup(){
  const router=useRouter();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Signup successful!");
      localStorage.setItem("token", data.token);
            router.push('/login')

    } else {
      alert("❌ " + data.error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-200">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Welcome 👋</h2>
        <p className="text-gray-500 text-center mb-8 font-bold">Signup!!!!</p>

        <div className="flex flex-col space-y-4">
          <input
            type="text"  // ✅ fixed
            name="name"
            placeholder="Enter your name"
            value={formdata.name}
            onChange={handleChange}
            className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formdata.email}
            onChange={handleChange}
            className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formdata.password}
            onChange={handleChange}
            className="px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <button onClick={handleSignup} className="w-full mt-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200">
          Sign Up
        </button>

        <div className="text-sm text-gray-500 text-center mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
