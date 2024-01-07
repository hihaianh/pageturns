// an array/list of book recommendations

const books = [
    {
      id: 1,
      name: "The Gruffalo",
      author: "Julia Donaldson",
      genre: `childrensFiction`,
      who: "earlyReader",
      level: 1,
      image: "https://pictures.abebooks.com/isbn/9781509894130-uk.jpg",
      link: "https://www.amazon.co.uk/Gruffalo-Julia-Donaldson/dp/1509830391/ref=sr_1_1?crid=SGIS3644UFC8&keywords=the+gruffalo&qid=1703342792&s=books&sprefix=the+gruffalo%2Cstripbooks%2C102&sr=1-1",
      quiz: ''
    },
    {
      id: 2,
      name: "Mog the Forgetful Cat",
      author: "Judith Kerr",
      genre: `childrensFiction`,
      who: "earlyReader",
      level: 3,
      image: "https://pictures.abebooks.com/isbn/9780001955073-uk.jpg",
      link: "https://www.amazon.co.uk/Mog-Forgetful-Cat-Judith-Kerr/dp/000717134X/ref=sr_1_1?crid=2GII19YJH1AF2&keywords=mog+the+forgetful+cat&qid=1703342731&s=books&sprefix=mog+the+forgetful+cat%2Cstripbooks%2C117&sr=1-1",
      quiz: ''
    },
    {
      id: 3,
      name: "The Highway Rat",
      author: "Julia Donaldson and Axel Scheffler",
      genre: `childrensFiction`,
      who: "earlyReader",
      level: 4,
      image: "https://m.media-amazon.com/images/I/81TLgYraP7L._SY342_.jpg",
      link: "https://www.amazon.co.uk/Highway-Rat-Julia-Donaldson/dp/1407170732/ref=sr_1_1?crid=3R2QWUA74JRL0&keywords=the+highway+rat&qid=1703342295&s=books&sprefix=the+highway+rat%2Cstripbooks%2C90&sr=1-1",
      quiz: ''
    },
    {
      id: 4,
      name: "Claude in the Spotlight",
      author: "Alex T. Smith",
      genre: `childrensFiction`,
      who: "earlyReader",
      level: 5,
      image: "https://cdn.waterstones.com/bookjackets/large/9781/4449/9781444909296.jpg",
      link: "https://www.amazon.co.uk/Claude-Spotlight-Alex-T-Smith/dp/1444909290/ref=sr_1_1?crid=33BLFBJYOIMU4&keywords=claude+in+the.+spotlight&qid=1703342705&s=books&sprefix=claude+in+the.+spotlight%2Cstripbooks%2C168&sr=1-1",
      quiz: ''
    },
    {
      id: 5,
      name: `Handa's Surprise`,
      author: "Eileen Browne",
      genre: `childrensFiction`,
      who: "earlyReader",
      level: 2,
      image: "https://m.media-amazon.com/images/I/A1emTH3XnfL._SY425_.jpg",
      link: "https://www.amazon.co.uk/Handas-Surprise-Eileen-Browne/dp/0744536340/ref=sr_1_1?keywords=handa%27s+surprise&qid=1703342681&s=books&sr=1-1",
      quiz: ''
    },
    {
      id: 6,
      name: "The Lion, the Witch and the Wardrobe",
      author: "C.S. Lewis",
      genre: `childrensFiction`,
      who: "earlyReader",
      level: 6,
      image: "https://m.media-amazon.com/images/I/81QseezFz4L._SY342_.jpg",
      link: "https://www.amazon.co.uk/Lion-Witch-Wardrobe-childrens-Chronicles/dp/0008663033/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343778&sr=1-10",
      quiz: ''
    },
    {
      id: 7,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "thriller",
      who: "youngAdult",
      level: 14,
      image: "https://m.media-amazon.com/images/I/81XBXp4UCaL._SY342_.jpg",
      link: "https://www.amazon.co.uk/Kill-Mockingbird-Vintage-Classics/dp/0099466732/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343603&sr=1-1",
      quiz: ''
    },
    {
      id: 8,
      name: "The Girl on the Train",
      author: "Paula Hawkins",
      genre: `thriller`,
      who: "youngAdult",
      level: 12,
      image: "https://m.media-amazon.com/images/I/91C-XwsnjCS._AC_UY218_.jpg",
      link: "https://www.amazon.co.uk/Girl-Train-Film-tie/dp/1784161756/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343438&sr=1-1",
      quiz: ''
    },
    {
      id: 9,
      name: "Gone Girl",
      author: "Gillian Flynn",
      genre: `thriller`,
      who: "youngAdult",
      level: 13,
      image: "https://m.media-amazon.com/images/I/71NV0obX14L._SY342_.jpg",
      link: "https://www.amazon.co.uk/Gone-Girl-Gillian-Flynn/dp/1780228228/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343503&sr=1-1",
      quiz: ''
    },
    {
      id: 10,
      name: "Divergent",
      author: "Veronica Roth",
      genre: "sciFi",
      who: "youngAdult",
      level: 10,
      image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Divergent_%28book%29_by_Veronica_Roth_US_Hardcover_2011.jpg",
      link: "https://www.amazon.co.uk/Divergent-Box-Set-Books-1-4/dp/0008175500/ref=sr_1_1?crid=KIFGTKWMU2TI&keywords=divergent&qid=1703349006&s=books&sprefix=divergent%2Cstripbooks%2C84&sr=1-1",
      quiz: ''
    },
    {
      id: 11,
      name: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "sciFi",
      who: "youngAdult",
      level: 7,
      image: "https://m.media-amazon.com/images/I/51cBJqvZOdL._SY445_SX342_.jpg",
      link: "https://www.amazon.co.uk/Hunger-Games-4-Book-Paperback-international/dp/0702313815/ref=sr_1_2?keywords=the+hunger+games&qid=1703349152&sr=8-2",
      quiz: ''
    },
    {
      id: 12,
      name: "Maze Runner",
      author: "James Dashner",
      genre: "sciFi",
      who: "youngAdult",
      level: 11,
      image: "https://m.media-amazon.com/images/I/71IkcEies6L._AC_UF894,1000_QL80_.jpg",
      link: "https://www.amazon.co.uk/Runner-James-Dashner-Books-Collection/dp/1911490273/ref=sr_1_1?crid=SWW2UYUPPZG8&keywords=maze+runner&qid=1703348954&s=books&sprefix=maze+runner%2Cstripbooks%2C100&sr=1-1",
      quiz: ''
    },
    {
      id: 13,
      name: "Check & Mate",
      author: "Ali Hazelwood",
      genre: "romance",
      who: "youngAdult",
      level: 8,
      image: "https://m.media-amazon.com/images/I/81V8qs75clL._SY342_.jpg",
      link: "https://www.amazon.co.uk/Check-Mate-bestselling-author-Hypothesis/dp/1408727617/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703344548&sr=1-1",
      quiz: ''
    },
    {
      id: 14,
      name: "The Pumpkin Spice Cafe",
      author: "Laurie Gilmore",
      genre: "romance",
      who: "youngAdult",
      level: 9,
      image: "https://m.media-amazon.com/images/I/51YA6Wu0O1L.jpg",
      link: "https://www.amazon.co.uk/Pumpkin-Spice-Caf%C3%A9-sunshine-romantic/dp/0008610673/ref=sr_1_1?crid=S4RH5JZUVDOJ&keywords=the+pumpkin+spice+cafe&qid=1703344658&s=books&sprefix=the+pumpkin+spice%2Cstripbooks%2C91&sr=1-1",
      quiz: ''
    },
    {
      id: 15,
      name: "Along for the Ride",
      author: "Sarah Dessen",
      genre: "romance",
      who: "youngAdult",
      level: 15,
      image: "https://m.media-amazon.com/images/I/81CgiOonl-L._SY342_.jpg",
      link: "https://www.amazon.co.uk/Along-Ride-Sarah-Dessen/dp/0141327480/ref=sr_1_6?crid=OH6GVNHCCDYT&keywords=sarah+dessen&qid=1703344728&s=books&sprefix=sarah+dessen%2Cstripbooks%2C82&sr=1-6",
      quiz: ''
    },
    {
      id: 16,
      name: "The Cruel Prince",
      author: "Holly Black",
      genre: "fantasy",
      who: "youngAdult",
      level: 16,
      image: "https://pictures.abebooks.com/isbn/9780316480208-uk.jpg",
      link: "https://www.amazon.co.uk/Cruel-Prince-Folk-Air/dp/1471407276/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703348061&sr=8-1",
      quiz: ''
    },
    {
      id: 17,
      name: "Children of Blood and Bone",
      author: "Tomi Adeyemi",
      genre: "fantasy",
      who: "youngAdult",
      level: 18,
      image: "https://m.media-amazon.com/images/I/91yR9j+YfaL._SY342_.jpg",
      link: "https://www.amazon.co.uk/Children-Blood-Bone-Orisha-Legacy/dp/1509871357/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703348242&sr=1-1",
      quiz: ''
    },
    {
      id: 18,
      name: "Red Queen",
      author: "Victoria Aveyard",
      genre: "fantasy",
      who: "youngAdult",
      level: 17,
      image: "https://m.media-amazon.com/images/I/517Iw+RkgiL._SY342_.jpg",
      link: "https://www.amazon.co.uk/Red-Queen-Victoria-Aveyard/dp/1409150720/ref=sr_1_1?crid=2GMLR2C9G097F&keywords=red+queen&qid=1703348909&s=books&sprefix=red+queen%2Cstripbooks%2C92&sr=1-1",
      quiz: ''
    },
  ];
  
  // filter books based on user's selected filters
  function activeBooks() {
    const selectedAge = document.getElementById("readers-age").value;
    const selectedGenre = document.getElementById("genre").value;
    const selectedSort = document.getElementById("sort").value;
    
    // to check if it's recognising the user's selected values
    console.log({ selectedAge, selectedGenre, selectedSort });
  
    const filteredBooks = books.filter((book) => {
      if (selectedAge && book.who != selectedAge) {
        return false;
      }
      if (selectedGenre && book.genre != selectedGenre) {
        return false;
      }
      return true;
    });
  
    // sort function - which is basically a for loop, sort mutates arr so we need to use filteredBooks instead of original books arr.
    const sortedBooks = filteredBooks.sort((a, b) => {
      // sort book titles in alphabetical order
      if (selectedSort === 'alphabetic') {
        return a.name.localeCompare(b.name);
      }
      // sort books based on author's name (in alphabetical order)
      if (selectedSort === 'alphabeticAuthor') {
        return a.author.localeCompare(b.author);
      }
          // reading levels
          if (selectedSort === 'ezToHard') {
              return a.level - b.level
          }
          if (selectedSort === 'hardToEz') {
              return b.level - a.level
          }
  
    });
  
    displayBooks(sortedBooks);
  }
  // list books on the page in a certain structure
  function displayBooks(books) {
    const bookListContained = document.getElementById("bookList");
    bookListContained.innerHTML = "";
  
    books.forEach((book) => {
      const figure = document.createElement("figure");
      figure.className = "book-listing";

    //   const imgContainer = document.createElement('div');
    //   imgContainer.className = 'img-container';
    //   figure.appendChild(imgContainer)
      
      const bookImg = document.createElement("img");
      bookImg.className = 'book-image'
      bookImg.src = book.image;
      bookImg.alt = `image of ${book.name} by ${book.author}`;
    //   imgContainer.appendChild(bookImg);
      figure.appendChild(bookImg);
  
      const bookCapWrap = document.createElement('div');
      bookCapWrap.className = 'caption-wrapper';
      
      const bookCapt = document.createElement("figcaption");
      bookCapt.className = 'book-capt';
      bookCapt.textContent = `${book.name}`;
      const bookCaptLink = document.createElement('a');
      bookCaptLink.href = book.link;
   
      bookCaptLink.appendChild(bookCapt)
    //   figure.appendChild(bookCapt);
      bookCapWrap.appendChild(bookCapt);
  
      const bookAuth = document.createElement("p");
      bookAuth.textContent = `by ${book.author}`;
    //   figure.appendChild(bookAuth);
      bookCapWrap.appendChild(bookAuth);


      const btnContainer = document.createElement('div')
      btnContainer.className = 'btn-container'
      bookCapWrap.appendChild(btnContainer);

      const quizIcon = document.createElement('button');
      quizIcon.className = 'take-quiz'
      quizIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.238 17.013a1 1 0 0 1 1.497 1.32l-.083.094l-2.298 2.298a1.25 1.25 0 0 1-1.666.09l-.102-.09l-1.237-1.238a1 1 0 0 1 1.32-1.497l.094.083l.707.707zM20 18a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2zM8.652 10.012a1 1 0 0 1 0 1.415l-2.298 2.298a1.25 1.25 0 0 1-1.768 0l-1.237-1.238a1 1 0 1 1 1.414-1.414l.707.707l1.768-1.767a1 1 0 0 1 1.414 0M20 11a1 1 0 0 1 .117 1.993L20 13h-9a1 1 0 0 1-.116-1.993L11 11zM7.238 3.013a1 1 0 0 1 1.497 1.32l-.083.094l-2.298 2.298a1.25 1.25 0 0 1-1.666.09l-.102-.09l-1.237-1.238a1 1 0 0 1 1.32-1.497l.094.083l.707.707zM20 4a1 1 0 0 1 .117 1.993L20 6h-9a1 1 0 0 1-.116-1.993L11 4z"/></g></svg>'
    //   figure.appendChild(quizIcon)
      bookCapWrap.appendChild(quizIcon);

      const bookBtn = document.createElement('button');
      bookBtn.className = 'see-more';
      bookBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194l-189.008-194c-12.512-12.496-32.752-12.496-45.264 0"/></svg>'
    //   figure.appendChild(bookBtn);
      bookCapWrap.appendChild(bookBtn);

      const btnText = document.createElement('span')
      btnText.className = 'btn-text';
      btnText.display = 'none';
      btnText.textContent = ''
      btnText.style.color = 'green'
    //   figure.appendChild(btnText)
      bookCapWrap.appendChild(btnText);
  
    
      btnContainer.appendChild(quizIcon)
      btnContainer.appendChild(btnText)
      btnContainer.appendChild(bookBtn)
      figure.appendChild(bookCapWrap)


    
      bookBtn.addEventListener('click', function() {
        window.location.href = book.link
      })
      bookCapt.addEventListener('click', function() {
        window.location.href = book.link
      })
      quizIcon.addEventListener('mouseenter', function() {
        btnText.textContent = 'Take Quiz'
        // btnText.style.display = 'inline-block'
        btnText.style.opacity = '1'
      })
      quizIcon.addEventListener('mouseleave', function() {
        // btnText.style.display = 'none'
        btnText.style.opacity = '0'
      })
      bookBtn.addEventListener('mouseenter', function() {
        btnText.textContent = 'View More'
        btnText.style.opacity = '1'
        // btnText.style.display = 'inline-block'
        
      })
      bookBtn.addEventListener('mouseleave', function() {
        // btnText.style.display = 'none'
        btnText.style.opacity = '0'
      })
    

      bookListContained.appendChild(figure);
    });
  }  
  
  // event listeners that listen to change of events of each dropdown
  document.getElementById("readers-age").addEventListener("change", handleFilterChanges);
  document.getElementById("genre").addEventListener("change", handleFilterChanges);
  document.getElementById("sort").addEventListener("change", handleFilterChanges);
  

