let goToMovie = (success, failure) => {
    let money = 300;
    money > 500 ? success("Go To Movie") : failure("Goto Home")
}

goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.error(err)
})