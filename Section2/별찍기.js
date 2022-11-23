// for (let i = 0; i < 5; i++) {
//   console.log("*".repeat(i + 1));
// }

// for (let i = 5; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// for (let i = 0; i < 5; i++) {
//   console.log("*".repeat(5 - i));
// }

// for (let i = 1; i < 10; i += 2) {
//   console.log("*".repeat(i));
// }

for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}

// 트리 모양
for (let i = 0; i < 3; i++) {
  console.log(" ".repeat(2 - i), "*".repeat(i * 2 + 1), " ".repeat(2 - i));
}

// 마름모 모양
for (let i = 0; i < 5; i++) {
  if (i < 3) {
    console.log(" ".repeat(2 - i) + "*".repeat(2 * i + 1));
  } else {
    console.log(" ".repeat(i - 2) + "*".repeat(9 - 2 * i));
  }
}
