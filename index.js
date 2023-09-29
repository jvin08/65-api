

const buttonEl = document.querySelector('button')

const findActivity = async () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then((data) => {
        
        const activity = data.activity
        document.querySelector('p').innerHTML = activity
        document.querySelector('body').classList.toggle('fun')
    })
}



buttonEl.addEventListener('click', findActivity)

buttonEl.addEventListener('mouseover', function(){
    document.getElementById('bot-1').innerHTML = `🦾 HappyBot 🦿`
    document.getElementById('bot-1').style.color = `#ccbb33`
    

})
buttonEl.addEventListener('mouseout', function(){
    document.getElementById('bot-1').innerHTML = `🤖 BoredBot 🤖`
    document.getElementById('bot-1').style.color = `#333`
})

