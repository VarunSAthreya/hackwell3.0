// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

// TODO: ADD DOCUMENT
// try {
//     const docRef = await addDoc(collection(db, 'hey'), {
//         first: 'Ada',
//         last: 'Lovelace',
//         born: 1815,
//     });
//     console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//     console.error('Error adding document: ', e);
// }

// TODO: READ DOCUMENT
// const querySnapshot = await getDocs(collection(db, 'hey'));
// querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
// });
// setFirst(querySnapshot.docs[0].data().message);
