// ✅ Replace this with your actual Firebase config from console
const firebaseConfig = {
  apiKey: "AIzaSyAf88BDeBpw6nR0xCmK-rWdCpRCgPUyNcM",
  authDomain: "lf-portal-ac021.firebaseapp.com",
  databaseURL: "https://lf-portal-ac021-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lf-portal-ac021",
  storageBucket: "lf-portal-ac021.firebasestorage.app",
  messagingSenderId: "418206831670",
  appId: "1:418206831670:web:9e05932f471069c85bf497" // ✅ add this line
};


// 🔌 Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ✍️ Handle Form Submission
document.getElementById('grievance-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const text = document.getElementById('grievance-text').value.trim();

  if (text.length === 0) {
    alert("Please write something before submitting!");
    return;
  }

  // ⏰ Timestamped entry
  const now = new Date().toISOString();
  database.ref("grievances").push({
    message: text,
    time: now
  });

  // ❤️ Confirmation
  document.getElementById('confirmation').textContent = "Grievance submitted. But you’re still the cutest.";
  document.getElementById('grievance-text').value = "";
});
