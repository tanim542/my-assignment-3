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
// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
