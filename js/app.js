
/*
let seattle ={
  locationName : 'Seattle',
  minCust : 23,
  maxCust: 65,
  avgCookieSale:6.3,
  customerPerHour : [],
  cookiesPerHour: [],
  total : 0,
  updateCusPerHour:function(){

    for (let i=0; i<workHours.length;i++){
      this.customerPerHour.push(randomValue(this.minCust,this.maxCust)) ;
      //return this.customerPerHour ;
    }

  },

  updatCookiesPerHour:function (){

    for (let i=0; i<workHours.length;i++){

      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookieSale ));
      total =total + this.cookiesPerHour[i];

    }
  },



  structureHtml:function () {
    let bodyEl = document.getElementById('locations');
    let ulEl = document.createElement('ul');
    bodyEl.appendChild(ulEl);
    ulEl.textContent= this.locationName;
    for (let i=0 ;i<workHours.length;i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = workHours[i]+':'+this.cookiesPerHour[i];
      console.log (liEl); }

    let liEl= document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= total +'total cookies';

  }
};

seattle.updateCusPerHour();
seattle.updatCookiesPerHour();
console.log(seattle.customerPerHour);

console.log(seattle.cookiesPerHour);

seattle.structureHtml();



function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




let tokyo ={
  locationName : 'Tokyo',
  minCust :3,
  maxCust: 24,
  avgCookieSale:1.2,
  customerPerHour : [],
  cookiesPerHour: [],
  updateCusPerHour:function(){

    for (let i=0; i<workHours.length;i++){
      this.customerPerHour.push(randomValue(this.minCust,this.maxCust)) ;
    }

  },



  updatCookiesPerHour :function (){



    for (let i=0; i<workHours.length;i++){

      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookieSale ));
    }
  },

  structureHtml:function () {
    let bodyEl = document.getElementById('locations');
    let ulEl = document.createElement('ul');
    bodyEl.appendChild(ulEl);
    ulEl.textContent= this.locationName;
    for (let i=0 ;i<workHours.length;i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = workHours[i]+':'+this.cookiesPerHour[i];
      console.log (liEl); }
    let liEl= document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= total +'total cookies';

  }
};

tokyo.updateCusPerHour();
tokyo.updatCookiesPerHour();
tokyo.structureHtml();


let dubai ={
  locationName : 'Dubai',
  minCust :11,
  maxCust: 38,
  avgCookieSale:3.7,
  customerPerHour : [],
  cookiesPerHour: [],
  updateCusPerHour:function(){

    for (let i=0; i<workHours.length;i++){
      this.customerPerHour.push(randomValue(this.minCust,this.maxCust)) ;
    }

  },



  updatCookiesPerHour :function (){



    for (let i=0; i<workHours.length;i++){

      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookieSale ));
    }
  },

  structureHtml:function () {
    let bodyEl = document.getElementById('locations');
    let ulEl = document.createElement('ul');
    bodyEl.appendChild(ulEl);
    ulEl.textContent= this.locationName;
    for (let i=0 ;i<workHours.length;i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = workHours[i]+':'+this.cookiesPerHour[i];
      console.log (liEl); }
    let liEl= document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= total +'total cookies';
  }
};

dubai.updateCusPerHour();
dubai.updatCookiesPerHour();
dubai.structureHtml();

let paris ={
  locationName : 'Paris',
  minCust :20,
  maxCust: 38,
  avgCookieSale:2.3,
  customerPerHour : [],
  cookiesPerHour: [],
  updateCusPerHour:function(){

    for (let i=0; i<workHours.length;i++){
      this.customerPerHour.push(randomValue(this.minCust,this.maxCust)) ;
    }

  },



  updatCookiesPerHour :function (){



    for (let i=0; i<workHours.length;i++){

      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookieSale ));
    }
  },

  structureHtml:function () {
    let bodyEl = document.getElementById('locations');
    let ulEl = document.createElement('ul');
    bodyEl.appendChild(ulEl);
    ulEl.textContent= this.locationName;
    for (let i=0 ;i<workHours.length;i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = workHours[i]+':'+this.cookiesPerHour[i];
      console.log (liEl); }
    let liEl= document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= total +'total cookies';
  }
};

paris.updateCusPerHour();
paris.updatCookiesPerHour();
paris.structureHtml();


let lima ={
  locationName : 'Lima',
  minCust :2,
  maxCust:16,
  avgCookieSale:4.6,
  customerPerHour : [],
  cookiesPerHour: [],
  updateCusPerHour:function(){

    for (let i=0; i<workHours.length;i++){
      this.customerPerHour.push(randomValue(this.minCust,this.maxCust)) ;
    }

  },



  updatCookiesPerHour :function (){



    for (let i=0; i<workHours.length;i++){

      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookieSale ));
    }
  },

 render:function () {
    let bodyEl = document.getElementById('locations');
    let ulEl = document.createElement('ul');
    bodyEl.appendChild(ulEl);
    ulEl.textContent= this.locationName;
    for (let i=0 ;i<workHours.length;i++){
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = workHours[i]+':'+this.cookiesPerHour[i];
      console.log (liEl); }
    let liEl= document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= total +'total cookies';
  }
};

lima.updateCusPerHour();
lima.updatCookiesPerHour();
lima.structureHtml();
*/


