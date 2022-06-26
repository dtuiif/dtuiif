import {startups} from './startups.js';

var card = `<div class="col-lg-4 col-md-6 col-sm-12 startups" data-aos-duration="600" data-aos="zoom-in" data-aos-delay="0">
                <div class="card-container">
                    <div class="card card-flip">
                        <div class="front card-block">
                            <img src="" alt="" class="card-logo">
                            <h5 class="card-title"></h5>
                            <p class="descp"></p>
                        </div>
                        <div class="back card-block">
                            <a href="" class="mt-0 link color-main info">More Info</a>
                            <a href="" class="mt-0 link color-main web">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>`

const dib = document.getElementById("row");
dib.onclick = function() {
    for (let i = 0; i < startups.length; i++) {
        dib.innerHTML += card;
        document.getElementsByClassName("card-logo")[i].src = startups[i].img;
        document.getElementsByClassName("card-title")[i].textContent = startups[i].name;
        document.getElementsByClassName("descp")[i].textContent = startups[i].descp
        document.getElementsByClassName("info")[i].href = startups[i].info_page;
        document.getElementsByClassName("web")[i].href = startups[i].website;
    }
}

dib.click();
