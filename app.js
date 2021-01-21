//Init Github

const github = new Github();
const ui = new UI();
//Search Input
const searchUser = document.getElementById('searchUser');

//Search input eventlistner
searchUser.addEventListener('keyup', (e) => {
  // get input text

  const userText = e.target.value;
  if (userText !== '') {
    //Make Http Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});
