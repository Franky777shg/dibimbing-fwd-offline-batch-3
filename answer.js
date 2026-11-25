const student = {
  name: "Budi",
  age: 20
};

// Cara Buatnya
const updateStudent = (data, ...hobbies) => {
    let result = {
        name: data.name,
        age: data.age,
        hobbies
    }
    console.log(result)
}

// Cara memanggilnya
updateStudent(student, "Gaming", "Reading");

// {
//   name: "Budi",
//   age: 20,
//   hobbies: ["Gaming", "Reading"]
// }
