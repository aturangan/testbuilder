// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

	var singleNums = cardNumber.split('');
	var creditCardCompany = '';
	
	
	if ((singleNums.slice(0, 2).join('') === '62') && (singleNums.length === 16 || 17 || 18 || 19)) {
	  creditCardCompany = 'China UnionPay';
	
	} else if ((parseInt(singleNums[0]) + parseInt(singleNums[1]) === 13) || (parseInt(singleNums[0]) + parseInt(singleNums[2]) === 9)) {
	  creditCardCompany = 'Switch'; 
	  
	} else if ((singleNums[0] === '3') && ((singleNums[1] === '8') || (singleNums[1] === '9')) && (singleNums.length === 14)) {
	  creditCardCompany = 'Diner\'s Club';
	  
	} else if ((singleNums[0] === '3') && ((singleNums[1] === '4') || (singleNums[1] ==='7')) && singleNums.length === 15) {
	  creditCardCompany = 'American Express';
	  
	} else if ((singleNums[0] === '4') && (singleNums.length === 13 || 16 || 19)) {
	  creditCardCompany = 'Visa';
	  
	} else if (((singleNums.slice(0, 2).join('') === '51') || (singleNums.slice(0, 2).join('') === '52') || (singleNums.slice(0, 2).join('') === '53') || (singleNums.slice(0, 2).join('') ==='54') || (singleNums.slice(0, 2).join('') ==='55')) && singleNums.length === 16) {
	  creditCardCompany = 'MasterCard';
	  
	} else if (((singleNums.slice(0, 4).join('') === '6011') || (singleNums.slice(0, 3).join('') === '644') || (singleNums.slice(0, 3).join('') === '645') || (singleNums.slice(0, 3).join('') === '646') || (singleNums.slice(0, 3).join('') === '647') || (singleNums.slice(0, 3).join('') === '648') || (singleNums.slice(0, 3).join('') === '649') || (singleNums.slice(0, 2).join('') === '65')) && (singleNums.length === 16 || 19)) {
	  creditCardCompany = 'Discover';
	  
	} else if ((singleNums.slice(0, 4).join('') === '5018' || '5020' || '5038' || '6304') && ((singleNums.length >= 12) && (singleNums.length <= 19))) {
	  creditCardCompany = 'Maestro';
	
	} else {
	  creditCardCompany = "That card number belongs to none of the possible companies";
	}
	
	return creditCardCompany;
};