//params - user filters can be displayed when pasting word/link in address box instead of clicking/choosing filters from dropdowns/selects. Grab user input's values from age, genre, sort.

function syncParamsWithFilters () {
    const currentURL = new URL(window.location.href);
    const currentParams = currentURL.searchParams
    const selectedAge = document.getElementById("readers-age");
    const selectedGenre = document.getElementById("genre");
    const selectedSort = document.getElementById("sort");

    const paramAge = currentParams.get('age');
    const paramGenre = currentParams.get('genre');
    const paramSort = currentParams.get('sort');

    if (paramAge) {
        selectedAge.value = paramAge
    }

    if (paramGenre) {
        selectedGenre.value = paramGenre
    }
    
    if (paramSort) {
        selectedSort.value = paramSort
    }
    
} 

function updateParamsOnFilterChange () {
    const currentURL = new URL(window.location.href);
    const currentParams = currentURL.searchParams
    const selectedAge = document.getElementById("readers-age").value;
    const selectedGenre = document.getElementById("genre").value;
    const selectedSort = document.getElementById("sort").value;

    currentParams.set('age', selectedAge)
    currentParams.set('genre', selectedGenre)
    currentParams.set('sort', selectedSort)

    //replace what's currently on the address bar with the new URL
    window.history.replaceState({} , '', currentURL)
}

function handleFilterChanges () {
    updateParamsOnFilterChange();
    activeBooks();
}


//update search query when user changes
syncParamsWithFilters();
// display books  
activeBooks();





