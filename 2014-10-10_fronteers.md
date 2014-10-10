Доброе утро! 

## Первый доклад сегодня: Николас Галлахер и «Making Twitter UI infrastructure», см. расписание https://t.co/VieXQ5bNKi

Кто такой Николас? Некоторые его проекты: — Twitter: TweetDeck, Twitter Cards, http://t.co/UxDuxsfT3t — GitHub: Dotfile, FlightJS, SUITCSS

http://t.co/UxDuxsfT3t http://t.co/YCPhCkXSTg http://t.co/3CeswA0YaZ http://t.co/iUIvMgRq4z http://t.co/n6tKpwbMPU http://t.co/t8VNyWXHLQ

…это всё веб-приложения Твитера, над которыми Николас работает.

http://t.co/pNXy4fXhND

![](http://pbs.twimg.com/media/BzkU6sUIAAANjYo.jpg)

Разработка в контексте, когда все сервисы соединены, зависят друг от другая и никому конкретно не принадлежат — это непросто.

Твитер уже не может позволить создавать приложения каждый раз с нуля или клонировать части уже существующих.

Поэтому появился проект интерфейсной инфраструктуры.

Семь принципов его создания: 1. Решаем существующую, реальную проблему 2. Фокус на результате и процессе, не инструментах

3. Разрабатываем, адаптируясь к существующим проектам, не к идеальной мечте

4. Компонент — главная единица масштабирования (портирование, добавление, удаление — всё просто и прозрачно)

5. Делаем готовое к использованию всеми, а не для узких целей или конкретных проектов

6. Полезно реиспользуем уже существующие вещи

7. Подробное документирование и отсутствие тесной привязки к конкретным людям (которые уволились в прошлом году)

— Если бы HP знала то, что HP уже знает, мы бы зарабатывали в три раза больше. Lew Platt, бывыший CEO HP

Основной инструмент для инфраструктурных проектов — Node.js

Компоненты http://t.co/sg0LkZATHJ

![](http://pbs.twimg.com/media/BzkY7RhCUAAhlep.jpg)

Типичная структура проекта http://t.co/eIk7pUQ23m

![](http://pbs.twimg.com/media/BzkY_liIQAAqST0.jpg)

Части приложения для Андроида http://t.co/87ZJZlRKbY

![](http://pbs.twimg.com/media/BzkZZupIgAAJ_s_.jpg)

Части приложения для Андроида http://t.co/87ZJZlRKbY

![](http://pbs.twimg.com/media/BzkZZupIgAAJ_s_.jpg)

Система компонентов, похожая на веб-компоненты http://t.co/yMDLGfGlRT

![](http://pbs.twimg.com/media/BzkZj5YIMAEF1FY.jpg)

http://t.co/eIUo9F5KLs

![](http://pbs.twimg.com/media/BzkaDOLIMAAzdbW.jpg)

Для модульности используется WebPack http://t.co/fFZEJfTrUV

![](http://pbs.twimg.com/media/BzkbIwYIYAAmAai.jpg)

Команды для создания и работы с компонентами http://t.co/pyu0pS5N4o

![](http://pbs.twimg.com/media/Bzkb1iJIgAAnNjt.jpg)

И ещё раз: http://t.co/qxdWi1e3er

![](http://pbs.twimg.com/media/BzkcF-JIIAAYWqC.jpg)

How to do everything? http://t.co/Fn30XGyhnH

![](http://pbs.twimg.com/media/BzkcthAIQAA1tCx.jpg)

Нажимая кнопку, вы не знаете откуда взялся взялся свет — сгорел ли это уголь или раскрутился ветряк. Машина просто работает.

Такой должна быть инфраструктура — чтобы её не замечали, принимали за должное.

http://t.co/81rkapXZ2Q

![](http://pbs.twimg.com/media/Bzkds2fIMAAYIX6.jpg)

— Как держать документацию в порядке? — На этапе ревью кода обычно возникают претензии, когда что-то не задокументировано

## Второй доклад: Дейв Ольсен и «Optimizing web performance».

http://t.co/yChlPvXgwS

![](http://pbs.twimg.com/media/BzkfSQoIAAAP7sp.jpg)

Переключения раскладки в CSS недостаточно для мобильной версии http://t.co/QlD4djq0C4

![](http://pbs.twimg.com/media/BzkfyZvIMAIf9HP.jpg)

Средняя главная страница 1,8 МБ http://t.co/BR4NuqRVR0

![](http://pbs.twimg.com/media/BzkgCCdIUAAH5hR.jpg)

72% адаптивных сайтов весят столько же, сколько их десктопная версия, что просто недопустимо.

Пользователи ожидают, что мобильный сайт загрузится так же быстро, как и десктопный. Неважно, какая сеть и какое устройство. Иначе уходят.

Плохие новости: ожидание против выручки http://t.co/Ha0YsXrBo6

![](http://pbs.twimg.com/media/BzkgymIIcAAD0xs.jpg)

Подход «сначала мобильные» значит «сначала быстродействие».

Что мы видим чаще всего: — Загрузить и спрятать — Загрузить и отресайзить — Загрузить и… не использовать Это плохой адаптивный подход.

И другие проблемы мобильных: — Высокие задержки сети — Переменное качество сети — Потеря пакетов при передаче

Диагностика проблем с быстродействием: 1. PageSpeed https://t.co/00u7CCtvo7

2. Отладчик Chrome DevTools

3. Бесплатный курс Ильи Григорика — https://t.co/AGY9eYQoBH

4. WebPagetest — http://t.co/bDpmsufQg4

Возможности WebPagetests http://t.co/NN396MWVYx

![](http://pbs.twimg.com/media/Bzkj0aGIAAAHwx-.jpg)

Что делать в процессе? Установить фиксированный потолок быстродействия — http://t.co/jnhLeH97dW

Что делать на бэкенде для быстродействия http://t.co/lnrCCe9vPD

![](http://pbs.twimg.com/media/BzkkP3pIQAAlFva.jpg)

Подробнее об адаптивном дизайне и бэкенде в предыдущем докладе Дейва — http://t.co/cuwpapRQnF

Быстродействие и картинки http://t.co/CSDD0TjGDT

![](http://pbs.twimg.com/media/BzkkyNMIMAA1rHm.jpg)

Инструменты для картинок http://t.co/g3tkw1pxQS

![](http://pbs.twimg.com/media/Bzkk9RkIIAA4dNG.jpg)

Быстродействие и JS http://t.co/M75Jv231QI

![](http://pbs.twimg.com/media/BzklL49IcAApcEz.jpg)

Отключите jQuery и найдите нужные микробиблиотеки на http://t.co/7pvyIOugDk или просто выучите настоящий JavaScript.

Инструменты для JS http://t.co/80JN76WrEM

![](http://pbs.twimg.com/media/Bzkl6SRIgAAyK0T.jpg)

Важно понимать критический путь отрисовки — https://t.co/c9CdOoDGoc

Научитесь разбираться в каскаде отрисовки в отладчике Chrome DevTools.

Простые шаги по критическому пути отрисовки http://t.co/UUwVrSP4YT

![](http://pbs.twimg.com/media/BzknwwqIUAEIGIz.jpg)

Положите всё на первом экране на один домен, выделите CSS для этого экрана и, при необходимости, вставьте прямо в шапку.

Подробнее о Web Page Tests — http://t.co/vx8mxgCOtM

Простые шаги к быстрому сайту http://t.co/LnWMBQuLsq

![](http://pbs.twimg.com/media/BzkoSqJIYAAbfOZ.jpg)

RESS: Responsive Design + Server Side components — http://t.co/VIVi5RywWX

Сборник рецептов и инструментов для быстродействия — http://t.co/y2TdjG0U7p

Старая, но полезная презентация Дейва — RESS: An Evolution of Responsive Web Design http://t.co/bWlEWHyg2d

Ещё инструмент: SpeedCurve — http://t.co/hri0yuQ1UT

Карта быстродействия сайта, свежий проект Марка Земана — PerfMap https://t.co/MwThnigU6s

mod_pagespeed — https://t.co/adu4oov6pi

И не забывайте про Аналитику Google — она тоже помогает улучшить быстродействие, анализируя поведение ваших реальных посетителей.

Прокси для замедления интернета: Charles для Windows http://t.co/Rj0o4OA6YO Network Link Conditioner для Mac http://t.co/XmLVz8Xiyc

Лаборатории с устройствами для тестирования — http://t.co/yuMdcwfATz

Суммируем http://t.co/BnIe6w2e4j

![](http://pbs.twimg.com/media/Bzkq3LTIQAANZEP.jpg)

Кого читать? http://t.co/mlkJDdP9fU

![](http://pbs.twimg.com/media/BzkrFE5IQAAN-vH.jpg)

И конечно самого Дейва — @dmolsen

Мы вернулись с перерыва и продолжаем.

## Третий доклад: Сара Сайдан и «Animating SVGs with CSS and SMIL»

Анимация SVG: 1. CSS 2. SMIL 3. JavaScript Речь пойдёт о первых двух.

SVG изначально не использует стили — только презентационные атрибуты. Только часть из них можно использовать в стилях.

http://t.co/tg5yrOdX4Y

![](http://pbs.twimg.com/media/BzkxqAFCYAEZ80-.jpg)

Стили можно добавить: 1. В атрибуте style="…" 2. Внутри &lt;style&gt; 3. Снаружи &lt;svg&gt;, если SVG вставлен в HTML

Демо CSS-переходов SVG — http://t.co/B4cMjzFEtt

У элементов HTML есть блочная модель. В SVG такого нет.

transform-origin у HTML-элемента — 50% 50%, у SVG — 0, 0.

transform-origin в SVG можно установить в процентных значениях к viewBox

Спецификация для анимации по кривой — Motion Path http://t.co/w40KHubJDh

Предыдущие версии этой презентации Сары — http://t.co/Eo7pkBYdSA (предполагаем, что эта появится там же)

Анимация на SMIL мощнее, чем та, которую предлагает CSS.

Но SMIL пока нет в IE. Я не очень ясно: то ли SMIL появится в IE, то ли исчезнет из Chrome.

Основа SMIL — элемент &lt;animate&gt; и его атрибуты.

Элемент &lt;animate&gt; может сослаться на элемент, который анимируется или просто быть вложенным в него.

Атрибут attributeName="…" — что анимируем.

Дальше, говорят сами за себя: from="0" to="50" dur="10s" fill="freeze"

Аналогичное в CSS: animation-name animation-duration: 5s animation-fill-mode: forwards

Атрибуты для повторения анимации: repeatCount="indefinite" repeatDur="00:30" — устанавливает время, через кот. повторения закончатся

CSS так не умеет — можно указывать только количество повторений.

Можно указывать с чего начинать анимацию, напр. click, focus и т.п. Ничего подобного в CSS.

Спецификация: http://t.co/ULJSjNbsok

CSS vs SMIL http://t.co/N3o2x2CEqj

![](http://pbs.twimg.com/media/Bzk3G_HCYAAjFeO.jpg)

SMIL может анимировать кривые из одной в другую и элемент морфирует из одного в другой.

Элемент &lt;animateMotion&gt; для анимации по кривой. Кривая указывается там же path="…" или ссылкой &lt;mpath xlink:href="…"&gt; на другой элемент.

Атрибут rotate="auto" будет поворачивать объект по направлению кривой (или auto-reverse)

В понедельник на http://t.co/0YHz6XL8XX выйдет ОГРОМНАЯ статья Сары про SMIL.

Сара и Джейк, вопросы и ответы http://t.co/FpsCwAuykh

![](http://pbs.twimg.com/media/Bzk5fyKCIAEu2fD.jpg)

Сара планирует заняться исследованием быстродействия SVG в ближайшее время.

Другие статьи Сары: http://t.co/g59eEnyY8s

## Четвёртый доклад: Пол Кинлан из Google Chrome «This is the web platform»

Грядут большие перемены в браузерах.

Темпы развития браузеров растут http://t.co/Kz7ZDVsEQQ

![](http://pbs.twimg.com/media/Bzk9kuWIMAAynsT.jpg)

Локализуем на ходу: ЧЧЧ — краткое содержание доклада что было что есть что будет

App Cache казался новой надеждой, но оказался мертворождённым. Отдельное спасибо Джейку Арчибальду (погуглите App Cache Douchebag)

Революция Service Workers http://t.co/6uo6WEmabn

![](http://pbs.twimg.com/media/Bzk-TJpIUAAWqBM.jpg)

И речь не только о том, чтобы приложениям работать в офлайне.

Жизненный цикл приложения http://t.co/3zZYUxZ6Pk

![](http://pbs.twimg.com/media/Bzk-j5WIcAAiKqR.jpg)

SW помогает организовать этот жизненный цикл.

Каждый разработчик должен иметь полный контроль над приложением: fetch push message install sync geofenceenter

SW можно использовать как низкоуровневый слой для написания собственного «App Cache»

Страницы приложения наконец могут работать в фоне, без необходимости задействовать весь браузер.

Самое крутое в http://t.co/YHp0qF2ert — это не удобный сайт. Самое крутое — открытая база данных https://t.co/BHgQR9B6C8

Ответ «Can I use» — I want to use! http://t.co/tsvlrESEA8 (на основе тех же данных)

Сейчас индустрия живёт в рамках того, что умеет IE8.

«Что хочу« на мобильных: http://t.co/4zhoR8WWOK

И на мобильных у нас совсем другая основа — мы можем делать гораздо больше, наверное поэтому у нас так много м-точка-сайтов.

Поднимайте цены на поддержку IE8! Потому, что это стоит вам денег, времени и нервов.

http://t.co/v2wWVJTwoU

![](http://pbs.twimg.com/media/BzlDoJ1IYAAQ_lI.jpg)

http://t.co/aeFVZlWA9W

![](http://pbs.twimg.com/media/BzlEQDdIcAAf4nO.jpg)

Темп появления фич http://t.co/gll4pJFQYA

![](http://pbs.twimg.com/media/BzlE0OfIIAAKLUn.jpg)

Вся история с компонентами появилась не просто в воздухе, но для поддержки платформы для создания приложений, не просто текстовых сайтов.

10 смертных грехов мобильных веб-приложений http://t.co/AAT8qwd7ef

![](http://pbs.twimg.com/media/BzlFNhkIAAAXY3E.jpg)

Открыли веб-приложение Твитера, написали твит и ушли. Но не увидите, что вам кто-то ответит — уведомления не будет.

Состояние и планы развития мобильных веб-приложений, W3C — http://t.co/EoXVUSkwKr

Коллекция отличных веб-приложений — http://t.co/YKhW73UmOv

Дополнительный информационный слой к «Can I use» в консольной утилите Пола «cli-caniuse» — https://t.co/fOo1vTIMTn

Веб-версия: https://t.co/4roRRx30wm

Фронтенд живее всех живых, — резюмирует Пол.

У нас обед, увидимся через час.

## Пятый доклад: Мери Вильямс и «Using agile to bake in accessibility».

Доступность — это не про дизайн или технологии, это про то, как правильно донести до людей информацию.

Главное, что сделали в gov.uk — это руководство по созданию и публикации информации https://t.co/gwjI94QWvl

— Так, мы сделали сайт, теперь давайте сделаем его «доступным». Нет, не так.

Доступность должна стать частью процесса с самого начала.

Одна из любымых книг Мери — «Talent is Overrated» http://t.co/5Y7AXeyfCT

Талант — величайший миф, главное количество практики. Мы настолько хороши, насколько часто практикуем что-либо.

Попробуйте с вашим сайтом, каждое по дню: — работать одной рукой — работать только с клавиатуры — в программе чтения с экрана.

http://t.co/U6nbtKvdiu

![](http://pbs.twimg.com/media/Bzlf7nKIQAEkCQT.jpg)

## Шестой доклад: Кайл Симпсон и «Choose your own JS adventure».

Кайл начал доклад с того, что присел, снял обувь и её унесли на подносе o_0 http://t.co/vr6JAr3PMf

![](http://pbs.twimg.com/media/BzlikQ7CMAA4P3E.jpg)

Серия книг Кайла «You Don’t Know JS» https://t.co/MZGUmmWGkN

— Кто из вас был в ситуации, когда код _не работает_ и вы не знаете, что случилось? (весь зал поднял руки)

— Кто из вас был в ситуации, когда код _работает_ и вы не знаете, что случилось? (весь зал поднял руки)

Это значит, что очень часто мы не понимаем код. Код — для разработчиков, а не для машин.

А что, если вы можете настроить JS, чтобы он был таким, как вы хотите? (ведь исходники для вас, не для машин — у них другой, машинный код)

Макросы JS — http://t.co/4hliprhau3

Кайлу не очень нравится CoffeScript, но его части повлияли на ES. Та же история с TypeScript.

Примеры макросов http://t.co/DUhqtd9riv

![](http://pbs.twimg.com/media/Bzlky_mIAAACR5P.jpg)

http://t.co/dfCTWyh4Md

![](http://pbs.twimg.com/media/Bzlk5_QIUAEBYnZ.jpg)

Обычный JS http://t.co/IbYjdNOQhC

![](http://pbs.twimg.com/media/BzllLKoIMAAvK74.jpg)

ES6, ограничение видимости переменной http://t.co/pMdhuvHBsm

![](http://pbs.twimg.com/media/BzllU9yIQAAezg2.jpg)

Более реальный пример http://t.co/0S0mPwHYTh

![](http://pbs.twimg.com/media/BzllklIIYAA8-EV.jpg)

Гораздо более явный let, но этот синтаксис отклонили http://t.co/kyyXUBi8lH

![](http://pbs.twimg.com/media/Bzll-T4IEAAt40Z.jpg)

И что делать: демократия, анархия? Да! Сделаем свой язык.

Коллекция идей, как сделать JS лучше, чтобы он оставался похож на JS — https://t.co/lMnaKAp3il

Лексер Кайла для JS — https://t.co/JaMXhVnLJM

Конвертер из понятного let (явного) в стандартный (неявный) — let-er https://t.co/Mg89KZSdR8 (а с ключём --es3 он даже совместим с ES3)

Не хватает !&amp;&amp; операторов http://t.co/Edq5Fe24GI

![](http://pbs.twimg.com/media/BzlnhzzIUAA7zAF.jpg)

Не хватает — напишем!

Три разных this http://t.co/re68WKyVSh

![](http://pbs.twimg.com/media/BzloMhKIAAEFIbJ.jpg)

Soft bind http://t.co/Fx8kpHJxPT

![](http://pbs.twimg.com/media/BzloTOtIEAAzjlU.jpg)

http://t.co/48vEyDAINi

![](http://pbs.twimg.com/media/BzlomaIIIAAhUyj.jpg)

http://t.co/jvazPOQA0i

![](http://pbs.twimg.com/media/Bzlos-TIgAAkY6y.jpg)

JS — пиши по-своему! (но только если ты уже хорошо знаешь язык и понимаешь его ограничения)

Что делать с командной работой?

Можно включить трансформации синтаксиса на входе к вам из репозитория и на выходе от вас обратно.

Трансформации легко обратимы, не деструктивны http://t.co/VJyJrFWzM7

![](http://pbs.twimg.com/media/BzlpcutIMAEj0M8.jpg)

Инструменты: — esprima/acorn (парсер) — escodegen (генератор кода) — escope/selevels (анализатор обл. видимости)

— istanbul (покрытие кода) — setraverse (анализатор AST) — eslint (настраиваемый линтер) — plato/jscomplexity.org (сложность кода)

Идеи: — исправлять опечатки в переменных — менять обл. видимости — упрощать код — исправлять логич. ловушки — оптимизировать быстродействие

"use restrict"; // restrict mode for JavaScript http://t.co/ebjmDN6ysV

А вас это беспокоит? http://t.co/wcmzcimkpF

![](http://pbs.twimg.com/media/BzlrWEFIcAAQlLJ.jpg)

Слайды Сары про SVG+SMIL http://t.co/oMo5AxghbV и расширенная версия: http://t.co/edSvHg297a Не забывайте про статью на CSS Tricks.

Кайл не предлагает каждому завести свой JS с блэкджеком и сюрпризами.

Но если проект может договориться о стиле написания кода, то договориться и о таких нюансах на основе ES6.

Прерываемся в последний раз на 25 минут. Впереди два последних доклада.

## Седьмой доклад: Пит Хант и «Scaling up and down: evolving your testing strategies».

Работал над видео в Facebook, над Instagram.

312 миллиардов $ тратится на ошибки в ПО. А что такое качество ПО?

Качество ПО: — функ. качество: ПО выполняет задачу — структ. качество: понятен ли код, написаны ли тесты — кач-во процессов внутри и снаружи

Аджайл стал успешным потому, что легко справляется с непредсказуемыми ситуациями в разработке.

Путь от неизвестного к известному: — концепт — прототип — развитие функций прототипа — публикация проекта

http://t.co/nw4pGBThqK

![](http://pbs.twimg.com/media/Bzl1hPMCIAAhZf1.jpg)

http://t.co/esM1QVk7KF

![](http://pbs.twimg.com/media/Bzl1sYuIAAApWb0.jpg)

Три вопроса: — есть ли проблема — насколько она серьёзная — как исправить проблему.

— Для прототипа не важно, есть ли проблема. — Для разработки функций не важно наск. серьёзная проблема. — Для публик. важно исправ. проблему

http://t.co/KIkFOQNb1L

![](http://pbs.twimg.com/media/Bzl20MnIAAAgRIi.jpg)

Офтоп: слайды вчерашней презентации Шветанка Диксита про WebRTC — http://t.co/jj5OffaZCJ

Слишком ранние юнит-тесты приводят к куче ложно-положительных результатов.

http://t.co/8HXcgHqdbA

![](http://pbs.twimg.com/media/Bzl3aQHIgAA6cnQ.jpg)

Интеграционные тесты — это проверка того, насколько хорошо работают отдельные части ПО и как они взаимодействуют друг с другом.

Не забывайте про хештег #fronteers14, там тоже есть интересное https://t.co/FaS5N2xNu1

RT @mista_k: @FronteersConf @floydophone excited to share his knowledge with us. #fronteers14 http://t.co/ORNkttbty4

![](http://pbs.twimg.com/media/Bzl2x31IAAIspBJ.jpg)

RT @mista_k: @FronteersConf @getify with inspirational talk about JS #fronteers14 http://t.co/1tSdjlZ3jC

![](http://pbs.twimg.com/media/BzljEFoCYAEMkgi.jpg)

RT @mista_k: @FronteersConf @Geek_Manager is talking about why we have to make products more accessible #fronteers14 http://t.co/zgnl5VTVwH

![](http://pbs.twimg.com/media/BzlY_1IIcAAAk0K.jpg)

RT @mista_k: @FronteersConf @Paul_Kinlan is talking about web platform #fronteers14 http://t.co/bteceGNpB3

![](http://pbs.twimg.com/media/Bzk_c4GCIAAz8lB.jpg)

RT @mista_k: @FronteersConf @SaraSoueidan is talking about SVG animation #fronteers14 http://t.co/5MsnCOMUCs

![](http://pbs.twimg.com/media/Bzk1oPVCQAAHh6d.jpg)

RT @mista_k: @FronteersConf @dmolsen with timeless topic about performance optimization #fronteers14 http://t.co/YyBN2SRur6

![](http://pbs.twimg.com/media/Bzkg6M4IgAA5cBf.jpg)

RT @mista_k: @FronteersConf @necolas is opening the second day of #fronteers14 http://t.co/6iXsDg58tW

![](http://pbs.twimg.com/media/BzkVzmmCMAAWcq1.jpg)

RT @mista_k: @FronteersConf #fronteers14 @rachelnabors is starting her talk about animation. http://t.co/bwUdrtTiYX

![](http://pbs.twimg.com/media/BzgPvdOIcAE6GW7.jpg)

RT @mista_k: @FronteersConf @3rdEden is talking about realtime things (short/long polling, you know) #fronteers14 http://t.co/BgsdWq18fx

![](http://pbs.twimg.com/media/Bzf1IkHIUAElbC_.jpg)

RT @mista_k: @FronteersConf #fronteers14 @nathan_ford is asking “Do we need to write markup?” http://t.co/WAv4W0YOGE

![](http://pbs.twimg.com/media/BzfquFoIYAEmhV7.jpg)

RT @mista_k: @FronteersConf @danielespeset is talking about continues deployment system #fronteers14 http://t.co/OFgA7fcmi9

![](http://pbs.twimg.com/media/BzfZUZpCQAAUTCx.jpg)

RT @mista_k: @FronteersConf @heydonworks is talking about defining things in CSS #fronteers14 http://t.co/NyzzhMLKa3

![](http://pbs.twimg.com/media/BzfOZ5TCcAEdBP1.jpg)

RT @mista_k: @FronteersConf @jaffathecake is opening the first day of #fronteers14 http://t.co/KcLMxCur1s

![](http://pbs.twimg.com/media/BzfKVnhIMAAOnhX.jpg)

Важное правило, которому Пол научился, работая Фейсбуке: код в продакшене работает идентично коду в разработке.

Это значит, что на любой машине можно воспроизвести любую проблему в продакшене.

## Последний восьмой доклад: Петро Салима и «Dream big. Think small».

http://t.co/SCMkV5MFLW

![](http://pbs.twimg.com/media/BzmABSXIEAAHZ7d.jpg)

Ксерокс упустил отличную идею с компьютерным интерфейсом.

http://t.co/iSW00a8924

![](http://pbs.twimg.com/media/BzmCANqIQAAKdVR.jpg)

Сдаёмся, этот доклад очень сложно транслировать. Но доклад хороший и давайте дождёмся видео, обычно здесь — http://t.co/PvzqIH5xMx

@denswor @mista_k, извините, шестые Айфоны распродали в Амстердаме, снимаем на пятый :(

Орги Fronteers на сцене под шквал аплодисментов http://t.co/Xbz143kzxQ

![](http://pbs.twimg.com/media/BzmLhXyIQAA3DKk.jpg)

Трансляция прощается с вами. Спасибо, что читали!

Следующее включение с Chrome Dev Summit https://t.co/N7ZpFNdnYJ в Калифорнии в 19 и 20 ноября. Следите за анонсами @webstandards_ru
