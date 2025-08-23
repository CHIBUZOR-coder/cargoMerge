import { create } from "zustand";
import { persist } from "zustand/middleware";

const baseURL = "https://cargobackend-5fdz.onrender.com";

import { useLoadingStore } from "./useLoadingStore";

console.log("Base URL:", import.meta.env.VITE_BASE_URL);
const { setLoading } = useLoadingStore.getState();

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      loggedUser: null,
      userError: null,
      success: null,
      allUsers: [],
      navigatee: false,

      loadAction: false,

      HandleFileUploaded: (
        newFiles,
        preview,
        prviewSetter,
        MainImageSetter
      ) => {
        if (typeof MainImageSetter === "function") {
          console.log("newFiles:", newFiles);

          MainImageSetter(newFiles);
        } else {
          console.error("MainImageSetter is not a function");
        }

        prviewSetter(preview);

        console.log("file", newFiles);

        console.log(
          "filename",
          newFiles.name.slice(0, -4) // Drops the last 4 characters
        );
      },

      registerUser: async (
        firstname,
        lastname,
        email,
        address,
        phone,
        password,
        confirmpassword,
        imageFile = null
      ) => {
        setLoading("users", true);
        set({ userError: null, success: null });

        try {
          const formData = new FormData();
          formData.append("firstname", firstname);
          formData.append("lastname", lastname);
          formData.append("email", email);
          formData.append("phone", phone);
          formData.append("address", address);
          formData.append("password", password);
          formData.append("confirmpassword", confirmpassword);
          if (imageFile) {
            console.log("image is present!");

            formData.append("image", imageFile);
          }
          const endpoint = `${baseURL}/registerUsers`;
          console.log("fetching from", endpoint);

          const res = await fetch(endpoint, {
            method: "POST",
            body: formData,
          });

          const data = await res.json();

          if (!res.ok) {
            setLoading("users", false);
            set({ userError: data.message || "Registration failed" });
          } else {
            setLoading("users", false);
            set({ user: data?.user, success: "User registered successfully!" });
          }
        } catch (error) {
          set({ userError: error.message });
        } finally {
          setLoading("users", false);
          setTimeout(() => {
            set({ user: null, success: null, userError: null });
          }, 4000);
        }
      },

      loginUser: async (email, password) => {
        setLoading("users", true);
        const endpoint = `${baseURL}/login`;
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          if (!res.ok) {
            console.log(data);
            setLoading("users", false);
            set({ userError: data?.message, navigatee: false });
          } else {
            console.log(data);
            setLoading("users", false);
            set({
              success: data?.message,
              loggedUser: data?.userInfo,
            });

            setTimeout(() => {
              set({
                navigatee: true,
                user: null,
                success: null,
                userError: null,
                // loggedUser: null,
          
              });

              set({ navigatee: false });
            }, 4000);
          }
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    {
      name: "user-store", // key in localStorage
      partialize: (state) => ({
        // user: state.user,
        allUsers: state.allUsers,
        loggedUser: state.loggedUser,
      }), // only persist `user`
    }
  )
);

export default useUserStore;
