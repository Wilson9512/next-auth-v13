"use client";

import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter();
  const { status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [messgae, setMessage] = useState('');

  const handleSubmit = async () => {
    setMessage('Signing up...');

    try {
      const signInResponse = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage('Invalid credentials');
      } else {
        router.refresh();
      }

    } catch (error) {
      console.log(error);
    }

    setMessage(messgae);
  };

  useEffect(() => {
    if (status === 'authenticated') {
      router.refresh();
      router.push('/');
    }
  }, [status]);


  return (
    <div className='flex flex-col gap-4 bg-gray-400 p-4'>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>
        Sign in
      </button>
      <p>{messgae}</p>
    </div>
  )
}

export default SignUpForm;