import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc
} from 'firebase/firestore';
import app from './init';

const fireStore = getFirestore(app);

export async function loginWithGoogle(data: any, callback: any) {
  const q = query(collection(fireStore, 'users'), where('email', '==', data.email));

  const snapShot = await getDocs(q);
  const users: any = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  if (users.length > 0) {
    data.role = users[0].role;
    await updateDoc(doc(fireStore, 'users', users[0].id), data).then(() => {
      callback({ status: true, data: users[0] });
    });
  } else {
    data.role = 'member';
    await addDoc(collection(fireStore, 'users'), data).then(() => {
      callback({ status: true, data: data });
    });
  }
}
