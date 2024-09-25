"use client";

import DeleteModal from "@/components/Users/DeleteModal";
import EditUserProfileModal from "@/components/Profile/EditUserProfileModal";
import AddUserProfileModal from "@/components/Profile/AddUserProfileModal";
import Loading from "@/components/Loading";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { getUserProfile } from "../../../../slices/ProfileSlice";
import { usePathname, useSearchParams } from "next/navigation";
import DeleteProfileModal from "@/components/Profile/DeleteProfileModal";

const ProfilePage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAddUserProfileModal, setIsAddUserProfileModal] = useState(false);
  const [isEditUserModal, setIsEditUserModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { profile, isProfileLoading, profileError } = useSelector(
    (state: RootState) => state.profile
  );
  const [currentUser, setCurrentUser] = useState<string>("");
  const userRef = useRef(false);

  useEffect(() => {
    const segments = pathname.split("/");
    if (segments.length > 2) {
      const id = segments[2];
      dispatch(getUserProfile(id));
      setCurrentUser(id);
    }
  }, [pathname]);

  return (
    <div className="w-screen">
      <div className="mx-auto mt-8 max-w-screen-sm px-2">
        <div
          className={`mt-6 rounded-xl border shadow-lg ${
            isDeleteModal || isAddUserProfileModal || isEditUserModal
              ? "opacity-30"
              : ""
          }`}
        >
          <div className="flex justify-between bg-slate-200 px-4 py-4 rounded-t-xl shadow-md">
            <p className="text-2xl font-semibold text-gray-800">User Profile</p>
            <div className="flex items-center space-x-3">
              {!profile?.id && (
                <button
                  onClick={() => setIsAddUserProfileModal(true)}
                  type="button"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-200"
                >
                  Create
                </button>
              )}
              {profile?.id && (
                <>
                  <button
                    onClick={() => setIsEditUserModal(true)}
                    className="border rounded-md p-2 cursor-pointer hover:bg-gray-200 transition duration-200"
                  >
                    <span className="text-green-600 text-2xl">✏️</span>
                  </button>
                  <button
                    onClick={() => setIsDeleteModal(true)}
                    className="border rounded-md p-2 cursor-pointer hover:bg-gray-200 transition duration-200"
                  >
                    <span className="text-red-600 text-2xl">🗑️</span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-4">
              {profile?.id ? (
                <tbody>
                  {Object.entries(profile).map(([key, value]) => (
                    <tr
                      key={key}
                      className="bg-white hover:bg-gray-100 transition duration-200"
                    >
                      <td className="py-4 text-md font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </td>
                      <td className="py-4 text-md font-medium text-gray-700">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td colSpan={2} className="p-4 text-center text-gray-500">
                    No Profile available, feel free to Create one!
                  </td>
                </tr>
              )}
            </table>
          </div>
        </div>

        {isDeleteModal && (
          <DeleteProfileModal
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setIsDeleteProfileModal={setIsDeleteModal}
          />
        )}
        {isAddUserProfileModal && (
          <AddUserProfileModal
            id={currentUser}
            setIsAddUserProfileModal={setIsAddUserProfileModal}
          />
        )}
        {isEditUserModal && (
          <EditUserProfileModal
            setIsEditUserProfileModal={setIsEditUserModal}
            id={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}
        {isProfileLoading && <Loading />}
        {profileError && <p className="text-red-500">{profileError}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
