import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await axios.post(${process.env.NEXT_PUBLIC_API_URL}/register, { email, password });
      toast.success("Account created!");
      router.push("/login");
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-5">Register</h1>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 mb-4 w-full"/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 mb-4 w-full"/>
        <button onClick={handleRegister} className="bg-green-500 text-white p-2 w-full rounded">Register</button>
      </div>
    </div>
  );
}
