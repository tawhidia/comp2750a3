// ============================================================
// firebase-config.js
// Shared Firebase initialization — included on every page.
// IMPORTANT: Replace all values below with your own Firebase
// project config (Project Settings > Your apps > SDK setup).
// ============================================================

const firebaseConfig = {
  apiKey:            "AIzaSyBgvsNZfzgXEN_iWMYNmSHEL_1QJw_Ebvg",
  authDomain:        "campus-marketplace-542ec.firebaseapp.com",
  projectId:         "campus-marketplace-542ec",
  storageBucket:     "campus-marketplace-542ec.firebasestorage.app",
  messagingSenderId: "564200028451",
  appId:             "1:564200028451:web:e28263572e21557a6e3496"
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig);

// Global references used by every page
const auth = firebase.auth();
const db   = firebase.firestore();
