"use client"

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { deleteUser, userType } from "../../../slices/UserSlice";

interface DeleteModalProps {
    setIsDeleteModal: (value: boolean) => void;
    setCurrentUser: (value: userType | null) => void;
    currentUser: userType | null
  }

const DeleteModal: React.FC<DeleteModalProps> = ({ setIsDeleteModal, currentUser, setCurrentUser }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (currentUser) {
            dispatch(deleteUser(currentUser.id));
            setIsDeleteModal(false);
            setCurrentUser(null);
        }
    };

    return (
        <div className="absolute modal-container sm:px-0 px-6 inset-0 flex justify-center top-[100px]">
            <div className="w-[400px] rounded-lg bg-white border border-gray-300 shadow-lg h-max justify-center p-6">
                <div className="text-lg rounded-lg rounded-b-none flex justify-center shadow-md border-b-2 border-gray-300 bg-gradient-to-r from-red-500 to-red-600 py-2 font-semibold text-white">
                    <p>Delete User</p>
                </div>
                <div className="flex-col space-y-6 flex items-center pb-10 pt-6">
                    <p className="text-md text-gray-700">Are you sure you want to delete this user?</p>
                    <div className="flex w-full justify-between mt-6">
                        <button 
                            onClick={() => {
                                setIsDeleteModal(false);
                                setCurrentUser(null);
                            }}  
                            className="border border-gray-400 bg-white hover:bg-gray-100 px-4 text-md rounded-md py-2 transition duration-200 w-1/3 shadow-sm"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleDelete(e)}  
                            className="border border-gray-400 bg-gradient-to-r from-red-400 to-red-500 text-white px-6 text-md rounded-md py-2 transition duration-200 hover:from-red-500 hover:to-red-600 w-1/3 shadow-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal