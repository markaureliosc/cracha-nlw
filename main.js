const LinksSocialMedia = {
  github: 'markaureliosc',
  youtube: 'maykbrito',
  facebook: 'santanacruz.marcoaurelio',
  instagram: 'markaureliosc',
  twitter: 'markaureliosc'
}

function changeSocialMediaLinks() {
  for (li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()