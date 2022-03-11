let doTask = (success, failure) => {
    let flag = false;
    flag ? success("Task Completed") : failure("Not Completed");
}
//doTask(()=>{},()=>{})
doTask((msg) => {
    console.log(msg)
}, (err) => {
    console.error(err)
})