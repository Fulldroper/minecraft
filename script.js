let theme = true;
let statusObj;
function setBaseImg(){
    document.getElementById('logo').src=base64Imgs['logo']
    document.getElementById('theme').src=base64Imgs['black-bat']
}
function toggleTheme() {
    if (theme) {
        theme=false;
        document.getElementById('alert').style.display="none"
        document.documentElement.style="background-color:#262626;color:#b5b5b5;"
        window.localStorage.setItem('theme', '1')
    } else {
        theme=true;
        document.documentElement.style="color: #424242;";
        window.localStorage.setItem('theme', '0')
    }
    document.getElementById('theme').src=base64Imgs[theme ? 'black-bat' : 'gray-bat']
}
function readyCallback() {
    let form = document.getElementById('iframe-block').style.display="none";
    let ok = document.getElementById('ok-msg').style.display="block";;    
}
function glr(x) {
    x.style.width="calc(100% - 45px)";
    x.style.height="100%";
    x.style.opacity="1";
    x.setAttribute('onclick', "nglr(this)");
}
function nglr(x) {
    x.style.width="50px";
    x.style.height="35px";
    x.style.opacity="0.6";
    x.setAttribute('onclick', "glr(this)");
}
function loadImgs() {
    let container ='' 
    gallery.forEach(el => container+=`<img src="${el}" alt="" onclick="glr(this)">`);
    document.getElementById('gallery').innerHTML=container;
}
function generateSaves() {
    let str = ''
    saves.forEach(el=>{
        let worlds = '';
        el['world-list'].forEach(wel=> worlds+=`<a href="https://github.com/Fulldroper/minecraft/blob/master/worlds/${el['backup-dir']}/${wel}.zip?raw=true">${wel}</a>, `)
        str+=`<div><hr style="border-style: dotted;"><p>Сервер: ${el.name}</p><p>Версия: ${el.version}</p><p>Миры: ${worlds}</p><p>Моды: <a href="${el['mod-list']}">скачать</a></p></div>`
    })
    document.getElementById('block-content').innerHTML=str;
}
function selectMenu(x,title) {
    if (content[x] && title) {
        switch (x) {
            case 'gallery':
                    document.getElementById('block-title').innerHTML=title;
                    document.getElementById('block-content').innerHTML=content[x];
                    loadImgs()
                break;
            case 'saves':
                    document.getElementById('block-title').innerHTML=title;
                    generateSaves()
                break;
            default:
                    document.getElementById('block-title').innerHTML=title;
                    document.getElementById('block-content').innerHTML=content[x];
                break;
        }
    }
}
function checkOnline() {
    console.log('check online')
    fetch(`https://mcapi.us/server/status?ip=${global['host-ip']}&port=${global['host-port']}`)
    .then(res => res.json())
    .then(res => {
        statusObj = res;
        let color = res && res.online ? 'green' : 'red';
        let status = res && res.online ? `${res.players.now}/${res.players.max}` : 'offline';
        if(res && res.online && res.motd) {
            document.getElementById('motd').innerHTML=res.motd
        }else{
            document.getElementById('status').innerHTML=''
        }
        document.getElementById('ip-allert').style.display= res && res.online ? "block" : "none";
        document.getElementById('status').innerHTML=`${status} <div id="status-dot" style="background-color: ${color};">~</div>`
    })
}
function CopyToClipboard(that) {
    if (document.selection) { 
        var range = document.body.createTextRange();
        range.moveToElementText(that);
        range.select().createTextRange();
        document.execCommand("copy"); 
    
    } else if (window.getSelection) {
        var range = document.createRange();
         range.selectNode(that);
         window.getSelection().addRange(range);
         document.execCommand("copy");
         alert("IP адресс скопирован в ваш буфер обмена") 
}}
//window.onload=()=>{
    console.log("autoexec")
    document.getElementById('ip-allert').innerHTML=`IP адресс сервера: <a onclick="CopyToClipboard(this)">${global['host-ip']}:${global['host-port']}</a>`
    setBaseImg()
    selectMenu('about','О сервере')
    document.getElementById('theme').onclick=toggleTheme
    if(window.localStorage.getItem('theme') == '1') {
        document.getElementById('alert').style.display="none"
        toggleTheme()
    }else{
        document.documentElement.style="color: #424242;";
    }
    checkOnline()
    setInterval(checkOnline,20000)
//}
