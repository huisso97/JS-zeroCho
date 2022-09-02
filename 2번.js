// 직사각형 모양으로 다 0을 채워
// lands좌표를 색칠해
// 전체 탐색하면서
// 만약 상하좌우가 벽이 아니고 && 육지이면,
// 걔는 호수
function solution(r, c) {
  var answer = [[]];
  console.log(r, c);

  let arr = [];
  for (i = 0; i < r; i++) {
    let tmp = [];
    for (j = 0; j < c; j++) {
      tmp.push(0);
    }
    arr.push(tmp);
  }
  console.log(arr);

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let mode = 0;
  let x = c;
  let y = 0;

  for (n = 1; n < r * c + 1; n++) {
    x += dx[mode];
    y += dy[mode];
    arr[y][x] = n;
    console.log(x, y, mode);
    console.log(arr);
    if (0 <= x + dx[mode] < c && 0 <= y + dy[mode] < r && arr[y + dy[mode]][x + dx[mode]] === 0) {
      continue;
      // break
    }
    if (mode !== 3) {
      console.log("fk");
      mode += 1;
    } else {
      mode = 0;
    }
  }

  console.log(arr);

  return answer;
}

solution(5, 4);
