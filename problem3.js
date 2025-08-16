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
// console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));
