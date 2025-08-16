function totalFine(fare) {
    if (typeof fare === 'number' && fare > 0) {
        fine = fare + (fare * (20 / 100)) + 30;
        return fine;
    }
    else {
        return "Invalid";
    }
}
function  onlyCharacter( str ) {
          if(typeof str === 'string'){
            return str.split(' ').join('').toUpperCase();
          }
          else{
            return "Invalid";
          }
}
function bestTeam(player1, player2) {
    if (typeof player1 === 'object' && typeof player2 === 'object') {
        const t1 = player1.foul + player1.cardY + player1.cardR;
        const t2 = player2.foul + player2.cardY + player2.cardR;
        if (t1 < t2) {
            return player1.name;
        }
        else if (t1 > t2) {
            return player2.name;
        } else {
            return "Tie";
        }
    } else {
        return "Invalid";
    }

}
function isSame(arr1, arr2) {

    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length === arr2.length) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }

            }
            return true;

        }
        else {
            return false;
        }
    }
    else {
        return "Invalid";
    }
}
function resultReport(marks) {
    if (Array.isArray(marks)) {
        if (marks.length === 0){
            return {
                finalScore: 0,
                pass: 0,
                fail: 0,
            };
        }
        else{
            const result = {
            finalScore: 0,
            pass: 0,
            fail: 0
        };
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            if (marks[i] >= 40 && marks[i] <= 100) {
                sum += marks[i];
                result.pass += 1;
            }
            else {
                sum += marks[i];
                result.fail += 1;
            }
        }
        if (typeof result.finalScore === 'number') {
             result.finalScore = Math.round(sum / marks.length);
        }
        else {
            result.finalScore = 0;
        }
        return result;
        }
    }
    else {
        return "Invalid";
    }
}