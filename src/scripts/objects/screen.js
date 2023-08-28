const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user){
    this.userProfile.innerHTML = `  <div class="info">
    <img src="${user.avatarUrl}" alt="foto do perfil do usuario" />
    <div class="data">
      <h1> ${user.name ?? 'Não possui nome cadatrado'}</h1>
      <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
      <p>Followers: ${user.followers}</p>
      <p>Following: ${user.following}</p>
    </div>
  </div>`
  
    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
    <div class="icons">
    <div class="icon">🍴${repo.forks} </div>
    <div class="icon">⭐${repo.stargazers_count} </div>
    <div class="icon">👀${repo.watchers} </div>
    <div class="icon">👩‍💻${repo.language}</div>
    </div></li>`)

    if(user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
      <h2> Repositórios </h2>
      <ul>${repositoriesItens}</ul>
    </div>`
    }

    let eventsItens = ''
    
    user.events.forEach(repo => {

      let repoName = repo.repo.name
      let message = repo.payload.commits?.[0].message
      let eventType = repo.type;

      if(eventType === 'PushEvent') {
        eventsItens += `<li>${repoName} - ${message}</li>`
      }

    })
    

    if(user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
      <h2>Events</h2>
      <ul class="event">${eventsItens}</ul>
      </div>`
    }

  },
  renderNotFound(){
      this.userProfile.innerHTML = `<h3>Usuario nao encontrado</h3>`
  }
}

export{screen}