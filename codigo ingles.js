function checkAnswers() {
    const correctAnswers = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]; 
    let score = 0; 
    let feedback = ""; 

    for (let i = 1; i <= 10; i++) {
        const answer = document.getElementById("q" + i).value; 
        if (answer === correctAnswers[i - 1]) { 
            score++; 
            feedback += `Pregunta ${i}: ✅ Correcta<br>`; 
        } else {
            feedback += `Pregunta ${i}: ❌ Incorrecta<br>`;
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `${feedback}<br><strong>Obtuviste ${score} de 10 respuestas correctas.</strong>`;

    if (score === correctAnswers.length) {
        result.innerHTML += "<br>¡Excelente trabajo! 🎉";
        result.style.color = "black";
    } else {
        result.innerHTML += "<br>Revisa tus respuestas e inténtalo de nuevo.";
        result.style.color = "black"; 
    }
}
