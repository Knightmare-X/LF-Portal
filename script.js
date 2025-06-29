// 📝 Main data object that holds your daily poems and songs.
// Each entry is keyed by day number: 1 to 30.
// You can write in Urdu or English, just use the correct class (see below).

const poems = {
  1: {
    // ✏️ Poem for Day 1 (English)
    // Use HTML <br> tags to add line breaks in poems
    text: "<p class='poem'>Your smile is my sunrise,<br>Lighting up my cloudy days.</p>",
    // 🎵 Add a YouTube embed URL here
    song: "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  2: {
    // ✏️ Poem for Day 2 (Urdu)
    // Use class='urdu' for right-to-left formatting
    text: "<div class='urdu'>تمہاری یاد میں ہر رات جاگتا ہوں<br>کہ جیسے چاندنی میں دل دھڑکتا ہو</div>",
    song: "https://www.youtube.com/embed/ZcBnZEc0zJU"
  },

  // ➕ Copy and paste to add more days like this:
  // 3: {
  //   text: "<div class='urdu'>تم مسکراؤ تو لگے بہار آئی ہو</div>",
  //   song: "https://www.youtube.com/embed/abc123"
  // },
};

// 🧱 Generate the 30 day cards dynamically
const grid = document.getElementById('grid');
for (let i = 1; i <= 30; i++) {
  const dayCard = document.createElement('div');
  dayCard.className = 'day';
  dayCard.innerText = `Day ${i}`;
  dayCard.onclick = () => openModal(i); // When clicked, open that day's content
  grid.appendChild(dayCard);
}

// 📬 Opens the modal with the poem and song for the selected day
function openModal(day) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('content');

  if (poems[day]) {
    // ✅ Poem and song found for this day
    content.innerHTML = `
      <h2>Day ${day}</h2>
      ${poems[day].text}
      <iframe src='${poems[day].song}' allow='autoplay'></iframe>
    `;
  } else {
    // ⏳ Default message for days not yet filled in
    content.innerHTML = `<h2>Day ${day}</h2><p>Coming soon...</p>`;
  }

  modal.style.display = 'flex';
}

// ❌ Closes the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
