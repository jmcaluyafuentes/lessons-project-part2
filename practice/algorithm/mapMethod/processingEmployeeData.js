const employees = [
    { id: 1, name: 'Alice', hoursWorked: 45, hourlyRate: 20 },
    { id: 2, name: 'Bob', hoursWorked: 38, hourlyRate: 25 },
    { id: 3, name: 'Charlie', hoursWorked: 50, hourlyRate: 15 }
];

function processEmployeeData(employees) {

    
    return employees.map(employee => {
        const { id, name, hoursWorked, hourlyRate } = employee

        const regularHours = Math.min(hoursWorked, 40) 
        const overtimeHours = Math.max(hoursWorked - 40, 0)

        // overtimeHours = hoursWorked - 40;
        // overtimeHours <= 0 ? overtimeHours = 0 : overtimeHours;
        
        const overtimeEarnings = overtimeHours * hourlyRate * 1.5;
        const weeklyEarnings = (regularHours * hourlyRate) + overtimeEarnings;
    
        return ({
            id: id,
            name: name,
            weeklyEarnings: weeklyEarnings,
            overtimeEarnings: overtimeEarnings
        })
    })
}

const employeesSalaries = processEmployeeData(employees)

console.log(employeesSalaries)