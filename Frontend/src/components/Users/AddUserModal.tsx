"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userType } from "../../../slices/UserSlice";
import { AppDispatch, RootState } from "../../../store/store";

interface AddUserModalProps {
    setIsAddUserModal: (value: boolean) => void
   
  }

const AddUserModal: React.FC<AddUserModalProps> = ({setIsAddUserModal}) => {
    const [username, setUsername] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.user);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username.length && phone.length === 10) {
            const userData = {
                username,
                phone
            };
            dispatch(addUser(userData));
            setUsername("");
            setPhone("");
        }
    };

    return (
        <div className="absolute modal-container sm:px-0 px-6 inset-0 flex justify-center top-[100px]">
            <div className="w-[450px] rounded-lg bg-white border border-gray-300 shadow-lg h-max justify-center p-6">
                <div className="text-lg rounded-lg rounded-b-none flex justify-center shadow-md border-b-2 border-gray-300 bg-gradient-to-r from-blue-500 to-blue-600 py-2 font-semibold text-white">
                    <p>Create User</p>
                </div>
                <div className="flex-col space-y-6 flex items-center pb-10 pt-6">
                    {/* Container for inputs */}
                    <div className="flex-col flex space-y-4 items-start w-full">
                        {/* Username input */}
                        <div className="flex w-full space-x-2 items-center">
                            <label className="flex-shrink-0 w-1/3 text-left pr-2">Username:</label>
                            <div className="relative w-2/3">
                                <input 
                                    type="text" 
                                    required 
                                    value={username} 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} 
                                    placeholder="john@gmail.com" 
                                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                                />
                                <span className="absolute left-3 top-2 text-gray-500">👤</span>
                            </div>
                        </div>
                        {/* Phone input */}
                        <div className="flex w-full space-x-2 items-center">
                            <label className="flex-shrink-0 w-1/3 text-left pr-2">Phone:</label>
                            <div className="relative w-2/3">
                                <input 
                                    type="text" 
                                    required 
                                    value={phone} 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} 
                                    placeholder="+91" 
                                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                                />
                                <span className="absolute left-3 top-2 text-gray-500">📞</span>
                            </div>
                        </div>
                        {/* Error message */}
                        <div className="flex w-full justify-end">
                            <p className="text-red-500">{error}</p>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex w-full justify-between mt-6">
                        <button 
                            onClick={() => setIsAddUserModal(false)}  
                            className="border border-gray-400 bg-white hover:bg-gray-100 px-4 text-md rounded-md py-2 transition duration-200 w-1/3 shadow-sm"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}  
                            className="border border-gray-400 bg-gradient-to-r from-green-400 to-green-500 text-white px-6 text-md rounded-md py-2 transition duration-200 hover:from-green-500 hover:to-green-600 w-1/3 shadow-sm"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUserModal