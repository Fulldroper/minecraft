let theme = true;
let statusObj;
function setBaseImg(){
    document.getElementById('logo').src=base64Imgs['logo']
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
window.onload=()=>{
    console.log("main script started")
    document.getElementById('ip-allert').innerHTML=`IP адресс сервера: <a onclick="CopyToClipboard(this)">${global['host-ip']}:${global['host-port']}</a>`
    setBaseImg()
    selectMenu('about','О сервере')
    checkOnline()
    setInterval(checkOnline,20000)
}
callback.onsubmit = e => {
    e.preventDefault();
    const hook = { 
        url : "https://discordapp.com/api/webhooks/708253666687320104/ch5lOSWyI13ynU99zPAq16Z9-IPb-bWWXuzswHNNO1kCXog3ihbRObjO-Y6b_MEfhU2Q",
        username : './minecraft/',
        avatar : 'https://fulldroper.github.io/imgs/2.png',
    }
    const callbackReady = x => {
        const send = x => {
            fetch(x['hook_url'],{
                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                body: JSON.stringify(x)
            })
        }
        hook.like = x.children[0][0].checked? "да" : "нет"
        hook.mail = x.children[0][2].value
        hook.msg = x.children[0][3].value
    
        const y = {
            'hook_url' : hook.url,
            'username' : hook.username,
            'avatar_url' : hook.avatar,
            'content' : `\`\`\`json
{
    "domen": "${window.location.href}",
    "Вам нравится сайт?" : "${hook.like}",
    "Как мы можем с вами связатся?" : "${hook.mail}",
    "Дата" : "${new Date()}"
}\`\`\`
Сообщение администрации :
\`\`\`
${hook.msg}
\`\`\``
        }
        send(y)
        x.click();
        setTimeout(() => {
            x.onclick = undefined;
            x.classList = "callback-ready"
        }, 3100,x);
        return false
    }
    callbackReady(document.getElementsByClassName('callback')[0])
}