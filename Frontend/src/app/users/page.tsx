"use client";

import AddUserModal from "@/components/Users/AddUserModal";
import DeleteModal from "@/components/Users/DeleteModal";
import EditUserModal from "@/components/Users/EditUserModal";
import Loading from "@/components/Loading";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchAllUsers, userType } from "../../../slices/UserSlice";
import { useRouter } from 'next/navigation'; // Ensure correct import

const UsersPage = () => {
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [isAddUserModal, setIsAddUserModal] = useState(false);
    const [isEditUserModal, setIsEditUserModal] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { users, isLoading, error } = useSelector((state: RootState) => state.user);
    const [currentUser, setCurrentUser] = useState<userType | null>(null);
    const userRef = useRef(false);
    const router = useRouter(); // Use useRouter here

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    const handleViewProfile = (userId: string) => {
        router.push(`/profile/${userId}`); // Navigate to the user's profile page
    };

    return (
        <div className="w-screen">
            <div className="mx-auto mt-8 max-w-screen-lg px-2">
                <div className={`mt-6 rounded-xl border shadow-lg ${isDeleteModal || isAddUserModal || isEditUserModal || isLoading ? 'opacity-30' : ''}`}>
                    <div className="flex justify-between bg-slate-200 px-4 py-4 rounded-t-xl shadow-md">
                        <p className="text-2xl font-semibold text-gray-800">User Management</p>
                        <button
                            onClick={() => setIsAddUserModal(true)}
                            type="button"
                            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-200"
                        >
                            Add User
                        </button>
                    </div>
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-4">
                            <thead>
                                <tr>
                                    <th className="py-4 text-md font-medium text-gray-500 text-left">Username</th>
                                    <th className="py-4 text-md font-medium text-gray-500 text-left">Phone</th>
                                    <th className="py-4 text-md font-medium text-gray-500 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => (
                                    <tr key={user.id} className="bg-white hover:bg-gray-100 transition duration-200">
                                        <td className="py-4 text-md font-medium text-gray-700 px-4">{user.username}</td>
                                        <td className="py-4 text-md font-medium text-gray-700 px-4">{user.phone}</td>
                                        <td className="py-4 text-md font-medium text-gray-700 px-4">
                                            <button
                                                onClick={() => user.id && handleViewProfile(user.id)} // View Profile button
                                                className="border rounded-md p-2 cursor-pointer hover:bg-gray-200 mr-5 transition duration-200"
                                            >
                                                <span className="text-blue-600 text-lg">👁️</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsEditUserModal(true);
                                                    setCurrentUser(user);
                                                }}
                                                className="border rounded-md p-2 cursor-pointer hover:bg-gray-200 mr-5 transition duration-200"
                                            >
                                                <span className="text-green-600 text-lg">✏️</span>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsDeleteModal(true);
                                                    setCurrentUser(user);
                                                }}
                                                className="border rounded-md p-2 cursor-pointer hover:bg-gray-200 transition duration-200"
                                            >
                                                <span className="text-red-600 text-lg">🗑️</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {isDeleteModal && (
                    <DeleteModal
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        setIsDeleteModal={setIsDeleteModal}
                    />
                )}
                {isAddUserModal && (
                    <AddUserModal setIsAddUserModal={setIsAddUserModal} />
                )}
                {isEditUserModal && (
                    <EditUserModal
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        setIsEditUserModal={setIsEditUserModal}
                    />
                )}
                {isLoading && <Loading />}
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
}

export default UsersPage;
