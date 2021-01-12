// GLOBAL ELEMENTS
const searchUserBtn = document.getElementById("search-user-btn");
const loader = document.querySelector("#loadingSpan");
let textInput = document.getElementById("search-user");

// EVENT LISTENER
searchUserBtn.addEventListener("click", searchUsers);

// EVENT HANDLER
function searchUsers(){
  // Retrieve input text
  let text = textInput.value.trim().toLowerCase();
  if(text != ""){
    // Retrieve and display user profile
    if(navigator.onLine){
      // Display spinner
      loader.style.display = "inline-block";
      try{
        // Retrieve and display user profile
        GithubRequest.getUser(text).then((jsonProfile) => {     
          UI.displayProfile(jsonProfile);
          loader.style.display = "none";
        }).catch(() => {
          Alert.show("no-user-found");
          loader.style.display = "none";
        });
        // Retrieve and display user repositories
        GithubRequest.getUserRepos(text).then((jsonRepos) => {
          UI.displayRepositories(jsonRepos);
        });
      }
      catch(error){
        Alert.show("catch-error");
      }
    }
    else{
      Alert.show("offline");
    }
  }
  else{
    Alert.show("no-input");
  }
}