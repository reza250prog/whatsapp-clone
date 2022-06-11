import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, createTimestamp } from "../firebase";
import { useEffect } from "react";

export default function useAuthUser() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const ref = db.collection("users").doc(user.uid);
      ref.get().then((doc) => {
        if (!doc.exists) {
          ref.set({
            name: user.displayName,
            photoURL: user.photoURL,
            timestamp: createTimestamp(),
          });
        }
      });
    }
  }, [user]);

  return user;
}
