"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { editUser, userType } from "../../../slices/UserSlice";

interface EditUserModalProps {
    setIsEditUserModal: (value: boolean) => void;
    setCurrentUser: (value: userType | null) => void;
    currentUser: userType | null;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ setIsEditUserModal, currentUser, setCurrentUser }) => {
    const [username, setUsername] = useState<string | undefined>(currentUser?.username);
    const [phone, setPhone] = useState<string | undefined>(currentUser?.phone);
    const dispatch = useDispatch<AppDispatch>();
    const { error } = useSelector((state: RootState) => state.user);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username?.length && phone?.length === 10) {
            const userData: userType = {
                id: currentUser?.id,
                username: username,
                phone: phone,
            };
            dispatch(editUser(userData));
            setIsEditUserModal(false);
            setCurrentUser(null);
        }
    };

    return (
        <div className="absolute modal-container sm:px-0 px-6 inset-0 flex justify-center top-[100px]">
            <div className="w-[450px] rounded-lg bg-white border-2 border-black/25 shadow-lg h-max justify-center p-6">
                <div className="text-lg rounded-lg rounded-b-none flex justify-center shadow-sm border-b-2 border-black/25 bg-slate-100 py-2 font-semibold text-black/80">
                    <p>Edit User</p>
                </div>
                <div className="flex-col space-y-6 flex items-center pt-4">
                    {/* Username Input */}
                    <div className="flex w-full items-center">
                        <label className="w-1/3 text-left">Username:</label>
                        <input
                            readOnly
                            type="text"
                            required
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            placeholder="john@gmail.com"
                            className="border-2 border-black/50 px-4 rounded-md py-1.5 w-2/3"
                        />
                    </div>
                    {/* Phone Input */}
                    <div className="flex w-full items-center">
                        <label className="w-1/3 text-left">Phone:</label>
                        <input
                            type="text"
                            required
                            value={phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                            placeholder="+91"
                            className="border-2 border-black/50 px-4 rounded-md py-1.5 w-2/3"
                        />
                    </div>
                    {/* Error Message */}
                    <div className="flex justify-end w-full">
                        <p className="text-red-500">{error}</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-between w-full mt-4">
                        <button
                            onClick={() => {
                                setIsEditUserModal(false);
                                setCurrentUser(null);
                            }}
                            className="border border-black/70 bg-white px-4 text-md rounded-md py-1.5"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
                            className="border border-black/70 bg-green-200 px-6 text-md rounded-md py-1.5"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUserModal;