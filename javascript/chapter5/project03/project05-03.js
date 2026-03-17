"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: 
      Date:   

      Filename: project05-03.js
*/

// Elements used to build a table of contents
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");

// Heading generation state
let headingCount = 1;
const heading = "H2";

// Iterate through each element in the source document
for (
  let node = sourceDoc.firstElementChild;
  node !== null;
  node = node.nextElementSibling
) {
  const n = node;

  if (n.nodeName === heading) {
    const anchor = document.createElement("a");
    anchor.name = "doclink" + headingCount;
    n.insertBefore(anchor, n.firstChild);

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    listItem.appendChild(link);

    link.textContent = n.textContent;
    link.href = "#doclink" + headingCount;

    toc.appendChild(listItem);

    headingCount++;
  }
}

