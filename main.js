//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well.
// Use any elements you like!

// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

console.log("Question 1");

var me = {
  name: 'mary',
  city: 'seattle',
  job_title: 'pm'
};

console.log(me);

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

console.log("Question 2");
me['family'] = ['andy', 'barry', 'kathy'];
console.log(me);

// 3. Using the "me" object, use the two different methods to access the value of your city.

console.log("Question 3");
console.log(me.city);
var mecity = me.city;
console.log(mecity);


// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)

console.log("Question 4");
console.log(invitees.adults[0].dinnerChoice);

// 5. Access Pablo's table number.

console.log("Question 5");
console.log(invitees.children[1].table);

// 6. Access Lauren's seating specialConsideration.

console.log("Question 6");
console.log(invitees.adults[2].specialConsiderations.seating);

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)

console.log("Question 7");
console.log(invitees.adults[1].dinnerChoice[2]);

// 8. Access Ada's allergies.

console.log("Question 8");
console.log(invitees.children[2].allergies);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Question 9");
console.log("Lauren\'s appetizer is " + invitees.adults[2].dinnerChoice[0] + ". She will be eating " +  invitees.adults[2].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[2].dinnerChoice[2] + " as her dessert.");

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

console.log("Question 10");
var jsWorkshop = new Object();

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

console.log("Question 11");
jsWorkshop.classmates = ['sander', 'caitlin', 'elizabeth', 'martha', 'grant'];
console.log(jsWorkshop);

// 12. Get the length of the fourth classmate's name.

console.log("Question 12");
console.log(jsWorkshop.classmates[3].length);

// 13. Clear the classmates value.

console.log("Question 13");
jsWorkshop.classmates = [''];
console.log(jsWorkshop);

// 14. Create an empty array called "books".

console.log("Question 14");
var books = [];
console.log(books);

// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.

console.log("Question 15");
var b3450154 = {
  title: 'blueberries for sal',
  author: 'somebody',
  pages: 12
};

var b4309255 = {
  title: 'the grapes of wrath',
  author: 'john steinbeck',
  pages: 431
};

var b3459044 = {
  title: 'dear sugar',
  author: 'cheryl strayed',
  pages: 343
};

books.push(b3450154,b4309255,b3459044);
console.log(books);

// Final desired result:
    // var books = [ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             ]

// 16. Access the author of the first book.

console.log("Question 16");
console.log(books[0].author);

// 17. Get the length of the author the the third book.

console.log("Question 17");
console.log(books[2].author.length);

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

console.log("Question 18");
books[0].dateRead = 'March 4, 1985';
books[1].dateRead = 'October 12, 2007';
books[2].dateRead = 'April 1, 2016';
console.log(books);

// 19. Remove the second book from the books Array.

console.log("Question 19");
books.splice(1, 1);
console.log(books);

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor Notation.
