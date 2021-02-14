'use strict' ;

let workHours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];





let seattle ={
  locationName : 'Seattle',
  minCust : 23,
  maxCust: 65,
  avgCookieSale:6.3,
  customerPerHour : [],
  cookiesPerHour: [],
  updateCusPerHour:function(){

    for (let i=0; i<workHours.length;i++){
      this.customerPerHour.push(randomValue(this.minCust,this.maxCust)) ;
      //return this.customerPerHour ;
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

  }
};

lima.updateCusPerHour();
lima.updatCookiesPerHour();
lima.structureHtml();










