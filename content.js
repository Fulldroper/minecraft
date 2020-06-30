const content = {
    "about":`Приватный сервер с модами и плагинами на полюбившуюся мне версию <b>1.7.10</b><br>хостинг сервера полностю на мне<br><sub id="comment" style="color:grey;"># Из-за этого могут быть проблемы(( #</sub><br>так-же комплектация модов и плагинов может менятся<br><sub id="comment" style="color:grey;"># Иногда даже очень часто)) #</sub><br>Имеется мониториг онлайна сервера<br>И немного о плагинах: Приват + Home + tpa + treecapitator + autosave + essential<br><sub id="comment" style="color:grey;"># Найти меня можно на моём сервере <a style="color:green;" href="https://discord.gg/${global['discord-id']}">discord</a>#</sub>`,
    "rools":`<sub id="comment" style="color:grey;"># На самом деле не очень замудрёные правила у нас #</sub><br>1.Не **ланить<br>2.Не спамить<br>3.Админ всегда прав<br>4.Желательно не читерить`,
    "faq":`<div id="block"><h3 id="block-title">Как зайти?:</h3><div id="block-content">1.Скачайте Tlauncher<sup> <a style="color:green;" href="http://tlauncher.org">tlauncher.org</a></sup> и зделайте пробный запуск с версией <b>1.7.10 Forge</b></br><img src="${base64Imgs['faq-tlauncher']}" width="100%"></br>2.Скачайте Modpack</br>3.Все файлы из папки в архиве перекиньте в директорию с маинкрафтом<br> предварительно удалив папку <b>mods</b> и <b>config</b><br><sup style="color:grey;"> по умолчанию</sup> <b> %appdata% &gt; Roaming &gt; .minecraft</b></br>4.Запускайте Tlauncher с версией <b>1.7.10 Forge</b> и заходите по айпи адресу всё)</br></div></div><div id="block"><h3 id="block-title">Как включить мини-карту? :</h3><div id="block-content">1.Давайте розберёмся какие типы карт есть в зборке...  а иммено <b>Jorneymap</b> и <b>Rei's minimap</b></br>2.Следует выбрать карту более подходящую под вашу систему:<br><br> <b> Jorneymap</b> - Весьма затратна по ресурсам, но у неё больший функционал: Запись полной карты, радар игроков так-же трансляция через веб-сервер самой карты.<br><br> <b> Rei's minimap</b> - Максимально оптимизирована под слабые системы, минимум функционала</br>3.Заходим в папочку <b>mods</b> и находим 2 файла которые хранятся в расширении <b>.disabled</b></br><img style="max-width: 400px;" src="${base64Imgs['faq-map']}" width="100%"></br>4.А теперь магия!!! меняем <b>.disabled</b> на <b>.jar</b></br><sub id="comment" style="color:grey;"># Помните не стоит включать обе карты возможны збои в роботе #</sub></div></div>`,
    "callback":`
    <div class="callback">
    <form onsubmit="callbackReady(this)" id="callback" action="" method="post">
            <div>
                <label>Вам нравится сайт?</label><br>
                <p>                
                    <input id="like" form="callback" name="entry.1" type="radio" value="Да">
                    <label>да</label>
                </p>
                <p>
                    <input id="like" form="callback" name="entry.2" type="radio" value="Нет">
                    <label>нет</label>
                </p>
            </div>
            <br><br>
            <label>Как мы можем с вами связатся?</label><br>
            <input name="entry.3" form="callback" type="text"><br><br>
            <label>Сообщение администрации</label><br>
            <textarea rows="5" cols="30" form="callback" name="entry.538636771" type="text"></textarea><br><br>
            <input form="callback" type="submit">
        </form>
    </div>`,
    "gallery":`<div id="gallery"></div>`,
    "saves":`новый год скоро вот бы бухнуть`
}

