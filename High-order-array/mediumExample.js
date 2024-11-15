const students = [
  {
    name: "Alice",
    grade: 85,
    age: 17,
    address: { city: "Toronto", postalCode: "M5A 1A1" },
    subjects: ["Math", "Physics", "English"]
  },
  {
    name: "Bob",
    grade: 92,
    age: 18,
    address: { city: "Mississauga", postalCode: "L5B 4P9" },
    subjects: ["Chemistry", "Biology", "Math"]
  },
  {
    name: "Charlie",
    grade: 78,
    age: 16,
    address: { city: "Toronto", postalCode: "M4B 1B4" },
    subjects: ["History", "English", "Physics"]
  },
  {
    name: "David",
    grade: 95,
    age: 17,
    address: { city: "Brampton", postalCode: "L6Y 1E3" },
    subjects: ["Math", "Computer Science", "Physics"]
  },
  {
    name: "Eva",
    grade: 88,
    age: 18,
    address: { city: "Toronto", postalCode: "M5V 3K1" },
    subjects: ["English", "Biology", "Chemistry"]
  }
];
  
  // 1. Sort: Sort students by age, then by grade (descending) if ages are equal
students.sort((a,b)=>(b.age === a.age) ? b.grade - a.grade : b.age - a.age);
console.log(students);
  
  // 2. Map: Create an array of student names with the first subject they are studying
const mapCourse = students.map( el => el.name + ' ' + el.subjects[0]);
  
  // 3. Filter: Get students who live in Toronto and are taking Physics
const arr = students.filter(el => el.address.city === 'Toronto' && el.subjects.includes("Physics"));
console.log(arr);
  
  // 4. forEach: Log each student's name, age, and the number of subjects they are studying

  students.forEach(el=>console.log(`name: ${el.name}
    age: ${el.age} 
    subjects: ${el.subjects.length}`
   ));