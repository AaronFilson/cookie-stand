//function calls are at bottom of file
//The CookieStand constructor.
//Takes values for the name of the location, minimum customers, max customers,
//cookies per customer, and the tag in the index file we are printing to.

var CookieStand = function (pName, pMin, pMax, pPerCust, pWebTag) {

  this.placeName = pName;
  this.minCust = pMin;
  this.maxCust = pMax;
  this.averagePerCust = pPerCust;
  this.hoursOpen = 8;
  this.totalDayCookies = 0;
  this.cookiesByHour = [null];
  this.hoursText = ['10am : ', '11am : ', '12pm : ', '1pm : ', '2pm : ',
  '3pm : ', '4pm : ', '5pm : '];

  this.elTag = pWebTag;

  this.randCookieDay = function() {
    for (var i = 0; i < this.hoursOpen; i++) {
      this.totalDayCookies += this.cookiesByHour[i] = (Math.floor(Math.random()
        * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };

  this.sendListToSite = function() {

    var fWebId = document.getElementById(this.elTag);

    fWebId.textContent = this.placeName;
    var unorderedListWrap = document.createElement('ul');

    fWebId.appendChild(unorderedListWrap);

    for (var i = 0; i < this.cookiesByHour.length; i++) {

      var hourListItem = document.createElement('li');
      unorderedListWrap.appendChild(hourListItem);
      hourListItem.appendChild(document.createTextNode(this.hoursText[i] +
        this.cookiesByHour[i]));
    };

    // add the daily total
    var hourListItem = document.createElement('li');
    unorderedListWrap.appendChild(hourListItem);
    hourListItem.appendChild(document.createTextNode("Total: " +
      this.totalDayCookies));

  };

  this.randCookieDay();
  this.sendListToSite();
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, "listPikePlace");
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, "listSeaTac");
var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9, "listSouthCenter");
var bellevueSq = new CookieStand('Bellevue Square Mall', 20, 48, 3.3, "listBellevue");
var alki = new CookieStand('Alki Beach', 3, 24, 2.6, "listAlki");


