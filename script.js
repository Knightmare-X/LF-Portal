// ✍️ Your poem and song links go here (audio should be .mp3 or .ogg)
const poems = {
  1: {
    text: "This is your Day 1 poem. 💌",
    song: "audio/song 1.mp3"
  },
  2: {
    text: "<div class='urdu'>تم میرے دل کی وہ خواہش ہو<br>جسے لفظوں میں بیان نہ کیا جا سکے</div>",
    song: "audio/song 2.mp3"
  }
  // ➕ Add more day entries here
};

const startDate = new Date("2025-07-01T00:00:00");
const today = new Date();
const dayOffset = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

const calendar = document.getElementById('calendar');

for (let i = 1; i <= 30; i++) {
  const div = document.createElement("div");
  const isUnlocked = i <= dayOffset;
  div.className = "day" + (isUnlocked ? "" : " locked");
  div.innerText = `Day ${i}`;

  if (isUnlocked) {
    div.onclick = () => openModal(i);
  } else {
    div.title = `Unlocks on July ${i}`;

    const unlockDate = new Date(startDate);
    unlockDate.setDate(startDate.getDate() + (i - 1));

    const countdown = document.createElement("div");
    countdown.className = "countdown";
    countdown.innerText = "⏳ Calculating...";
    div.appendChild(countdown);

    const updateCountdown = () => {
      const now = new Date();
      const distance = unlockDate - now;

      if (distance <= 0) {
        location.reload(); // Auto-refresh to unlock
      } else {
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        countdown.innerText = `⏳ Unlocks in: ${hours}h ${minutes}m ${seconds}s`;
      }
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  calendar.appendChild(div);
}

// 🎬 Modal open for the selected day
function openModal(day) {
  if (day > dayOffset) return;
  const modal = document.getElementById('modal');
  const content = document.getElementById('content');

  if (poems[day]) {
    content.innerHTML = `
      <h2>Day ${day}</h2>
      <div class='poem'>${poems[day].text}</div>
      <audio controls class='custom-audio'>
        <source src='${poems[day].song}' type='audio/mpeg'>
        Your browser does not support the audio element.
      </audio>
    `;
  } else {
    content.innerHTML = `<h2>Day ${day}</h2><p>Coming soon...</p>`;
  }

  modal.style.display = 'flex';
}

// ❌ Close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
