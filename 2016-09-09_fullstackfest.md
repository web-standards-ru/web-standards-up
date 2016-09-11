# FullStack Fest

## 2016-09-09, Барселона, Испания

Доброе утро! С вами снова [@mr\_kovalyov](https://twitter.com/mr_kovalyov "Pavel Kovalyov") и я буду вести трансляцию второго дня [#fullstackfest](https://twitter.com/search?q=%23fullstackfest), который начнётся уже через несколько минут

А пока что вот ссылка на видео-трансляцию:  
[youtube.com/watch?v=SyeTI2…](https://t.co/TXcswsprSG "https://www.youtube.com/watch?v=SyeTI2cmUGI")

Первым докладчиком будет [@andrestaltz](https://twitter.com/andrestaltz "André Staltz") с реактивными потоками данных [#cyclejs](https://twitter.com/search?q=%23cyclejs) [#rxjs](https://twitter.com/search?q=%23rxjs)

Будит народ лайвкодингом из будущего :\) [pic.twitter.com/kuGylMYEDk](https://t.co/kuGylMYEDk)

![](https://pbs.twimg.com/media/Cr5V95JUEAA55md.jpg)

[pic.twitter.com/9Eui6Wmabc](https://t.co/9Eui6Wmabc)

![](https://pbs.twimg.com/ext_tw_video_thumb/774151355288072192/pu/img/CZS2ZE8_8JrmJcFp.jpg)

Демо [pic.twitter.com/ISZdn4BW11](https://t.co/ISZdn4BW11)

![](https://pbs.twimg.com/ext_tw_video_thumb/774151887276814336/pu/img/l9MOaS32ADpl4oAP.jpg)

Автор [#cyclejs](https://twitter.com/search?q=%23cyclejs) расскажет как работать с данными [pic.twitter.com/5QTSZ9TxSM](https://t.co/5QTSZ9TxSM)

![](https://pbs.twimg.com/media/Cr5XVDKVUAAmql7.jpg)

Cycle.js создавался чтоб решить три задачи

. иметь архитектуру удобную для любого UI

. - иметь чистый, читаемый и предсказуемый код

. - понимать как код работает

Redux хорош, но конкретные решения вносят коррективы в архитектуру: redux-saga, redux-loop...

Чтобы удобно дебажить - нужны удобные инструменты для визуализации потоков данных в приложении

Реактивные потоки легко визуализировать [pic.twitter.com/RYcAViSgpi](https://t.co/RYcAViSgpi)

![](https://pbs.twimg.com/media/Cr5ZUuBUsAA5HxE.jpg)

Объясняет реактивные потоки на фигурках lego [pic.twitter.com/PzmdlJLfSG](https://t.co/PzmdlJLfSG)

![](https://pbs.twimg.com/media/Cr5ZswUUIAAdPxR.jpg)

Лучшее объснение observables. Обязательно посмотрите в записе, кто хочет разобраться с rxjs [pic.twitter.com/3ZBGKMPfdG](https://t.co/3ZBGKMPfdG)

![](https://pbs.twimg.com/media/Cr5acdoUsAEighN.jpg)

"Such cycle much js" - [@andrestaltz](https://twitter.com/andrestaltz "André Staltz") [pic.twitter.com/O9yXxdNl5T](https://t.co/O9yXxdNl5T)

![](https://pbs.twimg.com/media/Cr5a3CFVIAYJaWS.jpg)

Основная идея: есть источники событий, есть observers, которые следят за событиями и drivers которые производят сайт эффект - например DOM

Кстати, для cycle есть удобный девтул для визуализации потоков [pic.twitter.com/Yhzmwuah3h](https://t.co/Yhzmwuah3h)

![](https://pbs.twimg.com/media/Cr5cNppVUAEi-c3.jpg)

Код на cycle.js легко визуализировать, чего трудно достичь с другими фреймворками [pic.twitter.com/eiIKwjrvzh](https://t.co/eiIKwjrvzh)

![](https://pbs.twimg.com/media/Cr5dEpVUIAAQQWn.jpg)

Напомню, вы можете задавать вопросы в твиттер с хештегом [#askfsf](https://twitter.com/search?q=%23askfsf) и  возможно они прозвучат на сцене

На сцене [@D3DVincent](https://twitter.com/D3DVincent "Vincenzo Chianese") с рассказом про CSP в JavaScript

CSP это... [pic.twitter.com/XBePAUnOkF](https://t.co/XBePAUnOkF)

![](https://pbs.twimg.com/media/Cr5dwFLVMAAF30l.jpg)

Проблема конкурентного программирования на JS - общая память \(shared memory\)

Что приводит к гонкам, дэдлокам

Сори, это проблемы конкурентного программирования вообще

JS синхронный, поэтому казалось бы эти проблемы не актуальны

У текущая реализация асинхронных задач есть проблема координации конкурентного выполнения

Докладчик говорит что callback'и - зло! Но мы то и так это знаем!

Promise хороши, но мало кто понимает их внутреннее устройство

Генераторы - асинхронный код в синхронном стиле

У промисов есть ограничения - они не очень хорошо работают с событиями

Код на слайдах плохо видно, был пример как правильно работать с промисами в обработчиках событий

Высокоуровневые паттерны:  
- Observable \(RxJS\)  
- Communicating Sequental Processes

CSP это просто pipes "cat file | grep search"

Процессы в CSP это не процессы ОС, а окружение которое выполняет ваш код. Память не шарится

Простейщий пример: один процесс создает сообщение, друг его обрабатывает - one to one

В One-to-one - второй процесс блокируется и ждет сообщений

Есть подходы one-to-many, many-to-one и many-to-many

Пошло демо использования CSP с библиотекой js-csp

Побежали циферки на экране - значит всё работает. Вот библиотека: [github.com/ubolonton/js-c…](https://t.co/LgQVVEY0yB "https://github.com/ubolonton/js-csp")

Итоги [pic.twitter.com/6eLxcVj6N9](https://t.co/6eLxcVj6N9)

![](https://pbs.twimg.com/media/Cr5kF5KUEAIw8n3.jpg)

Ребята приглашают контрибьютить и популяризовать csp [pic.twitter.com/doUIws4kB2](https://t.co/doUIws4kB2)

![](https://pbs.twimg.com/media/Cr5kYNKVUAAV8GO.jpg)

Идём пить кофе, чтобы до конца проснуться!

Возвращаемся к докладам!   
Сейчас выступит [@adunkman](https://twitter.com/adunkman "Andrew Dunkman") с докладом про синхронизацию состояния без сервера

Доклад будет про стандартные браузерные API

Как синхронизировать состояние приложения между вкладками?

Веб это больше чем веб-страница [pic.twitter.com/VuXewjwhlc](https://t.co/VuXewjwhlc)

![](https://pbs.twimg.com/media/Cr5vcZHVUAAwSut.jpg)

document.cookie… но не вздумайте использовать их для синхронизации состояния

Они заменили cookie на localStorage, пока не начали получать QuoteExceededError

А еще пользователи начали жаловаться на то что их сайт не работает… в приватном режиме Safari на iOS

Использование ивентов "storage" может помочь в отслеживании изменения состояния

Можно использовать SharedWorkers лля коммуникаций между вкладками [pic.twitter.com/pwHNmyjLb3](https://t.co/pwHNmyjLb3)

![](https://pbs.twimg.com/media/Cr5wyXGVUAI6z6g.jpg)

Но Safari просто выпилили SharedWorkers

А также SharedWorkers были удалены из стандарта ;\(

И вот подоспели ServiceWorkers

Самое сложное в сервис-воркерах – это объяснить принцип их работы в двух словах :\)

MDN, W3C не очень понятно формулируют определение сервис-воркеров

Вот определение от докладчика [pic.twitter.com/B6WnpVVvSL](https://t.co/B6WnpVVvSL)

![](https://pbs.twimg.com/media/Cr5yMbIUkAAePdn.jpg)

Бойлерплейт для установки воркера [pic.twitter.com/wxfqZ53FqO](https://t.co/wxfqZ53FqO)

![](https://pbs.twimg.com/media/Cr5ypHWVMAAq9UC.jpg)

"Push" событие [pic.twitter.com/t3bxuU6J96](https://t.co/t3bxuU6J96)

![](https://pbs.twimg.com/media/Cr5y0-iUAAAmMg-.jpg)

Подписываемся на sync событие [pic.twitter.com/KuqBgwL945](https://t.co/KuqBgwL945)

![](https://pbs.twimg.com/media/Cr5zTyCVMAAf9xb.jpg)

Через event.tag передаем, например, действие которое надо выполнить

Sync событие [pic.twitter.com/jZD5p9d9ZJ](https://t.co/jZD5p9d9ZJ)

![](https://pbs.twimg.com/media/Cr5zsM5UsAEGpYy.jpg)

"sync" поддерживется только в Chrome :\(

Fetch - перехват запроса между приложением и браузером [pic.twitter.com/QiwPoiFT7F](https://t.co/QiwPoiFT7F)

![](https://pbs.twimg.com/media/Cr50gYyWcAAMgPr.jpg)

"fetch" поддерживается в большинстве современных браузерах

Итоги по сервис-воркерам [pic.twitter.com/6R28abAASz](https://t.co/6R28abAASz)

![](https://pbs.twimg.com/media/Cr51F9eVIAAw5Cf.jpg)

Следующий доклад от [@slobodan\_](https://twitter.com/slobodan_ "Slobodan Stojanović") про разработку веб-сайтов, которые будут работать даже на Марсе!

Немного фактов о Марсе [pic.twitter.com/4kUFR2F5JT](https://t.co/4kUFR2F5JT)

![](https://pbs.twimg.com/media/Cr53N01WIAEKqE5.jpg)

Проблемы которые ждут нас на Марсе [pic.twitter.com/NqRB7sZPnl](https://t.co/NqRB7sZPnl)

![](https://pbs.twimg.com/media/Cr53mrUWcAAtccJ.jpg)

Так зачем же нам лететь на Марс?!

Нам нужен бекап! [pic.twitter.com/TgtH13dQ4H](https://t.co/TgtH13dQ4H)

![](https://pbs.twimg.com/media/Cr54A5CXEAAW7O7.jpg)

А теперь представьте что у вас есть сайт! Внезапно [pic.twitter.com/PL4ygreUU9](https://t.co/PL4ygreUU9)

![](https://pbs.twimg.com/media/Cr54UWtW8AABe5m.jpg)

Марс, между прочем, единственная планета населенная роботами :\) Большинство из которых  - металлолом

Так почему же наш сайт не будет работать на Марсе?!?

Дистанция и задержки. Никакого netflix... [pic.twitter.com/2WyfegHz4q](https://t.co/2WyfegHz4q)

![](https://pbs.twimg.com/media/Cr55F19WcAAbeQF.jpg)

Коммуникации с Марсом осуществляются посредством радиоволн

Межпланетный интернет отличается от привычного нам [pic.twitter.com/UMnlwF2yIE](https://t.co/UMnlwF2yIE)

![](https://pbs.twimg.com/media/Cr55kmNWIAAyDDH.jpg)

Нужны узлы-повторители чтоб избегать потерь данных [pic.twitter.com/lfUjNnVKQ1](https://t.co/lfUjNnVKQ1)

![](https://pbs.twimg.com/media/Cr551jiWIAACBdz.jpg)

Сервис-воркеры обеспечат офлайн режим нашему приложению [pic.twitter.com/Yc2Qq1j88S](https://t.co/Yc2Qq1j88S)

![](https://pbs.twimg.com/media/Cr56A_hWEAAxaH-.jpg)

Опять пример кода установки сервис-воркера

Для экономии трафика [@slobodan\_](https://twitter.com/slobodan_ "Slobodan Stojanović") предлагает воспользоваться [#graphql](https://twitter.com/search?q=%23graphql) или чем-нибудь подобным

Для хранения данных локально можем использовать IndexedDB

IndexedDB - key-value хранилище, работает асинхронно и использует DOM-события

Для синхронизации пожалуй возьмём [@pouchdb](https://twitter.com/pouchdb "PouchDB"). Где-то радуется один [@nolanlawson](https://twitter.com/nolanlawson "Nolan Lawson")

Для peer-to-peer коммуникаций можем использовать WebRTC

Почему же не загружать html/css через p2p?! [pic.twitter.com/8rJQZoUKk5](https://t.co/8rJQZoUKk5)

![](https://pbs.twimg.com/media/Cr58C5YWAAE5Hhy.jpg)

А как на счет межпланетной файловой системы? [pic.twitter.com/cjZRKQj0R5](https://t.co/cjZRKQj0R5)

![](https://pbs.twimg.com/media/Cr58Vd7WYAEuQi-.jpg)

Проблемы которые ждут разработчиков:  
- таймстампы  
- хранение сессий  
- безопасность и приватность  
- как тестировать экстремальные ситуации?

Главная проблема на нашей планете! [pic.twitter.com/0kfTMrlu0K](https://t.co/0kfTMrlu0K)

![](https://pbs.twimg.com/media/Cr589_7W8AAgCSO.jpg)

Прежде чем решать проблемы для Марса - не плохо бы решить проблемы на Земле

А мы идем обедать! [pic.twitter.com/2EcCRYRZ8R](https://t.co/2EcCRYRZ8R)

![](https://pbs.twimg.com/media/Cr59kisWgAA_YRV.jpg)

Скоро начинаем!   
А пока слайды с последнего доклада [@slobodan\_](https://twitter.com/slobodan_ "Slobodan Stojanović") про вебсайты на Марсе:  
[speakerdeck.com/slobodan/how-t…](https://t.co/kP4yEzgb91 "https://speakerdeck.com/slobodan/how-to-build-a-website-that-will-eventually-work-on-mars")

И первый доклад после обеда – [@binjimint](https://twitter.com/binjimint "Ben Smith") про WebAssembly

Этот парень разрабатывал Overwatch, а сейчас работает Google над WebAssembly

Что же это такое? [pic.twitter.com/4x01h2UI1N](https://t.co/4x01h2UI1N)

![](https://pbs.twimg.com/media/Cr6c8VNXgAET34z.jpg)

WebAssembly - это не язык программирования, а "compilation target" для языков типа C++, Rust \(не придумал перевод\)

И главное! Это НЕ замена JavaScript!

Если ваш код делает много вычислений, напр. cимуляция, сжатие, VR – WebAssembly вам в помощь

Для чего хорош WebAssembly [pic.twitter.com/QMD48yDkU5](https://t.co/QMD48yDkU5)

![](https://pbs.twimg.com/media/Cr6eR9KXgAArd1A.jpg)

Смотрим демку "Super Mario Bros." собранную на WebAssembly

А сейчас будут технические детали…

C/C++ компилируется с помощью emscripten [pic.twitter.com/vmueXpdIEx](https://t.co/vmueXpdIEx)

![](https://pbs.twimg.com/media/Cr6e-fNWcAEZB79.jpg)

Немного истории - asm.js [pic.twitter.com/K0zXCMRuuQ](https://t.co/K0zXCMRuuQ)

![](https://pbs.twimg.com/media/Cr6fH0BWIAA1HAI.jpg)

Почему же не использовать asm.js?   
Это всё же просто JavaScript  
- дорогой парсинг  
- тежёло расширять функиональность  
- нет 64bit Integers

Пример WASM кода - выглядит lisp'y [pic.twitter.com/cbs3yzBfMS](https://t.co/cbs3yzBfMS)

![](https://pbs.twimg.com/media/Cr6gGiEWIAQahhL.jpg)

Но на самом деле wasm это код стэковой машины \(stack machine\) [pic.twitter.com/AIcyFFiFBp](https://t.co/AIcyFFiFBp)

![](https://pbs.twimg.com/media/Cr6g90CWgAUW6Gc.jpg)

И дальше мы получаем wasm-binary код [pic.twitter.com/dytlS2Y9kW](https://t.co/dytlS2Y9kW)

![](https://pbs.twimg.com/media/Cr6hPYJWcAQzEvf.jpg)

Дальше у нас есть JS API и мы можем запускать этот код

в webassembly есть еще много чего интересного [pic.twitter.com/ZtZIirAxnO](https://t.co/ZtZIirAxnO)

![](https://pbs.twimg.com/media/Cr6h_IKWEAADVaZ.jpg)

Вся работа над WebAssembly сосредоточена здесь: [github.com/webassembly](https://t.co/y3cYYYnkBO "https://github.com/webassembly")

Следующий доклад от [@M\_a\_s\_s\_i](https://twitter.com/M_a_s_s_i "M_a_s_s_i") про VR, 3D и React…

"Virtual Reality is sexy" - [@M\_a\_s\_s\_i](https://twitter.com/M_a_s_s_i "M_a_s_s_i")

Докладчик разрабатывает продукт с 3D интерфейсом и сейчас они переходят к VR

Мечта - использовать веб технологии для 3d [pic.twitter.com/Vi0m45XJZY](https://t.co/Vi0m45XJZY)

![](https://pbs.twimg.com/media/Cr6k-zBWYAACgLK.jpg)

Используя CSS 3D transforms можно строить 3d интерфейсы. Но это не вариант…

Можно ли рендерить DOM в контексте канваса?!

Через SVG! Но тут есть много проблем с безопасностью

Есть идея! Рендерить UI в отдельный 2d canvas. И использовать эту текстуру в 3d canvas

Будем рисовать UI пиксель за пикселем. Но какой взять фреймворк, чтоб не кодить пиксели до смерти?!

Давайте возьмем React!   
[@M\_a\_s\_s\_i](https://twitter.com/M_a_s_s_i "M_a_s_s_i") &lt;3 React :\)

А еще React может вместо dom'а генерить данные канвас

Сейчас нам покажут демо todo-app в Redux стиле…  
Неужно с рендерингом в канвас?!

Пока что много кода который плохо видно... [pic.twitter.com/PzHtiNA67J](https://t.co/PzHtiNA67J)

![](https://pbs.twimg.com/media/Cr6nBwhXEAEgGbx.jpg)

Много react/redux кода…

Ага! Рассказывает про тяготы поиска canvas фреймворка с поддержкой react биндинга

React-canvas \(больше не разрабатывается\)  
Pixi.js  
Konva.js

Так-так, взяли Konva и konva-react…

Ещё оказывается нужен css-layout для построения лэйаута приложения

Это просто нужно видеть! Слева канавас, справа dom. И волшебный акцент... [pic.twitter.com/Ur7IcRwoXJ](https://t.co/Ur7IcRwoXJ)

![](https://pbs.twimg.com/ext_tw_video_thumb/774242392262213633/pu/img/jDrqCLT-KQqR7RU9.jpg)

Вроде как работает, но вооот сколько проблем! [pic.twitter.com/EAiAi2Oqw1](https://t.co/EAiAi2Oqw1)

![](https://pbs.twimg.com/media/Cr6qI9kXEAED48G.jpg)

Теперь у нас есть 2D UI в канвас, а теперь мы соберем из него 3D

А вот как это в 3D!!! [pic.twitter.com/yaZwHbirgz](https://t.co/yaZwHbirgz)

![](https://pbs.twimg.com/ext_tw_video_thumb/774243842958778368/pu/img/thMAgHZ1PCqd216E.jpg)

Теперь появилась проблема с маппингом 3d координат для ивентов

Не смотря на все проблемы – это работает!

А теперь нам нужен VR! И для этого в bablylon есть WebVRCamera

А вот и VR [pic.twitter.com/WgaUseNQkq](https://t.co/WgaUseNQkq)

![](https://pbs.twimg.com/media/Cr6spuRXEAEFgbS.jpg)

Выводы – proof of concept работает, но пришлось много костылить, чтобы всё подружить

Уходим на кофе-брейк

«Виртуальная реальность уже здесь, в Вашем браузере» от [@misslivirose](https://twitter.com/misslivirose "Liv Erickson") на [#fullstackfest](https://twitter.com/search?q=%23fullstackfest)

Доклад тоже в VR [pic.twitter.com/JBLWSMKLje](https://t.co/JBLWSMKLje)

![](https://pbs.twimg.com/media/Cr61wPlWgAEs1oS.jpg)

VR устройства бывают разные:  
- Mobile VR - управляется смартфоном  
- Desktop VR - управляется копьютером \(Oculus\)

Почем VR?   
Во-первых это ФАН!!!

Во-вторых меняется модель взаимодействия человека с компьютером

Поговорим о том, как браузер работает с VR и какие есть инструменты для VR

Со спекой WebVR можно познакомиться тут - [webvr.info](https://t.co/oafZ3O1Geg "https://webvr.info/")

[aframe.io](https://t.co/q9MZGjSegS "https://aframe.io/") - фреймворк для создания VR приложений от Mozilla VR

Таблички эксель в VR - мечта бухгалтеров! [pic.twitter.com/hMpvIOIlIf](https://t.co/hMpvIOIlIf)

![](https://pbs.twimg.com/media/Cr65CrIXYAA_fra.jpg)

Смотрим код приложения…

… и код презентации построенной на A-Frame

Ооочень много комментариев по коду

А вот та же презентация, завернутая в Electron [pic.twitter.com/sOLm3SpZts](https://t.co/sOLm3SpZts)

![](https://pbs.twimg.com/media/Cr67blSWYAEsNvh.jpg)

VR и WebVR - это круто и весело!

Следующий доклад про физический веб от [@scottjenson](https://twitter.com/scottjenson "Scott JensOn"), который разрабатывал Apple System 7 25 лет назад! [pic.twitter.com/Qt19kDOc1J](https://t.co/Qt19kDOc1J)

![](https://pbs.twimg.com/media/Cr69mJ5W8AAlAWX.jpg)

Что такое "физический веб"?

[pic.twitter.com/GJAip4MXQB](https://t.co/GJAip4MXQB)

![](https://pbs.twimg.com/media/Cr6-hzkXgAEN-GH.jpg)

У нас сейчас много различный "умных" устройств. Но большинству нужны собственные приложения

Вебу нужен сервис обнаружения [pic.twitter.com/8SgGhtXpgx](https://t.co/8SgGhtXpgx)

![](https://pbs.twimg.com/media/Cr6_JaQWcAAcdln.jpg)

Пример "умного" паркомата [pic.twitter.com/m5VzXuKBOx](https://t.co/m5VzXuKBOx)

![](https://pbs.twimg.com/media/Cr6_SHuWgAAJQYc.jpg)

Физический веб - мост между вебом и физическими \(реальными\) устройствами

Например, вы приходите к памятнику и получаете ссылку на информацию о памятнике без всяких приложений

Как работает умный паркомат - транслирует урлы. Никаких айдишников, просто урлы [pic.twitter.com/72QXRyu42k](https://t.co/72QXRyu42k)

![](https://pbs.twimg.com/media/Cr6_8RRW8AQ6Y5E.jpg)

QR коды не работают - их никто не сканирует в реальном мире и никто не печатает на товарах/устройствах/памятниках

Как физический веб борется с проблемой спама? Фильтрация и анализ до того как отправить пользователю

Bluetooth метки хранят урл. Короткие урл могут динамически подменять назначение без необходимости обновлять метку \(например tiny.cc\)

Веб становиться лучше! Вы пришли в ресторан, "зачекинились" - телефон подпишется на уведомления и вы будете знать когда ваш столик готов

ОМГ веб! [pic.twitter.com/5JLqncE602](https://t.co/5JLqncE602)

![](https://pbs.twimg.com/media/Cr7BzIDXgAAhCrY.jpg)

Как поместить bluetooth метки в маленький размер?! Например, упаковку лекарства

Но физический веб - не только bluetooth метки

Можно встроить в сами смартфоны для нового способа обмена информацией

Итого [pic.twitter.com/8W069hifwn](https://t.co/8W069hifwn)

![](https://pbs.twimg.com/media/Cr7DiQyW8AEKrTe.jpg)

Проект open-source:  
[github.com/google/physica…](https://t.co/YpqAATPjsR "https://github.com/google/physical-web")

Технология развивается [pic.twitter.com/xbOsSRYLv5](https://t.co/xbOsSRYLv5)

![](https://pbs.twimg.com/media/Cr7EYGOWcAAYhPP.jpg)

Планы на будущее [pic.twitter.com/ELotmRlZ7N](https://t.co/ELotmRlZ7N)

![](https://pbs.twimg.com/media/Cr7Fdu8WAAQsV6B.jpg)

Это был последний доклад на [#fullstackfest](https://twitter.com/search?q=%23fullstackfest) 2016!

Аплодисменты организаторам и спикерам! [pic.twitter.com/GiKb0kDFrz](https://t.co/GiKb0kDFrz)

![](https://pbs.twimg.com/media/Cr7G3oBXgAA4cf6.jpg)