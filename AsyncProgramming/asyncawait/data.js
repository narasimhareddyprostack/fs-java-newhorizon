let employees = [{ "id": 1, "name": "Dyana", "email": "dlamble0@usda.gov", "gender": "Female" },
{ "id": 2, "name": "Jacklyn", "email": "jsans1@bravesites.com", "gender": "Male" },
{ "id": 3, "name": "Devlen", "email": "dfrane2@jimdo.com", "gender": "Bigender" },
{ "id": 4, "name": "Pia", "email": "pbatalle3@parallels.com", "gender": "Female" },
{ "id": 5, "name": "Kati", "email": "kphilpault4@intel.com", "gender": "Female" },
{ "id": 6, "name": "Wilhelmine", "email": "wlongworth5@imageshack.us", "gender": "Male" },
{ "id": 7, "name": "Barth", "email": "bmoorfield6@aol.com", "gender": "Female" },
{ "id": 8, "name": "Peterus", "email": "pbasey7@ovh.net", "gender": "Bigender" },
{ "id": 9, "name": "Sabine", "email": "szanneli8@ycombinator.com", "gender": "Male" },
{ "id": 10, "name": "Ermina", "email": "egalton9@homestead.com", "gender": "Bigender" }]


let createEmployee = (emp) => {
    console.log("Test Case 123");
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? reslove("Data Inserted") : reject("Not inserted")
            employees.push(emp)
        }, 3000);

    })
}
let getEmployee = () => {
    console.log("Test Case 124");
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee) => {
            rows = rows + `<tr> 
            <td> ${employee.id}</td>
            <td> ${employee.name}</td>
            <td> ${employee.email}</td>
            <td> ${employee.gender}</td>
            </tr>`
        })
        document.getElementById("tbody-data").innerHTML = rows
    }, 1000)
}

let run = async () => {
    console.log("Test Case 125");
    await createEmployee({ id: 11, name: "Rahul Gandhi", email: "rahul@gmail.com" })
    getEmployee()
}

run()