export function* indexGenerator(len) {
  let i = 0;
  while (true) {
    yield i % len;
    i += 1;
  }
}