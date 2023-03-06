// İleriki derslerde kullanacağız.
// debugger; // Bu komut satırları tek tek gezmemize yarar.
// console.log(location.part);
// console.log(location.port);
// console.log(location.port);
// console.log(location.port);

/*
      ------------ SCOPE (KAPSAM) --------------

        -> Global Scope -> her yerden erişebiliriz.
        -> Function Scope-> Sadece fonskiyon içinden ulaşılabilir.
        -> Block Scope->{ parantezinin içerisinde olması gerekiyor.} 
*/  

// var degiskenIsmi = 10;

//console.log(değiskenIsmi);

// var a = 5; // global scope
// sen buna her yerden erişebilirsin.



// if(true){

// }
// function method1(){
//     console.log(a);
// }

// method1();

// function method1(){
//     var sayi= 10;
//     console.log(sayi);
// }




// method1();

// Var - Let - Const

// var: function scope -- ram bellekte cok fazla yer kaplar.,
// let/const : block scope özelliğine sahiptir.

// function selamVer(){
//     var selam = "Herkese selam"; // function scope
//     if(true){
//       const b=10;

//     }
//     console.log(b);
//     console.log(selam);
// }

// LET & CONST arasındaki fark?

// const (constant ) : sabit , değişmez

// const a = 10;
// a = 15;
// console.log(a);

// let b = 5;
// b = 7;
// b = 12;
// console.log(12);

// const user = {
//   username : "enes",
//   password: "123"
// }

// user.username="enesbayram";

// console.log(user);

/*
    -------DİYALOG KUTULARI-------
     - Alert
     - Prompt
     - Confirm
*/   

// console.log(window);

// alert("İşleminize devam etmeden önce kaydetmelisiniz.");

//Prompt(); Kullanıcıdan değer alabiliyoruz...

// Kullanıcıdan alınan değerler her zaman string döner.
// let isim = prompt("İsminizi Giriniz :");
// let yas = prompt("Yaşınızı giriniz : ");

// console.log(typeof isim);
// console.log(typeof yas);

// let sonuc =  confirm("Silmek istediğinize emin misiniz ?");
//  console.log(sonuc);

// KOŞUL YAPILARI

// let not = 35;

//  if (not>50){
//       console.log("Geçtiniz  , notunuz :" + not);
// }

// Ehliyet uygulaması

// let yas = Number(prompt("Yaşınız"));
// console.log(typeof yas);
// let para = Number(prompt("Bütçeniz : "));

// if(yas>18 && para>=3000){
//   alert("Ehliyet sınavına katılabilirsiniz");
// }else{
//   alert("Ehliyet sınavına katılamazsınız.");
// }

