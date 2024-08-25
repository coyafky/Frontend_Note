function test(
  { first, second }: { first: string; second: string } = {
    first: "1",
    second: "2",
  }
) {
  return first + second;
}
