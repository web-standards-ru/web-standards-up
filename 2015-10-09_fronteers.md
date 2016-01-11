# Fronteers

## 2015-10-09, Амстердам, Голландия

Через несколько минут начинаются презентации второго дня Fronteers 2015. Я не проспал и чувствую себя отлично! Продолжаем.

Брюс в лонгсливе с официальным \(по словам Брюса\) логотипом Service worker. [pic.twitter.com/7JNR4QXAQM](http://t.co/7JNR4QXAQM)

![](https://pbs.twimg.com/media/CQ22TRIWUAAAtwA.jpg)

Фил Хоксворф рассказывает про сайты. Простота, контент, чистые URL. [pic.twitter.com/eVO6P6akxS](http://t.co/eVO6P6akxS)

![](https://pbs.twimg.com/media/CQ24SuYWgAAkPcQ.jpg)

Визуализация размеров viewport реальных посетителей. [pic.twitter.com/ilTp804y6e](http://t.co/ilTp804y6e)

![](https://pbs.twimg.com/media/CQ24i9JU8AA1pNv.jpg)

Простота не означает «тупизну». Да, это мало похоже на «Голивуд». Но часто работает лучше ярких кричащих сайтов. [pic.twitter.com/ZFYc4lwhGY](http://t.co/ZFYc4lwhGY)

![](https://pbs.twimg.com/media/CQ25IUxWoAAaf04.jpg)

Статические сайты отлично решают перечисленные задачи. Используйте генераторы и шаблонизаторы для создания статических страниц.

Стайлгайды — это пример генерации/использования статических страниц. Добавьте туда контент и получите сайт. [pic.twitter.com/2OEFSUb2R1](http://t.co/2OEFSUb2R1)

![](https://pbs.twimg.com/media/CQ27Z20WEAA3xMe.jpg)

![](https://pbs.twimg.com/media/CQ27bj7WwAAsB8j.jpg)

Быстрая и безопасная выкатка изменений в продакшин. Surge — сервис для деплоя [surge.sh](https://t.co/M97OFcBs8x "https://surge.sh/") [pic.twitter.com/8rBRd0cFEF](http://t.co/8rBRd0cFEF)

![](https://pbs.twimg.com/media/CQ276tUWEAAeMrt.jpg)

Упрощайте свою инфраструктуру. Переносите сложные части в as-a-service компоненты. [pic.twitter.com/e18G7uOaNc](http://t.co/e18G7uOaNc)

![](https://pbs.twimg.com/media/CQ29F_AWoAAhabt.jpg)

![](https://pbs.twimg.com/media/CQ29HwSWUAAK7f8.jpg)

Отделите систему управления контента от вашего продакшин-окружения. [pic.twitter.com/oB4LWLKMFO](http://t.co/oB4LWLKMFO)

![](https://pbs.twimg.com/media/CQ29bA8W8AAfqTV.jpg)

Фил рекомендует [roots.cx](http://t.co/YMpAhOdGYc "http://roots.cx/") для управлением контентом статического сайта. [pic.twitter.com/ndidcrH9fA](http://t.co/ndidcrH9fA)

![](https://pbs.twimg.com/media/CQ295TWWoAEVDaF.jpg)

Статические сайты не работаю когда нужна персонализация, очень много страниц и есть контент, генерируемый пользователями.

[speakerdeck.com/philhawksworth…](https://t.co/NOOz2eE20X "https://speakerdeck.com/philhawksworth/static-sites-go-all-hollywood") слайды презентации.

На сессии QA Фил рассказывает Брюсу, что статические сайты легко сделать динамическими. [pic.twitter.com/sllAlhce38](http://t.co/sllAlhce38)

![](https://pbs.twimg.com/media/CQ3AG9vUYAAQkTu.jpg)

Вес Бос рассказывает про инструменты фронтэндера. [pic.twitter.com/9U1qUtePY7](http://t.co/9U1qUtePY7)

![](https://pbs.twimg.com/media/CQ3EHyOU8AAgMxw.jpg)

Инструментов, которые упрощают жизнь, очень много: [pic.twitter.com/Ep1aGqzMYU](http://t.co/Ep1aGqzMYU)

![](https://pbs.twimg.com/media/CQ3EyusXAAA8IGw.jpg)

![](https://pbs.twimg.com/media/CQ3E1BCXAAASRei.jpg)

![](https://pbs.twimg.com/media/CQ3E2oPXAAA70Ba.jpg)

Вес начал перечислять полезные задачи:  
1\) определение «критических» ресурсов;  
2\) оптимизация картинок;  
3\) минификация JS.

[github.com/mozilla/mozjpeg](https://t.co/RoH1t1CaRo "https://github.com/mozilla/mozjpeg") позволяет дополнительно сократить размер JPEG-файлов без потери качества.

Вес переключился в разруливание зависимостей: browserify, webpack, jspm. Последний работает на клиенте и близок к спеке JavaScript.

«Если вы используете webpack, то, возможно, gulp или grunt вам вообще не понадобятся» — говорит Вес. \(Я полностью с этим согласен\)

Часто библиотеки реализуют слишком много функций \(например, lodash\). Можно из них брать только нужные части.

Вес перечисляет новые фичи JS: стрелки, let, шаблоны для строк. Он горячо рекомендует пользоваться ими прямо сейчас.

Если нужна поддержка старого окружения, то Babel вам в помощь. Новые фичи полифилятся.

«Никто больше не пишет чистый CSS». Сейчас мы пользуемся пре/пост процессорами.

Новые фичи в CSS можно добавлять через плагин cssnext для [@PostCSS](https://twitter.com/PostCSS "PostCSS") [pic.twitter.com/o7i4YDw9mf](http://t.co/o7i4YDw9mf)

![](https://pbs.twimg.com/media/CQ3JRwWWUAAYUOO.jpg)

Browsersync автоматически обновляет страницу при изменении исходников. Когда меняете стили, то страница не перегружается — обновляются css.

Ещё больше фич Browsersync на картинке. Уникальная особенность — синхронизация нескольких браузеров/устройств. [pic.twitter.com/aJj2zd6Hj5](http://t.co/aJj2zd6Hj5)

![](https://pbs.twimg.com/media/CQ3KfPxXAAAdnyX.jpg)

Sourcemap исключительно полезны при отладке. Работают с CSS и JS.

Вес Бос говорит, что инструменты изучить не так сложно. Вы точно получите профит от их использования. [pic.twitter.com/v7zrJAgVxa](http://t.co/v7zrJAgVxa)

![](https://pbs.twimg.com/media/CQ3MVGbWIAAhMBa.jpg)

Начните с чего-то простого: трансформация стилей, оптимизация картинок. Пробуйте, экспериментируйте. Только так можно научиться.

[@victor\_suzdalev](https://twitter.com/victor_suzdalev "Victor Suzdalev") Да, Вес обещал выложить. Там действительно очень много информации для 50 минут.

Салли Дженкинсон рассказыват про открытые данные. [pic.twitter.com/CuBWm2HlAM](http://t.co/CuBWm2HlAM)

![](https://pbs.twimg.com/media/CQ3WXJqWIAEkome.jpg)

Она признаётся, что сама большой фанат данных и аналитики. [pic.twitter.com/Ww1l7HOJrd](http://t.co/Ww1l7HOJrd)

![](https://pbs.twimg.com/media/CQ3WiahWgAAGa0F.jpg)

![](https://pbs.twimg.com/media/CQ3WkI-WoAE2fHj.jpg)

Что такое «открытые данные»? Ответы тут — [opendefinition.org](http://t.co/72cVUgrNZd "http://opendefinition.org/")

Кроме Creative Commons есть другие лицензии, позволяющие переиспользовать, модифицировать чужие данные. [pic.twitter.com/Q8VGUTQewD](http://t.co/Q8VGUTQewD)

![](https://pbs.twimg.com/media/CQ3XNMNWUAEQkFG.jpg)

В интернете много разных наборов открытых данных: картинки котиков,  карты землетрясений, потребление электричества разными устройствами.

Несколько наборов данных [pic.twitter.com/cJH3C07EPc](http://t.co/cJH3C07EPc)

![](https://pbs.twimg.com/media/CQ3X8xgW8AAYPsd.jpg)

Данные нужно как-то обработать и представить. Салли рассказывает про визуализацию на D3.js

Один человек проанализировал сколько люди платят штрафов, когда паркуются у гидрантов в NY. Самые прибыльные: [pic.twitter.com/Gqru6HMB7e](http://t.co/Gqru6HMB7e)

![](https://pbs.twimg.com/media/CQ3ZLVaWwAAsZyB.jpg)

Порой, время, которое люди тратят на дорогу до работы неоднозначно коррелирует с расстоянием. [pic.twitter.com/QQP6km1riw](http://t.co/QQP6km1riw)

![](https://pbs.twimg.com/media/CQ3Z62LWgAAU61G.jpg)

Вы можете сами начать публиковать открытые данные [opensensors.io](https://t.co/TY3toZzqOp "https://opensensors.io/") [pic.twitter.com/L5XJgr7Q4S](http://t.co/L5XJgr7Q4S)

![](https://pbs.twimg.com/media/CQ3ajm9WEAQ8VVi.jpg)

Визуализация «трагических» данных на манер созвездий. [pic.twitter.com/mWzXVjUH66](http://t.co/mWzXVjUH66)

![](https://pbs.twimg.com/media/CQ3bDDeWUAAbayE.jpg)

Совершенно разные данные очень часто можно связать между собой и взглянуть на них с другой стороны.

Только сильно не увлекайтесь этим, чтобы не получилось как на слайдах: [pic.twitter.com/mDcKngl6Qm](http://t.co/mDcKngl6Qm)

![](https://pbs.twimg.com/media/CQ3c2sTWcAA-eED.jpg)

![](https://pbs.twimg.com/media/CQ3c4JVWUAAnkgk.jpg)

![](https://pbs.twimg.com/media/CQ3c50SWwAA5Z9S.jpg)

Тщательно проверяйте данные, которые вы используете или публикуете. Они должны быть достоверными.

[openrefine.org](http://t.co/df2W49EOWR "http://openrefine.org/") инструмент для очистки сырых данных. [pic.twitter.com/PLUMqRMjaI](http://t.co/PLUMqRMjaI)

![](https://pbs.twimg.com/media/CQ3e0FqWoAA1OzD.jpg)

Приватные данные — очень важный аспект. Подходите очень аккуратно к этому, когда публикуете данные о людях.

Тему данных и приватности продолжает  Реио Зенгер с точки зрения дизайна. [pic.twitter.com/1gQOcpJj3e](http://t.co/1gQOcpJj3e)

![](https://pbs.twimg.com/media/CQ3h86zU8AAWJ7J.jpg)

Пока не понятна основная мысль, но вот вам картинка. [pic.twitter.com/1rdoNFJRTE](http://t.co/1rdoNFJRTE)

![](https://pbs.twimg.com/media/CQ3i8IwWUAA8coq.jpg)

Многие проблемы, которые возникают исходя из законов, норм и рынка, можно решить правильной архитектурой или дизайном.

Багажная лента не случайно так далеко от ворот прилёта. Люди дольше идут, но меньше ждут у ленты. Профит.

Карты Гугла часто строят не совсем оптимальный маршрут в Амстердаме чтобы разгрузить центр. Истинные причины не совсем очевидны, но это факт

Разоблачение внутренней инфраструктуры Гугла в одной картинке. [pic.twitter.com/qiFgwibIqM](http://t.co/qiFgwibIqM)

![](https://pbs.twimg.com/media/CQ3k0_CWcAQM1hS.jpg)

Когда вы проектируете сервис, то запрашивайте как можно меньше приватных данных пользователя \(д.р., адрес и т.п.\)

Применяйте децентрализацию при хранении и обработке данных. Например, попросите пользователя о доступе к его профилю ФБ.

Счётчики, аналитика, кнопки лайка/шера — всё это может раскрывать пользователя.

Шифруйте всё, что только можно. Используйте TLS для передачи данных между сервисами и пользователем.

Скоро запускается [@letsencrypt](https://twitter.com/letsencrypt "Let's Encrypt") — бесплатные автоматически выпускаемые и обновляемые сертификаты.

Если пользователь удаляет пост/комментарий или меняет имя, то он ожидает, что данные действительно удалятся или поменяются.

Интерфейс утилит PGP/GPG принципиально не менялся уже 25 лет. Добавили только панельку инструментов и цветные иконки [pic.twitter.com/9F1alOCLnZ](http://t.co/9F1alOCLnZ)

![](https://pbs.twimg.com/media/CQ3oK4EWUAAnaiq.jpg)

Чтобы обычные люди начали использовать шифрование, нужны какие-то былее простые интерфейсы. [pic.twitter.com/C30Yypy35I](http://t.co/C30Yypy35I)

![](https://pbs.twimg.com/media/CQ3oaWcWUAE152H.jpg)

Сессия вопросов и ответов с предыдущими докладчиками. [pic.twitter.com/VZNSOdWCmI](http://t.co/VZNSOdWCmI)

![](https://pbs.twimg.com/media/CQ3ppx1WcAAaYRi.jpg)

Приватность не абсолютна. В разных странах свои нормы. Например, в скандинавских станах информация о налогах открыта, в Британии — нет.

Забыл показать вам «спасательный набор второго дня». Каждый мог найти его в подстаканниках кресел. [pic.twitter.com/rkuq7GD81q](http://t.co/rkuq7GD81q)

![](https://pbs.twimg.com/media/CQ34nqgW8AABF21.jpg)

Соледад Пенадес рассказывает про Web Audio [pic.twitter.com/od4jOMNsQA](http://t.co/od4jOMNsQA)

![](https://pbs.twimg.com/media/CQ37c_fWsAATagq.jpg)

Она начала своё выступление с крутой демки. [pic.twitter.com/zIFa0l0Stw](http://t.co/zIFa0l0Stw)

![](https://pbs.twimg.com/media/CQ374ORWoAAltsA.jpg)

Работа с Web Audio API начинается с созданием контекста \(наподобие &lt;canvas&gt;\). Потом можно делать кучу вещей: [pic.twitter.com/Y1UaAt2AWt](http://t.co/Y1UaAt2AWt)

![](https://pbs.twimg.com/media/CQ38gpBWIAEGK4X.jpg)

![](https://pbs.twimg.com/media/CQ38hvbWEAAZNDh.jpg)

Web Audio работает с минимальной задержкой в отдельном треде.

Граф генераторов и фильтров очень оптимизирован внутри. Создание/удаление узлов практически бесплатно.

Всё спроектировано для того, чтобы минимизировать утечки памяти \(даже если вы забудете что-то отключить или удалить\)

Соледад показывает много демок с аудио-эффектами и обработкой звука в реальном времени. Пока всё похоже на развлечение.

На практике это всё, очевидно, применяется в играх и интерактивных приложениях.

Материалы презентации [github.com/sole/howa](https://t.co/j0XphD9ikC "https://github.com/sole/howa")

Брюс и Соледад болтаю после выступления. [pic.twitter.com/qO8K8UWklg](http://t.co/qO8K8UWklg)

![](https://pbs.twimg.com/media/CQ4DGSyWsAArIl1.jpg)

Рейчал Эндрю начала свой рассказ о старых техниках для управления раскладкой и плавно перешла к Flexbox и Grid. [pic.twitter.com/L4IzYzpAGQ](http://t.co/L4IzYzpAGQ)

![](https://pbs.twimg.com/media/CQ4F5hSVAAE7Jj6.jpg)

Спецификация Grid выглядит очень перспективной. [pic.twitter.com/gKkBZaRy4x](http://t.co/gKkBZaRy4x)

![](https://pbs.twimg.com/media/CQ4GXtsXAAAg2wz.jpg)

![](https://pbs.twimg.com/media/CQ4GY59WUAAL6w2.jpg)

Боль любого разработчика — вертикальное выравнивание. Flexbox решает много проблем в этой области. [pic.twitter.com/kQdEkH1HWE](http://t.co/kQdEkH1HWE)

![](https://pbs.twimg.com/media/CQ4GmhnXAAANc1U.jpg)

С помощью Grid можно добиться интересных результатов. [pic.twitter.com/VsAFfu0Oxs](http://t.co/VsAFfu0Oxs)

![](https://pbs.twimg.com/media/CQ4HduUXAAAR08A.jpg)

![](https://pbs.twimg.com/media/CQ4HbV2XAAAv6Ao.jpg)

![](https://pbs.twimg.com/media/CQ4HcgoXAAQXF9C.jpg)

Тестер для свойств Flexbox [pic.twitter.com/eppM2QNv8H](http://t.co/eppM2QNv8H)

![](https://pbs.twimg.com/media/CQ4ITX7WcAANTOO.jpg)

Новая единица измерения — fr \(fraction\) [pic.twitter.com/fBLAqt5YJX](http://t.co/fBLAqt5YJX)

![](https://pbs.twimg.com/media/CQ4IsOSWoAA0Lw1.jpg)

![](https://pbs.twimg.com/media/CQ4ItgVW8AAEXrR.jpg)

![](https://pbs.twimg.com/media/CQ4IvAFWoAAYJIp.jpg)

Старые браузеры не понимают новых свойств. Но это не должно нас — разработчиков останавливать от экспериментов и использования новых фич.

Браузеры постоянно обновляются. То, что не работает сегодня, может быть имплементировано в ближайшее время. [pic.twitter.com/fYmak3GxwO](http://t.co/fYmak3GxwO)

![](https://pbs.twimg.com/media/CQ4J15UW8AAb7ff.jpg)

Поддержка CSS Grid Layout на сегодняшний день. [pic.twitter.com/WEiCjlHpAj](http://t.co/WEiCjlHpAj)

![](https://pbs.twimg.com/media/CQ4KLtZWsAEzHES.jpg)

Разделяйте десктоп- и мобильных пользователей. Часто, в мобильных браузерах реализовано больше фич.

[get.gaug.es](http://t.co/4Cu5riIcVh "http://get.gaug.es/") — интересный сервис аналитики, котороый может показать какие фичи есть у ваших подьзователей.

Рейчел и Брюс продолжают обсуждать Grid и Fexbox в уютных креслах. [pic.twitter.com/CuGJYNiz1W](http://t.co/CuGJYNiz1W)

![](https://pbs.twimg.com/media/CQ4NTYRWsAAZXIb.jpg)

Реми Шарп делится советами по отладке кода и поиска багов. [pic.twitter.com/o0RdwnScPE](http://t.co/o0RdwnScPE)

![](https://pbs.twimg.com/media/CQ4X--PUcAE46R9.jpg)

Карты кода, по словам Реми, не сильно помогают в отладке. Он предпочитает отлаживать код, который выполняет браузер.

1\. Повтори баг \(Replicate\)  
Дефект может быть не совсем очевидным. Попробуй Incognito mode. Отключите плагины браузера. Почистите кеш.

2\. Изолируй дефект \(Isolate\)  
Возможно, можно выделить блок и найти ошибку в модуле без остального окружения.

3\. Удали дефект \(Eliminate\)  
Внося исправления, не наделайте других дефектов.

Искусство отладки в одной картинке: [pic.twitter.com/0v0MTQ2Udt](http://t.co/0v0MTQ2Udt)

![](https://pbs.twimg.com/media/CQ4ajfFVEAELcPr.jpg)

Во время отладки бывает важно как система оказалась в этом состоянии.

Chrome Dev tools даёт сделать сопоставления между локальными файлами и ресурсами из сети. [pic.twitter.com/fg96PCe37U](http://t.co/fg96PCe37U)

![](https://pbs.twimg.com/media/CQ4chzsWsAEfNC0.jpg)

Когда вы вносите изменения в отладчике и сохраняете из, они сохраняются в реальных файлах.

Это работает для стилей тоже! [pic.twitter.com/NoV9euZldI](http://t.co/NoV9euZldI)

![](https://pbs.twimg.com/media/CQ4dAE-WcAALzZB.jpg)

![](https://pbs.twimg.com/media/CQ4dBQPWcAAva8J.jpg)

Изменения в отладчике можно отменять Cmd+Z \(Ctrl+Z, если вы пользуетесь Win\).

В REPL можно использовать специальные переменные $, $$, $\_ [pic.twitter.com/QqXIwoyf5W](http://t.co/QqXIwoyf5W)

![](https://pbs.twimg.com/media/CQ4eDajWIAQlUZX.jpg)

Недавно ещё появилась специальная функция «copy».

Вы можете остановить выполнение скриптов при попытке модификации содержимого элемента \(DOM-breakpoint\). [pic.twitter.com/KXhqkE97kA](http://t.co/KXhqkE97kA)

![](https://pbs.twimg.com/media/CQ4fFdPWoAAkq-K.jpg)

Поиск утечек памяти [pic.twitter.com/LzHY3thH9n](http://t.co/LzHY3thH9n)

![](https://pbs.twimg.com/media/CQ4fLorWgAAGnvp.jpg)

Серые столбики — объекты в памяти. Синие — объекты, которые браузер не может освободить [pic.twitter.com/hk6z822Jsq](http://t.co/hk6z822Jsq)

![](https://pbs.twimg.com/media/CQ4f8G0W8AAECY6.jpg)

Можно сравнить два снимка памяти [pic.twitter.com/ptligOozeq](http://t.co/ptligOozeq)

![](https://pbs.twimg.com/media/CQ4gAk_WgAAK-sQ.jpg)

![](https://pbs.twimg.com/media/CQ4gCbRWcAAxOdb.jpg)

Можно эмулировать медленную сеть [pic.twitter.com/8cG5LRyY2Y](http://t.co/8cG5LRyY2Y)

![](https://pbs.twimg.com/media/CQ4gjI6WIAAfozW.jpg)

Слайды у Реми закончились. Он продолжает делиться хинтами сидя в кресле. [pic.twitter.com/AKnKQy0IsI](http://t.co/AKnKQy0IsI)

![](https://pbs.twimg.com/media/CQ4hpEkUwAAyEmE.jpg)

Заключительный доклад. Кристиан Хейлман с вдохновляющей презентацией о конференциях, докладчиках и аудитории. [pic.twitter.com/jlXKHjqKc0](http://t.co/jlXKHjqKc0)

![](https://pbs.twimg.com/media/CQ4jm5CWUAA7EAn.jpg)

«Приходите на конференции. Встречайтесь с людьми. Общайтесь с докладчиками» — говорит Крис.

Делитесь с людьми идеями. Поддерживайте начинания других. Не сомневайтесь, вы будете вознаграждены.

Дальше пошёл поток мыслей и примеров. Вот один из слайдов. Как думаете, что это за штука? [pic.twitter.com/179UACp12W](http://t.co/179UACp12W)

![](https://pbs.twimg.com/media/CQ4lgW4WcAAQY_O.jpg)

Крис даёт несколько простых советов как стать профессиональным веб-разработчиком. [pic.twitter.com/CTMkMAYtWi](http://t.co/CTMkMAYtWi)

![](https://pbs.twimg.com/media/CQ4ogOmWwAAf7nW.jpg)

Конференция завершилась. Участники, докладчики и организаторы пошли в бар. [pic.twitter.com/zaCTWFHyXN](http://t.co/zaCTWFHyXN)

![](https://pbs.twimg.com/media/CQ5Br3DVEAA1ZG9.jpg)

От холодного пива и шумной тусовки я немного охрип. В этом году было достаточно много интересных презентаций.

Организаторы подготовили список выступающих. [twitter.com/FronteersConf/…](https://t.co/CNZVWhZphs "https://twitter.com/FronteersConf/lists/speakers2015/members"). Очень вероятно, что они уже запостили ссылки на свои слайды.

Видео с записью Jam-session и докладов основной конференции скоро будет на Vimeo.

[@webstandards\_up](https://twitter.com/webstandards_up "Веб-стандарты") Кроме [@sapegin](https://twitter.com/sapegin "Artem Sapegin") никто не прислал ответов. Это рукомойник. Но он такой блестящий и привлекательный, что часто туда отливают.

Эти два дня с вами был Владимир [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov") в прямом эфире из Амстердама с конференции [#fronteers15](https://twitter.com/search?q=%23fronteers15). Специально для [@webstandards\_ru](https://twitter.com/webstandards_ru "Веб-стандарты"). Ciao!