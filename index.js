// if else statement
let isOpen = false;
// let isOpen = true;

if(isOpen == true){
    console.log('Selamat Datang Di Cafe Kami !!!')
} else{
    console.log('Mohon Maaf Cafe tutup.')
}

// nested if
let uname = 'rifqi'
let pass = 123

if(uname === 'rifqi'){
    if(pass == 123){
        console.log(`Halo ${uname} Selamat Datang !`)
    } else{
        console.log('Password salah !')
    }
}else{
    console.log('Username Salah !')
}


// Switch Case

let nilai = 89;
let grade;

switch (true) {
  case nilai >= 89:
    grade = 'A';
    break;
  case nilai > 79:
    grade = 'B';
    break;
  case nilai > 69:
    grade = 'C';
    break;
  case nilai > 59:
    grade = 'D';
    break;
  case nilai > 49:
    grade = 'E';
    break;
  default:
    grade = 'F';
    break;
}
console.log(`Selamat anda mendapatkan nilai : ${grade}`);


// for loop
// for loop segitiga
console.log('ini segitiga for loop')
for (i = 0; i < 10; i++){
    let text = '';
    for(j = 0; j <=i; j++){
        text = text + '*'
    }
    console.log(text)
}
// for loop segitiga kebalik
console.log('ini segitiga kebalik for loop')
for (i = 10; i > 1; i--){
    let text = '';
    for(j = i; j > 1; j--){
        text = text + '*'
    }
    console.log(text)
}


// while
// segitiga while
console.log('ini segitiga while')
let k = 0;
while( k < 10){
    let l = 0
    let text = ''
    while(l <= k){
        text = text + '*'
        l++
    }
    console.log(text)
    k++
}
// segitiga kebalik while
let kk = 10
console.log('ini segitiga kebalik while')
while( kk > 0){
    let l = kk
    let text = ''
    while(l > 0){
        text = text + '*'
        l--
    }
    console.log(text)
    kk--
}

// do while 
let m = 0;
do{
    console.log(m)
    m++
} while (m <= 10)

// function
let persegi = LuasPersegi(4);
console.log(persegi)

let segitiga = LuasSegitiga(2, 3)
console.log(segitiga)

let lingkaran = LuasLingkaran(3)
console.log(lingkaran)

function LuasPersegi(s){
    return s * s
}
function LuasSegitiga(a, t){
    return a * t / 2
}
function LuasLingkaran(r){
    return 3.14 * r * r
}
