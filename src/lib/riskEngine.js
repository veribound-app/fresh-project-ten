const DISPOSABLE_DOMAINS = [
  "tempmail.com", "10minutemail.com", "guerrillamail.com",
  "mailinator.com", "temp-mail.org", "yopmail.com", "disposable.com"
];

const TRUSTED_DOMAINS = ["rvmfg.xyz", "gmail.com", "outlook.com", "yahoo.com"];

export function getRiskScore(email, amount) {
  if (!email ||!email.includes("@")) return 0;
  const domain = email.split("@")[1].toLowerCase().trim();

  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return 10; // FRAUD
  }
  if (TRUSTED_DOMAINS.includes(domain)) {
    return 100; // TRUSTED
  }
  if (domain.endsWith(".xyz") && domain!== "rvmfg.xyz") {
    return 25; // Suspicious xyz
  }
  return 85;
}

export function isHighRisk(email, amount) {
  return getRiskScore(email, amount) < 50;
}