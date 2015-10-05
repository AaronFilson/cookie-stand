//function calls are at bottom of file

// Declare an object for each location
var pikePlace = {
  minCust: 17,
  maxCust: 88,
  hoursOpen: 8,
  averagePerCust: 5.2,
  totalDayCookies: 0,
  cookiesByHour: [],
  hoursText: ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : '],

  randCookieDay: function(){
    for (var i = 0; i < this.hoursOpen; i++) {
      // Math.floor(Math.random() * (max - min + 1)) + min;
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

 sendListToSite: function(){

    var pikeWebId = document.getElementById("listPikePlace");
    pikeWebId.textContent = "Pike Place Market";
    var unorderedListWrap = document.createElement('ul');

    pikeWebId.appendChild(unorderedListWrap);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourListItem = document.createElement('li');
      unorderedListWrap.appendChild(hourListItem);
      hourListItem.appendChild(document.createTextNode(this.hoursText[i] + this.cookiesByHour[i]));


    };
    // add the daily total
    var hourListItem = document.createElement('li');
    unorderedListWrap.appendChild(hourListItem);
    hourListItem.appendChild(document.createTextNode("Total: " + this.totalDayCookies));

 }
};

var seaTac = {
  minCust: 6,
  maxCust: 44,
  hoursOpen: 8,
  averagePerCust: 1.2,
  totalDayCookies: 0,
  cookiesByHour: [],
  hoursText: ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : '],

  randCookieDay: function(){
    for (var i = 0; i < this.hoursOpen; i++) {
      // Math.floor(Math.random() * (max - min + 1)) + min;
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

 sendListToSite: function(){

    var pikeWebId = document.getElementById("listSeaTac");
    pikeWebId.textContent = "SeaTac Airport";
    var unorderedListWrap = document.createElement('ul');

    pikeWebId.appendChild(unorderedListWrap);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourListItem = document.createElement('li');
      unorderedListWrap.appendChild(hourListItem);
      hourListItem.appendChild(document.createTextNode(this.hoursText[i] + this.cookiesByHour[i]));


    };
    // add the daily total
    var hourListItem = document.createElement('li');
    unorderedListWrap.appendChild(hourListItem);
    hourListItem.appendChild(document.createTextNode("Total: " + this.totalDayCookies));

 }
};

var southCenter = {
  minCust: 11,
  maxCust: 38,
  hoursOpen: 8,
  averagePerCust: 1.9,
  totalDayCookies: 0,
  cookiesByHour: [],
  hoursText: ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : '],

  randCookieDay: function(){
    for (var i = 0; i < this.hoursOpen; i++) {
      // Math.floor(Math.random() * (max - min + 1)) + min;
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

 sendListToSite: function(){

    var pikeWebId = document.getElementById("listSouthCenter");
    pikeWebId.textContent = "Southcenter Mall";
    var unorderedListWrap = document.createElement('ul');

    pikeWebId.appendChild(unorderedListWrap);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourListItem = document.createElement('li');
      unorderedListWrap.appendChild(hourListItem);
      hourListItem.appendChild(document.createTextNode(this.hoursText[i] + this.cookiesByHour[i]));


    };
    // add the daily total
    var hourListItem = document.createElement('li');
    unorderedListWrap.appendChild(hourListItem);
    hourListItem.appendChild(document.createTextNode("Total: " + this.totalDayCookies));

 }
};

var bellevueSq = {
  minCust: 20,
  maxCust: 48,
  hoursOpen: 8,
  averagePerCust: 3.3,
  totalDayCookies: 0,
  cookiesByHour: [],
  hoursText: ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : '],

  randCookieDay: function(){
    for (var i = 0; i < this.hoursOpen; i++) {
      // Math.floor(Math.random() * (max - min + 1)) + min;
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

 sendListToSite: function(){

    var pikeWebId = document.getElementById("listBellevue");
    pikeWebId.textContent = "Bellevue Square";
    var unorderedListWrap = document.createElement('ul');

    pikeWebId.appendChild(unorderedListWrap);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourListItem = document.createElement('li');
      unorderedListWrap.appendChild(hourListItem);
      hourListItem.appendChild(document.createTextNode(this.hoursText[i] + this.cookiesByHour[i]));


    };
    // add the daily total
    var hourListItem = document.createElement('li');
    unorderedListWrap.appendChild(hourListItem);
    hourListItem.appendChild(document.createTextNode("Total: " + this.totalDayCookies));

 }
};

var alki = {
  minCust: 3,
  maxCust: 24,
  hoursOpen: 8,
  averagePerCust: 2.6,
  totalDayCookies: 0,
  cookiesByHour: [],
  hoursText: ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ', '3pm : ', '4pm : ', '5pm : '],

  randCookieDay: function(){
    for (var i = 0; i < this.hoursOpen; i++) {
      // Math.floor(Math.random() * (max - min + 1)) + min;
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  },

 sendListToSite: function(){

    var pikeWebId = document.getElementById("listAlki");
    pikeWebId.textContent = "Alki";
    var unorderedListWrap = document.createElement('ul');

    pikeWebId.appendChild(unorderedListWrap);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourListItem = document.createElement('li');
      unorderedListWrap.appendChild(hourListItem);
      hourListItem.appendChild(document.createTextNode(this.hoursText[i] + this.cookiesByHour[i]));


    };
    // add the daily total
    var hourListItem = document.createElement('li');
    unorderedListWrap.appendChild(hourListItem);
    hourListItem.appendChild(document.createTextNode("Total: " + this.totalDayCookies));

 }
};


// Call class methods to generate values
pikePlace.randCookieDay();
seaTac.randCookieDay();
southCenter.randCookieDay();
bellevueSq.randCookieDay();
alki.randCookieDay();

// Call methods to print info to website
pikePlace.sendListToSite();
seaTac.sendListToSite();
southCenter.sendListToSite();
bellevueSq.sendListToSite();
alki.sendListToSite();

