import React from "react";
import { Badge } from "./ui/badge";
import {
    MapPin,
    Building2,
    Clock3,
    Briefcase,
    Banknote,
} from "lucide-react";


const Jobcards = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6">

            {/* Company */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-cyan-600" />
                    </div>

                    <div>
                        <h2 className="font-bold text-lg text-gray-800">
                            Himalayan Bank Ltd.
                        </h2>

                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <MapPin className="w-4 h-4" />
                            Kathmandu, Nepal
                        </div>
                    </div>

                </div>

                <Badge className="bg-green-100 text-green-700 rounded-full px-3 py-1">
                    New
                </Badge>
            </div>

            {/* Job Title */}

            <div className="mt-6">
                <h1 className="text-xl font-bold text-gray-900">
                    Frontend React Developer
                </h1>
            </div>

            {/* Badges */}

            <div className="flex flex-wrap gap-3 mt-5">

                <Badge variant="outline" className="rounded-full">
                    Full Time
                </Badge>

                <Badge variant="outline" className="rounded-full">
                    Remote
                </Badge>

                <Badge variant="outline" className="rounded-full">
                    3 Vacancies
                </Badge>

            </div>

            {/* Job Details */}

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

                <div className="flex items-center gap-2 text-gray-600">
                    <Banknote className="w-4 h-4 text-cyan-600" />
                    NPR 80K - 120K
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4 text-cyan-600" />
                    2+ Years
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <Clock3 className="w-4 h-4 text-cyan-600" />
                    Posted 2 days ago
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="w-4 h-4 text-cyan-600" />
                    On-site
                </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-3 mt-7">

                <button className="flex-1 border border-cyan-500 text-cyan-600 py-2.5 rounded-xl font-semibold hover:bg-cyan-50 transition">
                    View Details
                </button>

                <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-xl font-semibold transition">
                    Apply Now
                </button>

            </div>

        </div>
    );
};

export default Jobcards;