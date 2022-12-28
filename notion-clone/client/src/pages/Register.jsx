import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { LoadingButton } from "@mui/lab";
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <><Box component="form">
      <TextField
        fullWidth
        id="username"
        label="username"
        margin="normal"
        name="username"
        required />
      <TextField
        fullWidth
        id="password"
        label="password"
        margin="normal"
        name="password"
        type="password"
        required />
      <TextField
        fullWidth
        id="confirmPassword"
        label="confirmPassword"
        margin="normal"
        name="ConfirmPassword"
        type="password"
        required />
      <LoadingButton
        sx={{ mt: 3, mb: 2 }}
        fullWidth
        type="submit"
        loading={false}
        color="primary"
        variant='outlined'
      >アカウント作成</LoadingButton>
    </Box><Button component={Link} to="/login">すでにアカウントを持っていますか？</Button></>
  )
}
