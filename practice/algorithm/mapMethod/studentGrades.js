const studentGrades = [
    {name: 'John', grade: 95},
    {name: 'Mark', grade: 89}
]

function convertGradesToLetter(studentGrades) {
    let gradeLetter = '';

    return studentGrades.map(student => {
        if (student.grade >= 90) {
            gradeLetter = 'A';
        } else if (student.grade >= 80) {
            gradeLetter = 'B'
        } else if (student.grade >= 70) {
            gradeLetter = 'C'
        } else if (student.grade >= 60) {
            gradeLetter = 'D';
        } else {
            gradeLetter = 'F';
        }

        return ({
            name: student.name,
            gradeLetter: gradeLetter
        })
    })
}

const studentGradesInLetter = convertGradesToLetter(studentGrades)

console.log(studentGradesInLetter)