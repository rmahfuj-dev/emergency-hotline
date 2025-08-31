1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:The main difference between getElmentById, getElementsByClassName, and querySelector / querySelectorAll is they serially select and element from html by their id,class and any css selector .


2.How do you create and insert a new element into the DOM?

Answer: To create a new element into DOM I use document.createElement() and for inserting a new element I normally use appendChild() or prepend() method.


3.What is Event Bubbling and how does it work?
Answer: If an event happens on a child element and also triggers on its parent, it’s called event bubbling. For example, if we have a <div> element and inside this <div> we have a <button> and we set an event for the parent <div>, when we click on the child element, the event still triggers.


4.What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is attaching a single event listener to a parent to handle events on its children. It's useful because we can use it dynamically and it saves our code and memory.


5.What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() Stops the browser’s default action for an event but stopPropagation() stops the event from bubbling or capturing further in the DOM.