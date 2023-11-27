function checkForSpam(message) {
  const banWord1 = "spam";
  const banWord2 = "sale";

  const hasSpam1 = message.toLowerCase().includes(banWord1);
  const hasSpam2 = message.toLowerCase().includes(banWord2);

  let result = hasSpam1 || hasSpam2;

  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