'use strict' ;

let workHours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let totalPerHOUR =[];
let dailyTotal=0;
let bodyEl = document.getElementById('locations');
let tableEl=document.createElement('table');

function header (){

  bodyEl.appendChild(tableEl);
  let tr1EL=document.createElement('tr');
  tableEl.appendChild(tr1EL);
  let th1El=document.createElement('th');
  tr1EL.appendChild(th1El);
  th1El.textContent='location';
  // eslint-disable-next-line no-empty
  for(let i=0;i<workHours.length;i++){
    let th1El=document.createElement('th');
    tr1EL.appendChild(th1El);
    th1El.textContent=`${workHours[i]}`;
  }
  th1El=document.createElement('th');
  tr1EL.appendChild(th1El);
  th1El.textContent='Daily Location Total';}

header();

function footer (){
  let tr3El =document.createElement('tr');
  tableEl.appendChild(tr3El);
  let th3El =document.createElement('th');
  tr3El.appendChild(th3El);
  th3El.textContent='totals';

  for(let i=0;i<workHours.length;i++){

    let th3El=document.createElement('th');
    tr3El.appendChild(th3El);
    th3El.textContent=`${totalPerHOUR[i]}`;
  }
  th3El=document.createElement('th');
  tr3El.appendChild(th3El);
  th3El.textContent=`${dailyTotal}`;

}


function BranchesLocation (minCust,maxCust,avgCookieSale,locationName ) {

  this. cookiesPerHour =[];
  this. customerPerHour=[];
  this. total=0;
  this.name = locationName;
  this.min =minCust;
  this.max =maxCust;
  this.avg =avgCookieSale;}

BranchesLocation.prototype.updateCusPerHour=function(){

  for (let i=0; i<workHours.length;i++){
    this.customerPerHour.push(randomValue(this.min,this.max)) ;
  }

  //console.log(this.customerPerHour);
};

BranchesLocation.prototype.updatCookiesPerHour= function(){

  for (let i=0; i<workHours.length;i++){

    this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avg ));

    totalPerHOUR.push(this.cookiesPerHour[i]);

    //dailyTotal=dailyTotal+ this.cookiesPerHour;
  }
  //total=total+this.cookiesPerHour[i];
  for(let i=0;i<14;i++){
    this.total=this.total+this.cookiesPerHour[i];
  }

};

BranchesLocation.prototype.render=function (){

  let tr2El=document.createElement('tr');
  tableEl.appendChild(tr2El);
  let th2El=document.createElement('th');
  tr2El.appendChild(th2El);
  th2El.textContent=`${this.name}`;
  for (let i=0 ;i<workHours.length;i++){
    let th2El=document.createElement('th');
    tr2El.appendChild(th2El);
    th2El.textContent=`${this.cookiesPerHour[i]}`;
  }
  th2El=document.createElement('th');
  tr2El.appendChild(th2El);
  th2El.textContent=`${this.total}`;
};


let seattle = new BranchesLocation(23,65,6.3,'Seattle');
randomValue();
seattle.updateCusPerHour();
seattle.updatCookiesPerHour();
seattle.render();



let tokyo = new BranchesLocation(3,24,1.2,'Tokyo');
randomValue();
tokyo.updateCusPerHour();
tokyo.updatCookiesPerHour();
tokyo.render();


let dubai = new BranchesLocation(11,38,3.7,'Dubai');
randomValue();
dubai.updateCusPerHour();
dubai.updatCookiesPerHour();
dubai.render();


let paris= new BranchesLocation(20,38,2.3,'Paris');
randomValue();
paris.updateCusPerHour();
paris.updatCookiesPerHour();
paris.render();



let lima= new BranchesLocation(2,16,4.6,'Lima');
randomValue();
lima.updateCusPerHour();
lima.updatCookiesPerHour();
lima.render();


footer();
