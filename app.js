async function getData(){
    let data = await fetch("./data.json")
    if(data.ok){
        let arr = await data.json();
        let outPut = "";
        arr.forEach(element => {
            outPut += `
            <div class="vedio-preview">
                <div class="thumbnail">
                    <a href="${element.ytLink}" target="_blank">
                        <img src="${element.thumbnail.picture}" alt="no image">
                    </a>
                    <div class="vedio-time">${element.thumbnail.vediotime}</div>
                </div>
                <div class="vedio-info">
                    <div class="channel-pic">
                        <a href="${element.channelinfo.channellink}" target="_blank">
                            <img src="${element.channelinfo.picture}" alt="no image">
                        </a>
                    </div>
                    <div class="vedio-desc">
                        <div class="vedio-title">
                            <a href="${element.ytLink}" target="_blank">
                                <p>${element.vedioinfo.vediodesc}</p>
                            </a>
                        </div>
                        <div class="vedio-author">
                            <p>${element.vedioinfo.vedioauthor}</p>
                        </div>
                        <div class="vedio-sats">
                            <p>${element.vedioinfo.vediosats}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        document.querySelector('.container').innerHTML = outPut
    }else{
        console.log('HTTP Error');
    }

}

getData()

function sidePanel(){
    var x = document.getElementById("ext-side-bar");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector(".container").style.opacity = "1"
    } else {
        x.style.display = "block";
        document.querySelector(".container").style.opacity = "0.7"
    }
}

function showMore(){
    document.querySelector(".show-more").style.display = "block"
    document.getElementById("collapse").style.display = "none"
}

function showFewer(){
    document.querySelector(".show-more").style.display = "none";
    document.getElementById("collapse").style.display = "flex"

}



