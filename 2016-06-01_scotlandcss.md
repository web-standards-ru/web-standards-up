# ScotlandCSS

## 2016-06-01, Эдинбург, Шотландия, Великобритания

Привет, с вами [@pepelsbey](https://twitter.com/pepelsbey "Вадим Макеев") с прямой трансляцией с первой конференции [@ScotlandCSS](https://twitter.com/ScotlandCSS "ScotlandCSS") в Эдинбурге.

Открытие и организационные подробности: 11 докладчиков, целый день, идея сделать не лекции, но общение всех со всеми [pic.twitter.com/whPnyIn3A0](https://t.co/whPnyIn3A0)

![](https://pbs.twimg.com/media/Cj2ejBVWEAA5Wq4.jpg)

Программа дня: [scotlandcss.com/schedule/](https://t.co/XHC6uDsIOw "http://scotlandcss.com/schedule/") [pic.twitter.com/KrPUOOcZpj](https://t.co/KrPUOOcZpj)

![](https://pbs.twimg.com/media/Cj2e5AxWgAAqo0b.jpg)

Открывает ScotlandCSS Крис Лилли [@svgeesus](https://twitter.com/svgeesus "Chris Lilley"), отец SVG, соавтор спецификаций CSS.

Крис местный, приятно вернуться домой. Первое знакомство с CSS произошло в 1995 году на воркшопе Париже: Хокон Виум Ли, Берт Бос, CSS 1.

1995 Воркшоп на 10 человек  
1996 CSS 1  
1998 CSS 2  
…  
2016 ScotlandCSS

ft — 2 символа, но лигатура ft — 1 глиф. Глиф é может быть одним и двумя символами, собранным из двух частей.

Когда семейства перечисляются через запятую, браузер ищет нужные глифы по очереди в каждом шрифте.

Крис извиняется за синтаксис unicode-range. Как выбрать из шрифта только амперасанд, внутри @​font-face: unicode-range: U+26.

Возможности OpenType для управления возможностями шрифтов: font-variant \(только Firefox, простое\) или font-feature-settings \(шире, сложное\).

[pic.twitter.com/oCx3nDjMfD](https://t.co/oCx3nDjMfD)

![](https://pbs.twimg.com/media/Cj2iFeaXIAAoSoh.jpg)

[pic.twitter.com/7nzqezGu2Z](https://t.co/7nzqezGu2Z)

![](https://pbs.twimg.com/media/Cj2iMQ6WkAM__GV.jpg)

Лигатуры — font-varian-ligatures для включения, лучше не используйте значение none.

Свойство font-synthesis: weight | style | none, подсказка для браузера, генерировать или псевдокурсив и псевдожирность.

Кернинг — font-kerning: auto | normal | none. Не путать с разрядкой или трекингом, для этого letter-spacing.

Быстродействие: сабсетьте всё.

Шрифтовики боялись разориться, хотели DRM. Противники DRM были против. Война, непонимание.

Потом обе группы поговорили и все теперь счастливы: шрифтовики продают шрифт дважды \(веб и печать\), никакого DRM.

WOFF2 в среднем сжимает шрифты больше 60%, что лучше WOFF1 на 15%.

Font Loading API [pic.twitter.com/rAApNX6MpA](https://t.co/rAApNX6MpA)

![](https://pbs.twimg.com/media/Cj2kY53UUAAXGN-.jpg)

Будущее? Цветные шрифты! Давно и легко на печати. Теперь можно и в вебе.

[pic.twitter.com/42E1aY0HpI](https://t.co/42E1aY0HpI)

![](https://pbs.twimg.com/media/Cj2kvYEWUAAPDLa.jpg)

TransType 4 позволяет комбинировать глифы [pic.twitter.com/JWtB4Qudck](https://t.co/JWtB4Qudck)

![](https://pbs.twimg.com/media/Cj2lJzmWUAAJTmU.jpg)

Шрифты SVG + CPAL: глифы в SVG, цвета в CPAL \(таблица цветов, разработана в Microsoft\)

Слайды доклада «WebFonts: Level Up!», лучше всего работают в Firefox: [svgees.us/font-level-up/](https://t.co/gI1np78fa1 "http://svgees.us/font-level-up/")

[@talgautb](https://twitter.com/talgautb "Talgat Uspanov"), новая аватарка и цвет профиля, чтобы явно отличаться от основного аккаунта [@webstandards\_ru](https://twitter.com/webstandards_ru "Веб-стандарты")

Подготовка к следующему докладу [pic.twitter.com/t0bW41vJDB](https://t.co/t0bW41vJDB)

![](https://pbs.twimg.com/media/Cj2nkr2WsAAm2ei.jpg)

Второй доклад на ScotlandCSS: Умар Ханса [@umaar](https://twitter.com/umaar "Umar Hansa") «An A to Z of CSS».

[pic.twitter.com/aJEZQTDPjm](https://t.co/aJEZQTDPjm)

![](https://pbs.twimg.com/media/Cj2p7fwWkAAWWHH.jpg)

В докладе были все 26 букв из CSS-алфавита, то сегодня всего 20 минут, так что будет краткая версия.

A: all, свойство для сброса стилей, браузерная поддержка так себе, но очень мощная штука.

Прекрасно подходит, чтобы сбрасывать тысячи строк браузерных дефолтов: [chromium.googlesource.com/chromium/blink…](https://t.co/fPUS5UA6kv "https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css")

У элемента &lt;style&gt; стоит display: none, иначе стили в &lt;head&gt; были бы видны как обычный текст.

Только некоторые CSS-свойства можно использовать с ::first-letter и ::first-line.

Продолжаем с F: font-display — второе самое любимое свойство Умара, очень помогает пользователям.

Свойство font-display позволяет управлять поведением подгрузки веб-шрифтов [developers.google.com/web/updates/20…](https://t.co/OuKUPpM7oC "https://developers.google.com/web/updates/2016/02/font-display")

Например, font-display: block, текст не виден около 3 секунд и потом появляется фолбек.

font-display: swap — никакой блокировки, замена сразу после подгрузки; font-display: fallback — короткая блокировка и быстрая замена.

H: проект Гудини, хоть и не CSS-свойство, но самая любимая вещь Умара, например: display: layout\('my-custom-layout'\) и описываете его в JS.

Или вот background-image: paint\('my-custom-paint'\) и описываете что нужно нарисовать в JS.

I: image-rendering: pixelated чтобы браузер не сглаживал картинки при изменении размеров.

M: mix-blend-mode для наложения элементов и смешивания цветов.

N: not\(\) для селекторов  
  
li:not\(:last-child\) { thing: on }  
  
Вместо  
  
li { thing: on }  
li:last-child { thing: off }

O: object-fit: fill | contain | cover, вроде background-size для &lt;img&gt; и &lt;video&gt;.

R: обращение к корневому элементу &lt;html&gt; или &lt;svg&gt; с помощью псевдонима :root, удобно для обозначения кастомных свойств или CSS-переменных.

W: will-change — подсказка браузеру, что изменится, а значит элемент окажется на отдельном слое отрисовки и будет оптимизирован.

Умар прощается: [@umaar](https://twitter.com/umaar "Umar Hansa"), [umaar.com/dev-tips](https://t.co/PAHLsbEqpP "https://umaar.com/dev-tips")

Подготовка к следующему докладу [pic.twitter.com/cdV6UBCDnp](https://t.co/cdV6UBCDnp)

![](https://pbs.twimg.com/media/Cj2vU0iWYAACxrw.jpg)

Третий доклад на ScotlandCSS: Росс Пенман [@PenmanRoss](https://twitter.com/PenmanRoss "Ross Penman") «Programming with Sass»

[pic.twitter.com/lzR2G8NDDF](https://t.co/lzR2G8NDDF)

![](https://pbs.twimg.com/media/Cj2wsSOXIAA9IDy.jpg)

Зачем программировать на Sass? [pic.twitter.com/44EkmPaJ2E](https://t.co/44EkmPaJ2E)

![](https://pbs.twimg.com/media/Cj2w9O8W0AEnDoJ.jpg)

![](https://pbs.twimg.com/media/Cj2w9sEWkAAcWpT.jpg)

Например, API Google Fonts. Сложно подключать разные семейства и постоянно копировать. Давайте напишем API к этому на Sass.

Причём не просто к Sass, но чтобы всё работало как в Ruby Sass, так и в libSass.

[pic.twitter.com/EwDFZ1sePH](https://t.co/EwDFZ1sePH)

![](https://pbs.twimg.com/media/Cj2yA2jWkAA_L0t.jpg)

Решение совместимости с libSass заняло почти год.

Собственно, API [pic.twitter.com/RWqCSQf2Dv](https://t.co/RWqCSQf2Dv)

![](https://pbs.twimg.com/media/Cj2yXMQXIAACr3z.jpg)

Чтобы кодировать URL нужно иметь функцию поиска-замены, но её нет в Sass. Раньше было ещё хуже, а теперь можно написать функцию str-replace.

Другая проблема: в Sass нет системы модулей, можно только импортировать, все функции публичные. Нужны префиксы к названиям wf-str-replace.

В Sass 4 собираются решить эту проблему: предложение с модулями — [github.com/sass/proposal.…](https://t.co/uan9wNmOIe "https://github.com/sass/proposal.module-system")

Дальше: юнит-тестирование, иначе без тестов ничего сложного и стабильного не сделать.

Bootcamp BDD в стиле Jasmine —  
[github.com/thejameskyle/b…](https://t.co/k1fhZMMWh0 "https://github.com/thejameskyle/bootcamp"), но проект не поддерживается.

Другой вариант: компиляция и git diff для результатов.

Но можно лучше: SassUnit, авторская библиотека Росса для тестирования — [github.com/penman/SassUnit](https://t.co/dKRBaCzDH0 "https://github.com/penman/SassUnit")

И, наконец, Sass-Web-Fonts, удобный API Google Web Fonts — [github.com/penman/Sass-We…](https://t.co/wZgs75M9Ac "https://github.com/penman/Sass-Web-Fonts")

Пишете что-то сложное, рекомендует Росс, используйте встроенные возможности Sass: @​debug, @​error, @​warn

[pic.twitter.com/Nu370O4rQF](https://t.co/Nu370O4rQF)

![](https://pbs.twimg.com/media/Cj20hGJXAAEyqXO.jpg)

Можно не программировать на Sass, а расширять: на Ruby, Си, но это бывает сложновато портировать, да и языки сложнее.

Четвёртый доклад на ScotlandCSS: Кейти Фенн [@katie\_fenn](https://twitter.com/katie_fenn "Katie Fenn") «Writing modular CSS with CSS modules»

Слайды и материалы к докладу Кейти: [katiefenn.co.uk/scotland-css-2…](https://t.co/x9M5xqtOZz "http://www.katiefenn.co.uk/scotland-css-2016/")

[pic.twitter.com/VZKCmgFzCk](https://t.co/VZKCmgFzCk)

![](https://pbs.twimg.com/media/Cj22AmXW0AAjp_j.jpg)

Зачем нам ещё один инструмент? У нас появилась модульность в JS и нам захотелось вытащить стили из глобальной видимости.

CSS-модуль — это просто [pic.twitter.com/2A0vPA2Vuo](https://t.co/2A0vPA2Vuo)

![](https://pbs.twimg.com/media/Cj22eIQWgAA15Bh.jpg)

Плагин делает имя класса уникальным [pic.twitter.com/eJX4fxhBXx](https://t.co/eJX4fxhBXx)

![](https://pbs.twimg.com/media/Cj22mHHXIAAois2.jpg)

Не нужно думать про префиксы, блоки, элементы. Просто пишите простые имена классов.

Карта переписанных имён классов лежит в JSON-файле и легко подключается в любых шаблонизаторах.

Композиция модулей [pic.twitter.com/DV9CNaaXIC](https://t.co/DV9CNaaXIC)

![](https://pbs.twimg.com/media/Cj23P7FWsAAqdZV.jpg)

В итоговом JSON оба класса из композиции соединяются и попадают в шаблон.

Если вы не слышали про PostCSS, это… ахаха.

[@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"), ведущий трансляции смеялся, зал молчал

Демо [github.com/katiefenn/php-…](https://t.co/ScmyLr3OD8 "https://github.com/katiefenn/php-css-modules-demo") [pic.twitter.com/eI2OSqZrpE](https://t.co/eI2OSqZrpE)

![](https://pbs.twimg.com/media/Cj24efzUkAEJCm3.jpg)

![](https://pbs.twimg.com/media/Cj24e1CXAAAi--z.jpg)

CSS-модули трансформируют только классы и ID, другие части селекторов, псевдоэлементы, например — нет.

Проблема специфичности никуда не девается, таков CSS, но вы имеете с ней дело на очень малых масштабах.

CSS-модули — это тренд: инлайн-стили в React, Radium, Aphrodite.

У нас перерыв, чуть меньше часа, продолжим в 14:00 по Москве [pic.twitter.com/hkFfQS6X6q](https://t.co/hkFfQS6X6q)

![](https://pbs.twimg.com/media/Cj26-qSW0AAUmDE.jpg)

Продолжаем! Пятый доклад на ScotlandCSS: Кристов Рейнарц [@pistenprinz](https://twitter.com/pistenprinz "Christoph Reinartz") «Large Scale CSS Refactoring»

[pic.twitter.com/W6501Tl3Kq](https://t.co/W6501Tl3Kq)

![](https://pbs.twimg.com/media/Cj3FNOEWgAAVIiW.jpg)

Project Ironman — [github.com/trivago/projec…](https://t.co/iAQcXIYVOQ "https://github.com/trivago/project-ironman")

Специфичность стилей Trivago в 2012 году [pic.twitter.com/6dV7AltxLN](https://t.co/6dV7AltxLN)

![](https://pbs.twimg.com/media/Cj3FsaGXEAAWZLJ.jpg)

Проблемы: слишком сложная сборка спрайтов, 4,5 тысячи селекторов, 450 Кб CSS.

60 оттенков серого, синего и оранжевого — когда нет руководства по стилю.

Типичные комментарии: что это, не трогай [pic.twitter.com/GtfjwnMC1r](https://t.co/GtfjwnMC1r)

![](https://pbs.twimg.com/media/Cj3GfuAXEAAnh98.jpg)

[pic.twitter.com/taZdVwBXYz](https://t.co/taZdVwBXYz)

![](https://pbs.twimg.com/media/Cj3GnuvWYAAfYue.jpg)

Важный шаг: переход на Normalize.css и border-box. И конечно mobile-first.

Структура папок [pic.twitter.com/YyeWp6KjW4](https://t.co/YyeWp6KjW4)

![](https://pbs.twimg.com/media/Cj3HSGZXAAAAMdy.jpg)

Что сделали со старым кодом [pic.twitter.com/vFN9sAtNIY](https://t.co/vFN9sAtNIY)

![](https://pbs.twimg.com/media/Cj3Hbn9XAAAWTy6.jpg)

Сделали всё за 4 недели. Быстро! Но даже для этого: как объяснить, что нужен фиче-фриз на 4 недели?

Как-как: продай! Покажи плюсы, дай цифры, меньше технической стороны, больше пользы для процесса и команды.

Команда, работавшая над рефакторингом [pic.twitter.com/7uaktyir1u](https://t.co/7uaktyir1u)

![](https://pbs.twimg.com/media/Cj3ILGaWkAEK8x9.jpg)

В итоге:  
— 889 комитов за 3 недели,  
— 11973 удалено,  
— 36668 добавлено,  
— было 50, стало 30 тысяч строк.

Было 5 спрайтов, стало 0 — всё заинлайнили.

Специфичность: было-стало [pic.twitter.com/1vTZW5UtWK](https://t.co/1vTZW5UtWK)

![](https://pbs.twimg.com/media/Cj3JJgkWYAAB1ug.jpg)

![](https://pbs.twimg.com/media/Cj3JJ_mWkAAgKl_.jpg)

Зарелизили, всё классно. Но можно лучше: стали работать над модульной системой.

Подготовка к следующему докладу, узнаёте девушку в центре кадра? [pic.twitter.com/gvxWRxDI6g](https://t.co/gvxWRxDI6g)

![](https://pbs.twimg.com/media/Cj3J6_fWYAAtVXg.jpg)

Шестой доклад на ScotlandCSS: Джеймс Стейнбах [@jdsteinbach](https://twitter.com/jdsteinbach "James Steinbach") «Using Musical Scales to Build Harmonious Typography»

Компьютеры для того, чтобы делать скучные вещи. И освобождать наше время для творчества.

Итак, музыкальная нотация как основа для системы размерностей шрифтов на сайте.

Системы интервалов для размеров шрифта, например: [modularscale.com](https://t.co/76BTHycZO3 "http://www.modularscale.com/") и [sassline.com](https://t.co/gVCP0PO4pA "https://sassline.com/")

Мажорный ряд, пентатоника, мажорная триада [pic.twitter.com/8nU5XQcsya](https://t.co/8nU5XQcsya)

![](https://pbs.twimg.com/media/Cj3M_NoW0AEQ6Ij.jpg)

![](https://pbs.twimg.com/media/Cj3M_qmWgAAwM-g.jpg)

![](https://pbs.twimg.com/media/Cj3NAHWWUAA6eIu.jpg)

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): Минута славы в трансляции Веб Стандартов!  
Хорошая трансляция, кстати. Я читаю когда лень слушать :-\)  
[twitter.com/webstandards\_u…](https://t.co/tg0HhNpRHO "https://twitter.com/webstandards_up/status/737967932249112576")

Систему интервалов сложно написать для декстопа и для мобилок, нужно адаптировать.

Итак, проект TypeTuner для системы размеров на основе музыкальной шкалы — [github.com/jdsteinbach/ty…](https://t.co/VN9fReoCw1 "https://github.com/jdsteinbach/typetuner")

Седьмой доклад на ScotlandCSS: Девид Бернер [@DaveOrDead](https://twitter.com/DaveOrDead "David Berner") «Shedding Light on the Shadow DOM»

[pic.twitter.com/9GYM9JOixd](https://t.co/9GYM9JOixd)

![](https://pbs.twimg.com/media/Cj3OjTzWsAEGcSd.jpg)

Этот доклад Девида недавно слушали авторы спеки Shadow DOM и после сказали, что половина слайдов уже неактуальна. Такова судьба черновиков.

Так зачем Shadow DOM? Чтобы писать модули, а не копипейстить одно и то же из проекта в проект.

Полгода спустя, ваш же код: боже, какой идиот это писал? Гм, да.

Shadow DOM — только часть большой инициативы веб-компонентов.

Только три строки на JS во всём докладе для создания Shadow DOM [pic.twitter.com/PUKZwHBHel](https://t.co/PUKZwHBHel)

![](https://pbs.twimg.com/media/Cj3QLEBWYAA0myt.jpg)

Shadow Root в аудиоплеере [pic.twitter.com/D1Og8ix6Rk](https://t.co/D1Og8ix6Rk)

![](https://pbs.twimg.com/media/Cj3QTkKWYAApk48.jpg)

Был метод createShadowRoot, стал attachShadow, но пока никто не поддерживает. Был элемент &lt;content&gt;, стал &lt;slot&gt;, но пока никто… ну, понятно

Слайды доклада Дэвида: [speakerdeck.com/daveordead/she…](https://t.co/iLKjya3N6V "https://speakerdeck.com/daveordead/shedding-light-on-the-shadow-dom")

Главная мысль доклада, самое важное про Shadow DOM [pic.twitter.com/toWXKDWAbr](https://t.co/toWXKDWAbr)

![](https://pbs.twimg.com/media/Cj3R3j6XAAEQ0qW.jpg)

И другие запрещённые части спецификации: селекторы, чтобы добраться до Shadow DOM [pic.twitter.com/WrVK5yo2sC](https://t.co/WrVK5yo2sC)

![](https://pbs.twimg.com/media/Cj3SWlxXIAAxITO.jpg)

CSS-переменные как API для вашего веб-компонента: настраивается только то, что вы разрешили настраивать [pic.twitter.com/Ff55soV3sF](https://t.co/Ff55soV3sF)

![](https://pbs.twimg.com/media/Cj3St6QXEAEC7ez.jpg)

![](https://pbs.twimg.com/media/Cj3SuMiWYAAlQvk.jpg)

И у нас снова перерыв: обсуждение докладов и ланч до 16:35 по Москве. Сразу после «Generative Art With CSS».

Восьмой доклад на ScotlandCSS: Барак Чамо «Generative Art with CSS».

Надоело делать всякое на WebGL и Canvas, почему бы не сделать что-то интересное на CSS? С нормальным API, а не чёрт знает как.

Проблема с классами для динамических состояний — нужен класс для каждого шага, а если их тысячи, десятки тысяч?

Другой вариант: CSS-анимации и переходы, но возможности очень базовые.

Третий вариант: расширения CSS, то есть LESS, Sass, PostCSS с переменными и циклами — а на выходе всё равно обычный CSS.

Ещё? Инлайн-стили! Но неправильное смешение структуры и оформления, сложности с вложенными и множественными стилями.

В итоге, хорошее решение: атрибуты, calc\(\) и кастомные CSS-свойства.

Атрибуты можно расставлять по HTML как data-attr, а потом, когда нужно, добавлять в DOM через CSS: content: attr\(data-attr\).

Например, короткая версия текста на кнопке: полная прямо внутри &lt;button&gt;, короткая на атрибуте, а MQ переключает видимость. И всё доступно.

Кастомные CSS-свойства в JS [pic.twitter.com/S1PxrYnaGy](https://t.co/S1PxrYnaGy)

![](https://pbs.twimg.com/media/Cj3rdbHWgAAuNtj.jpg)

JS берёт данные из музыки, но вся визуализация происходит в CSS, включая работу с переменными [pic.twitter.com/igDaBU0h3J](https://t.co/igDaBU0h3J)

![](https://pbs.twimg.com/media/Cj3skQWWEAAt68n.jpg)

![](https://pbs.twimg.com/media/Cj3slAjWgAA8YAD.jpg)

![](https://pbs.twimg.com/media/Cj3smaGWYAEErSH.jpg)

Генерация стилей на лету [pic.twitter.com/Kl57IaiLjf](https://t.co/Kl57IaiLjf)

![](https://pbs.twimg.com/media/Cj3suyRWYAEhhnB.jpg)

Простой JS, а вся визуализация в CSS [pic.twitter.com/PqsDFqWEyH](https://t.co/PqsDFqWEyH)

![](https://pbs.twimg.com/media/Cj3s8vaW0AAW3Bi.jpg)

Из JS можно пробрасывать CSS-переменную со случайным значением и использовать её в CSS.

Нашёлся правильный Твиттер Барака: [@GoFoolhardy](https://twitter.com/GoFoolhardy "Foolhardy")

Девятый доклад на ScotlandCSS: Льюис Коупер [@LewisCowper](https://twitter.com/LewisCowper "Whisky Yogi") «Approachable Projects on the Web of 2016»

[pic.twitter.com/uAMBiws61T](https://t.co/uAMBiws61T)

![](https://pbs.twimg.com/media/Cj3ugcKWEAA-Got.jpg)

Approachability. Доступность, открытость — что это для софта?  
  
1. Доступность  
2. Автоматизация  
3. Дружественность

Ридми проектов часто не хватает простого короткого введения, объясняющего назначение проекта.

Оптимизируйте документацию проекта для новых контрибьюторов, которые помогут его раскрутить и развивать после.

Your First Pull Request — [yourfirstpr.github.io](https://t.co/4FKor5JQHy "https://yourfirstpr.github.io/")

Hoodie Camp, пример отличного сообщества вокруг проекта [github.com/hoodiehq/camp](https://t.co/ECKpznVufB "https://github.com/hoodiehq/camp")

Автоматизация:  
1. Тестирование  
2. Деплой  
3. Релизы

Стиль кода более-менее важен, но многое многое можно поправить автоматически. Например Stylelint, Stylefmt, ESLint и т.д.

Интеграционные и юнит-тесты довольно-таки важны. Интеграционные тесты CSS — это сравнение скриншотов.

Деплой на Trevis, чтобы никаких сложностей для контрибьюторов [pic.twitter.com/QbDAE2tKGK](https://t.co/QbDAE2tKGK)

![](https://pbs.twimg.com/media/Cj3yz9-W0AEIjuY.jpg)

Десятый доклад на ScotlandCSS: Наталья Шелбёрн [@natalyathree](https://twitter.com/natalyathree "Natalya") «Practical Color Theory for People Who Code».

[pic.twitter.com/SPuwTUuzvc](https://t.co/SPuwTUuzvc)

![](https://pbs.twimg.com/media/Cj30ItYWEAA8xss.jpg)

Раньше фотографов называли операторами бездушных машин и не признавали творческую часть профессии, только документальную.

То же самое происходит с веб-технологиями: у вас перед глазами бесконечный холст веба, творите!

Расшифровка доклада — [tallys.github.io/color-theory/](https://t.co/PGQiRRF9jP "http://tallys.github.io/color-theory/")

[pic.twitter.com/O0dGvxf0vB](https://t.co/O0dGvxf0vB)

![](https://pbs.twimg.com/media/Cj31KQqWsAQiyce.jpg)

Случайный цвет — не вариант Цвет — информация, нужно идти от задачи.

Яркие цвета для детских сайтов не просто так, просто детские глаза на них лучше реагируют, они кажутся привлекательнее.

Знания из художественной школы очень сложно применить в интернете.

Например, кто сходу скажет, что цвета FF1500 и 00EAFF строго противоположные?

Случайные цвета без связи между ними выглядят подозрительно, нужно подбирать подходящие смешиванием [pic.twitter.com/mXlEAr4s7m](https://t.co/mXlEAr4s7m)

![](https://pbs.twimg.com/media/Cj33qxnXIAA9XfK.jpg)

Модель HSL помогает понять, что дело не только в цвете, но и в контрастности и яркости.

Дизайнеры проходят дерево принятия решений каждый день, выбирая цвета. Вы тоже так можете. Не изобретайте колесо, уже есть цветовой круг.

У нас перерыв перед последним докладом Гарри Робертса, начало в 18:30 по Москве.

Одиннадцатый закрывающий доклад Гарри Робертса [@csswizardry](https://twitter.com/csswizardry "Harry Roberts") на ScotlandCSS.

[pic.twitter.com/ymytT1mOvB](https://t.co/ymytT1mOvB)

![](https://pbs.twimg.com/media/Cj4DCB7WsAA1alr.jpg)

Софтверные парадигмы в разработке CSS, стало известно. Примерно такое направление мысли доклада.

Flow-Matic, 1959 — первый язык программирования, оперировавший словами. Автор Грейс Хоппер.

Очень личная связь Гарри с программированием и CSS [pic.twitter.com/LG3JV3BeNL](https://t.co/LG3JV3BeNL)

![](https://pbs.twimg.com/media/Cj4D6e8XIAEU2Np.jpg)

37-летняя история программирования в применении к CSS. Поехали…

1\. DRY \(don’t repeat yourself\) или Single source of truth. Не абсолют, но просто сокращает время на работу с кодом.

[pic.twitter.com/TV44ubyjU5](https://t.co/TV44ubyjU5)

![](https://pbs.twimg.com/media/Cj4E4wXWYAIIEUC.jpg)

![](https://pbs.twimg.com/media/Cj4E5NQWgAEsn_w.jpg)

DRY — это получение более удобных исходников, даже если на выходе получается тот же самый код.

Повторения виде font-weight: bold — это не те повторения.

Препроцессоры для хранения ключевых данных в переменных. Иногда лучше повторить, чем использовать неверную абстракцию.

Принцип Single Responsibility делает компоненты \(и сендвичи\) гибкими и настраиваемыми. [pic.twitter.com/mBDWCenh93](https://t.co/mBDWCenh93)

![](https://pbs.twimg.com/media/Cj4GZf7WUAAD12f.jpg)

![](https://pbs.twimg.com/media/Cj4GZ8tW0AAaL5e.jpg)

Так же можно разделять типы служебных классов для создания конструкторов:  
  
.btn  
.btn--sizing  
.btn--color

Принцип Separation of Concerns [pic.twitter.com/nRT6GfvEvs](https://t.co/nRT6GfvEvs)

![](https://pbs.twimg.com/media/Cj4G99xWYAAVEFr.jpg)

Всё это не имеет отношения к оформлению и не должно быть в стилях [pic.twitter.com/8P4L0phiSF](https://t.co/8P4L0phiSF)

![](https://pbs.twimg.com/media/Cj4HRPDWgAAe6YM.jpg)

Решение всех задач отдельно: семантика, доступность, оформление [pic.twitter.com/ItaFVKepk4](https://t.co/ItaFVKepk4)

![](https://pbs.twimg.com/media/Cj4H0SJXEAESZbw.jpg)

![](https://pbs.twimg.com/media/Cj4H1KpXEAAgk6T.jpg)

![](https://pbs.twimg.com/media/Cj4H0uWWUAQcwpS.jpg)

Про CSS в JS. Нашли новый фреймворк? Замучаетесь вытаскивать стили [pic.twitter.com/JKLYFoybEX](https://t.co/JKLYFoybEX)

![](https://pbs.twimg.com/media/Cj4IP4WXEAATSdH.jpg)

Принцип неизменяемости \(immutability\). В CSS его довольно сложно избежать из-за природы самого языка.

[pic.twitter.com/Ibuzzf28d4](https://t.co/Ibuzzf28d4)

![](https://pbs.twimg.com/media/Cj4JYSgXAAA3njn.jpg)

Принцип Cyclomatic Complexity, точнее вид статического анализа. Грубо говоря: меньше условий и ветвления.

[@operatino](https://twitter.com/operatino "Robert Haritonov"), внешний файл стилей != исходнику.

Сложные селекторы тоже рождают логическое ветвление: .sidebar .module — если модуль вложен в сайдбар… а если поменяется DOM?

Принцип открытости/закрытости. Компоненты должны быть открыты к расширению и закрыты к изменениям — [ru.wikipedia.org/wiki/%D0%9F%D1…](https://t.co/NfyGFkwh3z "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D1%81%D1%82%D0%B8/%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D1%81%D1%82%D0%B8")

Править ошибки — другое, это не изменение. Сделать кнопку \(сделанную в январе\) побольше \(и июне\) — добавление модификатора, расширение.

[pic.twitter.com/QKHGyZep71](https://t.co/QKHGyZep71)

![](https://pbs.twimg.com/media/Cj4LcqrWYAA4kfr.jpg)

Принцип ортогональности — для получения стабильного результата при незначительных изменениях, устойчивость результата.

[pic.twitter.com/pA6qCixbeJ](https://t.co/pA6qCixbeJ)

![](https://pbs.twimg.com/media/Cj4MBlWWkAATBcb.jpg)

Хороший тест на ортогональность вёрстки: можно ли это вложить?

Конференция всё, Питер Айткен закрывает. Поблизости на столе выстраивается батарея подарочных бутылок с виски [pic.twitter.com/7ICSm9wOGZ](https://t.co/7ICSm9wOGZ)

![](https://pbs.twimg.com/media/Cj4NLQwXIAACHfp.jpg)