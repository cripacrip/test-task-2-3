function drawRating(vote, { step = 20, starsAmount = 5 } = {}) {
    if (typeof vote === 'number') {
     let result = '';
      for (let i = step; i <= (step * starsAmount); i += step) {
        if (Number(vote) >= i) {
        result += '★';      
        }
      }
      return result.padEnd(starsAmount, '☆');
    } else {
     return ''.padEnd(starsAmount, '☆');
    }
}


console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
