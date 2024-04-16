
function addArtists(id,link,name){
var divContainer = document.querySelector('.artists');
var newDiv = document.createElement('div');
newDiv.id = id;
newDiv.classList.add('new-div');     
var newImg = document.createElement('img');
newImg.src = link;
const playButton = document.createElement('div');
playButton.id = 'playButton';
playButton.className = 'play-button';
 
const playIcon = document.createElement('div');
playIcon.className = 'play-icon';
playButton.appendChild(playIcon);

var newH3 = document.createElement('h3');
var h3Text = document.createTextNode(name);
newH3.appendChild(h3Text);

var newP = document.createElement('p');
var pText = document.createTextNode('Artist');
newP.appendChild(pText);
newDiv.appendChild(newImg); 
newDiv.appendChild(playButton);
newDiv.appendChild(newH3);
newDiv.appendChild(newP); 
divContainer.appendChild(newDiv);  
}  
addArtists("div1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZ-S0C-Fs0fAOhkpjk7U8kJNw8NpIo5DgDzOhEcvDiA&s","Talha Anjum"); 
addArtists("div2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKCy6eyA6fd8nP4e_yjaymtZUFMTrBBDdfnyLvKdWnfd_lNzYUtpTzX6STSNUP1ZlOU4&usqp=CAU","Talha Yunus");    
addArtists("div3","https://yt3.googleusercontent.com/birpY8-11jriBCUwSCajuoF7WH0e_hbs5uWTQdAoCMunDjjiX8IEvw8tdOKwI2iXZdg9Jwf1qw=s900-c-k-c0x00ffffff-no-rj","Aleemrk"); 
addArtists("div4","https://i.scdn.co/image/ab6761610000e5eb73e7874ef75f3d17cd58bfb9","TALWINDER") 
addArtists("div5","https://www.billboard.com/wp-content/uploads/media/xxxtentacion-press-photo-bw-2018-billboard-1548.jpg?w=606&h=404&crop=1","XXXTENTATION")  
 
function addAlbums(id,link,name,addclass){
    var divContainer = document.querySelector('.Albums');
    var newDiv = document.createElement('div');
    newDiv.id = id; 
    newDiv.className=addclass;
    newDiv.classList.add('new-div');     
    var newImg = document.createElement('img');
    newImg.src = link;

    
    var newH3 = document.createElement('h3');
    var h3Text = document.createTextNode(name);
    newH3.appendChild(h3Text);
    
    var newP = document.createElement('p');
    var pText = document.createTextNode('Album');
    newP.appendChild(pText);
    newDiv.appendChild(newImg); 
    newDiv.appendChild(newH3);
    newDiv.appendChild(newP); 
    divContainer.appendChild(newDiv);  
    }    
    addAlbums("aldiv1","https://beats-rhymes-lists.com/wp-content/uploads/2023/06/ranking-the-best-rap-albums-of-2023-03-greedo.jpg","Reckless","album");
    addAlbums("aldiv3","https://qph.cf2.quoracdn.net/main-qimg-dc9164e3949fcd75e9854a532687e22e-pjlq","Therapy","album");
    addAlbums("aldiv2","https://media.timeout.com/images/106032113/image.jpg","Animal","album");
    addAlbums("aldiv4","https://t3.ftcdn.net/jpg/05/67/70/38/360_F_567703856_q7FFXzjHbph4hBqRPO8MYeoGAs2yeEYz.jpg","Open letter","album");  
    addAlbums("aldiv5","https://www.rollingstone.com/wp-content/uploads/2018/06/rs-tupac-eb46d22a-5043-425a-9981-e93a95a70e65.jpg","TUPAC","album");  
    
    function addPlaylists(id,link,name,addclass){
        var divContainer = document.querySelector('.Playlists');
        var newDiv = document.createElement('div');
        newDiv.id = id; 
        newDiv.className=addclass;
        newDiv.classList.add('new-div');     
        var newImg = document.createElement('img');
        newImg.src = link;
        
        var newH3 = document.createElement('h3');
        var h3Text = document.createTextNode(name);
        newH3.appendChild(h3Text);
        
        var newP = document.createElement('p');
        var pText = document.createTextNode('Playlist');
        newP.appendChild(pText);
        newDiv.appendChild(newImg); 
        newDiv.appendChild(newH3);
        newDiv.appendChild(newP); 
        divContainer.appendChild(newDiv);  
        }    
        addPlaylists("div1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-90crjQhQENYMYotXH1oPZKvhJGKlcMV8mMeiEJdgw&s","New Friday","play"); 
         
addPlaylists("div2","https://api.stereofox.com/images/97786/resized.jpg?v=","New Joints","play"); 
          
addPlaylists("div3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgGI8Cdm1fkQTzxZhTZYB47Mj2BpgDkNqgKaEKCutLA&s","Unwaan","play"); 
                   
addPlaylists("div4","https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b4/13/e9/b413e91d-40aa-a1a8-b8e3-2bacc3b3e222/00606949329020.rgb.jpg/1200x1200bb.jpg","Eminem","play"); 
                  
addPlaylists("div5","https://www.damusichits.com/wp-content/uploads/2023/08/Drake-Essentials.jpg","Drake","play"); 
                  
document.getElementById("div1").addEventListener("click", function() {
  // Replace "newpage.html" with the URL of the page you want to load
  window.location.href = "https://faizy426890.github.io/infoPage/"; 
} )
