import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const createUser = async (user:any) => {
  await setDoc(doc(db, "users", user.uid), {
    watchlist: [],
    portfolio: [],
    indicators: { ma: true, rsi: false }
  });
};
