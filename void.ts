function returnVoid(message: string) {
  // return문이 없어도 마우스 올려보면 void라고 type 추론이 된다.
  console.log(message);

  return undefined;
}

returnVoid("리턴이 없다.");
