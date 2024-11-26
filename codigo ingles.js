function checkAnswers() {
    let score = 0;
    
    
    const answers = [
        document.getElementById("q1").value,
        document.getElementById("q2").value,
        document.getElementById("q3").value,
        document.getElementById("q4").value,
        document.getElementById("q5").value,
        document.getElementById("q6").value,
        document.getElementById("q7").value,
        document.getElementById("q8").value,
        document.getElementById("q9").value,
        document.getElementById("q10").value
    ];

    
    const correctAnswers = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];

    
    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) score++;
    });

    
    const result = document.getElementById("result");
    result.textContent = "Obtuviste " + score + " de 10 respuestas correctas.";
    
    if (score === 10) {
        result.textContent += " ¡Excelente trabajo!";
        result.style.color = "green";
    } else {
        result.textContent += " Revisa tus respuestas e inténtalo de nuevo.";
        result.style.color = "red";
    }
}
