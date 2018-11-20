const onigiri = sake => {
  if (sake === true) {
    return "鮭おにぎりウメェ〜！";
  } //elseはいらない！
  return "違う具だった〜";
};
console.log(onigiri(true));
console.log(onigiri("紀州梅"));
