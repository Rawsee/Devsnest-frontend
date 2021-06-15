/* 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; */
/*

*/
// function books(name,author,status) {
//     let book_name = name;
//     let book_author = author;
//     let book_status = status;
//     console.log(book_status);
    
// }

// books("bill","title",true);

const objs = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]
objs.map(obj =>{ 
    if(obj.readingStatus){console.log(`${obj.author}, ${obj.title}`);}
})