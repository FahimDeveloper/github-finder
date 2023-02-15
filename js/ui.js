class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
    }
    showProfile(data) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3 mt-5">
            <div class="row">
                <div class="col-md-3 text-center">
                   <img class="img-fluid mb-2 img-thumbnail rounded-circle" src="${data.avatar_url}" alt="Image blank">
                   <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary p-2">Public Repos : ${data.public_repos}</span>
                    <span class="badge bg-secondary p-2">Public Gists : ${data.public_gists}</span>
                    <span class="badge bg-success p-2">Followers : ${data.followers}</span>
                    <span class="badge bg-info p-2">Following : ${data.following}</span>
                    <br>
                    <ul class="list-group mt-3">
                        <li class="list-group-item">Company : ${data.company}</li>
                        <li class="list-group-item">Website/Blog : <a style="text-decoration: none; href="${data.blog}">${data.blog}</a></li>
                        <li class="list-group-item">Location : ${data.location}</li>
                        <li class="list-group-item">Member Since : ${data.created_at}</li>
                    </ul>
                </div>            
            </div>
        </div>
        `;
    }
    clearProfile() {
        this.profile.innerHTML = "";
    }
    showAlert(message, className) {
        this.profile.innerHTML = `
        <div class="alert ${className} d-flex align-items-center mt-5" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                ${message}
            </div>
        </div>`;
        setTimeout(() => {
            document.querySelector("#profile").innerHTML = "";
        }, 3000)
    }
}