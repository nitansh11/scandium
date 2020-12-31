function onSignIn(googleUser){
    console.log(googleUser);
    let profile = googleUser.getBasicProfile();
    console.log(profile);
    console.log(profile.getImageUrl());
    console.log(profile.getEmail()); 
}