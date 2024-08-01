const employees = [
    { name: 'John', salaryUSD: 90000 },
    { name: 'Mark', salaryUSD: 120000 }
]

console.log(typeof employees[0].salaryUSD)

function adjustSalaries(employees) {
    return employees.map(emp => ({
            name: emp.name, 
            salaryUSD: Math.round(emp.salaryUSD * 1.10)
    }));
}

const employeesNewSalaries = adjustSalaries(employees)

console.log(employeesNewSalaries)

console.log(typeof employeesNewSalaries[0].salaryUSD)