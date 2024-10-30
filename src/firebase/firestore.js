import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export const getInitialMessage = async () => {
  if (typeof window === "undefined") return null; // 서버 환경에서는 실행되지 않도록
  try {
    const q = query(
      collection(db, "responses"),
      where("id", "==", "initialMessage")
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      console.log("Firestore 데이터:", querySnapshot.docs[0].data());
      return querySnapshot.docs[0].data();
    }
    return null;
  } catch (error) {
    console.error("Firestore 데이터 가져오기 에러: ", error);
    return null;
  }
};
{
  /*
export const getSecondResponse = async () => {
  if (typeof window === "undefined") return null;
  try {
    const q = query(
      collection(db, "responses"),
      where("id", "==", "secondResponse")
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      // buttons 필드를 JSON 객체로 파싱
      if (data.buttons) {
        data.buttons = JSON.parse(data.buttons);
        console.log("파싱된 buttons 데이터:", data.buttons);
      }
      return data;
    }
    return null;
  } catch (error) {
    console.error("Firestore 데이터 가져오기 에러: ", error);
    return null;
  }
};
*/
}
export const getSecondResponse = async () => {
  if (typeof window === "undefined") return null;
  try {
    const q = query(
      collection(db, "responses"),
      where("id", "==", "secondResponse")
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();

      // `button` 필드들을 배열로 변환하고 JSON 파싱
      const buttons = Object.keys(data)
        .filter((key) => key.startsWith("button"))
        .map((key) => JSON.parse(data[key])); // JSON 파싱 적용

      data.buttons = buttons; // buttons 배열 추가
      return data;
    }
    return null;
  } catch (error) {
    console.error("Firestore 데이터 가져오기 에러: ", error);
    return null;
  }
};
