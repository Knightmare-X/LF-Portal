// ✍️ Your poem and song links go here (audio should be .mp3 or .ogg)
const poems = {
  1: {
    text: "Finally, it's the day I've been waiting for! Happy Birthday, meri pyari si Lojain. I love you so much. I know in the past, you have bad memories associated with your birthday. That too, because of me, but I want to change that. I want to change everything about our relationship that was wrong. So on this day, I promise to fix everything that bothers you about me, and I promise that I will make you feel special every single day. Which is why I have built this Lojain Portal for you. Starting from today, every day from now you will see poetry as well as a song that I associate with you for the whole month. Not only that, I have also made a portal for you where you can submit your problems with me whenever you want and I also plan to add a few more features but I'll keep that a secret for now. I have built thing because one day or one paragraph isn't enough to describe how much you mean to me and how much I actually love you. So I will make you feel special every single day of the month. Because meri jaan you are special and I love you a lot and I actually want to fix things and make a beautiful future for ourselves together. I love you so much and Happy birthday again!",
    song: "audio/song 1.mp3"
  },
  2: {
  text: `
    <div class="urdu">
      تم کو آتا ہے پیار پر غصہ<br>
      مجھ کو غصے پہ پیار آتا ہے
    </div>
    <div class="poem">
      I know that deep down you still care about me and your way of showing your feelings is just different now, but I know you're still the same girl. I know one day, we will fix things and become our real selves and you won't have to put up those walls anymore. I will celebrate that day, I will consider it a national holiday. The day you come to me and ask to be in my arms, because you know that I am the same person you fell in love with. 💗
    </div>
  `,
    song: "audio/song 6.mp3"
  },
  3: {
    text: "Another day of being grateful to breathe in the same air as you. Another day to be grateful to have you in my life. Your cute eyes are what make me smile instantly and I wish to see them every day after waking up next to you. As you slowly open them and cling to me like a little doll. I miss all that. I miss the clinginess and the love I used to get from you. I wish it gets restored soon.",
    song: "audio/song 2.mp3"
  },
  4: {
    text: "I wake up every day thinking about you, and go to sleep every day with you in my head. I wanna turn that into a reality soon enough to actually wake up next to you and sleep next to you, come home to you, spend all my lazy days in your arms, that too in our pretty house.",
    song: "audio/song 3.mp3"
  },
  5: {
    text: "If we hang all the paintings you made in a room in our house, you, in your messy clothes, and unkept hair, would still look prettier than that. Speaking of paintings, I would love to sit down for hours, painting your beautiful portrait. Even though I am not a very good painter, I'd just do that as an excuse to look at your perfect everything for hours. Just staring and admiring you and regretting all the decisions I made.",
    song: "audio/song 4.mp3"
  },
  6: {
    text: "Every passing day feels emptier when you're not here. The walls of this house are no less than a prison at this point. It's a dark place that has lost its light. The light that came from your smile. The light that shone through your eyes. I wish that light finds its way back to this place, making it whole once again. Making it feel like the safe space it once was. I am hopeful that day will come sooner.",
    song: "audio/song 5.mp3"
  },
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
