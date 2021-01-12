class UI{

    // Create elements for profile section and display profile data
    static displayProfile(jsonProfile){
        let profile = JSON.parse(jsonProfile);
        let element = document.getElementById("profile-info");
        element.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${profile.avatar_url}">
                        <a href="${profile.html_url}" target="_blank" class="btn btn-primary d-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos: ${profile.public_repos}</span>
                        <span class="badge bg-secondary">Public Gists: ${profile.public_gists}</span>
                        <span class="badge bg-success">Followers: ${profile.followers}</span>
                        <span class="badge bg-info">Following: ${profile.following}</span>
                        <br><br>
                        <p>${profile.bio}</p>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${profile.company}</li>
                            <li class="list-group-item">Website: ${profile.blog}</li>
                            <li class="list-group-item">Location: ${profile.location}</li>
                            <li class="list-group-item">Member Since: ${profile.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>`
    }

    // Create and display items for the repositories section.
    static displayRepositories(jsonRepos){
        let repos = JSON.parse(jsonRepos)
        repos = repos.slice(0, 5);
        let element = document.querySelector("#repo-list");
        let output = ``;
        for(let i = 0; i < repos.length; i++){
            output += `
                <a href="${repos[i].html_url}" target="_blank" class="list-group-item">${repos[i].name}</a>`            
        }
        element.innerHTML = output;
    }

}