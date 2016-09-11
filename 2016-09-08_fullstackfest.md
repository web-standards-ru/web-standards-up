# FullStack Fest

## 2016-09-08, Барселона, Испания

Всем привет! С вами [@mr\_kovalyov](https://twitter.com/mr_kovalyov "Pavel Kovalyov"). Я буду вести прямую трансляцию с [@FullStackFest](https://twitter.com/FullStackFest "Full Stack Fest") из Барселоны. [#fullstackfest](https://twitter.com/search?q=%23fullstackfest) [#frontend](https://twitter.com/search?q=%23frontend) [#javascript](https://twitter.com/search?q=%23javascript)

Нас ждёт два дня интересных докладов. С программой сегодняшнего дня ознакомится можно здесь – [2016.fullstackfest.com/agenda/\#thursd…](https://t.co/FgPcBk9FIP "https://2016.fullstackfest.com/agenda/#thursday-sept-8")

А пока идет подготовка и регистрация покажу вам зал AXA Auditori [pic.twitter.com/FytGULzgVj](https://t.co/FytGULzgVj)

![](https://pbs.twimg.com/media/Cr0C7vbWAAAgYFo.jpg)

Немного обо мне: работаю фуллстек разработчиком в большой игровой компании, веду тренинги по JavaScript и паблик [vk.com/js\_kitchen](https://t.co/zUlixVtnYQ "https://vk.com/js_kitchen")

И если кто-то из присутствующих сегодня на [#FullStackFest](https://twitter.com/search?q=%23FullStackFest) читает мой стрим – ловите меня на кофе-брейках ;\)

А вот и ссылочка на видео трансляцию:  
  
[youtube.com/watch?v=uIlUOO…](https://t.co/8546N3Uwno "https://www.youtube.com/watch?v=uIlUOOc9hNM")

[pic.twitter.com/NEH4GhS5hu](https://t.co/NEH4GhS5hu)

![](https://pbs.twimg.com/media/Cr0I01ZXgAAVaVb.jpg)

На сцену вышел Брюс Лоусон [@brucel](https://twitter.com/brucel "Bruce Lawson") с вступительным словом [#fullstackfest](https://twitter.com/search?q=%23fullstackfest) [pic.twitter.com/kYLqo16CAp](https://t.co/kYLqo16CAp)

![](https://pbs.twimg.com/media/Cr0JJ7yXYAA3z9N.jpg)

Брюс рассказывает про "code of conduct", регламент, спонсоров и обещает много интересных докладов, [#javascript](https://twitter.com/search?q=%23javascript), [#elm](https://twitter.com/search?q=%23elm), [#closuresciprt](https://twitter.com/search?q=%23closuresciprt)

На сцену выходит Lee Byron [@leeb](https://twitter.com/leeb "Lee Byron") с докладом про иммутабельную архитектуру приложений

Основной поинт - архитектура это не библиотеки которые используются в проекте

[@roman01la](https://twitter.com/roman01la "Roman Liutikov") думаю что было. Я приехал только на фронтенд

Архитектура - когда вы отказываетесь от абстракций в пользу элементов \(компонентов\)

Сложности в построении mvc + rest приложений - связность компонент и зависимости между ними

Сетевые задержи и проблемы загрузки приводят к проблемам обновления состояния приложения

Пора отказываться от mvc + rest как это сейчас делают в facebook

В иммутабельном подходе компонент это чистая функция от состояния [pic.twitter.com/iKzaksyxqN](https://t.co/iKzaksyxqN)

![](https://pbs.twimg.com/media/Cr0Nn2kWYAAXV-O.jpg)

При изменении состояния достаточно посчитать дифф и применить эти изменения к, например, dom'у [pic.twitter.com/4CI1BYSh5C](https://t.co/4CI1BYSh5C)

![](https://pbs.twimg.com/media/Cr0OJ3kWYAAiSgf.jpg)

хорошие компонентные библиотеки делают это быстро даже на low-end устройствах, например React :\)

Но компонент не только функция но и определенные данные, которые надо откудато получить [pic.twitter.com/gRYoJF8XEh](https://t.co/gRYoJF8XEh)

![](https://pbs.twimg.com/media/Cr0Ow0iWEAAoM70.jpg)

И тут нам поможет GraphQL,   
примерт запроса   
{ me { name,  friends { name } } }

С GraphQL легко делать запросы к дочерним данным, для чего в rest архитектуре пришлось бы делать много дополнительных запросов

За действия пользователя отвечает Action [pic.twitter.com/4Y7TTTacMk](https://t.co/4Y7TTTacMk)

![](https://pbs.twimg.com/media/Cr0P5OwXYAAjSW3.jpg)

Action - фукция от состояния, которая возвращает новое состояние  
\(State\) =&gt; State

Для того чтоб новые состояния не занимали много памяти используется structural sharing

Также экономить помогает мемоизация - memoize

Пример использования мемоизации с структурами immutable.js [pic.twitter.com/Zzw8R6nAbb](https://t.co/Zzw8R6nAbb)

![](https://pbs.twimg.com/media/Cr0Q34zXgAAlRWE.jpg)

Чтобы синхронизировать состояние с сервером Action умеет оптимистические апдейты  
\(State\) =&gt; State, Promise&lt;State&gt;

Но чтобы избегать "гонок" запросов есть Queue который отслеживает последовательности запросов на сервер

Вот так выглядет финальная схема иммутабельной архитектуры от ребят из facebook [pic.twitter.com/maFIoPDUKG](https://t.co/maFIoPDUKG)

![](https://pbs.twimg.com/media/Cr0R0zcXYAAWbQo.jpg)

Говорит, уже много приложений facebook уже используют эту архитектуру, например новостная лента

Нет единственного правильного подхода в построении архитектуры

[@leeb](https://twitter.com/leeb "Lee Byron") призывает исследовать и улучшать!

[#fullstackfest](https://twitter.com/search?q=%23fullstackfest) [@leeb](https://twitter.com/leeb "Lee Byron") [@brucel](https://twitter.com/brucel "Bruce Lawson") [pic.twitter.com/aByvKss4NK](https://t.co/aByvKss4NK)

![](https://pbs.twimg.com/media/Cr0TAY1XEAAAivl.jpg)

Начинается доклад про [#elm](https://twitter.com/search?q=%23elm) [pic.twitter.com/8eg7xX3QZ1](https://t.co/8eg7xX3QZ1)

![](https://pbs.twimg.com/media/Cr0T9DNWgAALOCs.jpg)

Почему люди начинают использовать Elm [pic.twitter.com/nuvxHH9wAe](https://t.co/nuvxHH9wAe)

![](https://pbs.twimg.com/media/Cr0UTr_WAAEijwr.jpg)

Проблема веб-приложений в том, что данные изменяеются и состояние нужно синхронизировать с сервером

И нужен единственный источник правды - правильного состояния

Тогда UI станет представлением состояния

Эффективный рендеринг это не проблема на текущий момент

Сложности в том, чтоб отслеживать изменения состояния

Пример ангуляра в котором это сделать тяжело [pic.twitter.com/E8BEhbAbmC](https://t.co/E8BEhbAbmC)

![](https://pbs.twimg.com/media/Cr0VakcXgAAjaPY.jpg)

В elm есть функция update превращающая action  и старый стейт в новое состояние [pic.twitter.com/zOJ95RFNxj](https://t.co/zOJ95RFNxj)

![](https://pbs.twimg.com/media/Cr0V60IWIAA8cRk.jpg)

"Elm не совершенный, пока что..." [pic.twitter.com/AzkrAlfveB](https://t.co/AzkrAlfveB)

![](https://pbs.twimg.com/media/Cr0WcmiWEAA2v50.jpg)

Синтаксис elm понятный и простой и похож на lisp

Плюсы типизации [pic.twitter.com/S7UthHptgd](https://t.co/S7UthHptgd)

![](https://pbs.twimg.com/media/Cr0XRifWcAA5OyL.jpg)

Можно делать алиасы для типов

Функции в [#elmlang](https://twitter.com/search?q=%23elmlang) всегда чистые  
И вы должны всегда писать чистые функции!

в [#elmlang](https://twitter.com/search?q=%23elmlang) есть тип Maybe -&gt; Just | Nothing  ¯\\\_\(ツ\)\_/¯

И вот зачем Maybe нужен [pic.twitter.com/562Md4WJM8](https://t.co/562Md4WJM8)

![](https://pbs.twimg.com/media/Cr0YrOKXEAA55KY.jpg)

Впечатление от [@andrestaltz](https://twitter.com/andrestaltz "André Staltz") [pic.twitter.com/F1ZjisFzGw](https://t.co/F1ZjisFzGw)

![](https://pbs.twimg.com/media/Cr0ZDE3WgAAeuBw.jpg)

Архитектура elm в трех функциях [pic.twitter.com/W95AWoVfnO](https://t.co/W95AWoVfnO)

![](https://pbs.twimg.com/media/Cr0ZOalXEAAn05T.jpg)

elm reactor - сервер для локальной разработки

elm package - пакетный менеджер

[@Jack\_Franklin](https://twitter.com/Jack_Franklin "Jack Franklin") призывает учить и контрибьютить в [#elmlang](https://twitter.com/search?q=%23elmlang) [pic.twitter.com/zXO8eIxfLJ](https://t.co/zXO8eIxfLJ)

![](https://pbs.twimg.com/media/Cr0beE8WYAAKh1X.jpg)

Небольшой кофе-брейк

Но сцене [@jhusain](https://twitter.com/jhusain "Jafar Husain") расскажет о будущем [#javascript](https://twitter.com/search?q=%23javascript) [pic.twitter.com/abWXDmP4Ea](https://t.co/abWXDmP4Ea)

![](https://pbs.twimg.com/media/Cr0kpdVXEAAoELP.jpg)

Напоминает нам про ежегодный релизный цикл и стадии через которые проходят фичи

Наконец то про async [pic.twitter.com/qzFTu5UVBB](https://t.co/qzFTu5UVBB)

![](https://pbs.twimg.com/media/Cr0lKBxWEAADKNe.jpg)

В ES2015 мы получили промисы для управления асинхронным кодом

Но специфический синтаксис промисов ставит вопрос: почему синхронный и асинхронный код должны выглядеть по разному?!

С async теперь код выглядит синхронным [pic.twitter.com/ZDLSdQfoz8](https://t.co/ZDLSdQfoz8)

![](https://pbs.twimg.com/media/Cr0l5d-XEAAUE3h.jpg)

Встаёт вопрос с отменой асинхронных операций

Ответ на этот вопрос - Cancel Tokens

[pic.twitter.com/0GODNauapC](https://t.co/0GODNauapC)

![](https://pbs.twimg.com/media/Cr0mczyXYAAnn-c.jpg)

Вы просто передаете token в асинхронную функцию и если нужно отменить её выполнение - просто вызываете cancel\(\)

Чтобы избежать написание бойлерплейт кода они встроили в await [pic.twitter.com/WYOm4Z06VL](https://t.co/WYOm4Z06VL)

![](https://pbs.twimg.com/media/Cr0nJHuWAAAo5D0.jpg)

Генераторы - другой способ написания асинхронного кода  
function\* genNumber \(\) {   
yield 42;  
yield  24;  
return 404;  
}

Чтоб понять как работает yield - Jafar  приводит пример с state machine

Генераторы крутые, но они должны производить значения синхронно

Асинхронные генераторы в следующей версии javascript [pic.twitter.com/zFrU0RMLlF](https://t.co/zFrU0RMLlF)

![](https://pbs.twimg.com/media/Cr0oHKWXEAAykBK.jpg)

Вот пример [pic.twitter.com/D7IvuYNPN9](https://t.co/D7IvuYNPN9)

![](https://pbs.twimg.com/media/Cr0oXcNW8AAM3s_.jpg)

Для получение значений из асинхронного генератора достаточно добавить await [pic.twitter.com/zI5OU8Ar9a](https://t.co/zI5OU8Ar9a)

![](https://pbs.twimg.com/media/Cr0o8oUWgAASBmh.jpg)

Еще один proposal для observable интерфейса [pic.twitter.com/iYDYIproR0](https://t.co/iYDYIproR0)

![](https://pbs.twimg.com/media/Cr0pTqvXgAAQ_XJ.jpg)

Выглядет примерно так [pic.twitter.com/9GYFl88Vzs](https://t.co/9GYFl88Vzs)

![](https://pbs.twimg.com/media/Cr0pb6lWYAEicn_.jpg)

У [@jhusain](https://twitter.com/jhusain "Jafar Husain") прикольные анимашки с шестерёнкой и человечком после каждой новой фичи

Observable будет поддерживать cancelToken

Смотрим в светлое будущее унификации интерфейсов [pic.twitter.com/Qvkp7Jc0CM](https://t.co/Qvkp7Jc0CM)

![](https://pbs.twimg.com/media/Cr0qUFgXEAABDMG.jpg)

"А что на счёт композиции?" спросите Вы

Можно использовать композицию с observables [pic.twitter.com/KNiLuopSJ5](https://t.co/KNiLuopSJ5)

![](https://pbs.twimg.com/media/Cr0qw1yWEAAsWsp.jpg)

Пример с мышинными событиями [pic.twitter.com/aD5zDFr4xd](https://t.co/aD5zDFr4xd)

![](https://pbs.twimg.com/media/Cr0q32CWEAA9qeA.jpg)

Доклад [@jhusain](https://twitter.com/jhusain "Jafar Husain") на [#fullstackfest](https://twitter.com/search?q=%23fullstackfest) настолько увлекательный что 30 минут пролетели незаметно

- Если б ты создал JavaScript сегодня, был бы он похож на то, что есть сейчас? - [@brucel](https://twitter.com/brucel "Bruce Lawson")   
- Нет! - [@jhusain](https://twitter.com/jhusain "Jafar Husain")

Следующий доклад от [@DavidWells](https://twitter.com/DavidWells "David Wells") о построении библиотеки UI компонент для вашей компании

Слайды тут [bit.ly/dw-fsf](https://t.co/RKsQlkUWMs "http://bit.ly/dw-fsf")

Идеальная UI библиотека - shared - которую вы можете использовать в любых ваших проектах на любой платформе

Она должна быть хорошо и понятно организована

Она должна быть в одном репозитории для удобства команды разработки

Она должна быть синхронизирована со всеми проектами

Она должна быть самодостаточна и изолирована от внешних зависимостей

И, конечно же, должна быть масштабируемая и поддерживаемая

Первое стайлгайд или дизайн-система  
Например, [LightningDesignSystem.com](https://t.co/ZVbOZMZdti "http://LightningDesignSystem.com")

Сегодня примеры будут из [ux.mulesoft.com](https://t.co/doJ1oMPbem "http://ux.mulesoft.com")

Что должно быть в стайлгайде [pic.twitter.com/gjOE1NDenm](https://t.co/gjOE1NDenm)

![](https://pbs.twimg.com/media/Cr0vI9bXYAAMJhp.jpg)

Как построить библиотеку компонент [pic.twitter.com/SOMw4RJgmZ](https://t.co/SOMw4RJgmZ)

![](https://pbs.twimg.com/media/Cr0vp_QWcAA1U6t.jpg)

Рассматривайте свои компоненты как атомы из которых собирается приложение [pic.twitter.com/yKZhsCIVmU](https://t.co/yKZhsCIVmU)

![](https://pbs.twimg.com/media/Cr0waZLWIAAxShn.jpg)

Анатомия компонента на примере [#reactjs](https://twitter.com/search?q=%23reactjs) [pic.twitter.com/wQtV751g7v](https://t.co/wQtV751g7v)

![](https://pbs.twimg.com/media/Cr0ww-eXgAAKNBX.jpg)

Немного шуток об актуальном [pic.twitter.com/hVaB2P4UIU](https://t.co/hVaB2P4UIU)

![](https://pbs.twimg.com/media/Cr0xb6UWIAAyDWO.jpg)

[@PostCSS](https://twitter.com/PostCSS "PostCSS") + css modules [pic.twitter.com/MxzfNGQeMm](https://t.co/MxzfNGQeMm)

![](https://pbs.twimg.com/media/Cr0yIz6WIAAcauj.jpg)

Переменные и миксины можно писать в js а не css благодаря postcss [pic.twitter.com/ZNgHFmHzmN](https://t.co/ZNgHFmHzmN)

![](https://pbs.twimg.com/media/Cr0zBx7WEAAv2k1.jpg)

Использование js для переменных и миксинов дает больше возможностей чем тот же sass

Иконки... Не используйте иконочные шрифты! Эра динозавров прошла

Иконки только в svg который легко стилизовать и кастомизировать

Примеры утилит для сборки документации компонентных библиотек [pic.twitter.com/vXBRdoXbrm](https://t.co/vXBRdoXbrm)

![](https://pbs.twimg.com/media/Cr00CABW8AE42li.jpg)

Советует собирать компоненты отдельно, а не в общий бандл

Можно мониторить использование компонент отправляя статистику [pic.twitter.com/nBoEkytwC3](https://t.co/nBoEkytwC3)

![](https://pbs.twimg.com/media/Cr01nkCWEAADfG1.jpg)

Уходим на обед

Не все еще вернулись с обеда, но пора начинать

[@jen4web](https://twitter.com/jen4web "Jen Kramer") про грид-раскладки и CSS4 [pic.twitter.com/9aCt1DrsrJ](https://t.co/9aCt1DrsrJ)

![](https://pbs.twimg.com/media/Cr1S_IgWIAAegJE.jpg)

Вспоминаем как же тяжело сейчас приходится с колоночными раскладками и выравниванием высоты у блоков

Вот это вот всё [pic.twitter.com/sYvIp50zpl](https://t.co/sYvIp50zpl)

![](https://pbs.twimg.com/media/Cr1TxgmXgAA_Los.jpg)

Flexbox для расположения элементов, а не построения раскладки целой страницы

Flexbox хорошо в вертикальном выравнивании и для придания равных высот блокам

История развития flexbox'ов [pic.twitter.com/BnhfJMNxaT](https://t.co/BnhfJMNxaT)

![](https://pbs.twimg.com/media/Cr1UvllWgAA-yGa.jpg)

И поддержка flexbox браузерами [pic.twitter.com/LLbtl4jBW0](https://t.co/LLbtl4jBW0)

![](https://pbs.twimg.com/media/Cr1U4lvWYAA8Ljq.jpg)

В flexbox ширина понятие "гибкое" - если не влазит в 24% то будет почти 24% :\)

В зале никто не использует CSS4 grids

Да и ни один браузер их не поддерживает...

Разница в позиционировании flexbox и css4 grid [pic.twitter.com/v031ebdyDy](https://t.co/v031ebdyDy)

![](https://pbs.twimg.com/media/Cr1WBtvWgAEXPyl.jpg)

А вот как мы можем организовывай колонки уже сегодня [pic.twitter.com/rS4R8LEXhi](https://t.co/rS4R8LEXhi)

![](https://pbs.twimg.com/media/Cr1Wos_XYAABs87.jpg)

И лэйаут посложнее [pic.twitter.com/1n2V5Wz2uE](https://t.co/1n2V5Wz2uE)

![](https://pbs.twimg.com/media/Cr1WxiYWEAAtMFr.jpg)

С css4 легко менять блоки местами. Пример: [github.com/jen4web/css4gr…](https://t.co/OLPjKrptps "https://github.com/jen4web/css4grid")

Этот пример срывает овации зала

Вообщем, откройте пример и меняйте плавно размер окна браузера - увидите волшебство расположения блоков с css4

Рекомендации [pic.twitter.com/2sNavAqzlL](https://t.co/2sNavAqzlL)

![](https://pbs.twimg.com/media/Cr1Z7NCW8AALqTg.jpg)

Нужна поддержка старых ИЕ - верстайте на флоатах. Если нет - юзайте flexbox и ждите css4 grids

И кстати, у bootstrap 4 есть переключатель между флоатами и флексбоксом

Скоро все будет хорошо с раскладками и css развивается, чтоб мы не скучали [pic.twitter.com/ccpMb3GIra](https://t.co/ccpMb3GIra)

![](https://pbs.twimg.com/media/Cr1a0ztXgAA9zAI.jpg)

На сцене появляется [@xbill82](https://twitter.com/xbill82 "Luca Marchesini") [pic.twitter.com/GPn1YvdiaR](https://t.co/GPn1YvdiaR)

![](https://pbs.twimg.com/media/Cr1bq_cXYAExL8J.jpg)

О текущем положении дел во фронтенд разработке [pic.twitter.com/9Sphb04oLo](https://t.co/9Sphb04oLo)

![](https://pbs.twimg.com/media/Cr1b6KGWIAQJJhU.jpg)

Что изменилось за последние 20 лет?! [pic.twitter.com/eDrhl8LKTE](https://t.co/eDrhl8LKTE)

![](https://pbs.twimg.com/media/Cr1cPodWgAAu4lV.jpg)

В 95 пришел js и мы научились делать падающие снежинки. 2005 пришел ajax и мы перестали перезагружать страницу [pic.twitter.com/Y93PkKlI82](https://t.co/Y93PkKlI82)

![](https://pbs.twimg.com/media/Cr1c_7wWYAE6Flz.jpg)

Потом пришли фреймворки первого поколения: backbone, angular, ember

2015 год компонентных фреймворков

Примерчик компонента на [#vuejs](https://twitter.com/search?q=%23vuejs) [pic.twitter.com/9JJKJt0cw5](https://t.co/9JJKJt0cw5)

![](https://pbs.twimg.com/media/Cr1dfQoWEAAc8xD.jpg)

Так что же нам еще нужно?

Контент в оффлайне! Или прыгающий динозавр... [pic.twitter.com/mcRfZELyNc](https://t.co/mcRfZELyNc)

![](https://pbs.twimg.com/media/Cr1dwMQWAAAVm0o.jpg)

Иконки пррложений, пуш-уведомления...

Progressive Web Applications по версии Google

Не пытайтесь повторить это дома! [pic.twitter.com/HUbZPzMDyU](https://t.co/HUbZPzMDyU)

![](https://pbs.twimg.com/media/Cr1eRzTXYAAsEU0.jpg)

Где же состояние? Dom и есть наше состояние!

Революция react в том что они убрали состояние из dom'а [pic.twitter.com/gXSJQn0RH4](https://t.co/gXSJQn0RH4)

![](https://pbs.twimg.com/media/Cr1erWPWAAAj7zy.jpg)

Где же хранит состояние?

Store - которые пропагандирует redux, flux

И опять про то, что нужна синхронизация состояния [pic.twitter.com/L28J9ViH7w](https://t.co/L28J9ViH7w)

![](https://pbs.twimg.com/media/Cr1fMrbXgAA_SSn.jpg)

[@ipelekhan](https://twitter.com/ipelekhan "Igor Pelekhan") ну еще ж конференция не закончилась ;\)

Но в 2015 вышел на сцену graphQL [pic.twitter.com/7rD5N1jlBe](https://t.co/7rD5N1jlBe)

![](https://pbs.twimg.com/media/Cr1f9IdWYAALSrd.jpg)

И falcor [pic.twitter.com/8hJMoUUSRi](https://t.co/8hJMoUUSRi)

![](https://pbs.twimg.com/media/Cr1gDrOWEAAB5Fg.jpg)

Falcor+graphql это реакт из мира сетевых запросов [pic.twitter.com/poHrAr1nXn](https://t.co/poHrAr1nXn)

![](https://pbs.twimg.com/media/Cr1gRgcWcAEYnei.jpg)

Не нужно больше вытягивать данные - скажите что вам нужно и они достанут все за вас

Смотрим демо falcor

[@sesm\_](https://twitter.com/sesm_ "Sergey Smyshlyaev") да, но небыло подходов к организованому хранениею стейта

Извиняюсь за опечатки - сел ноут, телеграфирую с телефона

Кстати, можете писать вопросы с тегом [#askfsf](https://twitter.com/search?q=%23askfsf) - возможно их зададут докладчику

Используйте меншен докладчика и он ответит на любой ваш вопрос

Демо прошло без проблем [pic.twitter.com/7wK2q4OODq](https://t.co/7wK2q4OODq)

![](https://pbs.twimg.com/media/Cr1i2i9XYAACewJ.jpg)

Сегодня все борятся за производительность и скорость

Призывает переходить с rest api на graphql query

Используйте http2 и мир станет лучше

Разнообразие data-binding в дикой природе [pic.twitter.com/6IY1N5YoP8](https://t.co/6IY1N5YoP8)

![](https://pbs.twimg.com/media/Cr1jfWAW8AAVlUQ.jpg)

VirtualDOM должен стать нативным - стать частью браузера [pic.twitter.com/phwHeon949](https://t.co/phwHeon949)

![](https://pbs.twimg.com/media/Cr1j2qPXYAErf83.jpg)

![](https://pbs.twimg.com/media/Cr1j2qTWEAAPW12.jpg)

Все уже забыли с чего начинался доклад

Автор напоминает что мы пытаемся достичь производительности нативных приложений на веб-странице

И на самом деле фронтенд приложения это давно фулстэк с развесистой архитектурой и технологиями [pic.twitter.com/UmT5b7bcbC](https://t.co/UmT5b7bcbC)

![](https://pbs.twimg.com/media/Cr1kpLUWEAAGTwF.jpg)

И на этом заключении мы идем пить кофе

Следующий доклад про Om Next от [@anmonteiro90](https://twitter.com/anmonteiro90 "António N. Monteiro") [pic.twitter.com/kd7kPukxhA](https://t.co/kd7kPukxhA)

![](https://pbs.twimg.com/media/Cr1rgXuWcAA4pBS.jpg)

Слабые стороны rest [pic.twitter.com/cJKE765n4i](https://t.co/cJKE765n4i)

![](https://pbs.twimg.com/media/Cr1rvhJXgAAm-TE.jpg)

Проблема в большом количестве возможных клиентов и их производительности

Хорошие технологии но они решают только проблему синхронизации [pic.twitter.com/oVd6Dr48PM](https://t.co/oVd6Dr48PM)

![](https://pbs.twimg.com/media/Cr1sMXdWAAAad-1.jpg)

Представляет deman-driven архитектуру - когда клиент говорит какие данные ему нужны

Demand - нужно определить что нужно конкретному клиенту

Compose - как сформировать данные и вместить их в один ответ

Interection - как взаимодействовать с получеными данными

Под впечатлением от React и GraphQL появился Om Next

Докладчик любит closure и всё что с ней связано [pic.twitter.com/gexiebvUwE](https://t.co/gexiebvUwE)

![](https://pbs.twimg.com/media/Cr1uMW8WIAAOWjJ.jpg)

Om Next призван решить все проблемы, о которых говорилось ранее [pic.twitter.com/vPxeCGp6jQ](https://t.co/vPxeCGp6jQ)

![](https://pbs.twimg.com/media/Cr1uYRbXEAAGYf1.jpg)

Основные концепции. Кстати dom рендерится реактом [pic.twitter.com/JrxNIsxTCe](https://t.co/JrxNIsxTCe)

![](https://pbs.twimg.com/media/Cr1uvifWgAABvPy.jpg)

Пример запроса [pic.twitter.com/F9Eff4wk7O](https://t.co/F9Eff4wk7O)

![](https://pbs.twimg.com/media/Cr1u82FWIAARkkI.jpg)

В запросах можно сортировать и джойнить и даже делать мутации

Парсер разбирает ваши запросы [pic.twitter.com/vcJR2E6lcZ](https://t.co/vcJR2E6lcZ)

![](https://pbs.twimg.com/media/Cr1vVJfXYAASE-e.jpg)

Мутации - вы можете что-то изменить и получить уже новые данные в ответе [pic.twitter.com/GgHEQ18J6K](https://t.co/GgHEQ18J6K)

![](https://pbs.twimg.com/media/Cr1v2_UWYAAfjWE.jpg)

Локальное состояние совмещено с удаленным. Всё разруливается парсером [pic.twitter.com/2knHhYlu3X](https://t.co/2knHhYlu3X)

![](https://pbs.twimg.com/media/Cr1wKKuXYAQkbbz.jpg)

Нормализация [pic.twitter.com/eFAWpg8inm](https://t.co/eFAWpg8inm)

![](https://pbs.twimg.com/media/Cr1wqY-WEAAnHbb.jpg)

Инкрементальный рендеринг в отличии от react может перерендерить с любого узла [pic.twitter.com/x3Ca8dxe68](https://t.co/x3Ca8dxe68)

![](https://pbs.twimg.com/media/Cr1w71_WYAAWkDv.jpg)

Небольшое демо того что было рассказано. Вообще, не очень понятно для неподготовленного слушателя...

Какая то магия в емаксе и копипаста. Окна переключаются очень быстро, но всё работает

Больше возможностей Om Next, на которые не хватает времени доклада [pic.twitter.com/EIWATp4QTh](https://t.co/EIWATp4QTh)

![](https://pbs.twimg.com/media/Cr1yUz4W8AA21Hp.jpg)

Серверный Om Next [pic.twitter.com/pIloJcKAca](https://t.co/pIloJcKAca)

![](https://pbs.twimg.com/media/Cr1y333XEAA9CEq.jpg)

Сейчас проект в альфе. Бета через неделю-другую. Приглашают помогать и писать документацию

Слайды тут [github.com/anmonteiro/tal…](https://t.co/3dJxEOYqTP "https://github.com/anmonteiro/talks/")

Сейчас будет последний доклад про работу с brain-computer интерфейсами на javascript от [@castillo\_\_io](https://twitter.com/castillo__io "Alex Castillo") [pic.twitter.com/T68ZWkw0x5](https://t.co/T68ZWkw0x5)

![](https://pbs.twimg.com/media/Cr10ojZWgAQpulO.jpg)

Немного пыток на [#fullstackfest](https://twitter.com/search?q=%23fullstackfest) [pic.twitter.com/TkSIXba2TH](https://t.co/TkSIXba2TH)

![](https://pbs.twimg.com/media/Cr10ztXW8AA_ino.jpg)

Следующий подопытный. У предыдущего была большая голова [pic.twitter.com/FDvD4Lm83S](https://t.co/FDvD4Lm83S)

![](https://pbs.twimg.com/media/Cr11PUdW8AEkSJi.jpg)

Не смогли запустить ноду в мозг этого парня [pic.twitter.com/RM6lwBaOM9](https://t.co/RM6lwBaOM9)

![](https://pbs.twimg.com/media/Cr11qnjWYAEsPX1.jpg)

Получаем какие-то данные... А может это sass компилируется [pic.twitter.com/VyBgrGhk8b](https://t.co/VyBgrGhk8b)

![](https://pbs.twimg.com/media/Cr12EetXYAEYlWz.jpg)

А вот и визуализация могзовых имульсов на angular [pic.twitter.com/yFfuVcBdFW](https://t.co/yFfuVcBdFW)

![](https://pbs.twimg.com/media/Cr12p9hWgAAjpI7.jpg)

Это странный шлем передает данные на bluetooth донгл. Нода читает данные с порта и шлет в вебсокет. Браузер тянет данные и рисует графики

Очень медленно докладчик проходится по каждому узлу конструкции и протоколу

Называется эта штука OpenBCI

Народ скучает, гуглит бар для афтепати. А еще впереди секция lightning-talks

Пока докладчик комментирует свой код я поделюсь с вами ссылкой на заметки с сегодняшнего дня [github.com/davesnx/FullSt…](https://t.co/ZS1HjjgmFF "https://github.com/davesnx/FullStackFest-2016-Notes") \(на английском\)

Вот так как-то визуализируются мозговые импульсы на [#fullstackfest](https://twitter.com/search?q=%23fullstackfest) [pic.twitter.com/cmy4VbCT1Y](https://t.co/cmy4VbCT1Y)

![](https://pbs.twimg.com/ext_tw_video_thumb/773910586929344512/pu/img/KCRgwfZeOYfWh5xZ.jpg)

Присоединяйтесь к разработке проекта OpenBCI [pic.twitter.com/UyCdllpg1f](https://t.co/UyCdllpg1f)

![](https://pbs.twimg.com/media/Cr18oCYWgAEwgiU.jpg)

Начинается серия докладов-пятиминуток

Первый [@leeb](https://twitter.com/leeb "Lee Byron") про точки с запятой в javascript

Писаться код без ";" надо осознано, чтобы не наломать дров [pic.twitter.com/tAOBPlHs41](https://t.co/tAOBPlHs41)

![](https://pbs.twimg.com/media/Cr1-9d4XgAAQ26I.jpg)

Дальше Ben из Pusher пока не ясно о чём рассказывает [pic.twitter.com/gjthjc5Tz3](https://t.co/gjthjc5Tz3)

![](https://pbs.twimg.com/media/Cr1_2F9WcAEqcnd.jpg)

Это был розыгрыш приза от Pusher - у кого красный бриллиант тот получит bb8

Парень показывает сервис [hyperdev.com](https://t.co/OUYsy3UAB7 "http://hyperdev.com") - типа jsbin только с бекенд кодом [pic.twitter.com/sWhjJWgQAY](https://t.co/sWhjJWgQAY)

![](https://pbs.twimg.com/media/Cr2BZADXEAANms6.jpg)

Презентует React-tiles - мульти роутинг в реакт приложениях [pic.twitter.com/SGrtqsR7Jo](https://t.co/SGrtqsR7Jo)

![](https://pbs.twimg.com/media/Cr2CTx0XgAAhfbG.jpg)

[@sapegin](https://twitter.com/sapegin "Artem Sapegin") я же предупредил что с телефона :\)

Генерация документации с помощью webpack, react и swagger [pic.twitter.com/fk6iWaWmU4](https://t.co/fk6iWaWmU4)

![](https://pbs.twimg.com/media/Cr2DYXaXYAE6fwT.jpg)

Swagger хорошо генерит документацию, но у него плохой UI

Надо прикрутить React

Больше ничего не узнаем, потому что закончилось время :\)

Следующий докладчик рассказывает про опыт пострения приложения с PouchDB

Новый докладчик рекламирует какой то проект Imba. VirtualDOM и в 50 раз быстрее... Игры и анимации тоже может...

Похоже желающих больше нет. И я прощаюсь с вами до завтра!