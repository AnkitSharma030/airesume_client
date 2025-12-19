'use client'
import { useState, useEffect } from "react";
import { Dialog } from "../ui/dialog";
import { DialogContent } from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { DialogTitle } from "../ui/dialog";
import { DialogClose } from "../ui/dialog";
import { User, Mail, Activity, Phone, MapPin, Calendar } from "lucide-react";

export default function UserProfileModal({ open, setOpen }) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        scans: 0,
        phone: "+1 (555) 123-4567", // Demo field
        location: "San Francisco, CA", // Demo field
        accountCreated: "December 2024", // Demo field
        careerSuggestion: "sd;ogjsd",
    });

    useEffect(() => {
        // Fetch user data from localStorage
        const name = localStorage.getItem("userName") || "Unknown User";
        const email = localStorage.getItem("userEmail") || "user@example.com";
        const scans = localStorage.getItem("scanCount") || "0";

        setUserData(prev => ({
            ...prev,
            name,
            email,
            scans: parseInt(scans)
        }));
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 border-purple-500/30 text-white max-w-md max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                < DialogHeader >
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                        User Profile
                    </DialogTitle>
                </DialogHeader >

                {/* Profile Avatar */}
                < div className="flex justify-center my-4" >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <User className="w-12 h-12 text-white" />
                    </div>
                </div >

                {/* User Information */}
                < div className="space-y-4" >
                    {/* Name */}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <User className="w-5 h-5 text-blue-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Name</p>
                                <p className="font-semibold">{userData.name}</p>
                            </div>
                        </div>
                    </div >

                    {/* Email */}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-purple-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Email</p>
                                <p className="font-semibold text-sm break-all">{userData.email}</p>
                            </div>
                        </div>
                    </div >

                    {/* Scans */}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <Activity className="w-5 h-5 text-green-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Scans Used</p>
                                <p className="font-semibold">{userData.scans} / 10</p>
                            </div>
                        </div>
                    </div >

                    {/* career suggestion*/}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <User className="w-5 h-5 text-yellow-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Career Suggestion</p>
                                <p className="font-semibold">{userData.careerSuggestion}</p>
                            </div>
                        </div>
                    </div >

                    {/* Phone - Demo Field */}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-yellow-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Phone</p>
                                <p className="font-semibold">{userData.phone}</p>
                            </div>
                        </div>
                    </div >

                    {/* Location - Demo Field */}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-pink-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Location</p>
                                <p className="font-semibold">{userData.location}</p>
                            </div>
                        </div>
                    </div >

                    {/* Account Created - Demo Field */}
                    < div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300" >
                        <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-orange-300" />
                            <div className="flex-1">
                                <p className="text-sm text-blue-200">Account Created</p>
                                <p className="font-semibold">{userData.accountCreated}</p>
                            </div>
                        </div>
                    </div >
                </div >

                {/* Close Button */}
                < div className="flex justify-center mt-6" >
                    <DialogClose asChild>
                        <button className="px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                            Close
                        </button>
                    </DialogClose>
                </div >
            </DialogContent >
        </Dialog >
    );
}