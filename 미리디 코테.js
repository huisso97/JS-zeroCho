function solution(n) {
  let answer = n;
  while (answer > 9) {
    answer = answer.toString();
    newAnswer = 0;
    for (let i = 0; i < answer.length; i++) {
      newAnswer += +answer[i];
    }
    answer = newAnswer;
  }
  return answer;
}

solution(10);
