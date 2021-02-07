//Progression 1:


//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {

    concatenated = typeof (address) + typeof (distanceFromTown) + typeof (hasNeighbours);
    //console.log(concatenated);
    return concatenated;
}



//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean



function moreAboutKaren(parents, noOfSiblings, isNuclearFamily ) {

    //console.log(typeof(arg_1)+ typeof(arg_2)+ typeof(arg_3))
    if (typeof (parents) + typeof (noOfSiblings) + typeof (isNuclearFamily ) == "stringnumberboolean") {
        //console.log("true");
        return true;
    }

    if (typeof (parents) != String && typeof (noOfSiblings) != Number && typeof (isNuclearFamily ) != Boolean) {
        // console.log("false");
        return false;

    }
}


//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value


function doesFriendExist(ageInText, ageInNumber ) {

    if (ageInText == "") {
        return NaN;
    } else {
        return ageInText;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?


function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    var i = 0;
    switch (i) {


        case 0:
            if (typeof (totalNoOfSweets) == "string") {
                console.log(typeof (totalNoOfSweets))
                //console.log(typeof (totalNoOfSweets) , typeof (sweetsConsumedByKaren) , typeof (sweetsConsumedInNMeters) , typeof (metersToTravel))
                console.log("case 0 runs")
                return "No sweets for Karen's friend";

            }

            case 1:
                if (totalNoOfSweets = sweetsConsumedByKaren + sweetsConsumedInNMeters * metersToTravel) {
                    //console.log(totalNoOfSweets)
                    //console.log(typeof (totalNoOfSweets) , typeof (sweetsConsumedByKaren) , typeof (sweetsConsumedInNMeters) , typeof (metersToTravel))
                    console.log("case 1 runs")
                    return 0;
                }
                case 2:
                    if (totalNoOfSweets == 0 && sweetsConsumedByKaren == 0 && sweetsConsumedInNMeters == 0 && metersToTravel == 0) {
                        console.log("case 3 runs")
                        //console.log(typeof (totalNoOfSweets) , typeof (sweetsConsumedByKaren) , typeof (sweetsConsumedInNMeters) , typeof (metersToTravel))

                        return 0;

                    }

                    case 3:
                        if ((typeof (totalNoOfSweets) || typeof (sweetsConsumedByKaren) || typeof (sweetsConsumedInNMeters) || typeof (metersToTravel)) != Number) {
                            //console.log(typeof (totalNoOfSweets) , typeof (sweetsConsumedByKaren) , typeof (sweetsConsumedInNMeters) , typeof (metersToTravel))
                            console.log("case 2 runs");
                            return "No sweets for Karen's friend";

                        }


    }



    // if (totalNoOfSweets = sweetsConsumedByKaren + sweetsConsumedInNMeters * metersToTravel) {
    //     console.log(totalNoOfSweets)
    //     return 0;
    // }

    // if ((typeof (totalNoOfSweets) || typeof (sweetsConsumedByKaren) || typeof (sweetsConsumedInNMeters) || typeof (metersToTravel)) == NULL) {

    //     return "No sweets for Karen's friend";
    // }

    // if ((typeof (totalNoOfSweets) || typeof (sweetsConsumedByKaren) || typeof (sweetsConsumedInNMeters) || typeof (metersToTravel)) != Number) {
    //     console.log("Not Number")
    //     return "No sweets for Karen's friend";
    // }




}


//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.


function convertToCelsius(fahrenheit) {
    //console.log(fahrenheit)
    //console.log(typeof(fahrenheit))

    if (typeof (fahrenheit) !== "number") {
        //console.log("if loop")
        return "Technical Error!";

    } else {

        celsius = Math.round((fahrenheit - 32) * 0.5556);
        //console.log("else loop");
        return celsius;

    }
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take


function aDifficultChoice(choice) {
    //console.log(choice);
    if (choice == 1) {
        return "Take her daughter to a doctor"
    }
    if (choice == -1) {
        return "Break down and give up all hope"
    }
    if (choice == undefined) {
        return "Wasn't able to decide"

    }
    if (choice == "I give up") {
        return "Refused to do anything for Karen"
    }


}


//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies) {

}