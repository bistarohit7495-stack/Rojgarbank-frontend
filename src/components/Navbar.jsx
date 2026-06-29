import React, { useState } from 'react';
import logo from '../assets/logoo.jpeg';
import { LogOut, User, ChevronDown, Menu, X, Briefcase, Settings, BookOpen, Building2, Code, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

// Jobs Categories dropdown items
const jobCategories = [
    { label: 'IT & Technology', to: '/jobs/it', icon: Code },
    { label: 'Banking & Finance', to: '/jobs/banking', icon: Building2 },
    { label: 'Marketing', to: '/jobs/marketing', icon: Megaphone },
    { label: 'Engineering', to: '/jobs/engineering', icon: Settings },
    { label: 'Education', to: '/jobs/education', icon: BookOpen },
    { label: 'Business & Management', to: '/jobs/business', icon: Briefcase },
];

// Services dropdown items
const services = [
    { label: 'Resume Builder', to: '/services/resume', icon: BookOpen },
    { label: 'Career Counseling', to: '/services/counseling', icon: User },
    { label: 'Job Placement', to: '/services/placement', icon: Briefcase },
    { label: 'Skill Assessment', to: '/services/assessment', icon: Settings },
];

// Simple links (no dropdown)
const simpleLinks = [
    { label: 'Training', to: '/training' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
    const user = false;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <img src={logo} alt="Logo" className="h-20 w-auto object-contain -translate-x-8" />
                </Link>


                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex items-center gap-7">

                    {/* Jobs Categories — dropdown */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 text-md font-medium text-black hover:text-cyan-600 transition-colors select-none outline-none">
                                    Jobs Categories <ChevronDown className="h-3.5 w-3.5" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56 rounded-xl shadow-lg p-1">
                                {jobCategories.map(({ label, to, icon: Icon }) => (
                                    <DropdownMenuItem key={label} asChild>
                                        <Link to={to} className="flex items-center gap-2.5 text-sm text-black hover:text-cyan-600 px-3 py-2 rounded-lg">
                                            <Icon className="w-4 h-4 text-cyan-500" />
                                            {label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    {/* Services — dropdown */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 text-md font-medium text-black hover:text-cyan-600 transition-colors select-none outline-none">
                                    Services <ChevronDown className="h-3.5 w-3.5" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-52 rounded-xl shadow-lg p-1">
                                {services.map(({ label, to, icon: Icon }) => (
                                    <DropdownMenuItem key={label} asChild>
                                        <Link to={to} className="flex items-center gap-2.5 text-sm text-black hover:text-cyan-600 px-3 py-2 rounded-lg">
                                            <Icon className="w-4 h-4 text-cyan-500" />
                                            {label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    {/* Simple links */}
                    {simpleLinks.map(({ label, to }) => (
                        <li key={label}>
                            <Link to={to} className="text-md font-medium text-black hover:text-cyan-600 transition-colors duration-150">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side: auth buttons OR avatar */}
                <div className="hidden lg:flex items-center translate-x-15 gap-4">
                    {!user ? (
                        <div className="flex items-center gap-3">
                            {/* For JobSeekers */}
                            <DropdownMenu onOpenChange={(open) => setOpenDropdown(open ? 'jobseeker' : null)}>
                                <DropdownMenuTrigger className="text-sm font-semibold text-gray-700 rounded-full hover:text-cyan-600 select-none outline-none flex items-center gap-1 px-4 py-2">
                                    For JobSeekers
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === 'jobseeker' ? 'rotate-180' : ''}`} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-44 rounded-xl shadow-lg">
                                    <DropdownMenuItem asChild>
                                        <Link to="/login" className="w-full text-sm">Login</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/register" className="w-full text-sm">Register</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* For Employers */}
                            <DropdownMenu onOpenChange={(open) => setOpenDropdown(open ? 'employer' : null)}>
                                <DropdownMenuTrigger className="text-sm font-semibold bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-5 select-none outline-none flex items-center gap-1 py-2">
                                    For Employers
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === 'employer' ? 'rotate-180' : ''}`} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-44 rounded-xl shadow-lg">
                                    <DropdownMenuItem asChild>
                                        <Link to="/login" className="w-full text-sm">Login</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/register" className="w-full text-sm">Register</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-cyan-400 transition">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-72 rounded-2xl shadow-xl p-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Rudra</p>
                                        <p className="text-xs text-gray-500 leading-snug">Frontend Developer, Kathmandu</p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 mb-3" />
                                <div className="flex flex-col gap-1">
                                    <Link to="/profile" className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 px-2 py-1.5 rounded-lg hover:bg-cyan-50 transition-colors">
                                        <User className="w-4 h-4" /> Profile
                                    </Link>
                                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 px-2 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                                        <LogOut className="w-4 h-4" /> Logout
                                    </button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2 mb-1">Jobs Categories</p>
                    {jobCategories.map(({ label, to, icon: Icon }) => (
                        <Link key={label} to={to} onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 py-1.5">
                            <Icon className="w-4 h-4 text-cyan-500" />{label}
                        </Link>
                    ))}

                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-3 mb-1">Services</p>
                    {services.map(({ label, to, icon: Icon }) => (
                        <Link key={label} to={to} onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 py-1.5">
                            <Icon className="w-4 h-4 text-cyan-500" />{label}
                        </Link>
                    ))}

                    <div className="border-t border-gray-100 mt-3 pt-3 flex flex-col gap-1">
                        {simpleLinks.map(({ label, to }) => (
                            <Link key={label} to={to} onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-gray-600 hover:text-cyan-600 py-1.5">
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 mt-3 pt-3 flex flex-col gap-2">
                        <Link to="/login" className="text-sm font-medium text-gray-700">JobSeeker Login</Link>
                        <Link to="/register" className="text-sm font-medium text-gray-700">JobSeeker Register</Link>
                        <Link to="/employer/login" className="text-sm font-medium text-cyan-600">Employer Login</Link>
                        <Link to="/employer/register" className="text-sm font-medium text-cyan-600">Employer Register</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;