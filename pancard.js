function generatePAN() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // valid PAN characters
    const nums = "0123456789"; // valid PAN numbers
    let pan = "";
    for (let i = 0; i < 5; i++) {
      pan += chars.charAt
      (Math.floor(Math.random() * chars.length)); // choose a random character from chars
    }
    for (let i = 0; i < 4; i++) {
      pan += nums.charAt(Math.floor(Math.random() * nums.length)); // choose a random number from nums
    }
    pan += chars.charAt(Math.floor(Math.random() * chars.length)); // choose a random character from chars
    return pan;
  }

  