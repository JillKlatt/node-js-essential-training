const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with NODE JS? "
]

collectAnswers(questions, answers => {
    console.log("Thank you for your answers")
    console.log(answers)
    process.exit()
})