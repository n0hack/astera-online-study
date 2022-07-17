function another(A, B, C) {
  let a = (A + B) % C;
  let b = ((A % C) + (B % C)) % C;
  let c = (A * B) % C;
  let d = ((A % C) * (B % C)) % C;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

another(5, 8, 9);
another(2, 4, 6);
another(1, 2, 3);
