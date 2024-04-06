//Event Bubbling : It is the default behaviour in which events are move from child to 
                 //parents
//Event Capturing : In this events are moved from parent to their childerns.

//event.stopPropagation(): If we want to stop the behaviour of bubbling and capturing.

/*stopImmediatePropagation(): If two or more events are added to any element then it 
  will stop stop the other events, after the event in which we applied it.
*/

/*event.preventDefault(): With this we can stop the default behaviours of some elements
 for eg: on click of anchor <a> tag it will open a url
*/

//Refer index1.html

var grandParent = document.getElementById('grand-parent');
var parent = document.getElementById('parent');
var child = document.getElementById('child');
var button = document.querySelector('button');

grandParent.addEventListener('click', (event) => {
    console.log('grand parent');
    grandParent.style.backgroundColor = 'red';
    grandParent.style.width = '100%';
    //event.stopPropagation(); // will stop the bubbling and capturing
    
}) // with this argument (true) the default behaviour i.e., bubbling will gets capturing

parent.addEventListener('click', () => {
    console.log(' parent');
    parent.style.backgroundColor = 'green';
    parent.style.width = '80%';
})

child.addEventListener('click', (event) => {
    console.log('child');
    grandParent.style.backgroundColor = 'red';
    //event.stopImmediatePropagation();
    event.preventDefault();
})

button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('button');
})
button.addEventListener('click', () => {
    console.log('button1');
})

var preventDefault = document.getElementById('with');
preventDefault.addEventListener('click', (event) => {
    event.preventDefault();
})