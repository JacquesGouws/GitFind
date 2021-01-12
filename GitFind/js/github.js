class GithubRequest{

    // Retrieve user profile information - returns json
    static getUser(user){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://api.github.com/users/${user}`, true);
            xhr.onload = function(){
                if(xhr.status === 200) {
                    resolve(this.responseText);
                }
                else if(xhr.status === 404){
                    reject();
                }
            }
            xhr.send();
        });
    }

    // Retrieve user repositories - returns json
    static getUserRepos(user){
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://api.github.com/users/${user}/repos`, true);
            xhr.onload = function(){
                if(xhr.status === 200){
                    resolve(this.responseText);
                }
                else if(xhr.status === 404){
                    reject();
                }
            }
            xhr.send();
        });
    }

}