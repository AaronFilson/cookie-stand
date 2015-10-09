/*
app.js
Written by Aaron Filson, for the B34 Code Fellows Bootcamp
This works with the sales.html file to show the sales projections
for Pat's Cookie Stand. This version allows the user of the website
to enter additional Cookie Stands, and displays the information in a table.
There is essentially no error correction of user input in this version, the
data disappears on close, and customer modeling is simply a random assigment.
*/
//function calls are at bottom of file
var salesFormTag = document.getElementById('salesForm');
// the event hander function passed to the form submit. Makes a new object and
// writes it to the webpage table when the form submit event fires.
var handleSalesFormSubmit = function(event) {
  event.preventDefault();

  var newStand = new CookieStand(event.target.locName.value,
    ((event.target.minCust.value - 1) + 1), ((event.target.maxCust.value - 1) + 1),
    ((event.target.cookiePerHour.value - 1) + 1));

  pageOneTable.appendTableRow(newStand);
};

//The CookieStand constructor.
//Takes values for the name of the location, minimum customers, max customers,
//cookies per customer.
var CookieStand = function (pName, pMin, pMax, pPerCust) {

  this.placeName = pName;
  this.minCust = pMin;
  this.maxCust = pMax;
  this.averagePerCust = pPerCust;
  this.hoursOpen = 8;
  this.totalDayCookies = 0;
  this.cookiesByHour = [null];
  this.elTag = document.getElementById('salesTable');
  //function to total up cookies
  this.randCookieDay = function() {
    for (var i = 0; i < this.hoursOpen; i++) {
      this.totalDayCookies += this.cookiesByHour[i] = Math.floor(((Math.random()
        * (this.maxCust - this.minCust + 1)) + this.minCust) * this.averagePerCust);
    }
  }

  this.randCookieDay(); //call the cookie func
}
// This makes a table of info out of an array of Cookie Stands, and starts
// putting the info on the webpage. It then calls its own method appendTableRow
// to work through the individual objects.
var NumberOfCookiesTable = function (pCookieStand) {
  //get the local copy of passed arg
  this.pCSarray = pCookieStand;
  //get element tag from doc for the table
  this.tableVarTag = document.getElementById('salesTable');
  this.hoursOpen = 8;
  this.hoursText = ['10am ', '11am ', '12pm ', '1pm ', '2pm ',
  '3pm ', '4pm ', '5pm '];
  //make the table head
  this.tableVarTag.appendChild(document.createElement('thead'));
  this.tBPointer = this.tableVarTag.lastChild;
  this.rowPointer = this.tBPointer.appendChild(document.createElement('tr'));
  //make the hours headers
  this.headerPointer = this.rowPointer.appendChild(document.createElement('th'));
    this.headerPointer.textContent = ''; //spacer place in table
    //print the hours of operation at the top of the table
  for (var i = 0; i < this.hoursText.length; i++) {
    this.headerPointer = this.rowPointer.appendChild(document.createElement('th'));
    this.headerPointer.textContent = this.hoursText[i];
  }
  //Add the total count to the header section
  this.headerPointer = this.rowPointer.appendChild(document.createElement('th'));
  this.headerPointer.textContent = 'Total Cookies';

  //make the table body
  this.tBPointer = this.tableVarTag.appendChild(document.createElement('tbody'));
  for (var j = 0; j < this.pCSarray.length; j++) {
    this.appendTableRow(this.pCSarray[j]); //call our own method on each object
  }
}

//this method of Num... takes a CookieStand object as arg, then sends it to the
//last child of the table tree.
NumberOfCookiesTable.prototype.appendTableRow = function(latestStand){
  console.log('top of appendTableRow with ' + latestStand.placeName);
  this.cStandObj = latestStand;
  this.appRowPointer = document.getElementById('salesTable').lastChild;

 //make the data rows
  //start with the name of the location
  this.rowPointer = this.appRowPointer.appendChild(document.createElement('tr'));
  this.rowPointer.appendChild(document.createElement('th'));
  this.rowPointer.lastChild.textContent = this.cStandObj.placeName;
  //print cookies by hour
  for (var k = 0; k < latestStand.cookiesByHour.length; k++) {
    this.rowPointer.appendChild(document.createElement('td'));
    this.rowPointer.lastChild.textContent = this.cStandObj.cookiesByHour[k];
  }
  //print total cookies
  this.rowPointer.appendChild(document.createElement('td'));
  this.rowPointer.lastChild.textContent = this.cStandObj.totalDayCookies;
};

// make the cookie stands
var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9);
var bellevueSq = new CookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

//print the table to the page
var pageOneTable = new NumberOfCookiesTable([pikePlace, seaTac, southCenter, bellevueSq, alki]);
//Make the event listener point to the form submit
salesFormTag.addEventListener('submit', handleSalesFormSubmit);

