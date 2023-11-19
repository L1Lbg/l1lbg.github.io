//VAR DECLARATIONS
const recommended = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const wallpapers = []
const randomizedWallpapersList = []
const categoriesChosenList = []
const filtered = []
const categoriesList = ['Space Wallpaper', 'Series', 'OS', 'Nature', 'Anime']
var previews = document.getElementsByClassName("wallpaperPreview")
var topsText = document.getElementsByClassName("topsText")
const searchResult = []
var divClicked;
var fileToDownload;


//END OF VAR DECLARATIONS

//NEW WALLPAPER CLASS DECLARATION AND CREATION
class newWallpaper{

    constructor(name, route, wallpaperEngineLink, resolution, platform, socialMedia, type, category, previewPosition){

        this.name = name
        this.route = route
        this.wallpaperEngineLink = wallpaperEngineLink
        this.resolution = resolution
        this.platform = platform
        this.socialMedia = socialMedia
        this.type = type
        this.category = category
        this.previewPosition = previewPosition
    }

}


wallpapers.push(new newWallpaper('PLANET', 'img/planet.jpg','', '1080x920', 'PC', '', 'Image', 'Space Wallpaper', ''))
wallpapers.push(new newWallpaper('SUN PLANET', 'img/planet2.jpg','', '', 'PC', '', 'Image', 'Space Wallpaper', ''))
wallpapers.push(new newWallpaper('BLUE GALAXY', 'img/space.jpg','', '', 'PC', '', 'Image', 'Space Wallpaper', ''))
wallpapers.push(new newWallpaper('GALAXY', 'img/galaxy.jpg','', '', 'PC', '', 'Image', 'Space Wallpaper', ''))
wallpapers.push(new newWallpaper('iPHONE', 'img/iphonewallpaper.jpg','', '', 'Phone', '', 'Image', 'OS', ''))
wallpapers.push(new newWallpaper('MAC OS', 'img/macOSbigSur.jpg','', '', 'PC', '', 'Image', 'OS', ''))
wallpapers.push(new newWallpaper('MOON', 'img/moonAndMountain.jpg','', '', 'Phone', '', 'Image', '', ''))
wallpapers.push(new newWallpaper('MOON', 'img/moonAndMountain2.jpg','', '', 'PC', '', 'Image', '', ''))
wallpapers.push(new newWallpaper('MOON', 'img/moonWindows11.jpg','', '', 'PC', '', 'Image', '', ''))
wallpapers.push(new newWallpaper('OPACITY', 'img/opacity.jpg','', '', 'Phone', '', 'Image', '', ''))
wallpapers.push(new newWallpaper('PAINT', 'img/paint.jpeg','', '', 'PC', '', 'Image', '', ''))
wallpapers.push(new newWallpaper('WINDOWS 11', 'img/windows11.jpg','', '', 'PC', '', 'Image', 'OS', ''))

//END OF NEW WALLPAPER CLASS DECLARATION AND CREATION

//USEFUL FUNCTIONS

