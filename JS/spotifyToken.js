

const clientId = '33232f92735a4d37902fe50b38815b50';

const clientSecret = '4f3f3abaf1b44862b9eef4dddc243e0d';

const redirectUri = 'http://127.0.0.1:5500/index.html';

spotifyImage = document.querySelector(".ImageSpotify")
spotifyTitle = document.querySelector(".SpotifyTitle")

artistImage = document.querySelectorAll(".imageArtist")
artistName = document.querySelectorAll(".artistName")


const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

if (code == null){
  window.location.href = 'http://127.0.0.1:5500/authorize.html'
}
let codeVerifier = localStorage.getItem('code_verifier');
let body = new URLSearchParams({
  grant_type: 'authorization_code',
  code: code,
  redirect_uri: redirectUri,
  client_id: clientId,
  code_verifier: codeVerifier
});




const response = fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body
})
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    
    localStorage.setItem('access_token', data.access_token);

   
 
}
    
  )
  .catch(error => {
    console.error('Error:', error);
  });

  const authCodeObtainedTime = Date.now(); // Enregistrez le temps actuel en millisecondes
  const authCodeValidityPeriod = 3600000; 
  const checkValidityInterval = 3601000; // Intervalle de vérification en millisecondes (par exemple, 1 seconde)
  
  function checkAuthCodeValidity() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - authCodeObtainedTime;
  
    if (elapsedTime > authCodeValidityPeriod) {
      window.location.href = 'http://127.0.0.1:5500/authorize.html'
      console.log("Le code d'authentification a expiré");
    } else {
    
      setTimeout(checkAuthCodeValidity, checkValidityInterval); // Planifiez la prochaine vérification
    }
  }
  
  checkAuthCodeValidity();
  




