class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body">
      <div class="row">
        <div class="col-md-3">
          <img
            src="${user.avatar_url}"
            alt="user image"
            class="img-fluid mb-2"
          />
          <a
            href="${user.html_url}"
            target="_blank"
            class="btn btn-primary btn-block mb-4"
            >View Profile</a
          >
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary"
            >Public Repos: ${user.public_repos}</span
          >

          <span class="badge badge-secondary"
            >Public Gists: ${user.public_gists}</span
          >
          <span class="badge badge-success"
            >Followers: ${user.followers}</span
          >
          <span class="badge badge-info"
            >Following: ${user.following}</span
          >
          <br><br>
          <ul class="list-groups">
            <li class="list-group-items">Company: ${user.company}</li>
            <li class="list-group-items">Website/Blog:<a href="${user.blog}" target="_blank">${user.blog} </a></li>
            <li class="list-group-items">Location: ${user.location}</li>
            <li class="list-group-items">Member Since: ${user.created_at}</li>
          </ul>
          </div>
          </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos </h3>
          <div id= "repos"></div>
          
          `;
  }

  clearProfile() {
    this.profile.innerHTML = ``;
  }

  showRepos(repos) {
    let op = '';

    repos.forEach((repo) => {
      op += `<div class="card card-body mb-2">
                     <div class="row">
                       <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                       </div>

                       <div class="col-md-6">
                           <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                           <span class="badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
                           <span class="badge badge-success">  Forks: ${repo.forks_count}</span>
                       </div>
                     </div>
               </div>`;
    });

    //output the repos
    document.getElementById('repos').innerHTML = op;
  }

  showAlert(message, className) {
    //clear any remaining alerts
    this.clearAlert();

    //Create div
    const div = document.createElement('div');
    //Add class
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector('.searchContainer');
    //Ger search Box
    const search = document.querySelector('.search');
    //Insert Alert
    container.insertBefore(div, search);
    this.profile.innerHTML = ``;

    //Timeout after 2 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
