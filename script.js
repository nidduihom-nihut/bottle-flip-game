/* import random


bottle_flip = ['Tuni', 'Ahammok', 'Lobon', 'Taspin', 'Dim', 'Yeasmin'];

ask = (random.choice(bottle_flip))
answer = (random.choice(bottle_flip))

print("Jigaibo "+ ask)
print(answer + " Answer dibo")


*/




function td() {
    const players = ['Mehjabin', 'Tasmin', 'Yeasin', 'Mim', 'Labonno', 'Tuhinn'];




    const random1 = Math.floor(Math.random() * players.length)
    var b=(random1, players[random1]);
    document.getElementById("ask").innerHTML=b;

    

    const ansPlayers = ['Mehjabin', 'Tasmin', 'Yeasin', 'Mim', 'Labonno', 'Tuhinn'];
    const random = Math.floor(Math.random() * ansPlayers.length)
    var c=(random, players[random]);
    document.getElementById("ans").innerHTML=c;
}


