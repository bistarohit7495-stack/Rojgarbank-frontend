import Navbar from './Navbar'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Register = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
    fullname: '',
    file: '',
    phonenumber: '',
  });
  const changeEventHandler = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value
    });
  }
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <Navbar> </Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-sky-600 border-2 p-5 rounded-md p-4 m-10">

          <h1 className="font-bold text-xl mb-5 text-center text-sky-600">Register</h1>

          <div className="my-2">
            <Label>FullName</Label>
            <Input type="text" value={input.fullname} onChange={changeEventHandler} name="fullname" placeholder="Enter your name" />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" value={input.email} onChange={changeEventHandler} name="email" placeholder="xyz@abc.com" />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" value={input.password} onChange={changeEventHandler} name="password" placeholder="**********" />
          </div>

          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="tel" value={input.phonenumber} onChange={changeEventHandler} name="phonenumber" placeholder="+977-1234567890" />
          </div>

          <div className="flex items-center justify-between ">
            <RadioGroup className="flex items-center gap-4 my-5">

              <div className="flex items-center space-x-3">
                <Input type="radio"
                  name="role"
                  value="Seeker"
                  checked={input.role === 'Seeker'}
                  onChange={changeEventHandler}
                  className="cursor-pointer" />
                <Label htmlFor="r1">Seeker</Label>
              </div>

              <div className="flex items-center space-x-3">
                <Input type="radio"
                  name="role"
                  value="Employee"
                  checked={input.role === 'Employee'}
                  onChange={changeEventHandler}
                  className="cursor-pointer" />
                <Label htmlFor="r2">Employee</Label>
              </div>
            </RadioGroup>

          </div>
          <div className="flex items-center gap-2">
            <Label>Profile Picture</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="cursor-pointer" />
          </div>
          <button type="submit" className="bg-sky-600 my-3 hover:bg-sky-800 mt-5 rounded-md block w-full font-semibold">Register</button>

          {/* Already have an account? */}
          <p className="text-md text-center text-gray-500 my-2">Already have an account?
            <Link to="/login" className="text-sky-600 hover:underline font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register