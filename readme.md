1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:
getElementById=select one element by it's id
getElementsByClassName=select all element by it's class
querySelector=select the first element matching a CSS selector
querySelectorAll=select all element matching a CSS selector

2. How do you **create and insert a new element into the DOM**?
Ans:
In this assignment I create and insert a new element by DOM.This is---
const div= document.createElement("div")
        div.innerHTML=`
        <div class=" bg-gray-100 w-[300px] h-[100px] rounded-lg p-4 flex justify-between">
                <div>
                    <h1 class="font-bold">${data.name}</h1>
                    <p class="text-gray-500">${data.number}</p>
                </div>
                <p class="text-gray-500 flex items-center">${data.date}</p>
        </div><br>
        `
    historyContainer.appendChild(div)

3. What is **Event Bubbling** and how does it work?
Ans:
Event bubbling is a behavior in the DOM where an event starts from the innermost element and then moves upward through its parent elements until it reaches the document.
It's working step-by-step is given below--
If you click on a "button" inside a "div":
1.Event triggers on button first
2.Then goes to div
3.Then to body
4.Then to document

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where you attach one event listener to a parent element, instead of adding separate listeners to many child elements.
It's useful because-
1.Better performance.
2.Works for dynamically added elements — new child elements don’t need new listeners.
3.Cleaner, simpler code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
Different between preventDefault() and stopPropagation() is---
preventDefault() → stops browser behavior
stopPropagation() → stops event from moving to parents
---

