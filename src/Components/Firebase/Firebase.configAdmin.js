import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseAdminConfig = {
  apiKey: import.meta.env.VITE_ADMIN_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_ADMIN_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_ADMIN_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_ADMIN_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_ADMIN_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_ADMIN_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_ADMIN_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase for admin
const adminApp = initializeApp(firebaseAdminConfig, "admin");
const adminAnalytics = getAnalytics(adminApp);

export { adminApp, adminAnalytics };
