import React, { useState } from 'react'
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  // const emailRef = useRef()
  // const passwordRef = useRef()
  // const passwordConfirmRef = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const { register } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (password !== passwordConfirm) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await register(email, password)
      history('/')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display='flex' flexDirection={'column'} maxWidth={400} alignItems='center' justifyContent={'center'} margin='auto' marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{ ':hover': { boxShadow: '10px 10px 20px #ccc', }, }}>
          {error && <Alert severity='error'>{error}</Alert>}
          <Typography>Register</Typography>
          <TextField id='email' margin='normal' type={'email'} variant='outlined' placeholder='email' onChange={(e) => setEmail(e.target.value)} required />
          <TextField id='password' margin='normal' type={'password'} variant='outlined' placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
          <TextField id='password-confirm' margin='normal' type={'password'} variant='outlined' placeholder='password confirm' onChange={(e) => setPasswordConfirm(e.target.value)} required />
          <Button disabled={loading} type='submit' sx={{ marginTop: 3, borderRadius: 3 }} variant='contained' color='warning'>Register</Button>
          <Typography sx={{ marginTop: 3, borderRadius: 3 }}>Already have an account?
            <Button sx={{ marginBottom: 0.5, borderRadius: 3 }}><Link to='/login'>Login</Link></Button>
          </Typography>
        </Box>
      </form>
    </div>
  )
}

export default Register;