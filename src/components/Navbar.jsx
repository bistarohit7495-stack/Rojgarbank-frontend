import React from 'react'
import logo from '../assets/logo.jpeg'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';





const Navbar = () => {
const user= false; 
  return (
    <div className="bg-white">
        <div className="flex justify-between items-center mx-auto max-w-7xl h-25 ">
            <div>
                <img src={logo}  alt="Logo" className="w-33 h-33" />

            </div>

            <div className="flex items-center ">
                <ul className="flex font-medium items-center gap-11">
                    <li>Home</li>
                    <li>Jobs Categories</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                {!user ? (
                    <div className="flex items-center gap-4 ">
                        <Link to="/login"><Button variant="outline">Login</Button></Link>
                        <Link to="/register"><Button className="bg-sky-600 hover:bg-sky-800">Register</Button></Link>
                    </div>
                )   :   (
                     <Popover>
                    <PopoverTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 ">
                       <div className="flex items-center gap-4 space-y-2">
                         <Avatar className="cursor-pointer">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            </Avatar>
                            <div>
                                <h3 className="font-medium">Rohit Bista</h3>
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                </p>
                            </div>      
                        </div>
                        <div className="flex flex-col my-2 text-gray-600 ">
                            <div className="flex w-fit items-center gap-2 cursor-pointer"> 
                                <User></User>
                                <Button variant="link">Profile</Button>
                            </div>
                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                <LogOut></LogOut>
                                <Button variant="link">Logout</Button>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>  
                    )
                } 

               


            </div>
        </div>

    </div>
  );
};

export default Navbar;