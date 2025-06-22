// voice.js - Ovozli aloqa tizimi (by Abduraxmon)

// Foydalanuvchidan mikrofon orqali so‘rov olish
function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Sizning brauzeringiz ovoz tanishni qo‘llab-quvvatlamaydi.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'uz-UZ';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  document.getElementById('voiceStart').innerText = "🎤...";

  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('userInput').value = transcript;
    handleUserInput();
    document.getElementById('voiceStart').innerText = "🎤";
  };

  recognition.onerror = () => {
    document.getElementById('voiceStart').innerText = "🎤";
    alert("Ovoz tanishda xatolik yuz berdi");
  };
}

// Matnni ovozda chiqarish
function speak(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'uz-UZ';
    utter.pitch = 1;
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
  }
}

// Tugma bosilganda ovoz tanlashni boshlash
document.getElementById('voiceStart').addEventListener('click', startVoiceInput);
