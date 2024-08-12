import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const getCurrentUser = (): Promise<User | null> => {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    }, reject);
  });
};
