import React from 'react'
import logo from '../assets/logo.jpeg'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";





const Navbar = () => {
    const user = false;
    return (
        <nav className="bg-white sticky top-0 z-50 px-8">
            <div className="flex justify-between items-center max-w-7xl h-25 ">
                <div>
                    <img src={logo} alt="Logo" className="w-25 h-25  " />

                </div>

                <div className="flex items-center ">
                    <ul className="flex font-medium items-center gap-11">
                        <li>Jobs Categories</li>
                        <li>Services</li>
                        <li>Training</li>
                        <li>Blogs</li>
                        <li>About US</li>
                        <li>Contact</li>


                    </ul>
                </div>
                <div>
                    {!user ? (
                        <div className="flex items-center gap-4 ">
                            <div className="flex items-center gap-6">

                                {/* Jobseeker */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="font-semibold text-base">
                                            For JobSeekers
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end" className="w-44">
                                        <DropdownMenuItem asChild>
                                            <Link to="/login" className="w-full">
                                                Login
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link to="/register" className="w-full">
                                                Register
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                {/* Employer */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="font-semibold text-base">
                                            For Employers
                                            <ChevronDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end" className="w-44">
                                        <DropdownMenuItem asChild>
                                            <Link to="/employer/login" className="w-full">
                                                Login
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link to="/employer/register" className="w-full">
                                                Register
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                        </div>
                    ) : (
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

        </nav>
    );
};

export default Navbar;