const pName = "Player"; //プレイヤー名
let pHP   = 100;        //プレイヤーHP
const eName = "モンスター";  //敵名
let eHP   = 100;        //敵HP
let pDamage = Math.ceil(Math.random()* 15); //プレイヤーの攻撃力
let dDamage = Math.ceil(Math.random()* 15); //敵の攻撃力

document.getElementById("eName").textContent = eName;
document.getElementById("pName").textContent = pName;
document.getElementById("eHP").textContent = eHP;
document.getElementById("pHP").textContent = pHP;

document.querySelector("#attack").addEventListener("click", function(){

    let endGame = false;


    eHP -= pDamage;
    pHP -= dDamage;
    document.getElementById("eHP").textContent = eHP; //攻撃後の体力を再度反映
    document.getElementById("pHP").textContent = pHP; //攻撃を受けた後の体力を再度反映
    if (eHP <= 0 ){
        alert("敵をたおした！");
        endGame = true;
    }
    if (pHP <= 0 ){
        alert("あなたは死亡しました");
        endGame = true;
    }
    if (endGame){
    document.querySelector("#attack").classList.add("deactive");
    }
});

