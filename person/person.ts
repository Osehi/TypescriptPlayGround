// basic human information at birth
// use interface to represent it
interface Person {
    firstName: string,
    lastName: string,
    gender: string,
    location: string
};

// as a responsible citizen
// the following data describes this citizen
interface Citizen extends Person {
    occupation: string,
    maritalStatus: string,
    religion: string,
    salary: number,
    education: string
}

// going deep to know more about the person
// this data describes the behaviour of the person
interface Personality {
    personality: string,
    favoriteFood: string,
    touristDestination: string
}

// Case 1
// My new born baby
// congratulations, what a cute young prince you have
function welcomeYoungPrince(identity:Person){
    console.log("Here is my young prince details")
    console.log(identity)
}
welcomeYoungPrince({
    firstName: "Love",
    lastName: "Ehilen",
    gender: "Female",
    location: "MaryLand"
})

//Case 2
// My young prince is now serving in the Polish multinational as a CTO
// He now a responsible citizen.
// You are welcome to the first day at work
function executiveYoungPrince(info: Citizen){
    console.log("Hello Love, you are such a responsible Prince. I am well pleased with you.")
    console.log(info)
}
executiveYoungPrince({
    firstName: "Love",
    lastName: "Ehilen",
    gender: "Female",
    location: "Mary Land",
    occupation: "Software Engineer",
    maritalStatus: "Single",
    education: "MIT",
    religion: "Christianity",
    salary: 240000
});

// Case 3.
// I want to find out the personality of Love
// I will use Union for that
// this union helps to implement inheritance ]
function personalityCheck(cognitnTest: Citizen | Personality){
    console.log("I am interested to know the personality of the young Prince")
    console.log(cognitnTest)
}
personalityCheck({
    education: "MIT",
    favoriteFood: "Rice",
    firstName: "Love",
    gender: "Female",
    lastName: "Ehilen",
    location: "Mary Land",
    maritalStatus: "Single",
    occupation: "Software Engineer",
    personality: "Sanguine",
    religion: "Christianity",
    salary: 300000,
    touristDestination: "USA"
});

