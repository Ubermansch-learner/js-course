
    function createCard(title,cName,views,monthsOld,duration,thumbnail){
       
       let viewStr;
        if(views<1000){
             viewStr= views ;
        }
        else if(views>1000000){
            viewStr= views/1000000 + "M";
        }
        else{
            viewStr=views/1000 + "K";
        }

        //create a card
      let html = `  <div class="card">
           
                <div class="thumbnail">
                    <img src="${thumbnail}"
                    alt="">
                     <div class="capsule">${duration}</div>

               
            </div>
            <div class="rightbox">
                <div class="title">
                      <h1>${title}</h1>
                </div>
                <div class="footer">
                    
                       <p>${cName}. ${viewStr} views . ${monthsOld} months ago</p>
                    
                </div>

            
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    }
         
    createCard("Introduction to Express Js | Sigma web dev #1", "Code with Harry", 900000,3,"32:12","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
    createCard("Introduction to Express Js | Sigma web dev #2", "Code with Harry", 90,3,"39:02","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
    createCard("Introduction to Node Js | Sigma web dev #3", "Code with Harry", 2000000,3,"1:12:02","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

    
