//loops and arrays part 2

//Challenge: you are working at a very fancy new nightclub and in charge of letting people in based on their age.
//If they are not 21 years of age, you cannot let them in. 
//Please send them a nice personalised message letting them know.

//Dont forget to share your code on the #share-your-code channel on discord.

const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
]




for (let i = 0; i < nightClubRegister.length; i++ ) {
   if(nightClubRegister[i].age < 21) {
       if(nightClubRegister[i].gender === 'male') {
           console.log('Sorry Mr ' + nightClubRegister[i].lastname + 
           ', you are not old enough to attend')
       }
       if(nightClubRegister[i].gender === 'female') {
           console.log('Sorry Mrs/Miss ' + nightClubRegister[i].lastname + 
           ', you are not old enough to attend')
       }
   }
   if(nightClubRegister[i].age >= 21) {
    if(nightClubRegister[i].gender === 'male') {
        console.log('Welcome Mr ' + nightClubRegister[i].lastname + 
        ', you are on the list')
    }
    if(nightClubRegister[i].gender === 'female') {
        console.log('Welcome Mrs/Miss ' + nightClubRegister[i].lastname + 
        ', you are on the list')
    }
   }
}
    