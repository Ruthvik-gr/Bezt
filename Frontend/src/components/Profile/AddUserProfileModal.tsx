"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userType } from "../../../slices/UserSlice";
import { AppDispatch, RootState } from "../../../store/store";
import { createProfile } from "../../../slices/ProfileSlice";

interface AddUserProfileModalProps {
    setIsAddUserProfileModal: (value: boolean) => void;
    id:string
   
  }

const AddUserProfileModal: React.FC<AddUserProfileModalProps> = ({setIsAddUserProfileModal, id}) => {
    const [email, setEmail] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [pincode, setPincode] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const { profileError } = useSelector((state: RootState) => state.profile)


    const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        if(email.length && gender.length && address.length && pincode.length && city.length && 
            state.length && country.length
        ){
            const userData = {
                userId : id, email, gender, address, pincode, city, state, country
                
            }
            dispatch(createProfile(userData)) 
            setEmail('') 
            setGender('') 
            setPincode('') 
            setAddress('') 
            setState('') 
            setCity('') 
            setCountry('') 
        }
        
       
    }
  return (
    <div className="absolute modal-container sm:px-0 px-6 inset-0 flex justify-center top-[100px]">
        <div className="w-[450px] rounded-lg bg-white border border-gray-300 shadow-lg h-auto justify-center p-6">
            <div className="text-lg rounded-lg rounded-b-none flex justify-center shadow-md border-b-2 border-gray-300 bg-gradient-to-r from-blue-500 to-blue-600 py-2 font-semibold text-white">
                <p>Create User Profile</p>
            </div>
            <div className="flex-col space-y-6 flex items-center pb-10 pt-6">
    {/* Container for inputs */}
    <div className="flex-col pl-5 pr-5 flex space-y-4 items-start w-full">
        {/* Email input */}
        <div className="flex w-full space-x-2 items-center justify-between">



            <label className="flex-shrink-0 w-1/3 text-left pr-2">Email:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={email} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                    placeholder="john@gmail.com" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">📧</span>
            </div>
        </div>
        {/* Gender input */}
        <div className="flex w-full space-x-2 items-center">
            <label className="flex-shrink-0 w-1/3 text-left pr-2">Gender:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={gender} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGender(e.target.value)} 
                    placeholder="male or female" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">👤</span>
            </div>
        </div>
        {/* Address input */}
        <div className="flex w-full space-x-2 items-center">
            <label className="flex-shrink-0 w-1/3 text-left pr-2">Address:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={address} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} 
                    placeholder="a/p:" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">🏠</span>
            </div>
        </div>
        {/* Pincode input */}
        <div className="flex w-full space-x-2 items-center">
            <label className="flex-shrink-0 w-1/3 text-left pr-2">Pincode:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={pincode} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPincode(e.target.value)} 
                    placeholder="6 digit" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">📍</span>
            </div>
        </div>
        {/* City input */}
        <div className="flex w-full space-x-2 items-center">
            <label className="flex-shrink-0 w-1/3 text-left pr-2">City:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={city} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} 
                    placeholder="city" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">🌆</span>
            </div>
        </div>
        {/* State input */}
        <div className="flex w-full space-x-2 items-center">
            <label className="flex-shrink-0 w-1/3 text-left pr-2">State:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={state} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)} 
                    placeholder="state" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">🏞️</span>
            </div>
        </div>
        {/* Country input */}
        <div className="flex w-full space-x-2 items-center">
            <label className="flex-shrink-0 w-1/3 text-left pr-2">Country:</label>
            <div className="relative w-2/3">
                <input 
                    type="text" 
                    required 
                    value={country} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)} 
                    placeholder="country" 
                    className="border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md py-2 pl-10 transition duration-200 shadow-sm" 
                />
                <span className="absolute left-3 top-2 text-gray-500">🌍</span>
            </div>
        </div>
        {/* Error message */}
        <div className="flex w-full justify-end">
            <p className="text-red-500">{profileError}</p>
        </div>
    </div>
    {/* Buttons */}
    <div className="flex w-full justify-between mt-6">
        <button 
            onClick={() => setIsAddUserProfileModal(false)}  
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

  )
}

export default AddUserProfileModal