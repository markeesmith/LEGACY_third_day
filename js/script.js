
// Navigation scripts

var isMenuOpened = false;
function mobileNav() {

    const wrapper = document.getElementsByClassName("wrapper")[0];
    if(isMenuOpened) {
        const menuBox = document.getElementsByClassName("menuBox")[0];
        wrapper.removeChild(menuBox);
    }
    else {
        const menuBox = document.createElement("div");
        menuBox.setAttribute("class", "menuBox");

        const innerMenuOrig = document.getElementsByClassName("innerMenu")[0];
        const innerMenu = innerMenuOrig.cloneNode(true);
        var children = innerMenu.children;

        while(innerMenu.children.length > 0) {
            children[0].style.display = "block";
            menuBox.appendChild(children[0]);
        }

        wrapper.appendChild(menuBox);
    }

    isMenuOpened = !isMenuOpened;

}

// Home Page Events

function loadIndex() {
    transitionHome();
}

var slideshowIndex = 0;
var images = ["home1", "home2", "home3", "home4", "home5"];
var qualities = ["480", "767", "1024", "1280", "1280"];
var imageDuration = 5000;
function transitionHome() {

    var targetDiv = document.getElementById("slideContain");
    var imageToChange = "";

    for (var i = 0; i < 5; i++) {
        if (i != 4) {
            imageToChange = imageToChange + "img/slideshow/" + images[slideshowIndex] + "-" + qualities[i] + ".jpg " + qualities[i] + "w,";
        }
        else {
            imageToChange = imageToChange + "img/slideshow/" + images[slideshowIndex] + "-" + qualities[i] + ".jpg 1300w";
        }
    }

    targetDiv.className += "fadeOut";
    setTimeout(function () {
        targetDiv.srcset = imageToChange;
        targetDiv.className = "";
    }, 1000);

    slideshowIndex++;
    if (slideshowIndex == images.length) { slideshowIndex = 0; }
    setTimeout(transitionHome, imageDuration);

}

// Contact Page Events

function contactLoad() {
    var ddl = document.getElementById("stateDDL");
    getStates(ddl);
    optionHideShow('');
    if (document.documentElement.clientWidth < 768) {
        changeContactLayout();
    }
}

function optionHideShow(myCheck) {
    var form = document.getElementById("landOption");
    if (myCheck.checked) {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
}

function getStates(ddl) {
    var options = [];
    var option = document.createElement('option');
    var states = ["West Virginia"];

    for (var i = 0; i < states.length; i++) {
        option.text = states[i];
        option.value = i;
        options.push(option.outerHTML);
    }

    ddl.insertAdjacentHTML('beforeEnd', options.join('\n'));
}

function changeContactLayout() {
    var outerContact = document.getElementsByClassName("contactForm")[0];
    var firstContact = document.getElementsByClassName("innerContact")[0];
    var secondContact = document.getElementsByClassName("innerContact")[1];
    var newContact = "<div class='innerContact'>" + firstContact.innerHTML + secondContact.innerHTML + "</div>";
    while (outerContact.firstChild) {
        outerContact.removeChild(outerContact.firstChild);
    }
    outerContact.innerHTML = newContact;
}

function detectMediaChange(mediaSize) {

    // Change layout of contacts page
    var innerContacts = document.getElementsByClassName("innerContact");
    var menuBox = document.getElementsByClassName("menuBox");
    if (innerContacts.length > 0) {
        if (mediaSize.matches) {
            if (innerContacts.length == 2) {
                var outerContact = document.getElementsByClassName("contactForm")[0];
                var firstContact = document.getElementsByClassName("innerContact")[0];
                var secondContact = document.getElementsByClassName("innerContact")[1];
                var newContact = "<div class='innerContact'>" + firstContact.innerHTML + secondContact.innerHTML + "</div>";
                while (outerContact.firstChild) {
                    outerContact.removeChild(outerContact.firstChild);
                }
                outerContact.innerHTML = newContact;
            }
        }
        else {
            if (innerContacts.length == 1) {
                var contact = document.getElementsByClassName("innerContact")[0];
                var firstContact = contact.cloneNode(true);
                var secondContact = contact.cloneNode(true);

                while (firstContact.children.length > 7) {
                    firstContact.removeChild(firstContact.lastChild);
                }
                while (secondContact.children.length > 4) {
                    secondContact.removeChild(secondContact.firstChild);
                }
                while (contact.firstChild) {
                    contact.removeChild(contact.firstChild);
                }
                var outerContact = document.getElementsByClassName("contactForm")[0];
                newContact = "<div class='innerContact'>" + firstContact.innerHTML + "</div>";
                newContact = newContact + "<div class='innerContact'>" + secondContact.innerHTML + "</div>";
                outerContact.innerHTML = newContact;
            }
        }
    }
    else if(menuBox.length > 0) {
        if(!mediaSize.matches) {
            var wrapper = document.getElementsByClassName("wrapper")[0];
            wrapper.removeChild(menuBox[0]);
            isMenuOpened = false;
        }
    }
}

// Gallery Events

function galleryLoad() {
    const galleryEvents = document.querySelectorAll("[class^='innerContentClickable']");
    galleryEvents.forEach((galleryEvents) => {
        galleryEvents.addEventListener("click", (e) => {
            showSlideshowForContent(galleryEvents);
        });
    });
}

var currentIndex = 0;
var galleryIndex = "";

var numHomes = 8;
var numAddition = 1;
var numRemodel = 1;

function showSlideshowForContent(gallery) {
    currentIndex = 0;

    var numOfCurrentGallery = gallery.className.match(/\d+/)[0];

    if(numOfCurrentGallery <= numHomes) {
        galleryIndex = "home" + numOfCurrentGallery;
    }
    else if(numOfCurrentGallery <= numHomes + numAddition) {
        numOfCurrentGallery = "1";
        galleryIndex = "addition" + numOfCurrentGallery;
    }
    else {
        numOfCurrentGallery = "1";
        galleryIndex = "remodel" + numOfCurrentGallery;
    }

    
    var homePhoto = "url(./img/gallery/" + galleryIndex + "/0-1024.jpg)";

    const galleryDiv = document.createElement("div");
    galleryDiv.setAttribute("class", "outerGalleryDiv");
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(galleryDiv);
    galleryDiv.addEventListener("click", (e) => {
        currentIndex = 0;
        body.removeChild(galleryDiv);
    });

    const leftArrow = document.createElement("a");
    leftArrow.setAttribute("class", "galleryArrows");
    leftArrow.text = "\u276E";
    leftArrow.addEventListener("click", (e) => {
      event.stopImmediatePropagation();
      transitionGallery(-1);
    });
  
    const rightArrow = document.createElement("a");
    rightArrow.setAttribute("class", "galleryArrows");
    rightArrow.text = "\u276F";
    rightArrow.addEventListener("click", (e) => {
      event.stopImmediatePropagation();
      transitionGallery(1);
    });

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("id", "galleryDiv");
    innerDiv.setAttribute("class", "innerGalleryDiv");
    innerDiv.style.backgroundImage = homePhoto;

    galleryDiv.appendChild(leftArrow);
    galleryDiv.appendChild(innerDiv);
    galleryDiv.appendChild(rightArrow);

    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        switch(key) {
            case 37:
                if(document.getElementById("galleryDiv") != null) {
                    event.stopImmediatePropagation();
                    transitionGallery(-1);
                }
                break;
            case 39:
                if(document.getElementById("galleryDiv") != null) {
                    event.stopImmediatePropagation();
                    transitionGallery(1);
                }
                break;
            case 27:
                if(document.getElementById("galleryDiv") != null) {
                    currentIndex = 0;
                    body.removeChild(galleryDiv);
                }
                break;
            default:
                break;
        }
    }

}

var homeCollectionSizes = [22, 9, 4, 4, 8, 6, 4, 3];
var additionCollectionSizes = [8];
var remodelCollectionSizes = [2];

function transitionGallery(direction) {
    var div = document.getElementById("galleryDiv");
    var collection = galleryIndex.replace(/[0-9]/g, '');
    var currentDirectory = galleryIndex.match(/\d+/)[0] - 1;

    var name = collection + "CollectionSizes";
    var collectionSizes = eval(name);

    if (direction == 1) {
        currentIndex = currentIndex + 1;
    }
    else {
        currentIndex = currentIndex - 1;
    }
    if (currentIndex == collectionSizes[currentDirectory]) {
        currentIndex = 0;
    }
    else if (currentIndex < 0) {
        currentIndex = collectionSizes[currentDirectory] - 1;
    }
    div.style.backgroundImage = "url(./img/gallery/" + galleryIndex + "/" + currentIndex + "-1024.jpg)";
}

// Media Query Detection

var mediaSize = window.matchMedia("(max-width: 768px)");
detectMediaChange(mediaSize);
mediaSize.addListener(detectMediaChange);