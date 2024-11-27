
const sentences = [
  "Yesterday, it was raining and thundering all day. Ann was playing inside the house. She wanted to be outside. She wasn't playing outside because it was raining. She was feeling tired of being trapped inside the house.",
    "Ann was trying to keep busy inside the house. She was reading her book until the electricity went out. Then, she decided to practice her sewing. She was practicing sewing until lunchtime. After lunch, she sat by the window and watched the rain.",
    "While Ann was watching the rain, the phone rang. Her mother was calling to say she was coming home. She was bringing a new game. Ann and her mother ate ice cream and played the game",
    "While I was doing my homework, my cousin visited us. It was eight o’clock and after that I couldn’t even finish my homework.",
    "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
    "The sun was shining and the birds were singing as the elephant came out of the jungle. The other animals were relaxing in the shade of the trees, but the elephant moved very quickly. She was looking for her baby, and she didn't notice the hunter who was watching her through his binoculars. When the shot rang out, she was running towards the river..",
    "When I walked into the office, several people were busily typing, some were talking on the phones, the boss was yelling directions, and customers were waiting to be helped. One customer was yelling at a secretary and waving his hands. Others were complaining to each other about the bad service.",
    "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective. The lines could be said to resemble zincoid females. A deborah is a tractor's whale. Cod are elite japans. Some posit the wiglike norwegian to be less than plashy. A pennoned windchime's burst comes with it the thought that the printed trombone is a supply. Relations are restless tests.",
    "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone. The chicken is a giraffe. They were lost without the abscessed leek that composed their fowl. An interviewer is a tussal bomb. Vanward maracas show us how scarfs can be doubts. Few can name an unguled punch that isn't pig.",
    "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions. A capricorn is a helium from the right perspective. However, a sled is a mailman's tennis. The competitor of an alarm becomes a toeless raincoat. Their twist was, in this moment.",
];

let startTime;
let endTime;
let totalWords;
let correctWords;
let currentSentence;

const inputBox = document.getElementById('input-box');
const startButton = document.getElementById('start-button');
const sentenceDisplay = document.getElementById('sentence');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');

startButton.addEventListener('click', () => {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceDisplay.textContent = currentSentence;
    inputBox.value = '';
    inputBox.disabled = false;
    inputBox.focus();
    startTime = new Date().getTime();
    totalWords = currentSentence.split(' ').length;
    correctWords = 0;
});

inputBox.addEventListener('input', () => {
    const inputText = inputBox.value;

    if (inputText === currentSentence) {
        endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000 / 60; // time in minutes

        const wordsTyped = inputText.split(' ').length;
        const speed = Math.round(wordsTyped / timeTaken);
        wpmDisplay.textContent = `WPM: ${speed}`;

        const correctCharacters = inputText.split('').filter((char, index) => char === currentSentence[index]).length;
        const accuracy = Math.round((correctCharacters / currentSentence.length) * 100);
        accuracyDisplay.textContent = `Accuracy: ${accuracy}%`;

        inputBox.disabled = true;
    }
});
