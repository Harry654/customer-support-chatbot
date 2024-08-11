export function generateRandomId(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const alphanumeric = letters + numbers;

  // Generate two random letters
  let id = "";
  for (let i = 0; i < 2; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  // Generate six random alphanumeric characters
  for (let i = 0; i < 6; i++) {
    id += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
  }

  return id;
}
