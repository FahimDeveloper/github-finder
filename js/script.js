let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();
let search = () =>{
    let userText = searchUser.value;
    if(userText != ""){
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data =>{
            if(data.message === "Not Found"){
                ui.showAlert("User Not Found", "alert-danger");
            }else{
                //showProfile
                ui.showProfile(data);
            }
        })
    }else{
       ui.clearProfile();
       ui.showAlert("Please search user", "alert-danger");
    }
}
searchBtn.addEventListener("click", search);
