# ScotlandJS

## 2016-06-02, Эдинбург, Шотландия, Великобритания

Доброе утро, начинаем трансляцию со [@ScotlandJS](https://twitter.com/ScotlandJS "Scotland JS") в Эдинбурге, с вами [@pepelsbey](https://twitter.com/pepelsbey "Вадим Макеев"). Программа дня: [scotlandjs.com/schedule/](https://t.co/oyj1X1WinX "http://scotlandjs.com/schedule/")

[pic.twitter.com/0mnG6OjQ4j](https://t.co/0mnG6OjQ4j)

![](https://pbs.twimg.com/media/Cj7m5vDW0AAu0_J.jpg)

Почти начинаем [pic.twitter.com/J4PGpJAYo8](https://t.co/J4PGpJAYo8)

![](https://pbs.twimg.com/media/Cj7oiPAXAAA29uE.jpg)

Ливи Эриксон [@misslivirose](https://twitter.com/misslivirose "Liv Erickson") из Microsoft с открывающим докладом про виртуальную реальность на ScotlandJS.

Ливи всегда хотела стать джедаем, но в итоге стала разработчиком. А потом она увидела видео про Oculus Rift для разработчиков… и завертелось

Первый раз пробует VR в тренировочном режиме для джедая [pic.twitter.com/RyhFZSbZVw](https://t.co/RyhFZSbZVw)

![](https://pbs.twimg.com/media/Cj7ph9fUYAAl4Db.jpg)

Купила свои очки, начала разбираться и через пару месяцев стала менеджером по VR-проектам в Microsoft.

Итак, зачем вообще VR? Facebook, HTC, Sony, Google, Samsung — дешёвые, доступные и портативные устройства.

Только VR даёт самый естественный интерфейс и занимает самые древние части нашего мозга.

Самые массовые мобильные VR устройства, по сути, просто очки в телефон и редко имеют свои сенсоры.

[pic.twitter.com/Lh8Ft86Arv](https://t.co/Lh8Ft86Arv)

![](https://pbs.twimg.com/media/Cj7rDKDXAAAEOEe.jpg)

VR для компьютеров имеют свой экран, контроллеры и даже колонки, подключаются к компьютеру.

[pic.twitter.com/B4AHFVOhox](https://t.co/B4AHFVOhox)

![](https://pbs.twimg.com/media/Cj7rX8TWEAQHmCt.jpg)

Но есть и совсем автономные устройства, которые обычно тоже можно подключать к компьютеру.

[pic.twitter.com/Sc2KrclZ29](https://t.co/Sc2KrclZ29)

![](https://pbs.twimg.com/media/Cj7rmb7WsAAavJu.jpg)

Мы не будем ставить приложение для каждой новости, которую хотим прочитать. То же и с VR, браузер и веб — самая гибкая и лёгкая платформа.

WebVR — не что-то принципиально новое, а просто способ работы браузеров с новыми устройствами, с новыми API.

Сейчас WebVR поддерживается в ночных сборках Firefox и некоторых спецсборках Chrome.

[pic.twitter.com/nayhQrYGOv](https://t.co/nayhQrYGOv)

![](https://pbs.twimg.com/media/Cj7sl8hXIAAX-WL.jpg)

WebVR работает со многими знакомыми библиотеками для 3D, вроде Three.js. Есть полифил для браузеров, которые не поддерживают.

A-Frame, библиотека Mozilla для WebVR [aframe.io](https://t.co/q9MZGjSegS "https://aframe.io/") [pic.twitter.com/MonOTpQ8Sn](https://t.co/MonOTpQ8Sn)

![](https://pbs.twimg.com/media/Cj7tHp3UoAAOJlL.jpg)

Также Vizor [vizor.io](https://t.co/FWQJWSOpVn "http://vizor.io/") [pic.twitter.com/yYGSeG2z2L](https://t.co/yYGSeG2z2L)

![](https://pbs.twimg.com/media/Cj7tSZHWYAATXme.jpg)

Также можно использовать привычные движки для игр и экспортировать из них код для WebVR.

[pic.twitter.com/n13Oo7nz6q](https://t.co/n13Oo7nz6q)

![](https://pbs.twimg.com/media/Cj7trRmW0AAq5XO.jpg)

Можно, например, визуализировать даже таблицы из Excel, чтобы лучше представлять соотношение данных, для лучшей наглядности.

Типичный код WebVR для Three.js [pic.twitter.com/pRUyh5t2qb](https://t.co/pRUyh5t2qb)

![](https://pbs.twimg.com/media/Cj7uRsRWYAEoh2S.jpg)

Создаёте сцену, направляете камеру вперёд, подключаете VR-эффекты, добавляете объекты на сцену, отправляете всё на рендерер.

В коде есть проверка: если это VR — сделай в VR, если нет — отрендери просто и получится что-то вроде плоского обычного видео.

Демо специально для ScotlandJS — [scotlandjsaframe.azurewebsites.net](https://t.co/5KjjtMgm7d "http://scotlandjsaframe.azurewebsites.net/"), на это ушло 19 строк кода, помимо библиотек. [pic.twitter.com/vFYpSKJFwe](https://t.co/vFYpSKJFwe)

![](https://pbs.twimg.com/media/Cj7vZSbW0AAOI3F.jpg)

Справа кнопка, которая включает VR-режим, если браузер поддерживает. В основе обычные плоские картинки.

Если открыть демку в телефоне, то можно покрутить телефон и поразглядывать сцену без каких-либо VR-устройств.

Можно экспортировать из Unity в WebGL с VR-плагином, чтобы не писать на самом WebVR.

Интересными сценариями применения WebVR занимается AltspaceVR [altvr.com](https://t.co/oavFnzMjIm "http://altvr.com/")

Сложности: быстродействие браузеров, для VR нужна очень высокая частота кадров и отзывчивость, чтобы мозгу не казалось, что тормозит.

Сложности: кроссплатформенные особенности устройств и поддержки, инструменты для разработки дизайна для VR-интерфейсов.

RT [@misslivirose](https://twitter.com/misslivirose "Liv Erickson"): I'm sending you this tweet from inside my Gear VR! [@ScotlandJS](https://twitter.com/ScotlandJS "Scotland JS") [pic.twitter.com/XJwxrrhzHb](https://t.co/XJwxrrhzHb)

![](https://pbs.twimg.com/media/Cj7iPymVAAA0NKa.jpg)

Джем Янг [@JemYoung](https://twitter.com/JemYoung "Jem Young") из Netflix с докладом «ESNext, Service Workers, and the future of JavaScript».

[pic.twitter.com/aLgMskkLdd](https://t.co/aLgMskkLdd)

![](https://pbs.twimg.com/media/Cj7yfjQWkAAARo5.jpg)

[pic.twitter.com/5jAaTDangv](https://t.co/5jAaTDangv)

![](https://pbs.twimg.com/media/Cj7zRbEWYAAnpHu.jpg)

У нас есть ES6 и это прекрасно, столько всего хорошего. Но есть проблема: нужно учить много нового, хотя это и стоит того.

Крутое веб-приложение Джема с сервис-воркерами и котами — [young.github.io/service-worker/](https://t.co/sAcMIeaned "http://young.github.io/service-worker/")

Из спецификаций ECMAScript вышли JScript, ActionScript, но сегодня цветёт и пахнет только JavaScript.

ESNext — неофициальное название того, что будет дальше в ES. Например, padStart и padEnd \(ха-ха\)

Такие фичи ESNext, сякие… Теперь к интересному: сервис-воркеры. Самое большое событие после AJAX. Помните первую страницу без перезагрузки?

Веб-воркеры и сервис-воркеры запущены в отдельном потоке, никаких синхронных API, только промисы и общение с основым потоком спец. образом.

Джем показывает демо общения сервера с сервис-воркером, потом закрывает вкладку… а общение продолжается. Воркер живёт при закрытой вкладке.

Будущее веба: веб-блютус, PWA, пуш, уведомления, синхронизация на фоне… и вы, новые разработчики.

Шарлот Спенсер [@Charlotteis](https://twitter.com/Charlotteis "literally the worst") из Marks and Spencer с докладом «Open Open Source».

[pic.twitter.com/d98KAs28dU](https://t.co/d98KAs28dU)

![](https://pbs.twimg.com/media/Cj75SyRXAAEY3Aq.jpg)

Для ведения успешного и открытого для всех опенсорса требует правилам поведения \(code of conduct\), напр. — [ru.confcodeofconduct.com](https://t.co/Vv71iSckOa "http://ru.confcodeofconduct.com/")

Нужно не просто завести правила, но регулярно их обновлять и применять.

Хорошее и более подробное объяснение о правилах поведения — [bit.ly/coc101faq](https://t.co/6BKr9Gikl8 "https://bit.ly/coc101faq")

Типичный проект: вот проект, вот как установить, вот как использовать.

Кроме этого важно: зачем, какие зависимости, какие правила поведения при разработке проекта, как принять участие, как связаться с автором.

Мало писать полные и правильные ридми, правила или задачи в трекере. Нужно писать их простым, иклюзивным, гендерно-нейтральным языком.

Список советов для Слак-бота для поддержания инклюзивного общения — [bit.ly/inclusivebot](https://t.co/VycXFkBkDQ "https://bit.ly/inclusivebot")

Правила и материалы редакции Hoodie — [bit.ly/hoodieeditorial](https://t.co/kRKcB9GIla "https://bit.ly/hoodieeditorial")

Рут Джон [@Rumyra](https://twitter.com/Rumyra "Ruth John") с докладом «Let’s talk about MIDI» на ScotlandJS.

[pic.twitter.com/08cKTqPbnk](https://t.co/08cKTqPbnk)

![](https://pbs.twimg.com/media/Cj8AIBjWYAAQF8f.jpg)

Примитивные 8-битные звуки, которые все принимают за MIDI — это Digital Audio. MIDI — это способ общения между инструментами.

Демо [a6cb30f4.ngrok.io/audience](https://t.co/hCBntbLf3Z "http://a6cb30f4.ngrok.io/audience") [pic.twitter.com/EOFlJqrPYn](https://t.co/EOFlJqrPYn)

![](https://pbs.twimg.com/media/Cj8A2s6XIAUYlFA.jpg)

API простой до невозможности. [pic.twitter.com/jmr9jvogjF](https://t.co/jmr9jvogjF)

![](https://pbs.twimg.com/media/Cj8A8LtW0AARj1c.jpg)

Для воспроизведения и записи очень важна синхронизация во времени, поэтому важный черновик Timing Object — [webtiming.github.io/timingobject/](https://t.co/lvTqq7FucD "http://webtiming.github.io/timingobject/")

Запись медиа: MediaRecorder API [developers.google.com/web/updates/20…](https://t.co/JfkoM3ij7c "https://developers.google.com/web/updates/2016/01/mediarecorder")

MIDI-данные можно получить изо всех эл. инструментов [pic.twitter.com/huClxsxoNh](https://t.co/huClxsxoNh)

![](https://pbs.twimg.com/media/Cj8Cd3AWYAAyG7t.jpg)

Разные способы связи с устройством: 5-пиновый разъём, USB \(Web USB\) и даже Bluetooth MIDI \(Web Bluetooth API\).

[@mrmaxm](https://twitter.com/mrmaxm "Max M"), это утверждение докладчика

У нас перерыв, а у докладчиков нет, их продолжают мучать вопросами [pic.twitter.com/5LqyDbNPjk](https://t.co/5LqyDbNPjk)

![](https://pbs.twimg.com/media/Cj8IEy5WUAADA9I.jpg)

![](https://pbs.twimg.com/media/Cj8IF7CW0AAxqhh.jpg)

Ким Крейтон [@KimCrayton1](https://twitter.com/KimCrayton1 "Kim Crayton") с докладом «Overcoming the Challenges of Mentoring» на ScotlandJS.

[pic.twitter.com/0qCGeLtFYG](https://t.co/0qCGeLtFYG)

![](https://pbs.twimg.com/media/Cj8PiLrW0AAYRzT.jpg)

Хватит врать новичкам: через 30, 45, 60 дней курса вы станете разработчиком, научитесь решать задачи и найдёте работу. Нет, не выйдет.

Если вы ищете старшего специалиста — вы же понимаете, что у всех старших уже есть работа, которая их устраивает?

Нужно построить конвейер превращения из младших в старших.

Если вы пришли из образования: как это, можно взять чей-то опенсорсный проект и никто тебя на назовёт плагиатором?

Можно сделать ошибку и погуглить, если не знаешь! Представьте доктора: упс, ошибочка, сейчас погуглю.

Наставничество. Для молодых: помогает им повзрослеть; для взрослых: помогает в карьере, лучше практики работы, поведение в коллективе.

Личное наставничество: важно проводить с учётом личных качеств, более тесное с преподавателем, строится на характерах того и другого.

Наставничество: постоянное, запланированное, построение отношений, обоюдное уважение, личный контакт.

Успешное наставничество, для наставника: выяснить свои мотивы, честно прикинуть свои ресурсы, таланты, характер. Реалистичные цели.

Для ученика: уважение к наставнику; чёткие, видимые цели.

Ола Гасидло [@misprintedtype](https://twitter.com/misprintedtype "/me npm i dance") с докладом «I’m offline, cool! What now?» на ScotlandJS.

«Сначала офлайн» — это показывать что-то на экране без сетевого запроса. И чем больше показываете, тем лучше.

[pic.twitter.com/nbU4UAjF7F](https://t.co/nbU4UAjF7F)

![](https://pbs.twimg.com/media/Cj8WCOVXAAAiJxc.jpg)

Зачем нужны приложения:  
— коммуникация  
— информация  
— возможность  
— любовь

Но чем занимаются разрабочики вместо решения задач пользователя? [pic.twitter.com/C3ttZmWY4Q](https://t.co/C3ttZmWY4Q)

![](https://pbs.twimg.com/media/Cj8WieRXIAEChQb.jpg)

Не обязательно искать новые инструменты для решения задач, обычно их можно решить имеющимися средствами. Сфокусироваться на задаче.

Проверьте запросы вашего сайта: может пары вам хватит, не нужно посылать просто потому, что можете.

Минификация и сохранение ресурсов при первом посещении сайта. Храните ресурсы в локальных хранилищах, но не все, просто потому, что можете.

Приятель Олы как-то заказал пиццу за 1 цент, подмухлевав данные на клиенте — не было проверки на сервере, он доверял всему с клиента.

И последний совет: JSON Web Tokens — [jwt.io](https://t.co/wsZVyZUvNa "https://jwt.io/")

Мэтью Подвысоцкий [@mattpodwysocki](https://twitter.com/mattpodwysocki "λ Calrissian") с докладом «Async Programming at Netflix, Microsoft, Slack and the world!» на ScotlandJS.

[pic.twitter.com/TWIbFR3EFJ](https://t.co/TWIbFR3EFJ)

![](https://pbs.twimg.com/media/Cj8ad5AWkAA81wH.jpg)

Почему реактивное программирование круто. В знаменитой шапке.

Опенсорсер в Microsoft [pic.twitter.com/4HdRVyxaRE](https://t.co/4HdRVyxaRE)

![](https://pbs.twimg.com/media/Cj8awklWYAA3_g0.jpg)

Rx pusher [pic.twitter.com/jP3lbQpmQe](https://t.co/jP3lbQpmQe)

![](https://pbs.twimg.com/media/Cj8a6zgXEAAZxkb.jpg)

Зачем это вообще нужно? Netflix, например, транслирует фильмы на разные устройства и всё происходит асинхронно.

Промисы стали решением, но не идеальным решением. Например, не отменить промис. Сейчас идёт дискуссия над cancel и finally.

[pic.twitter.com/9o89BEObRF](https://t.co/9o89BEObRF)

![](https://pbs.twimg.com/media/Cj8cTucXEAABoYT.jpg)

![](https://pbs.twimg.com/media/Cj8cUYVXEAEcWKS.jpg)

Простая реализация search ahead на реактивном программировании [pic.twitter.com/bSSH61SlcM](https://t.co/bSSH61SlcM)

![](https://pbs.twimg.com/media/Cj8cywHWUAA2x0v.jpg)

Так что такое реактивное программирование? Не будем углубляться в научное объяснение. Это способ реакции на события.

[pic.twitter.com/JvEwX6T66S](https://t.co/JvEwX6T66S)

![](https://pbs.twimg.com/media/Cj8dbfaWEAAEntP.jpg)

Спелчекер в Слаке [pic.twitter.com/QewEBNQ76R](https://t.co/QewEBNQ76R)

![](https://pbs.twimg.com/media/Cj8eVBYXAAQTGBj.jpg)

Make reactive great again! [pic.twitter.com/2t7OGT6Plk](https://t.co/2t7OGT6Plk)

![](https://pbs.twimg.com/media/Cj8ewOkXAAA2Pmm.jpg)

![](https://pbs.twimg.com/media/Cj8ew4PWEAAX6bL.jpg)

У нас снова перерыв, теперь на обед. Вернёмся в 16:35 с «p2p off the grid» [pic.twitter.com/fL4BOyAq6T](https://t.co/fL4BOyAq6T)

![](https://pbs.twimg.com/media/Cj8ff5dXEAEVo2W.jpg)

Мы вернулись с обеда и продолжаем: Джеймс Халидей [@substack](https://twitter.com/substack "substack") с докладом «p2p off the grid» на ScotlandJS.

[pic.twitter.com/ccO3ZT9BHj](https://t.co/ccO3ZT9BHj)

![](https://pbs.twimg.com/media/Cj8yttbWgAAf_kA.jpg)

Джеймс занимался уточнением границы в Южной Америке на устройствах: GPS, телефоны на Android, Windows-ноутбуки, съёмка с дронов.

Нет электросети, ненадёжный интернет, все компьютеры кишат вирусами, главный способ передачи данных — по блютусу с телефона на телефон.

Интернет там спутниковый, пара сотен долларов в месяц, что огромные деньги за 20 Гб и если трафик кончился — всё. Никаких обновлений ОС.

Для установки софта использовался шелл-скрипт — APK скачивался на компьютер и дальше копировался на все телефоны.

Было бы хорошо, чтобы в сложных технологических условиях все участники могли одновременно редактировать карту, не дожидаясь остальных.

И здесь отлично сработала модель p2p.

[pic.twitter.com/22H0Gz1c0n](https://t.co/22H0Gz1c0n)

![](https://pbs.twimg.com/media/Cj82FtGVEAA1DgP.jpg)

БД для Open Street Map osm-p2p-db — [github.com/digidem/osm-p2…](https://t.co/Q626GLkkLS "https://github.com/digidem/osm-p2p-db"), когда вы пишете данные в неё, а не напрямую в OSM.

Лего-блоки для своей p2p-системы: hyperlog [github.com/mafintosh/hype…](https://t.co/Sy2wwNtyiJ "https://github.com/mafintosh/hyperlog"), hyperkv [github.com/substack/hyper…](https://t.co/S6qidfk3tO "https://github.com/substack/hyperkv")

Надёжным способом передачи данных между компьютерами стали USB-флешки с автоматизацией. Воткнул флешку, нажал кнопку — обменялся данными.

Чед Гаулер [@kitation](https://twitter.com/kitation "Chad") с докладом «How to ask about gender» на ScotlandJS.

Всё сложнее, чем [pic.twitter.com/5v01n6Qd2R](https://t.co/5v01n6Qd2R)

![](https://pbs.twimg.com/media/Cj84j9VWUAA8PfE.jpg)

[pic.twitter.com/N9NP9Rtppe](https://t.co/N9NP9Rtppe)

![](https://pbs.twimg.com/media/Cj8473eWgAAdckc.jpg)

Природу не уложить в прокрустово бинарное ложе М/Ж, есть множество исключений.

Полезные термины:  
— transgender, смена пола  
— intersex, неявные половые признаки  
— non-binary, когда явный пол избегается

Когда спрашивать про пол:  
да — мониторинг разнообразия  
может — в соцпрофилях для выяснения интересов  
нет — реклама, отказ в обслуживании

К полу нельзя привязывать физиологические характеристики. Всё, опять же, не двоично.

Задавайте прямые вопросы, ответы на которые ищете. Не спрашивайте пол, чтобы сделать ошибочное предположение.

Трансгендер — это не пол, поэтому лучше его не предлагать как вариант, это не прибавит инклюзивности.

Лучшая форма с выбором пола: поле, где ты можешь ввести что нужно. И выше справка, где сказано зачем спрашивают пол. [pic.twitter.com/OVr3Ibgmap](https://t.co/OVr3Ibgmap)

![](https://pbs.twimg.com/media/Cj88wGQXIAEHrHQ.jpg)

Ден Дженкинс [@dan\_jenkins](https://twitter.com/dan_jenkins "Dan Jenkins") с докладом «Getting Physical with Web Bluetooth in the Browser» на ScotlandJS.

[pic.twitter.com/A6Itgkh5Bb](https://t.co/A6Itgkh5Bb)

![](https://pbs.twimg.com/media/Cj89ZC3W0AA2B1x.jpg)

Вот бы можно было кликнуть по живому объекту и получить больше информации? Куаркоды! Ахаха. Нет.

Но столько объектов для взаимодействия вокруг! Афиши, остановки транспорта, любые объекты.

Как работает физический веб? Есть биконы с адресом Eddystone \(открытый формат\) и браузер \(Chrome и Opera\) его видит.

Chrome на iOS и Android всегда ищет адреса по BLE \(блютусный\), но только HTTPS.

Дальше этот адрес отправляется на прокси \(Google или Opera\) и там происходит доп. магия.

В сотне лондонских автобусах уже стоят биконы, которые транслируют уникальные адреса для автобусов с информацией о маршруте.

И подходим к Web Bluetooth, который позволяет связываться по BLE \(блютус с низким энергопотреблением\)

Bluetooth v3 54 Мб/с  
Bluetooth v4 0,3 Мб/с — медленный, но и потребляет очень мало энергии.

Сервис для чтения и записи в каждом устройстве [pic.twitter.com/vRxSxiA7LD](https://t.co/vRxSxiA7LD)

![](https://pbs.twimg.com/media/Cj9A4VyWgAQp5tf.jpg)

![](https://pbs.twimg.com/media/Cj9A48UW0AExlaw.jpg)

Где есть Web Bluetooth? [pic.twitter.com/EJqSlgdcL4](https://t.co/EJqSlgdcL4)

![](https://pbs.twimg.com/media/Cj9BMkvWEAAiNeL.jpg)

На Mac OS всё немного хуже, чем в среднем на ноутбуках [pic.twitter.com/MQ26Y6mvUN](https://t.co/MQ26Y6mvUN)

![](https://pbs.twimg.com/media/Cj9BWDYWUAAqZsG.jpg)

Адрес со слайдами Дена транслировал один из его биконов: [slideshare.net/mobile/secret/…](https://t.co/mtcJ6aEutj "https://www.slideshare.net/mobile/secret/KEc9I9oOd4VdKt")

Как выглядел адрес слайдов в виджете Chromium на iOS [pic.twitter.com/yXfiGkxohB](https://t.co/yXfiGkxohB)

![](https://pbs.twimg.com/media/Cj9C46BXAAAMwvT.jpg)

У нас перерыв до 18:30 по Москве, после доклад с аудио-видео чудесами.

Рут Джон [@Rumyra](https://twitter.com/Rumyra "Ruth John") и Тим Петруски [@TimPietrusky](https://twitter.com/TimPietrusky "Tim Pietrusky") закрывают ScotlandJS с LiveJS.

[pic.twitter.com/3NBICdtZee](https://t.co/3NBICdtZee)

![](https://pbs.twimg.com/media/Cj9PJlTWkAAksYp.jpg)

Короткая история JavaScript: Брендан Айк написал его за 10 и вот… [pic.twitter.com/X7n8Wtc3R1](https://t.co/X7n8Wtc3R1)

![](https://pbs.twimg.com/media/Cj9PqqQXAAQT6Ug.jpg)

JS и музыка: драм-машины, синтезаторы [pic.twitter.com/O7d1OJXKOj](https://t.co/O7d1OJXKOj)

![](https://pbs.twimg.com/media/Cj9QL27WEAABz6V.jpg)

![](https://pbs.twimg.com/media/Cj9QMe5W0AAYIfR.jpg)

Рут наиграла что-то похожее на заставку из Супер-Марио [pic.twitter.com/SQ1IPoWvVY](https://t.co/SQ1IPoWvVY)

![](https://pbs.twimg.com/media/Cj9Qi10WYAAc_jU.jpg)

Loop Drop, [loopjs.com](https://t.co/HI62gQUHek "http://loopjs.com/")

Повздыхали, вспомнили Winamp и его визуализации, можно ли такое сделать в браузере? Конечно! [pic.twitter.com/wKjVgGrHbX](https://t.co/wKjVgGrHbX)

![](https://pbs.twimg.com/media/Cj9R7lGXEAA956o.jpg)

Частотный анализатор [pic.twitter.com/9gmKbH0akx](https://t.co/9gmKbH0akx)

![](https://pbs.twimg.com/media/Cj9SJJvWkAAAxMr.jpg)

MIDI-контроллер Рут [pic.twitter.com/RuzA6ycm5a](https://t.co/RuzA6ycm5a)

![](https://pbs.twimg.com/media/Cj9TBOzXAAEAoy6.jpg)

Известный проект Тима Nerd Disco [github.com/TimPietrusky/N…](https://t.co/4mmpE10bby "https://github.com/TimPietrusky/NERD.DISCO")

Поехали! [pic.twitter.com/ujP36ybK4n](https://t.co/ujP36ybK4n)

![](https://pbs.twimg.com/ext_tw_video_thumb/738401336606240769/pu/img/4WhO114n_g2BsKAS.jpg)

Группа любителей аудио-видео и всякого JS: Рут, Тим и Дейв — [webvj.ninja](https://t.co/abc1TBhSw2 "http://webvj.ninja/")