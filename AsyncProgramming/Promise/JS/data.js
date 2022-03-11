let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false
            employees.push(emp);
            flag ? resolve("Data Inserted") : reject("Not Inserted")
        }, 3000)
    })
}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.map((emp) => {
            rows += `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.salary}</td>
                    </tr>`
        })
        document.getElementById('tbody-data').innerHTML = rows
    }, 1000)
}
createEmployee({ id: 103, name: "Priyanka", salary: 65000 })
    .then((msg) => {
        console.log(msg)
        getEmployee()
    })
    .catch((err) => {
        console.log(err)
    })
