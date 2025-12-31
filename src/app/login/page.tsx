"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Login() {
  const login = async () => {
    try{
    await signInWithEmailAndPassword(
      auth,
      "prabakaran@gmail.com",
      "12345678",
    );
    alert('login success');
}catch(err:any){
    console.log(err.message);
    alert(err.message);
}
    
  };

  return <button color="blue" onClick={login}>Login</button>;
}
