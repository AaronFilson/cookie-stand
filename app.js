//function calls are at bottom of file
//The CookieStand constructor.
//Takes values for the name of the location, minimum customers, max customers,
//cookies per customer, and the tag in the index file we are printing to.

var CookieStand = function (pName, pMin, pMax, pPerCust) {

  this.placeName = pName;
  this.minCust = pMin;
  this.maxCust = pMax;
  this.averagePerCust = pPerCust;
  this.hoursOpen = 8;
  this.totalDayCookies = 0;
  this.cookiesByHour = [null];
  this.hoursText = ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ',
  '3pm : ', '4pm : ', '5pm : '];

  this.elTag = document.getElementById('salesTable');

  this.randCookieDay = function() {
    for (var i = 0; i < this.hoursOpen; i++) {
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random()
        * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };

  this.sendRowToSite = function() {

    var fWebId = document.getElementById(this.elTag);

    // fWebId.textContent = this.placeName;

    var salesTable = document.createElement('tr');

    fWebId.appendChild(salesTable);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourTableItem = document.createElement('td');
      salesTable.appendChild(hourTableItem);
      hourTableItem.appendChild(document.createTextNode(this.hoursText[i] +
        this.cookiesByHour[i]));
    }

    // add the daily total
    var hourTableItem = document.createElement('td');
    salesTable.appendChild(hourTableItem);
    hourTableItem.appendChild(document.createTextNode("Total: " +
      this.totalDayCookies));

  };

  this.randCookieDay();
  this.sendRowToSite();
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9);
var bellevueSq = new CookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

var pageOneTable = new NumberOfCookiesTable({pikePlace, seaTac, southCenter, bellevueSq, alki});


