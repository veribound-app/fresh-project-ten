export function getRiskScore(email, amount) {
  // simple dummy logic for now
  if (!email) return 50;
  if (amount > 1000) return 85;
  return 20;
}

export function isHighRisk(email, amount) {
  return getRiskScore(email, amount) > 50;
}