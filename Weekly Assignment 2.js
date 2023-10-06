var userScore = 0
var compScore = 0
var tie = 0

var header1 = document.createElement("h2")
var header2 = document.createElement("h2")
var header3 = document.createElement("h2")
var header4 = document.createElement("h2")

function rock()
{
    let computer = Math.floor(Math.random() * 3) + 1

    if (computer == 1)
    {
        header1.innerHTML = "You chose Rock"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Scissors"
        document.body.appendChild(header2)
        header3.innerHTML = "You win!"
        document.body.appendChild(header3)
        userScore += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
    else if (computer == 2)
    {
        header1.innerHTML = "You chose Rock"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Rock"
        document.body.appendChild(header2)
        header3.innerHTML = "You tied!"
        document.body.appendChild(header3)
        tie += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
    else
    {
        header1.innerHTML = "You chose Rock"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Paper"
        document.body.appendChild(header2)
        header3.innerHTML = "Computer wins!"
        document.body.appendChild(header3)
        compScore += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
}

function paper()
{
    let computer = Math.floor(Math.random() * 3) + 1

    if (computer == 1)
    {
        header1.innerHTML = "You chose Paper"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Rock"
        document.body.appendChild(header2)
        header3.innerHTML = "You win!"
        document.body.appendChild(header3)
        userScore += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
    else if (computer == 2)
    {
        header1.innerHTML = "You chose Paper"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Paper"
        document.body.appendChild(header2)
        header3.innerHTML = "You tied!"
        document.body.appendChild(header3)
        tie += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
    else
    {
        header1.innerHTML = "You chose Paper"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Scissors"
        document.body.appendChild(header2)
        header3.innerHTML = "Computer wins!"
        document.body.appendChild(header3)
        compScore += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
}

function scissors()
{
    let computer = Math.floor(Math.random() * 3) + 1

    if (computer == 1)
    {
        header1.innerHTML = "You chose Scissors"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Paper"
        document.body.appendChild(header2)
        header3.innerHTML = "You win!"
        document.body.appendChild(header3)
        userScore += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
    else if (computer == 2)
    {
        header1.innerHTML = "You chose Scissors"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Scissors"
        document.body.appendChild(header2)
        header3.innerHTML = "You tied!"
        document.body.appendChild(header3)
        tie += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
    else
    {
        header1.innerHTML = "You chose Scissors"
        document.body.appendChild(header1)
        header2.innerHTML = "Computer chose Rock"
        document.body.appendChild(header2)
        header3.innerHTML = "Computer wins!"
        document.body.appendChild(header3)
        compScore += 1
        header4.innerHTML = "<center>User Score: " + userScore + " Computer Score: " + compScore + " Ties: " + tie + "</center>"
        document.body.appendChild(header4)
    }
}