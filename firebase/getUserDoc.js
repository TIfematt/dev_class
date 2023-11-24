import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const getUserDoc = async (uid) => {

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export default getUserDoc