function scrollUp(){

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function rewrite(id, content){

    document.getElementById(id).innerText = content
    document.getElementById(id).textContent = content
}

function rewriteInnerHTML(id, content){

    document.getElementById(id).innerHTML = content
}

function changeGrid(grids){

    document.getElementById("container").style.gridTemplateColumns = "repeat(" + grids + ", 1fr)";

    if(grids === 2){

        for (var i = 0; i < previews.length; i++) {
            previews[i].style.width = '30vw'
            previews[i].style.height = '30vw'
        }

        for (var i = 0; i < topsText.length; i++) {
            topsText[i].style.fontSize = '3vw'
        }

        document.getElementById("container").style.marginLeft = "12vw"; 

    }

    if(grids === 3){
        
        for (var i = 0; i < previews.length; i++) {
            previews[i].style.width = '20vw'
            previews[i].style.height = '20vw'
        }

        for (var i = 0; i < topsText.length; i++) {
            topsText[i].style.fontSize = '2vw'
        }

        document.getElementById("container").style.marginLeft = "9vw"; 

    }

    if(grids === 4){

        for (var i = 0; i < previews.length; i++) {
            previews[i].style.width = '13vw'
            previews[i].style.height = '13vw'
        }

        for (var i = 0; i < topsText.length; i++) {
            topsText[i].style.fontSize = '1vw'
        }

        document.getElementById("container").style.marginLeft = "9vw"; 

    }

}

function resetList(list){

    for(k = list.length; k > 0;){

        list.pop()
        k--
    }
}



function randomizedWallpapers(){

    resetList(randomizedWallpapersList)

    for(let k = 0; k < 12;){

        random = Math.floor(Math.random() * wallpapers.length)

        if(!randomizedWallpapersList.includes(random)){
            randomizedWallpapersList.push(random)
            k++
            wallpapers[random].previewPosition = 'preview' + k
 
        }
            
    }

}

function recommendedOn(){

    document.getElementById("recommended").style.color = "black"; 
    document.getElementById("discover").style.color = "grey"; 
    document.getElementById('search').style.display = 'none'
}


function discoverOn(){

    document.getElementById("recommended").style.color = "grey"; 
    document.getElementById("discover").style.color = "black"; 
    document.getElementById('search').style.display = 'flex'
    document.getElementById('searchInput').value = ''
}

function findQueried(){

    let queried = document.getElementById('searchInput').value
    resetList(searchResult)
    queried = queried.toUpperCase()
    for(let k = 0; k < wallpapers.length; k++){

        let i = wallpapers[k].name
        let y = wallpapers[k]

        if(i.includes(queried)){

            searchResult.push(wallpapers.indexOf(y))
        }

    }
}
function hideAll(){

    hide('container')
    hide('categories')  
    hide('search')
    hide('lowerTop')
}

function hideAllPreviews(){

    for(let k = 1; k < 13; k++){
    
    document.getElementById('preview' + k).style.display = 'none'
    }

}

function refreshWeb(){

    document.location.reload(true)
}

function hide(id){

    document.getElementById(id).style.display = "none"
}

function show(id, type){

    document.getElementById(id).style.display = type
}

//CHECKS IF WALLPAPERS HAVE THE CATEGORY



function convertCategories(num){

    return categoriesList[num]
}

function filter(){

    for(let i = 0; i < categoriesChosenList.length;){

        for(let k = 0; k < wallpapers.length; k++){

            if(wallpapers[k].category === categoriesChosenList[i]){

                if(!filtered.includes(k)){

                filtered.push(k) 
                }

            }
        }

    i++
}

}

function categoriesChosen(input){

    if(!categoriesChosenList.includes(input)){

        categoriesChosenList.push(convertCategories(input))       
    }

    filter()

}

function categoriesConstructor(){

    let categoriesConstructed = ''
    for(let k = 0; k < categoriesList.length; k++){
    categoriesConstructed = categoriesConstructed + "<div onclick='categoriesChosen("+ k + "); filterRefresh();'>" + categoriesList[k] + "</div> "
    }

    rewriteInnerHTML("categoriesContainer", "<div style='color:grey' onclick='categoriesHidder()'>CATEGORIES</div>" + categoriesConstructed)

    document.getElementById("categoriesContainer").style.height = "120px";  
    document.getElementById("categoriesContainer").style.overflowY = "scroll"; 

}


function categoriesHidder(){

    document.getElementById("categoriesContainer").style.height = "fit-content";  
    document.getElementById("categoriesContainer").style.overflowY = "hidden";  
    rewriteInnerHTML('categoriesContainer', ' <div onclick="categoriesConstructor()">CATEGORIES</div>')
}



//END OF USEFUL FUNCTIONS


//WEB REFRESHING
function filterRefresh(){

    hideAllPreviews()

        let i = 1

        for(let k = 0; k < filtered.length; k++){
    
            rewriteInnerHTML("preview" + i + "bottom", "<img class='img' src='" + wallpapers[filtered[i - 1]].route + "'>" ) 
            show('preview' + i, 'block')
            i++
        }
    
        let y = 1
    
        for(let k = 0; k < filtered.length; k++){
        rewriteInnerHTML("preview" + y + "top", "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif;, cursive; color:black;'>" + wallpapers[filtered[y - 1]].name + "</h1>" + "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif; cursive; color:grey;'>" + wallpapers[filtered[y - 1]].platform + "</h1>") 
        y++
        }
}  


function discoverRefresh(){

    discoverOn()
    randomizedWallpapers()

    let i = 1

    for(let k = 0; k < 12; k++){

        rewriteInnerHTML("preview" + i + "bottom", "<img class='img' src='" + wallpapers[randomizedWallpapersList[i - 1]].route + "'>" ) 
        show('preview' + i, 'block')
        i++
    }

    let y = 1

    for(let k = 0; k < 12; k++){
    rewriteInnerHTML("preview" + y + "top", "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif;, cursive; color:black;'>" + wallpapers[randomizedWallpapersList[y - 1]].name + "</h1>" + "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif; cursive; color:grey;'>" + wallpapers[randomizedWallpapersList[y - 1]].platform + "</h1>") 
    y++
    }
}

function recommendedRefresh(){

    recommendedOn()
    changeGrid(4)
    hide('downloadedImageContainer')
    hide('downloadContainer')

    let i = 1

    for(k=0; k < recommended.length; k++){
    rewriteInnerHTML("preview" + i + "bottom", "<img class='img' src='" + wallpapers[recommended[i - 1]].route + "'>")
    show('preview' + i, 'block')
    wallpapers[k].previewPosition = 'preview' + i
    i++

    }

    let y = 1

    for(k=0; k < recommended.length; k++){
    rewriteInnerHTML("preview" + y + "top", "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif;, cursive; color:black;'>" + wallpapers[recommended[y - 1]].name + "</h1>" + "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif; cursive; color:grey;'>" + wallpapers[recommended[y - 1]].platform + "</h1>" + "<a id='wpengine" + y + "' href='https://" + wallpapers[recommended[y - 1]].wallpaperEngineLink + "' style='width:fit-content; height:fit-content;padding:0px; border:0;'> <img class='wallpaperEngineImg'src='iconImg/wpengine.png'></a>" + "<div style='display:flex; justify-content:center;'><div style='border-radius:15px;font-family: Raleway, sans-serif; background:#dfe6e9; width:fit-content; height:20px; padding:2px;'>" + wallpapers[recommended[y - 1]].resolution + "</div> </div>") 
    
    if(wallpapers[recommended[y - 1]].wallpaperEngineLink === ''){

        hide('wpengine' + y)
    }

    y++
    }

}

window.onload = recommendedRefresh
//WEB REFRESHING

//SEARCH

function search(){

    findQueried()

    hideAllPreviews()

    let i = 1

    for(let k = 0; k < searchResult.length; k++){

        rewriteInnerHTML("preview" + i + "bottom", "<img class='img' src='" + wallpapers[searchResult[i - 1]].route + "'>" ) 
        show('preview' + i, 'block')
        i++
    }

    let y = 1

    for(let k = 0; k < searchResult.length; k++){
    rewriteInnerHTML("preview" + y + "top", "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif;, cursive; color:black;'>" + wallpapers[searchResult[y - 1]].name + "</h1>" + "<h1 class='topsText' style='text-align:center; font-family: Raleway, sans-serif; cursive; color:grey;'>" + wallpapers[searchResult[y - 1]].platform + "</h1>") 
    y++
    }

}

//END OF SEARCH

//DOWNLOAD

function download(){

    for(k = 0; k < wallpapers.length; k++)

    if(wallpapers[k].previewPosition === divClicked){
    fileToDownload = wallpapers[k].route
    }

    hideAll()

    rewriteInnerHTML('downloadContainer', "<a id='downloadButton'" + "download='" + fileToDownload + "'" + "href='" + fileToDownload + "'> DOWNLOAD </a>")
    rewriteInnerHTML('downloadedImageContainer', "<img id='downloadedImage' src='" + fileToDownload + "'>")
    show('downloadedImageContainer', 'block')
    show('downloadContainer', 'block')
    window.scrollTo({ top: 0});
}

//END OF DOWNLOAD



//FILTERING

function filterChosenButton(input){

    for(let k = 0; k < 3; k++){
    rewriteInnerHTML('categoriesFilterRemover', document.getElementById('categoriesFilterRemover').innerHTML + "<div class='filterChosenButton'>" + input + "<div class='filterChosenButtonRemover'onclick='removeFilter(" + input + ")'>X</div>" + "</div>")
    console.log(input)
    }

}


function removeFilter(input){

    
}

//END OF FILTERING