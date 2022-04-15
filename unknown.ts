declare const maybe: unknown;

// Type Guard
if (typeof maybe === "number") {
  const aNumber: number = maybe;
}

if (maybe === true) {
  const aBolean: boolean = maybe;

  //const aString: string = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;

  //const aBolean: boolean = maybe;
}
