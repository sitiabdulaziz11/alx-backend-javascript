interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: 'siti',
    lastName: 'abdulaziz',
    age: 26,
    location: 'kenteriy'
}
const stud2: Student = {
    firstName: 'siti2',
    lastName: 'abdulaziz',
    age: 26,
    location: 'kenteriy2'
}

const studList: Student[] = [stud1, stud2];

const table = document.getElementById('studTable');

studList.forEach(student => {
    const row = (table as HTMLTableElement).insertRow();
    const column1 = row.insertCell(0);
    const column2 = row.insertCell(1);
    column1.innerHTML = student.firstName;
    column2.innerHTML = student.location;
});