// 🎁 Add your daily poems and songs here.
// Use class 'poem' for English and 'urdu' for Urdu.
// Update the 'audio/dayX.mp3' file path as needed.

const poems = {
  1: {
    // English poem
    text: "<p class='poem'>Your smile is my sunrise,<br>Lighting up my cloudy days.</p>",
    song: "audio/song 1.mp3"
  },
  2: {
    // Urdu poem
    text: "<div class='urdu'>تمہاری یاد میں ہر رات جاگتا ہوں<br>کہ جیسے چاندنی میں دل دھڑکتا ہو</div>",
    song: "audio/day2.mp3"
  },
  // ➕ Add more days like this:
  // 3: {
  //   text: "<p class='poem'>Another day, another rhyme,<br>Your love defies all space and time.</p>",
  //   song: "audio/day3.mp3"
  // },
};

const grid = document.getElementById('grid');

// ⬜ Generate the 30 day boxes dynamically
for (let i = 1; i <= 30; i++) {
  const dayCard = document.createElement('div');
  dayCard.className = 'day';
  dayCard.innerText = `Day ${i}`;
  dayCard.onclick = () => openModal(i);
  grid.appendChild(dayCard);
}

function openModal(day) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('content');

  if (poems[day]) {
    content.innerHTML = `
      <h2>Day ${day}</h2>
      ${poems[day].text}
      <audio controls>
        <source src="${poems[day].song}" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    `;
  } else {
    content.innerHTML = `<h2>Day ${day}</h2><p>Coming soon...</p>`;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
