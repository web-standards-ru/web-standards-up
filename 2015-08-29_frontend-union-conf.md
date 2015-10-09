# Frontend Union Conf

## 2015-08-29, Москва, Россия

### Список докладов

1. [XSS войны. Пробуждение силы.](http://life777.github.io/CSP/index.html), Владимир Дашукевич
1. [Три истории о тестировании.](http://slides.com/marinamiranovich/deck), Марина Миронович
1. [Создание приложений для совместного редактирования документов с использованием DiffSync.](http://janmonschke.com/diffsync-presentation/), Jan Monschke
1. [Сначала стайлгайд — подход к разработке UI компонентов.](http://varya.me/func-2015/), Варвара Степанова
1. [Тестирование изоморфных React приложений.](http://www.slideshare.net/horrorgr/isomorphic-react-a), Михаил Ларченко
1. [Прощай, jQuery!](http://slides.com/zmoki/jquery), Зарема Халилова
1. [Трое в лодке, не считая колбэка.](http://zhigalov.github.io/frontend-union-conf/), Сергей Жигалов

### Лог твиттер-трансляции

Доброе утро! Через несколько минут мы начнем трансляцию с [#func2015](https://twitter.com/search?q=%23func2015). [pic.twitter.com/wzJJfRtxPs](http://t.co/wzJJfRtxPs)

![](https://pbs.twimg.com/media/CNj6X-UW8AAy9ph.jpg)

Идея [#func2015](https://twitter.com/search?q=%23func2015) — рассказать про локальные сообщества веб-разработчиков в России.

Чтобы поднимать локальное сообщество даже не обязательно жить в этом городе, доказывает [@filipovskii](https://twitter.com/filipovskii "Andrey Salomatin") из MoskowJS

And right now [@filipovskii\_en](https://twitter.com/filipovskii_en "Andrey Salomatin") speaks about our local communities.

Рассказ действительно на английском, потому что на [#func2015](https://twitter.com/search?q=%23func2015) много гостей из Европы. [pic.twitter.com/AFrxmLxsTT](http://t.co/AFrxmLxsTT)

![](https://pbs.twimg.com/media/CNj_FtWWoAAUrHJ.jpg)

Минское сообщество 4Front родилось в голове [@nedudi](https://twitter.com/nedudi "Dmitry Dudin") во время внутренних посиделок в SB Software .

### Первый доклад «XSS войны. Пробуждение силы» от Владимира Дашукевич из сообщества 4front.

Доклад на английском. Ну, вы поняли — знать язык в нашей отрасли жизненно необходимо.

Владимир считает, что XSS — это клёво ;\)

Короткое определение XSS — это когда кто-то запускает свой плохой код изнутри вашего веб-приложения.

Классический пример — воровство cookie.

Зачем? Чтобы сделать запрос от чужого пользователя. [pic.twitter.com/msWVpL8GhD](http://t.co/msWVpL8GhD)

![](https://pbs.twimg.com/media/CNkBawHWEAAfJ47.jpg)

Cookie, localStorage, keylogging — вот это всё — объекты XSS-атак типа.

Теперь Владимир ломает сайт конференции при помощи evil.css

Добравшись до css можно слать запросы на чужой сервер через get-параметры в свойстве url\(\) для background, например.

Можно организовать кейлогер через svg-элемент &lt;use&gt;.

А еще есть разного рода расширения, которые мы, как разработчики сайта не можем контролировать. Привет, Beeline.

Кстати, на [#func2015](https://twitter.com/search?q=%23func2015) есть и нетекстовая трансляция [corp.mail.ru/stream/fronten…](https://t.co/M5e05m3dnO "https://corp.mail.ru/stream/frontendconf/")

Опасный JS — eval\(\), new Function\(\).

Как защититься? Никому и ничему не верить. Даже тем, кто писал код вашего сайта до вас.

Использовать sanitiser, использовать заголовки HTTPOnly для Cookie.

Для ifrane есть X-Frame-Options и агумент sandbox.

В 2011 году Mozilla устала от этого всего и придумала CORS. Да, это снова HTTP-заголовки.

CORS можно очень гибко настроить. И можно сделать так, чтобы браузер жаловался на нарушителей через report-uri.

[@sapegin](https://twitter.com/sapegin "Artem Sapegin") [@filipovskii](https://twitter.com/filipovskii "Andrey Salomatin") наш спецкор всё-таки не очень хорошо говорит и пишет по-английски.

Можно подписывать доверенные скрипты в CORS2.

Поддержка CORS2... Ну, как обычно, фрагментирована.

Как проверить сайт на наличие уязвимостей? xss.io, gremlin.js

Владимир в Твиттере — [@life\_\_777](https://twitter.com/life__777 "Vladimir Dashukevich").

Всех заинтересовал пример с кейлоггером на svg.

Владимира вынудили отвечать на русском ;\)

Использовать CORS2 для блокировки расширений нужно всё-таки осторожно. Можно отключить полезные расширения пользователя.

[@gunlinux](https://twitter.com/gunlinux "Vladimir, 13th") к сожалению, мы не можем на это повлиять.

Как оценить пользу от внедрения CSP? Посчитать процент «мусора» в баг-репортах.

Зачем ставить XSS-Protection если он стоит в браузере по умолчанию? Потому что если что — винить будут вас, а не того, кто его выключил.

Могу ли я получить доступ к MySQL через XSS? Если украсть пароль админа сайта — то, в принципе, да.

### «Три истории о тестировании». Марина Миронович

Марина работает в EPAM, занимается фронтенд-экспертизой проектов клиентов. Организатор WebNotBombs и GirlsNotBombs.

Живые слайды доклада Марины [slides.com/marinamiranovi…](http://t.co/rmkkpA21aM "http://slides.com/marinamiranovich/deck/live")

И даже qr-код для слайдов. [pic.twitter.com/leP52bWVNT](http://t.co/leP52bWVNT)

![](https://pbs.twimg.com/media/CNkLUVUW8AAamQp.jpg)

Первая история — «Про TDD».

TDD — это просто. Пишем тест, пишем минимальный код, чтобы тест прошёл. Рефакторим,чтобы было красиво.

Зачем? Пока мы пишем тест, мы продумываем архитектуру и интерфейсы.

Также это помогает писать слабо связаный код — это тоже очень хорошо.

Разработка через TDD — медленнее, но суммарное время разработки проекта уменьшатся. Потому что не нужно тестить в конце и править баги.

Сравнение классического цикла разработки и разработки через TDD. [pic.twitter.com/RxCPECz6Sw](http://t.co/RxCPECz6Sw)

![](https://pbs.twimg.com/media/CNkMUR_XAAAbCox.png)

TDD также существенно снижает «стоимость» поиска и исправления багов.

Про TDD почти все в зале знают, но реально используют прямо сейчас на рабочих проектах гораздо меньше участников [#func\_2015](https://twitter.com/search?q=%23func_2015)

Очень большая проблема внедрения TDD — Legacy code в проектах.

Например, банк. Одна подсистема на backbone. Не, это плохо. Вторая — на своём фроеймворке. А третья — вообще на ангуляре.

И как эти системы взаимодействуют? С багами, естественно.

Давайте же напишем тесты на легаси! Но нет, код на JS должен быть подготовлен для тестирования.

Однако можно достаточно легко уговорить клиентов и руководство на внедрение TDD для новых подсистем.

И вообще, возьмите за правило — ни единой новой строчки кода без тестов.

Вторая группа проектов, в которых нет тестов — прототипы, проекты написанные на хакатонах...

Если такой проект «выстрелил», то, по хорошему, код надо выбросить и переписать по новой. С тестами.

Что мешает так сделать? Чаще всего лень разработчика. Что делать? Нужно себя заставлять и думать о будущем проекта.

А теперь про юных и дерзких. Про тех кто узнал про TDD, кто хочет писать тесты.

Очень важно — выработать привычку писать тесты до кода. Потому что когда код будет работать — будет лень писать тесты.

История вторая. Про Unit-тестирование.

Часто у разработчиков возникают проблемы с отсутствием изоляции модуля при тестировании.

Контекст теста должен быть изолирован, реальные зависимости замоканы, моки — легковесными и сами тесты должны быть простыми.

Признаки плохого теста — использование console.log\(\) или try...catch. [#func2015](https://twitter.com/search?q=%23func2015)

Никак без console.log\(\)? Используйте Custom Matchers [#func2015](https://twitter.com/search?q=%23func2015)

Try...catch? Ну читайте доку к assertion library. Там наверняка есть что-то типа ShoudNotThrows. [#func2015](https://twitter.com/search?q=%23func2015)

it\('Должно быть понятно что тест делает', function\(\) {}\); [#func2015](https://twitter.com/search?q=%23func2015)

И коротенький анекдот под конец. Можно всё обложить юнит-тестами, а потом получить нерабочий проект. [#func2015](https://twitter.com/search?q=%23func2015)

Потому что кроме юнит-тестов, есть ещё другие — интеграционное, приемочное и т.д.

Не стоит быть уверенным, что всё ОК, если все тесты зелёные, а покрытие — 97%. [#func2015](https://twitter.com/search?q=%23func2015)

Ссылка на всё-всё-всё, что помогло подготовиться к докладу [bit.ly/linkToAllResou…](http://t.co/HapbPP1Emv "http://bit.ly/linkToAllResources") [#func2015](https://twitter.com/search?q=%23func2015)

Когда писать тесты не нужно? Если время жизни проекта и его поддержки — небольшое. Промо-сайты, например.

Ещё один из плюсов TDD — тесты можно использовать как документацию. [#func2015](https://twitter.com/search?q=%23func2015)

Какие интеграционные тесты стоит писать при TDD? — Стоит покрыть основные сценарии взаимодействия. [#func2015](https://twitter.com/search?q=%23func2015)

Что делать если требования меняются и тесты надо переписывать? — Смотрите на это как на написание нового, а не исправление кода. [#func2015](https://twitter.com/search?q=%23func2015)

Куда девать отдел QA, если мы внедряем TDD? — У них будет больше времени на написание сложных интеграционных тестов [#func2015](https://twitter.com/search?q=%23func2015)

### Следующий докладчик — Jan Monschke из BerlinJS про «Cоздание приложений для совместного редактирования документов с использованием DiffSync»

Марина Миронович в Твиттере — [@obnoxious\_mari](https://twitter.com/obnoxious_mari "  Mari")

Что такое Collaborative Application? Это когда два и более человек работают с чем-то одновременно. Как в Гуглдокс, да. [#func2015](https://twitter.com/search?q=%23func2015)

Проблема — как синхронизироваться? Чаще всего это веб-сокеты.

Но мы в интернете, тут сетевые задержки и прочие беды [#func2015](https://twitter.com/search?q=%23func2015)

Типичная проблема - как разрешить конфликт? [pic.twitter.com/irmoJ5Km2y](http://t.co/irmoJ5Km2y)

![](https://pbs.twimg.com/media/CNkYcC_WoAEkpEF.jpg)

Типичная проблема - конфликты. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/usjXGCPAqm](http://t.co/usjXGCPAqm)

![](https://pbs.twimg.com/media/CNkYmoKWEAAgS28.jpg)

Решения — блокировка во время ввода. Но это не настоящий collaboration. [#func2015](https://twitter.com/search?q=%23func2015)

Вариант, придуманный в GoogleWave — отсылать вообще всё на сервер. Проблема — ооочень сложно понять, что нужно сделать на сервере. [#func2015](https://twitter.com/search?q=%23func2015)

Крутое решени — ShareJS. Но... оно залочено на MongoDB. Ну и всё плохо с доками и semver [#func2015](https://twitter.com/search?q=%23func2015)

Differencial Syncronisation — отправляем на сервер диффы, сервер накладывает диффы и синхронизирует всё. [#func2015](https://twitter.com/search?q=%23func2015)

Схема с диффами, патчами клиентом и сервером. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/aFv7CSZpF4](http://t.co/aFv7CSZpF4)

![](https://pbs.twimg.com/media/CNkaQWCWoAAFkkc.jpg)

Доклад на самом деле про котиков. [#func2015](https://twitter.com/search?q=%23func2015)

— Это очень похоже на git. Как решаются конфликты? — Ну если есть конфликт, то просто победит одна из версий. Другого нет. [#func2015](https://twitter.com/search?q=%23func2015)

$ npm install diffsync; [#func2015](https://twitter.com/search?q=%23func2015)

Клиент и сервер, не залочен на конкретную БД, легко интегрировать с ангуляром, реактом... [#func2015](https://twitter.com/search?q=%23func2015)

На клиенте всего три метода. It's easy, really. [#func2015](https://twitter.com/search?q=%23func2015)

Живейшее демо. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/4NR8FFUEje](http://t.co/4NR8FFUEje)

![](https://pbs.twimg.com/media/CNkdMKeWwAABMYP.jpg)

Ян разрабатывает инструмент для совместной работы над музыкальными произведениями. В интернете. Глобальный jam [#func2015](https://twitter.com/search?q=%23func2015)

Ян в твиттере — [@thedeftone](https://twitter.com/thedeftone "Jan Monschke") [#func2015](https://twitter.com/search?q=%23func2015)

— Сколько одновременно человек может одновременно работать? — Довольно много, поскольку дифы очень легковесны и быстро применяются [#func2015](https://twitter.com/search?q=%23func2015)

— Что делать, если приедет полностью другая версия? — По большому счёту, это должно решать приложение, а не библиотека  [#func2015](https://twitter.com/search?q=%23func2015)

[@gurugray](https://twitter.com/gurugray "Sergey Sergeev") не так много людей понимают как работает git на самом деле.

— Сколько версий хранится на сервере? — Пока что только одна версия истории, но вы можете доработать это в своём приложении [#func2015](https://twitter.com/search?q=%23func2015)

— Почему не реализовать это на Java? — Сервер может быть на чём угодно, что поддерживает websockets. [#func2015](https://twitter.com/search?q=%23func2015)

Мы прервёмся на обед и вернёмся в 14:50. Приятного аппетита!

### Мы готовы продолжить. Следующим выступает Михаил Ларченко из Бобруйска, сейчас он временно проживает в Амстердаме. [#func2015](https://twitter.com/search?q=%23func2015)

Тема доклада «Тестирование изоморфных React-приложений» [#func2015](https://twitter.com/search?q=%23func2015)

Был сайт, но он устарел. Хотим новый, модный, быстрый. И чтобы работал под IE9 и seo-friendly. [#func2015](https://twitter.com/search?q=%23func2015)

Чтобы было модно и быстро — берём React. Чтобы работало в IE9 и индексировалось — делаем изоморфное приложение. [#func2015](https://twitter.com/search?q=%23func2015)

Чтобы приложение было стабильным — решили покрыть тестами всё и автоматизировать их. [#func2015](https://twitter.com/search?q=%23func2015)

«Код для которого не написаны тесты, со временем будет переписан» [#func2015](https://twitter.com/search?q=%23func2015)

Юнит-тесты для React — [facebook.github.io/jest/](https://t.co/gZaEIEGrLq "https://facebook.github.io/jest/") [#func2015](https://twitter.com/search?q=%23func2015)

Но Jest не подошёл, потому что не умел работать без dom, на момент выбора библиотеки для unit-тестирования [#func2015](https://twitter.com/search?q=%23func2015)

Тестами покрыто всё, в том числе и Stores, поскольку для изморфных приложений нужно проверять синхронизацию. [#func2015](https://twitter.com/search?q=%23func2015)

Всё, что нужно для тестирования React-компонент, есть в TestUtils [#func2015](https://twitter.com/search?q=%23func2015)

Для тестирования Stores нужно работать с сервером. Эмулируем ajax-запросы при помощи Sinon. [#func2015](https://twitter.com/search?q=%23func2015)

Используем fake-сервер не только потому, что это быстрее, но и потому что реальный сервер просто блокирует слишком частые запросы [#func2015](https://twitter.com/search?q=%23func2015)

В unit-тестах — fake-запросы, в интеграционных — работаем с реальным веб-сервером. [#func2015](https://twitter.com/search?q=%23func2015)

Интеграционные тесты - это Selenium. Selenium это джава. Не знаем Джаву - берем вебдрайвер [pic.twitter.com/0ynSiicdIK](http://t.co/0ynSiicdIK)

![](https://pbs.twimg.com/media/CNk1qxdWgAAbo2w.jpg)

Для тестирования изоморфного кода запускаем веб-драйвер с отключенным JavaScript. [#func2015](https://twitter.com/search?q=%23func2015)

Для UI-тестов — фреймворк Galen [galenframework.com](http://t.co/RJwT349Fxc "http://galenframework.com/"). [#func2015](https://twitter.com/search?q=%23func2015)

В отличие от Gemini, Galen использует декларации свойств, а не скриншоты. [#func2015](https://twitter.com/search?q=%23func2015)

Можно проверять расположение блоков относительно друг друга. Можно указать устройства и браузеры. [#func2015](https://twitter.com/search?q=%23func2015)

Для тестирования всего и везде можно использовать SauceLabs,  но это дорого. Поэтому подняли свой Selenium-сервер в офисе. [#func2015](https://twitter.com/search?q=%23func2015)

Проблема своего сервера в офисе — нельзя «достучаться» до него из сервера на Amason. [#func2015](https://twitter.com/search?q=%23func2015)

Четыре причины по которым мы пишем тесты. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/vJmG0saQ6z](http://t.co/vJmG0saQ6z)

![](https://pbs.twimg.com/media/CNk4R3OWcAAqd_B.jpg)

Презентация [j.mp/FU\_LARCHANKA](http://t.co/ZhXn2e7Zia "http://j.mp/FU_LARCHANKA"), твиттер Михаила [@MLarchanka](https://twitter.com/MLarchanka "Mikhail Larchanka") [#func2015](https://twitter.com/search?q=%23func2015)

Мы тестируем вообще всё. Сначала это тяжело, но потом становится понятно, что многие тесты можно просто копипастить. [#func2015](https://twitter.com/search?q=%23func2015)

— Есть ли какой-то профит от написания тестов? — Да, например нашли, что у реакта не всё хорошо в обработчиках событий. [#func2015](https://twitter.com/search?q=%23func2015)

— Когда лучше писать ui-тесты? Сразу с кодом, или позже, когда код стабилизировался?  
— Лучше писать сразу.  [#func2015](https://twitter.com/search?q=%23func2015)

Galen позволяет проверять не только точное совпадение, но и «примерно точное», допуская 2-3 пиксела расхождений. [#func2015](https://twitter.com/search?q=%23func2015)

### Следующий докладчик — Варвара Степанова из frontend.fi c докладом «Сначала стайлгайд — подход к разработке UI компонентов» [#func2015](https://twitter.com/search?q=%23func2015)

Мечты и реальность. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/cirrRUzqO0](http://t.co/cirrRUzqO0)

![](https://pbs.twimg.com/media/CNk9a8-WEAALqEU.jpg)

Типичный подход к разработке порождает сложно изменяемый и запутанный монолитный код. [#func2015](https://twitter.com/search?q=%23func2015)

Решение — мыслить не страницами сайта, а компонентами: OOCSS, SMACS,  BEM. [#func2015](https://twitter.com/search?q=%23func2015)

Всё это хорошо звучит, но... нужно выйти из зоны комфорта и начать думать по другому. [#func2015](https://twitter.com/search?q=%23func2015)

Чтобы облегчить переход на компонентный подход можно использовать живые стайлгайды — сайт с набором реальных компонент. [#func2015](https://twitter.com/search?q=%23func2015)

Стайлгайд — это похоже на документацию. А почему бы нам не начать разработку новых компонент со стайлгайда? [#func2015](https://twitter.com/search?q=%23func2015)

Мы создали интрумент — [styleguide.sc5.io](http://t.co/qQz0XQHG0S "http://styleguide.sc5.io") [#func2015](https://twitter.com/search?q=%23func2015)

Демо-сессия. В vim, да. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/APitJuW2MX](http://t.co/APitJuW2MX)

![](https://pbs.twimg.com/media/CNk_XSjWgAA0Rkm.jpg)

Как результат — на одно странице можно видеть разметку для компонента, его стили и то, как он будет выглядеть. [#func2015](https://twitter.com/search?q=%23func2015)

При изменении исходников — срабатывают вотчеры, всё пересобирается и сайт со стайлгайдом перезапускается. [#func2015](https://twitter.com/search?q=%23func2015)

Также на html-странице компонента можно посмотреть список sass-переменных, которые используются в компоненте. И менять их. [#func2015](https://twitter.com/search?q=%23func2015)

Можно менять код — и меняется страница стайлгайда, а можно менять параметры на странице стайлгайда и будет меняться исходный код. [#func2015](https://twitter.com/search?q=%23func2015)

Также стайлгайд позволяет посмотреть, что изменения в компоненте не ломают другие компоненты в которые он был вложен. [#func2015](https://twitter.com/search?q=%23func2015)

$ npm install sc5-styleguide; [#func2015](https://twitter.com/search?q=%23func2015)

Документация в коде использует KSS-синтаксис, но расширяет его функциональность [#func2015](https://twitter.com/search?q=%23func2015)

Поддерживается gulp, grunt, ангуляр-директивы. [#func2015](https://twitter.com/search?q=%23func2015)

«На сдачу» получили возможность проводить тестирование скриншотами, поскольку каждый компонент находится на отдельной странице [#func2015](https://twitter.com/search?q=%23func2015)

Для сравнения скриншотов используется [github.com/gemini-testing…](https://t.co/5t1lzCpx5m "https://github.com/gemini-testing/gemini") [#func2015](https://twitter.com/search?q=%23func2015)

Кроме того, стайлгайд упростил взаимопонимание в команде. [#func2015](https://twitter.com/search?q=%23func2015)

Стайлгайд можно использовать и на &lt;s&gt;странице кота&lt;/s&gt; небольших проектах [varya.me/ru/posts/sc5-s…](http://t.co/hlYMdAAJ9v "http://varya.me/ru/posts/sc5-styleguide-for-smallers/") [#func2015](https://twitter.com/search?q=%23func2015)

— Какие могут быть подводные камни?  
— Очень сложно перестать думать страницами, и блоки могут оказаться недостаточно независимыми. [#func2015](https://twitter.com/search?q=%23func2015)

Твиттер Варвары Степановой — [@toivonens](https://twitter.com/toivonens "var ya; // ru"). Её блог — [varya.me/ru/](http://t.co/65wqDVKwK8 "http://varya.me/ru/")

— Что делать, если верстальщик и js-программист по разному видят компоненты?  
— Более тесным взаимодействием. [#func2015](https://twitter.com/search?q=%23func2015)

Запросы на новые функции приходят от клиентов, а также из Issues на гитхабе. [#func2015](https://twitter.com/search?q=%23func2015)

RT [@life\_\_777](https://twitter.com/life__777 "Vladimir Dashukevich"): [@webstandards\_up](https://twitter.com/webstandards_up "Веб-стандарты") а так же [github.com/Huddle/Phantom…](https://t.co/FcJ5PldvKg "https://github.com/Huddle/PhantomCSS") \)\)\)

Перерыв на какаушко. Мы продолжим через 20 минут. [#func2015](https://twitter.com/search?q=%23func2015)

### Следующий доклад — «Прощай, jQuery!» от Заремы Халиловой из SpbFrontend. [#func2015](https://twitter.com/search?q=%23func2015)

[pic.twitter.com/KjafZSC9xL](http://t.co/KjafZSC9xL)

![](https://pbs.twimg.com/media/CNlMyIPWgAEjGbY.jpg)

Зарема предлагает зайти по сслыке [ficus.io/uk](http://t.co/MKfE4U9BPP "http://ficus.io/uk") и проголосовать [#func2015](https://twitter.com/search?q=%23func2015)

Дикая гонка столбиков. Завораживает [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/fCXCS01bZC](http://t.co/fCXCS01bZC)

![](https://pbs.twimg.com/media/CNlNbPpWwAAcwSx.jpg)

Победила опция «Поддержка Legacy» [#func2015](https://twitter.com/search?q=%23func2015)

«Я создала новый js-файл и напечатала первый символ: $» [#func2015](https://twitter.com/search?q=%23func2015)

Если всё что нужно — это доступ до элементов и немного Ajax — скорее всего jQuery не нужна. [#func2015](https://twitter.com/search?q=%23func2015)

В том числе благодаря jQuery, появился document.querySelectorAll\(\). [#func2015](https://twitter.com/search?q=%23func2015)

xmlHttpRequest уже не такой большой и страшный, а если вы можете позволить себе работу с fetch\(\), то всё становится совсем просто. [#func2015](https://twitter.com/search?q=%23func2015)

Если у вас не совсем-совсем хайлоад, то вместо цикла for стоит использовать итерационные методы forEach\(\) или for ... of. [#func2015](https://twitter.com/search?q=%23func2015)

Как переписать свой jQuery-код на чистом JavaScript? Смотрите на [youmightnotneedjquery.com](http://t.co/d7wP336mjh "http://youmightnotneedjquery.com/") [#func2015](https://twitter.com/search?q=%23func2015)

Функции ES6, которые ещё не реализованы в браузерах можно эмулировать с помощью [github.com/azproduction/a…](https://t.co/bVLM9EYJfJ "https://github.com/azproduction/autopolyfiller") [#func2015](https://twitter.com/search?q=%23func2015)

Знать JavaScript выгоднее, чем jQuery [pic.twitter.com/awkotvjDGm](http://t.co/awkotvjDGm)

![](https://pbs.twimg.com/media/CNlRi1gW8AAzMmw.jpg)

— Какой плюс принесёт использование чистого JavaScript?  
— Например для виджетов, которые будут размещаться на других сайтах [#func2015](https://twitter.com/search?q=%23func2015)

Разработчик подключает jQuery,  тонну плагинов и страница открывается просто вечность. [#func2015](https://twitter.com/search?q=%23func2015)

Можно загуглить «название плагина» + «vanilla js» и скорее всего решение будет. [#func2015](https://twitter.com/search?q=%23func2015)

— Если я пишу на чистом реакте, я пишу на чистом JS?  
— Нет.  
[#func2015](https://twitter.com/search?q=%23func2015)

К сожалению, мы не смогли найти твиттер-аккаунт Заремы, но её можно найти во вконтакте [vk.com/nowbrow](https://t.co/PctGvpWI7x "https://vk.com/nowbrow") [#func2015](https://twitter.com/search?q=%23func2015)

### Последний доклад на сегодня «Трое в лодке не считая колбэка» от Сергея Жигалова из EkbJS [#func2015](https://twitter.com/search?q=%23func2015)

Пример — получить список авиакомпаний, которые летают в Питер, выбрать список рейсов и отсортировать их по цене. [#func2015](https://twitter.com/search?q=%23func2015)

В этом примере все виды асинхронности — запрос на сервер, пачка доп-запросов и синхронные операции. [#func2015](https://twitter.com/search?q=%23func2015)

Типичный подход к решению задачи - Callback hell [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/R1ZrcQ8UXc](http://t.co/R1ZrcQ8UXc)

![](https://pbs.twimg.com/media/CNlX1dcWsAA3Gec.jpg)

У коллбеков только один плюс — нулевой оверхед [#func2015](https://twitter.com/search?q=%23func2015)

Популярный способ борьбы с коллбеками — промисы. [#func2015](https://twitter.com/search?q=%23func2015)

Для работы с промисами нам нужна библиотека. Наиболее эффективной на сегодня является [github.com/petkaantonov/b…](https://t.co/2PfwHs9EdP "https://github.com/petkaantonov/bluebird") [#func2015](https://twitter.com/search?q=%23func2015)

Промисы уменьшают шум и вложенность, позволяют ловить ошибки, но дают новые лишние функции, не дают полной линейности и медленнее. [#func2015](https://twitter.com/search?q=%23func2015)

Идеальный линейный код мог бы быть, если бы не было асинхронных запросов. [#func2015](https://twitter.com/search?q=%23func2015)

Решение есть ES6 — это генераторы. [#func2015](https://twitter.com/search?q=%23func2015)

Генератор, это функция, которая возвращает итератор. [#func2015](https://twitter.com/search?q=%23func2015)

Перевод статьи c [hacks.mozilla.org](http://t.co/suiM6ALM3j "http://hacks.mozilla.org") о генераторах [frontender.info/es6-in-depth-g…](http://t.co/pXDET8PhbJ "http://frontender.info/es6-in-depth-generators/") [#func2015](https://twitter.com/search?q=%23func2015)

Внутрь генератора можно прокинуть исключение через вызов метода .throw\(\) у итератора и обработать его внутри генератора. [#func2015](https://twitter.com/search?q=%23func2015)

Генераторы, итераторы и обработка исключений позволяют решить задачу поиска и фильтрации результатов в линейном стиле [#func2015](https://twitter.com/search?q=%23func2015)

Наиболее популярная библиотека для написания кода в линейном стиле [github.com/tj/co](https://t.co/rkDfmw4p2f "https://github.com/tj/co") [#func2015](https://twitter.com/search?q=%23func2015)

Поддержка генераторов в node всё хорошо, на клиенте нет поддержки в IE и Safari. Решение — Babel или другой транспайлер [#func2015](https://twitter.com/search?q=%23func2015)

У генераторов тоже есть недостатки. Решение из ближайшего будущего — async/await. [#func2015](https://twitter.com/search?q=%23func2015)

Производительность колбеков, промисов и генераторов. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/NEj49OGLgY](http://t.co/NEj49OGLgY)

![](https://pbs.twimg.com/media/CNldiDIW8AAv6RR.jpg)

Если нужно чтобы код работал быстро — используйте колбеки. Если код нужно написать быстро — используйте генераторы [#func2015](https://twitter.com/search?q=%23func2015)

— Определены ли промисы на уровне спецификации JS?  
— Да есть Promises/A+, но их поддержка есть не везде поэтому нужны библиотеки. [#func2015](https://twitter.com/search?q=%23func2015)

Все библиотеки полностью реализуют спецификацию, но добавляют дополнительный функционал, что может усложнить миграцию. [#func2015](https://twitter.com/search?q=%23func2015)

Фото группового фото [pic.twitter.com/0HT6fuvioH](http://t.co/0HT6fuvioH)

![](https://pbs.twimg.com/media/CNlguPPWoAATbFa.jpg)

[@frontend\_union](https://twitter.com/frontend_union "Frontend Union Conf") [@olmokhov](https://twitter.com/olmokhov "Олег Мохов") [@\_h4\_](https://twitter.com/_h4_ "Наполеон Бонапарт") you are welcome!

И под занавес сегодняшней трансляции - секретное фото с записи нового выпуска RadioJS. [#func2015](https://twitter.com/search?q=%23func2015) [pic.twitter.com/SI5eFvvVxC](http://t.co/SI5eFvvVxC)

![](https://pbs.twimg.com/media/CNlnC2PWUAAuSRL.jpg)
