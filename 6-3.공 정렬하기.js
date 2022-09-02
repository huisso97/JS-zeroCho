// 원본이 안변하는 메서드
// map, slice, filter

// splice는 원본을 수정함 splice(시작인덱스, 몇 개 자를지)

// slice(처음인덱스, 끝인덱스+1)
const arr = [1, 3, 5, 6, 7, 8, 10, 45];
// 인덱스 3~ 5까지 자름
console.log(arr.slice(3, 6));

// 인덱스4부터 맨끝 전까지
arr.slice(4, -1);
// 뒤에서 5번째부터 맨끝 전까지
arr.slice(-5, -1);

// 오름차순
// sort는 원본을 바꿈
arr.sort((a, b) => {
  return a - b;
});

// 원본을 복사함 참조x
arr.slisce();

arr.slice().sort((a, b) => a - b);

// 문자열 요소 배열 정렬하기
const array = ["apple", "orange", "grape", "banana"];

array.slice().sort((a, b) => a[0].charCodeAt - b[0].charCodeAt);

// 모든 단어들을 사전순으로 비교해서 정렬함
// 오름차순
array.slice().sort((a, b) => a.localeCompare(b));
// 내림차순
array.slice().sort((a, b) => b.localeCompare(a));

// var로 선언시, 함수 스코프이기 때문에 setTimeout의 i가 최종적인 4를 읽게 됨 => var가 동기적으로 4까지 먼저 나오므로
// 이는 함수스코프의 특징과 클로져(함수와 함수 밖에서 쓰이는 변수와의 관계)로 인해 발생하는 문제
// let으로 선언할 경우, let은 블록스코프이므로, setTimeout에 직접적으로 접근이 불가함
// 그래서 i가 1씩 증가하는것을 setTimeout에 넣을 수 있음
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, (i + 1) * 1000);
}
