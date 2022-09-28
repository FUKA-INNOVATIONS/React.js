import React from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormGroup } from '@mui/material';
import Button from '@mui/material/Button';




interface FormInputs {
  userName: string
  password: number
}

const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string().max(16).min(8).required(),
}).required();

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <div style={{ padding: 30 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField placeholder='Username' {...register("userName")} />
          <p className='error'>{errors.userName?.message}</p>

          <TextField placeholder='Password' {...register("password")} />
          <p className='error'>{errors.password?.message}</p>

          <Button variant="outlined" type="submit">Sign in</Button>
        </FormGroup>
      </form>
    </div>
  );
}
