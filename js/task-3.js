function checkForSpam(message) {
  const banWord1 = "spam";
  const banWord2 = "sale";

  const hasSpam1 = message.toLowerCase().includes(banWord1);
  const hasSpam2 = message.toLowerCase().includes(banWord2);

  let result = hasSpam1 || hasSpam2;

  return result;
}
