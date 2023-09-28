import SigninForm from '@/app/components/SigninForm'
import React from 'react'

const SignIn = () => {
  return (
    <div className='flex flex-col gap-4'>
    <h1 className='text-3xl'>
      Sign in
    </h1>
    <SigninForm />
  </div>
  )
}

export default SignIn