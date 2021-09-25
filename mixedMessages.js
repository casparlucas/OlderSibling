const insult = ['idiot','muppet','fool',]
const chore = [
    'wash the car',
    'mow the lawn',
    'tidy the living room',
    'clean the kitchen'
]
const comment = [
    'and we can go to the cinema',
    'or we wont have time to game',
    'then we can relax'
]

function message() {
    var insultGiv = insult[Math.floor((Math.random())* insult.length)]
    var choreGiv = chore[Math.floor((Math.random())* chore.length)]
    var commentGiv = comment[Math.floor((Math.random())* comment.length)]
    return `Wake up ${insultGiv}! You have to ${choreGiv} today. Get it done ${commentGiv}.`
}
console.log(message());
