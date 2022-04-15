declare const a: string | number;

function error(message: string): never {
  throw new Error();
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

if (typeof a !== "string") {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;
