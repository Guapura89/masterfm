"use client";
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);

type FormData = {
  userEmail: string;
  userPassword: string;
};

const useGetLogin = async ({ userEmail, userPassword }: FormData) => {
  try {
    const snapshot = await getDocs(
      query(collection(db, "users"), where("user_name", "==", userEmail), where("user_password", "==", userPassword))
    );

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (data[0] !== undefined) {
      const res = Object.values(data[0]);
      if (res[1] === userPassword) {
        return true;
      }
      return false;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default useGetLogin;
