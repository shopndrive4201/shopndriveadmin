// ============================================================
// FIREBASE CONFIGURATION
// Replace these placeholder values with your actual Firebase
// project credentials from the Firebase Console.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDDS04rs-HDz4IJbESCTdphCFI2xmlpI_0",
  authDomain: "shop-n-drive-34ef7.firebaseapp.com",
  databaseURL: "https://shop-n-drive-34ef7-default-rtdb.firebaseio.com",
  projectId: "shop-n-drive-34ef7",
  storageBucket: "shop-n-drive-34ef7.firebasestorage.app",
  messagingSenderId: "31279623112",
  appId: "1:31279623112:web:6f3d29ae1df715612a6efd",
  measurementId: "G-7C5PVXQXFB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export references for use in other files
const auth = firebase.auth();
const db = firebase.database();
