const sakeonigiri = Boolean => {
  if (Boolean === true) {
    return "鮭おにぎりウメェ〜！";
  } //elseはいらない！
  return "違う具だった〜";
};
console.log(sakeonigiri(true));
console.log(sakeonigiri("紀州梅"));

//JSおじさんメモのコピー：onigiriより、sakeonigiriにした方がいい