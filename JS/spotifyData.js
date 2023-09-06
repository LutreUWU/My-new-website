const accessToken = localStorage.getItem('access_token');
function resetCurrentMusic(){
    const apiUrl = 'https://api.spotify.com/v1/me/player/currently-playing';

    
        const requestOptions = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        };

        // Effectuer la requête GET pour récupérer les informations de lecture actuelles
        fetch(apiUrl, requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('La requête n\'a pas réussi. Statut de réponse : ' + response.status);
            }
            return response.json();
          })
          .then(data => {
            // Faites ce que vous voulez avec les données de lecture actuelles ici


            spotifyImage.src = `${data.item.album.images[0].url}`
            spotifyTitle.textContent = `${data.item.name} - ${data.item.artists[0].name} `

          })
          .catch(error => {
            console.error('Erreur lors de la récupération des informations de lecture actuelles:', error);

          });
    setTimeout(resetCurrentMusic, 1000); 
}



function TopArtist(){
const apiUrl = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=3';

const requestOptions = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
};
    // Effectuer la requête GET pour récupérer les informations de lecture actuelles
    fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('La requête n\'a pas réussi. Statut de réponse : ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Faites ce que vous voulez avec les données de lecture actuelles ici

      const topArtists = data.items.map(item => ({
        name: item.name,
        imageUrl: item.images[0].url 
      }));
      
  
        artistImage.forEach((artist, index) => {
          artist.src = topArtists[index].imageUrl;
        });

        artistName.forEach((name, index) => {
          name.textContent = `${topArtists[index].name}`;
        });
      
     

    })
    .catch(error => {
      console.error('Erreur lors de la récupération des informations de lecture actuelles:', error);

    });

}

function TopOp(){
  const topOp = [
    {
      title: "N1 Op",
      id: "6YSFQShQdR87tMaQEtUfHo",
      name: "takt.op"
    },
  
    {
      title: "N2 Op",
      id: "3COSRKvFPnpnnorNF4oaMf",
      name: "This game"
    },
  
    {
      title: "N3 Op",
      id: "5KAGowqL2Rfmocrgh9cKjF",
      name: "LEVEL"
    },
  
    {
      title: "N4 Op",
      id: "4g7aKp5x4AXEd9KGg8C0T7",
      name: "Tsuki to Hanataba"
    },
  
    {
      title: "N5 Op",
      id: "7cFuyCk2lVEPTHdh1LQzof",
      name: "The Other Side of the Wall"
    },
  
    {
      title: "N6 Op",
      id: "0KB8lRa7AfmWX72pv5UnkO",
      name: "FOREVER LOST"
    },
  
    {
      title: "N7 Op",
      id: "2ATxQ2yeUw3CAGjjPTundt",
      name: "Dark seeks light"
    },
  
    {
      title: "N8 Op",
      id: "7kiWVIA95A2H7TMYSrA0b5",
      name: "Hands Up to the Sky"
    },
  
    {
      title: "N9 Op",
      id: "3WpGtfLL6Tl10WShVb7XJh",
      name: "GIRI-GIRI bordeless world"
    },
  
    {
      title: "N10 Op",
      id: "5biyU0N6WDG7e60GIoCyNQ",
      name: "The Last Chance"
    },
  ]

  const OpImage = document.querySelectorAll(".opImage")
  const OpNameDiv = document.querySelectorAll(".opNameDiv")
  const OpName = document.querySelectorAll(".opName")

  
  topOp.forEach((element, index) => { 
    const apiUrl = `https://api.spotify.com/v1/tracks/${element.id}`;
  
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    };
        fetch(apiUrl, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('La requête n\'a pas réussi. Statut de réponse : ' + response.status);
          }
          return response.json();
        })
        .then(data => {    
          
          constimageUrl = data.album.images[0].url;
          OpImage[index].src = `${constimageUrl}`
          OpName[index].textContent = `${element.name}`

          OpNameDiv.forEach(element => {
            if (element.scrollWidth > element.clientWidth) {
              const titleElement = element.querySelector(".opName")
              titleElement.classList.add("opOverflowAnimation")
            } 
          })

          })
        .catch(error => {
          console.error('Erreur lors de la récupération des informations de lecture actuelles:', error);

        });
  })

  
  
  }


resetCurrentMusic();
TopArtist();
TopOp();


