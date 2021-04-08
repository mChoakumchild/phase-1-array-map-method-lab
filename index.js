const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let obj = [];
let titlekey = [];
function titleCased(x) 
{
  for (const num of tutorials) {    // this iterates through each element of tutorials
    obj = num.split(" ");    // takes each element and turns it into an array obj
    obj.forEach(function(element,index,array) //iterates through each element of the array obj
    {    
      let l = element.charAt(0).toUpperCase(); // this sets the first character in each element to uppercase
      let k =  element.slice(1);
      array[index] = l + k;
    })
    titlekey.push(obj.join(" "));
  }
  //console.log(titlekey)
  return titlekey
}






