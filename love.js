function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1=="" || name2==""){
        alert("Please enter both names");

    }else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const Result = document.getElementById("result");
        Result.innerHTML = `Your love percentage is ${lovePercentage}%`;

        if(lovePercentage < 30){
            Result.innerHTML += "<br> Not a Greate Match...:(...Keep Looking!"
        }
        else if(lovePercentage >=30 && lovePercentage < 70){
            Result.innerHTML += "<br> It's a Good Match! You both are compatible!"
        }
        else{
            Result.innerHTML += "<br> It's a Perfect Match!!! You both are meant to be together"
        }

    }
}