// script.js - Expert AI logikasi (by Abduraxmon)

// DOM elementlar
const input = document.getElementById('userInput');
const chat = document.getElementById('chat');
const voiceBtn = document.getElementById('voiceStart');
const toggleBtn = document.getElementById('toggleTheme');

// Foydalanuvchi matnini qayta ishlash
function handleUserInput() {
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  input.value = '';

  setTimeout(() => {
    const answer = getAIResponse(question);
    addMessage(answer, 'bot');
    speak(answer);
  }, 500);
}

// AI xabarlarni chiqarish
function addMessage(text, sender) {
  const div = document.createElement('div');
  div.classList.add('message', sender);
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Ovozni chiqarish
function speak(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'uz-UZ';
    window.speechSynthesis.speak(utter);
  }
}

// Mikrofon orqali kirish
voiceBtn.addEventListener('click', () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Sizning brauzeringiz ovoz tanishni qo‘llab-quvvatlamaydi.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'uz-UZ';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  voiceBtn.innerText = "🎤...";

  recognition.onresult = event => {
    const speech = event.results[0][0].transcript;
    input.value = speech;
    handleUserInput();
    voiceBtn.innerText = "🎤";
  };

  recognition.onerror = () => {
    voiceBtn.innerText = "🎤";
    alert("Ovoz tanishda xatolik yuz berdi");
  };
});

// Dark / Light rejim
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ENTER tugmasi bilan yuborish
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleUserInput();
});
