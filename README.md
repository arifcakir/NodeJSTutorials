# NodeJS


Day 2

- Npm intall –g Express-generator
- Express projectname

Projectname klasörüne girdikten sonra
- Npm start


Proje create edildiğinde jade dosyları görünecek bunlar c# MVC deki razor engine gibi çalışır. Yani client ile server arasındaki script leri ayrıştırır.

- Npm install supervisor 

Projeyi güncelleme yaptığımızda http yi restart yapmamıza gerek kalmıyor.

Ancak Express de package.json start “node ./bin/www” yerine “supervisor ./bin/www”  yazılmalı

Express de router klasörünü controller gibi düşünebiliriz ancak routing için app.js de ayarla yapılmalı unutma.

Express de html id client için name server için kullanılır.


- Npm install mongoose

ORM tool for Node

Day 3
Connect ve Serve-Static Modülleri

Diyelimki bir kkalösrde bir çok klasörden oluşan web sitelerim var. Bunları virtual directory gibi yayımlama istediğimizde ya da klasörleri web sitesi gibi yayımlamak istediğimizde kullanılan modüller

- Npm install connect serve-static


Böylece kalösrlerideki js dosyarını manuel çağırmamıza gerek kalmıyor.

Socket.IO 

Socket uygulamalrı için. Yani server a subscribe olan kullnıcıların mesajları okuyabildiği ve mesaj gönderebildikleri sistem


LoginPassword projesi

Mongo üzerinden login alarak. İlgili root klasörünü ayni asp.net form authenticaiton da klasörü güvenli hale getirmek için kullanılır.

Passport modulu kullanılır.
