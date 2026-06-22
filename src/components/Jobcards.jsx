import React from 'react'
import { Badge } from './ui/badge'


const Jobcards = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white  border-[#1a487c] cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-2">
            <div>
                <h1 className="text-lg font-medium">Company Name</h1>
                <p className="text-md text-#9facb7">Nepal</p>
            </div>
            <div>
                <h2>Job Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="flex gap-2 items-center mt-4">
                <Badge className={"text-blue-600 font-bold rounded-full"} variant="outline">10 Position</Badge>
                <Badge className={"text-blue-600 font-bold rounded-full"} variant='outline'>20 lakh</Badge>
                <Badge className={"text-blue-600 font-bold rounded-full"} variant='outline'>Remote</Badge>
                <Badge className={"text-blue-600 font-bold rounded-full"} variant='outline'>Full Time</Badge>
            </div>
        </div>
    )
}

export default Jobcards