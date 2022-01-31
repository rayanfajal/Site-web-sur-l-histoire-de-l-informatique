var question1 = document.quiz.question1[2]; 
var question2 = document.quiz.question2[3]; 
var question3 = document.quiz.question3[2];
var question4 = document.quiz.question4[2]; 
var question5 = document.quiz.question5[0];
var question6 = document.quiz.question6[0];
var question7 = document.quiz.question7[0];
var question8 = document.quiz.question8[2];
var question9 = document.quiz.question9[1];

 
function onClickValid() {
	resultat.classList.add("show"); 
 
 
	if ((question1.checked) && (question2.checked) && (question3.checked) && (question4.checked) && (question5.checked) && (question6.checked) && (question7.checked) && (question8.checked) && (question9.checked))
	{
		resultat.textContent = " 9/9 ! Bravo, vous avez réussi le quiz avec succès!";
       
	}
	else 
	{	
 
		resultat.textContent = "Dommage, il y a encore quelques mauvaises réponses. Réessaie !";
	}
}
 

document.addEventListener("DOMContentLoaded", function() 
{
	validation = document.querySelector("#validation"); 
	resultat = document.querySelector("#resultat"); 
 
	validation.addEventListener("click", onClickValid);
	resultat.addEventListener("click", onClickValid); 
 
 
});
