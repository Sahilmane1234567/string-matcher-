function checkStrings() {
  const inputString = document.getElementById("inputString").value;

  const regexAstar = /^a*$/;    
  const regexAsteriskBplus = /^a*b+$/;  
  const regexAbb = /abb/;       

  const resultAstar = regexAstar.test(inputString);
  const resultAsteriskBplus = regexAsteriskBplus.test(inputString);
  const resultAbb = regexAbb.test(inputString);  

  document.getElementById("resultAstarText").textContent = "Result: " + (resultAstar ? "Match" : "No Match");
  document.getElementById("resultAsteriskBplusText").textContent = "Result: " + (resultAsteriskBplus ? "Match" : "No Match");
  document.getElementById("resultAbbText").textContent = "Result: " + (resultAbb ? "Match" : "No Match");
}
