import { collection, query, where, getDocs, getFirestore, setDoc, doc } from "firebase/firestore";
import store from "../store";
export const getListOfQuestions = async() => { 
    const db = getFirestore(); 
    const q = query(collection(db, "questions") );

    const querySnapshot = await getDocs(q);
    const questions=[]
    querySnapshot.forEach((doc) => {

  questions.push(doc.data())
    });
    store.questions.set(questions)

}
export const submitAnswers = async (answers, onSuccess, onFailure) => {
    const db = getFirestore();
    
     setDoc(doc(db, "submissions"), answers).then(() => {
       if(onSuccess) {
        onSuccess();
    }
     }).catch((error) => {
      console.log("emailNotSent")
      // ..
      if (onFailure) {
          onFailure(error.message);
      }
     });
  }
  