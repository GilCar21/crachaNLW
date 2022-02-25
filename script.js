const LinksSocialMedia = {
    github: 'GilCar21',
    facebook: 'gilberto.carvalho.21',
    instagram: 'gilberto_carvalho21'
}
//function changeSocialMediaLinks(){
    //document.getElementById('userName').textContent = "Gilberto Carvalho"
    // faz a mesma coisa
    //userName.textContent = "Gilberto Jorge"

    //for(let li of socialLinks.children){
        //li.getAttribute('class')
        //pega as class
        //pega o primeiro filho de li e pega href da para adicionar coisas 
        //alert(li.children[0].href)
    //}
//}
//changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = "https://api.github.com/users/GilCar21"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        image.src = data.avatar_url
        document.querySelector("#userName").innerHTML = data.name
        //userName.textContent = data.name
        githubLink.href = data.html_url
        description.textContent = data.bio
        UserLogin.textContent = data.login
    })
}

getGitHubProfileInfos()