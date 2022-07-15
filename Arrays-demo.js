console.log('\x1Bc'); // clears the console each run

/* ******************* arrays ******************* */
console.log('--------- arrays ---------');
/* 
  What is an array? 
  An array is a list-like data structure in JavaScript
*/
let numbers = [1, 2, 3];
let names = ['George', 'John', 'Thomas'];
let aVariable = 'a value';
let mixedBag = [30, true, 'apples', null, aVariable];
/* the values inside of an array are called elements */

//Array.isArray is a method that determines wheher the passed value is an array
console.log( typeof names);
console.log( Array.isArray(names));
console.log( Array.isArray('i am not an array'));

/* 
  Access elements in an array the same way you'd access a character in a
  string: using brackets and the index number corresponding to the
  position of the element inside the array
*/
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

/* Use brackets and the assignment operator to assign new values to index positions in an array */
names[0] = 'Washington';
names[1] = 'Adams';
names[2] = 'Jefferson';
console.log(names);

/* Arrays, like strings, have a length property */
console.log(names.length);

console.log('--------- array methods ---------');
/*
  .push takes one or more elements and adds them to the end of the array.
  .push returns the new length of the array.
*/
let newLength = names.push('James');
console.log(names);
console.log(newLength);

/*
  .pop removes one element from the end of the array. 
  .pop returns the removed element
*/
let jefferson = names.pop();
console.log(names);
console.log(jefferson);

/* .shift works like .pop, but it removes the first element instead */
/* it's called shift because the indices for every element in the array are shifted over by one */
let washington = names.shift();
console.log(names);
console.log(washington);

/* .unshift adds one or more elements to the front of the array */
let newLength2 = names.unshift('King George III');
console.log(names);
console.log(newLength2);

/* .indexOf is also an array method, and works the same way as the string method of the same name */
console.log(names.indexOf('George'));
console.log(names.indexOf('Alexander'));

/* .slice is also an array method, and works the same way as the string method of the same name. */
// array slice returns a copy of the array does not change the original array
let presidents = names.slice(1, 2);
console.log(presidents);
console.log(names);


// let namesCopy = names.slice();
// namesCopy[2] = 'Paul';
// namesCopy.push('Ringo');
// console.log(names);
// console.log(namesCopy);

/* .includes takes a value, and returns true if the value is an element in   the array */
console.log(names.includes('Adams'));
console.log(names.includes('Alexander'));

/* .reverse mutates (changes) the original array, reversing the order of    its elements */
names.reverse();
console.log(names);

/*
  .splice mutates the original array; it's used to add or remove elements
  from the middle of an array (instead of adding or removing from either end
  
  its first argument is an index; the second is a count of elements to
  delete from the element, starting at the provided index
  
  it returns a new array with all of the removed elements
*/
names = ['George', 'John', 'Thomas'];
let presidents = names.splice(1, 1);
console.log(names);
console.log(presidents);

names = ['Paul', 'George', 'John', 'Ringo'];
let acrossTheUniverse = names.splice(1, 2);
console.log(names);
console.log(acrossTheUniverse);

/* you can optionally add new elements at the given index */
names = ['Paul', 'George', 'Pete', 'John'];
let formerMembers = names.splice(2, 1, 'Ringo');
console.log(names);
console.log(formerMembers);

/* you don't have to remove any elements! */
names = ['Paul', 'George', 'Ringo', 'John'];
let removedElements = names.splice(2, 0, 'Pete', 'Stuart');
console.log(names);
console.log(removedElements);

/* .join concatenates the elements of an array into a string; the original array is not changed */
names = ['Paul', 'George', 'John', 'Ringo'];
let joinedString = names.join();
console.log(typeof joinedString);
console.log(joinedString);

 // add a separator

let joinedWithAnd = names.join(' and ');
console.log(joinedWithAnd);

/* concat merges two or more arrays into one */
/* it returns a new array and doesn't change the array on which is was called */
let older = ['Ringo', 'John'];
let younger = ['Paul', 'George'];
let allTogetherNow = older.concat(younger);
console.log(allTogetherNow);
console.log(older);

/* arrays can contain any type of value, including other arrays */
let relatedThings = [['Windows', 'MacOS'], ['New York', 'Chicago']];
console.log(relatedThings[0]);
console.log(relatedThings[1][0]);
console.log(relatedThings.length);

