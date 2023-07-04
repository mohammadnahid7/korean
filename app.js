const words = {
   lesson1: [
      ["한국", "Korea"],
      ["도시", "City"],
      ["도시", "city"],
      ["이름", "name"],
      ["저", "I, me (formal)"],
      ["나", "I, me (informal)"],
      ["남자", "man"],
      ["여자", "woman"],
      ["이", "this"],
      ["그", "that"],
      ["저", "that (when something is far away)"],
      ["것", "thing"],
      ["이것", "this (thing)"],
      ["그것", "that (thing)"],
      ["저것", "that (thing)"],
      ["의자", "chair"],
      ["탁자", "table"],
      ["선생님", "teacher"],
      ["침대", "bed"],
      ["집", "house"],
      ["차", "car"],
      ["사람", "person"],
      ["책", "book"],
      ["컴퓨터", "computer"],
      ["나무", "tree/wood"],
      ["소파", "sofa"],
      ["중국", "China"],
      ["일본", "Japan"],
      ["문", "door"],
      ["의사", "doctor"],
      ["학생", "student"],
   ],
   lesson2:[
      ['나라', 'country'],
      ['가방', 'bag/backpack'],
      ['창문', 'window'],
      ['잡지', 'magazine'],
      ['방', 'room'],
      ['냉장고', 'refrigerator'],
      ['개', 'dog'],
      ['고양이', 'cat'],
      ['펜', 'pen'],
      ['전화기', 'phone'],
      ['커피', 'coffee'],
      ['식당', 'restaurant'],
      ['건물', 'building'],
      ['텔레비전', 'television'],
      ['미국', 'USA'],
      ['캐나다', 'Canada'],
      ['호텔', 'hotel'],
      ['학교', 'school'],
      ['은행', 'bank']
  ]
}

let allWords = []
let mode = localStorage.getItem("mode") || "a";
let lessonNum = localStorage.getItem("lesson") || 'all';



const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const txtArea = document.getElementById("txtArea");
const ans = document.getElementById("ans");
const dropdown = document.getElementById("mode");
const lesson = document.getElementById("lesson");


const lessonHandler = ()=>{
   if(lessonNum == "all"){
      for (const lesson in words) {
         allWords = allWords.concat(words[lesson].flat(1))
      }
   }else{
      allWords = words[lessonNum].flat(1)
   }
}
const handleMode = () => {
   if (mode == "a") {
      num = Math.floor(Math.random() * allWords.length);
   } else if (mode == "b") {
      let random = Math.floor(Math.random() * allWords.length);
      num = random % 2 != 0 ? random - 1 : random;
   } else if (mode == "c") {
      let random = Math.floor(Math.random() * allWords.length);
      num = random % 2 != 1 ? random + 1 : random;
   }
   txtArea.textContent = allWords[num];
};

lesson.querySelector("label").textContent = lesson.querySelector(`#${lessonNum}`).textContent;
dropdown.querySelector("label").textContent = dropdown.querySelector(`#${mode}`).textContent;
lessonHandler()
let num = Math.floor(Math.random() * allWords.length);
handleMode();

console.log(allWords)

nextBtn.addEventListener("click", () => {
   handleMode();
});

ans.addEventListener("click", () => {
   txtArea.textContent = `${allWords[num]} = ${
      num % 2 == 0 ? allWords[num + 1] : allWords[num - 1]
   }`;
});
dropdown.addEventListener("click", (e) => {
   if (e.target.tagName == "A") {
      e.target.parentElement.parentElement.blur();
      dropdown.getElementsByTagName("label")[0].textContent =
         e.target.textContent;
      mode = e.target.id;
      localStorage.setItem("mode", e.target.id);
      handleMode()
   }
   // console.log(e.target.id);
});
lesson.addEventListener("click", (e) => {
   if (e.target.tagName == "A") {
      e.target.parentElement.parentElement.blur();
      lesson.getElementsByTagName("label")[0].textContent =
         e.target.textContent;
      lessonNum = e.target.id;
      localStorage.setItem("lesson", e.target.id);
      lessonHandler()
      handleMode()
   }
   // console.log(e.target.id);
});
