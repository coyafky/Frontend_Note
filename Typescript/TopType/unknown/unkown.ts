function f1(a: any) {
    a.b(); // OK
  }
  
//   function f2(a: unknown) {
//     // Error: Property 'b' does not exist on type 'unknown'.
//     a.b();
//   }