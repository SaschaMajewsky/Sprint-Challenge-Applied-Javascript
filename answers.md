Q:
What is the DOM?

A:
-DOM stands for Document Object Model (DOM)
-DOM is a bridge between the content and the browser
-DOM is a object representation of HTML elements of a webpage
-DOM is a language neutral API and allows dynamic changes
-DOM is a tree structure containing nodes with certain types like element or text


Q:
What is an event?

A:
-An event is an occurence of a a certain situation or change that can be detected
-DOM makes it possible to use JavaScript to track events and manipulate data because of it
-An event can be any user input on a webpage like the press of a button, a mouse interaction
but also a refresh of a webpage or more complex interactions like a drag or drop


Q:
What is an event listener?

A:
-A method that can be used to attach an even handler to an DOM element
-It waits for an event to happen on a specific element or the childs due to the nature of the
tree structure of the DOM and then fires to execute a callback function that manipulated a webpage
-For every type of event one evenListener can be attached to an element
-Accepts methos like stopPropagation() or stopImmediatePropagation() to cancel out bubbling effects
that chain through the DOM nodes


Q:
Why would we convert a NodeList into an Array?

A:
-Because ES6 Arrays offer a lot of functionalities like a Array.forEach() or Array.filter()
-But the nodeList that is returned by a querySelectorAll() does not offer the same features
-NodeLists offers a forEach() that is not as realiable as the Array.forEach() in terms of browser support
-That is why the method Array.from(nodeList) is used


Q:
What is a component?

A:
-A part of a software that is built modular so it can be reused at different parts of a system
-Takes out extra complexity of rewriting the same code multiple times thus follows the DRY-principles
-By the use of components software will be less complex, often less errors faulty, better maintainable
and also better expandable/upgradeable for new features
-Often many components build together a software so they should have a high cohesion and loose coupling
