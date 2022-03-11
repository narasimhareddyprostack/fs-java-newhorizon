let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 }]

let createEmplyee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
    }, 3000);


}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.map((emp) => {
            rows = rows + `<tr> 
                        <td> ${emp.id}</td>
                        <td> ${emp.name}</td>
                        <td> ${emp.salary}</td>
                        </tr>`
        })
        document.getElementById('tbody-data').innerHTML = rows
    }, 1000)
}

createEmplyee({ id: 103, name: "Priyanka Gandhi", salary: 65000 })
getEmployee()