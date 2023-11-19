formInput = document.getElementById('search-input')
document.getElementById('time').innerHTML = updateTime()


setInterval(()=>{
    document.getElementById('time').innerHTML = updateTime()
    document.title = 'Search - ' + formInput.value
    if((formInput.value).includes('youtube')){
        document.body.style.background = `red`
        formInput.style.color = 'red'
    }
    else if(((formInput.value).toLowerCase()).includes('twitch')){
        document.body.style.background = `purple`
        formInput.style.color = 'purple'
    }
    else if(((formInput.value).toLowerCase()).includes('amazon')){
        document.body.style.background = `orange`
        formInput.style.color = 'orange'
    }
    else if(((formInput.value).toLowerCase()).includes('instagram')){
        document.body.style.background = `purple`
        formInput.style.color = 'purple'
    }
    else if(((formInput.value).toLowerCase()).includes('tiktok')){
        document.body.style.background = `black`
    }
    else if(((formInput.value).toLowerCase()).includes('twitter')){
        document.body.style.background = `#00acee`
        formInput.style.color = '#00acee'
    }
    else if(((formInput.value).toLowerCase()).includes('github')){
        document.body.style.background = `#333`
formInput.style.color = '#333'
    }
    else{
        document.body.style.background = ``
        formInput.style.color = 'black';
    }

},40)


function checkUrl(url){
    if(url.includes('.')){
        if(!url.includes(' ')){
            if(!url.slice(-1).includes('.')){
                return true
            }
        }
    }
    return false
}

function updateTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();    
    if(hours == 0)
    {
        hours= 0;
    }
    if(hours < 10)
    {
        hours = "0" + hours;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds;
    return time;
}

function validateForm(){
    if(checkUrl(formInput.value) == true){
        if(!formInput.value.startsWith("http")){
            console.log('hey')
            window.location.href = 'https://' + formInput.value
        }
        else{
            window.location.href = formInput.value
        }
        return false
    }
    else if(formInput.value.includes('twitch')){
        window.location.href = 'https://www.twitch.tv/search?term=' + (formInput.value).replace('twitch', '')

        return false
    }
    else if(formInput.value.includes('youtube')){
        window.location.href = 'https://www.youtube.com/results?search_query=' + (formInput.value).replace('youtube', '')

        return false
    }
    else if(formInput.value.includes('amazon')){
        window.location.href = 'https://www.amazon.com/s?k=' + (formInput.value).replace('amazon', '')

        return false
    }

    else if(formInput.value.includes('tiktok')){
        window.location.href = 'https://www.tiktok.com/search?q=' + (formInput.value).replace('tiktok ', '')

        return false
    }
    else if(formInput.value.includes('twitter')){
        window.location.href = 'https://twitter.com/search?q=' + (formInput.value).replace('twitter', '')

        return false
    }

    else if(formInput.value.includes('github')){
        window.location.href = 'https://github.com/search?q=' + (formInput.value).replace('github', '')

        return false
    }

    return true
}