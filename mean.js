var writeclass;
let class1=[];
let class2=[];
let dass=[];
let fre=[];
let mids=[];
let fremids=[];
let sdclass=[];
var c;
var no;
let sum=0;
let sumof=0;
var mean;
var lasty=0;
//Array declareation for main formula//
let lc=[];
let uc=[];
let fc=[];
let mc=[];
let count=0;
let fmc=[];
let sdc=[];
let sds=0;
// Array declare is ending here xdd//

let mid=document.getElementById('midvalue');
let fremid=document.getElementById('fm');
 writeclass=document.getElementById('writeclass');
 let frequency=document.getElementById('freq');
let sencondclass=document.getElementById('secondclass');
let firstclass=document.getElementById('firstclass');
let dases=document.getElementById('das');
let squar=document.getElementById('squar');


//FUNCITON FUN IS STARTING FROM HERE BTW'//
function fun(){
    
    firstclass.innerHTML=null;
sencondclass.innerHTML=null;
dases.innerHTML=null;
mid.innerHTML=null;
frequency.innerHTML=null;
fremid.innerHTML=null;
squar.innerHTML=null;
document.getElementById('mean').innerHTML=null;
document.getElementById('sumoff').innerHTML=null;
document.getElementById('sumofall').innerHTML=null;
document.getElementById('sumofalls').innerHTML=null;
document.getElementById('sdlasty').innerHTML=null;
//NULL POINT JUST STOPEED FROM HERE XDD'//
    document.getElementById('frequency').innerHTML="Frequency"
    document.getElementById('midvalu').innerHTML="MID VALUE"
    document.getElementById('square').innerHTML="f(m-X)^2"

    document.getElementById('F.M').innerHTML="F..M"
    writeclass.textContent="Write classses here";
    no=document.getElementById('number').value;
    console.log(no);
    //Loop STARTED FROM HERE SO ON//
for(i=1;i<=no;i++){
    console.log('hellow rold')


class1[i]=document.createElement('p');
class2[i]=document.createElement('p');
dass[i]=document.createElement('p');
dass[i].innerHTML="---"
class1[i].innerHTML=`<input type="number" value="0" id="red${i}" style="width:50pt; text-align:center;font-size:15pt;">`
class2[i].innerHTML=`<input type="number" value="0" id="blue${i}" style="width:50pt; text-align:center;font-size:15pt;">`

firstclass.appendChild(class1[i]);
sencondclass.appendChild(class2[i]);
dases.appendChild(dass[i]);
fre[i]=document.createElement('p');
fre[i].innerHTML=`<input type="number" value="0" id="yellow${i}" style="width:50pt; text-align:center; font-size:15pt;">`

frequency.appendChild(fre[i]);
}
// LOOP IS ENDING HERE BRO//
document.getElementById('lastbtn').innerHTML='<button class="btn1">GET RESULT</button>'

}
//FUNCTION FUN1 IS STARTINF FROM HERE//
function fun1(){
    no=document.getElementById('number').value;
    for(let i=1;i<=no;i++){
sdclass[i]=document.createElement('p');
sdclass[i].setAttribute('class','text');
sdclass[i].style.color="black";
        mids[i]=document.createElement('p');
mids[i].setAttribute('class','text');
fremids[i]=document.createElement('p');
fremids[i].setAttribute('class','text1')
lc[i]=document.getElementById(`red${i}`).value;
uc[i]=document.getElementById(`blue${i}`).value;
fc[i]=document.getElementById(`yellow${i}`).value;
if(fc[i]=="" || lc[i]=="" || uc==""){
    count=1;
    alert("fill every space")
}
else{
    count=0;
sum+= parseFloat(fc[i]);
console.log(sum);

mc[i]=( parseFloat(lc[i])+ parseFloat(uc[i]))/2;
mids[i].innerHTML=mc[i];

fmc[i]= parseFloat( mc[i]*fc[i]);
fmc[i]=fmc[i].toFixed(2);
sumof+= parseFloat(fmc[i]);
fremids[i].innerHTML=fmc[i];

mid.appendChild(mids[i]);
fremid.appendChild(fremids[i]);

    }
    if(count==0){
        
    
mean=(sumof/sum).toFixed(2);
document.getElementById('mean').innerHTML=`Final mean = ${mean}`;
document.getElementById('sumoff').innerHTML=`N= ${sum}`;
document.getElementById('sumofall').innerHTML=`Sum of F.M= ${sumof}`;
    }
}
    for(i=1;i<=no;i++){
        console.log(mean);
fc[i]=parseFloat(fc[i]);
console.log(fc[i]);
sdc[i]= (fc[i]*(mc[i]-mean)**2).toFixed(2);
sds += parseFloat(sdc[i]);
console.log(sds);
sdclass[i].innerHTML=sdc[i];

squar.appendChild(sdclass[i]);
    }
    if(count==0){
        sds=parseFloat(sds);
        document.getElementById('sumofalls').innerHTML=`final sum =${sds}`;
lasty=  ((sds/sum)**0.5).toFixed(2);
document.getElementById('sdlasty').innerHTML=`final S.D= ${lasty}`;
    }
} 







//MAIN AND ONE AND ONLY COMMAND FOR LAST XDD//

document.getElementById('buttons').addEventListener('click',fun);
document.getElementById('lastbtn').addEventListener('click',fun1);


