let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
function male(list) {
  let count = 0;
  for (i = 0; i < list.length; i++) {
    count += students[i].gender;
    let j = 0;
    let g = 0;
    if (count == "male") {
      let gh = i++;
      console.log(gh);
    } else {
      g++;
      console.log(g);
    }
  }
}
male(students);