/* looping over nested arrays */
for (let i = 0; i < arrayOfArrays.length; i++) {
    let element = arrayOfArrays[i];   
    if (Array.isArray(element)) { 
      for (let j = 0; j < element.length; j++) {
        let value = element[j];
        console.log(value);
      }
    } else {
      console.log(element)
    }
  }
/* 
  use nested arrays to represent a grid in code
  inner arrays represent the rows of the grid
  each index of the rows represents a column
*/
let grid = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];
let firstColumn = [grid[0][0], grid[1][0], grid[2][0]];
console.log(firstColumn);

///Scope refers to the availability of variables and functions in certain parts of the code. In JavaScript, a variable has two types of scope: Global Scope. Local Scope.

/*
 * How Javascript scope works using let and const
 * It is more restrictive as to where values can be accessed within functions and blocks
 */

// This variable can be accessed from anywhere.
const globalScopeVar = 'Can be accessed from anywhere (global scope)';

function parentScope() {
  // This variable can only be accessed within this function and its child function and code blocks.
  let parentScopeVar =
    'This variable can only be accessed within this function and its children';

  // Global scope variables are available in this function scope.
  console.group('parentScope');
  console.log('parentScope can access globalScopeVar: ', globalScopeVar);
  console.log('parentScope can access parentScopeVar: ', parentScopeVar);
  console.log('parentScope can access secondParentScope (function): ', secondParentScope);
  console.groupEnd('parentScope');

  /* parentScope CANNOT access:
    childScopeVar // undefined in this scope
    secondParentScopeVar // undefined in this scope
  */

  // This function is only available to the parentScope. 
  function childScope() {
    // This variable can only be accessed within this function and its child function and code blocks.
    // Cannot be accessed by parentScope or the globalScope.
    const childScopeVar = 'Only available withing this function scope and its children';
    
    console.group('childScope');
    // Global scope variables are available in this function scope.
    console.log('childScope can access globalScopeVar: ', globalScopeVar);
    
    // Can access the variable defined by its parent.
    parentScopeVar = 'parentScopeVar was modified within childScope()';
    console.log('childScope can access parentScopeVar: ', parentScopeVar);
    console.log('childScope can access childScopeVar: ', childScopeVar);
    console.groupEnd('childScope');

    /* childScope CANNOT access:
      secondParentScopeVar // undefined in this scope
    */
  }

  // childScope() is only available to the parentScope
  childScope();
}

function secondParentScope() {
  const secondParentScopeVar =
    'This variable can only be accessed within this function and its children';
  
  console.group('secondParentScope');
  console.log('secondParentScope can access globalScopeVar: ', globalScopeVar);
  console.log('secondParentScope can access secondParentScopeVar: ', secondParentScopeVar);
  console.groupEnd('secondParentScope');

  /* The global scope CANNOT access within this block:
    parentScopeVar; // undefined in this scope
    childScopeVar // undefined in this scope
    childScope() // undefined in this scope
    secondGlobalScopeVar // undefined in this scope
  */
}

// Code blocks won't affect the scope of a variable.
if (true) {
  let secondGlobalScopeVar = 'Can be accessed from this block only';

  console.log('Global scope can access globalScopeVar (in if code block):', globalScopeVar);
  console.log('Only this block can access secondGlobalScopeVar:', secondGlobalScopeVar);
  
  /* The global scope CANNOT access:
    parentScopeVar; // undefined in this scope
    childScopeVar // undefined in this scope
    childScope() // undefined in this scope
    secondParentScopeVar // undefined in this scope
  */
}

// Variables in a loop will still belong to the scope after the loop is done.
for (let index = 0; index < [1,2,3,4,5].length; index++) {
  console.count('Index may be accessed from this loop only');
}

// globalScopeVar can be accessed in the global scope with no issues.
console.log('Global scope can access globalScopeVar:', globalScopeVar);

// Running parentScope.
parentScope();
// Running secondParentScope.
secondParentScope();

/* The global scope CANNOT access:
  parentScopeVar; // undefined in this scope
  childScopeVar // undefined in this scope
  childScope() // undefined in this scope
  secondParentScopeVar // undefined in this scope
  secondGlobalScopeVar // undefined in this scope
  index // undefined in this scope
*/