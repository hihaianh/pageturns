// an array/list of book recommendations

const books = [
    {
        id: 1,
        name: 'The Gruffalo',
        author: 'Julia Donaldson',
        genre: `Children's Fiction`,
        who: 'Early Readers',
        image: 'https://m.media-amazon.com/images/I/81wung63OFL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Gruffalo-Julia-Donaldson/dp/1509830391/ref=sr_1_1?crid=SGIS3644UFC8&keywords=the+gruffalo&qid=1703342792&s=books&sprefix=the+gruffalo%2Cstripbooks%2C102&sr=1-1'
    },
    {
        id: 2,
        name: 'Mog the Forgetful Cat',
        author: 'Judith Kerr',
        genre: `Children's Fiction`,
        who: 'Early Readers',
        image: 'https://m.media-amazon.com/images/I/81lSQzAbxdL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Mog-Forgetful-Cat-Judith-Kerr/dp/000717134X/ref=sr_1_1?crid=2GII19YJH1AF2&keywords=mog+the+forgetful+cat&qid=1703342731&s=books&sprefix=mog+the+forgetful+cat%2Cstripbooks%2C117&sr=1-1'
    },
    {
        id: 3,
        name: 'The Highway Rat',
        author: 'Julia Donaldson and Axel Scheffler',
        genre: `Children's Fiction`,
        who: 'Early Readers',
        image: 'https://m.media-amazon.com/images/I/81TLgYraP7L._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Highway-Rat-Julia-Donaldson/dp/1407170732/ref=sr_1_1?crid=3R2QWUA74JRL0&keywords=the+highway+rat&qid=1703342295&s=books&sprefix=the+highway+rat%2Cstripbooks%2C90&sr=1-1'
    },
    {
        id: 4,
        name: 'Claude in the Spotlight',
        author: 'Alex T. Smith',
        genre: `Children's Fiction`,
        who: 'Early Readers',
        image: 'https://cdn.waterstones.com/bookjackets/large/9781/4449/9781444909296.jpg',
        link: 'https://www.amazon.co.uk/Claude-Spotlight-Alex-T-Smith/dp/1444909290/ref=sr_1_1?crid=33BLFBJYOIMU4&keywords=claude+in+the.+spotlight&qid=1703342705&s=books&sprefix=claude+in+the.+spotlight%2Cstripbooks%2C168&sr=1-1'
    },
    {
        id: 5,
        name: `Handa's Surprise`,
        author: 'Eileen Browne',
        genre: `Children's Fiction`,
        who: 'Early Readers',
        image: 'https://m.media-amazon.com/images/I/A1emTH3XnfL._SY425_.jpg',
        link: 'https://www.amazon.co.uk/Handas-Surprise-Eileen-Browne/dp/0744536340/ref=sr_1_1?keywords=handa%27s+surprise&qid=1703342681&s=books&sr=1-1'
    },
    {
        id: 6,
        name: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        genre: `Children's Fiction`,
        who: 'Early Readers',
        image: 'https://m.media-amazon.com/images/I/81QseezFz4L._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Lion-Witch-Wardrobe-childrens-Chronicles/dp/0008663033/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343778&sr=1-10'
    },
    {
        id: 7,
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Thriller',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/81XBXp4UCaL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Kill-Mockingbird-Vintage-Classics/dp/0099466732/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343603&sr=1-1'
    },
    {
        id: 8,
        name: 'The Girl on the Train',
        author: 'Paula Hawkins',
        genre: `Thriller`,
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/91C-XwsnjCS._AC_UY218_.jpg',
        link: 'https://www.amazon.co.uk/Girl-Train-Film-tie/dp/1784161756/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343438&sr=1-1'
    },
    {
        id: 9,
        name: 'Gone Girl',
        author: 'Gillian Flynn',
        genre: `Thriller`,
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/71NV0obX14L._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Gone-Girl-Gillian-Flynn/dp/1780228228/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703343503&sr=1-1'
    },
    {
        id: 10,
        name: 'Divergent',
        author: 'Veronica Roth',
        genre: 'Sci-fi',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/71InXBGOesL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Divergent-Box-Set-Books-1-4/dp/0008175500/ref=sr_1_1?crid=KIFGTKWMU2TI&keywords=divergent&qid=1703349006&s=books&sprefix=divergent%2Cstripbooks%2C84&sr=1-1'
    },
    {
        id: 11,
        name: 'The Hunger Games',
        author: 'Suzanne Collins',
        genre: 'Sci-fi',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/51cBJqvZOdL._SY445_SX342_.jpg',
        link: 'https://www.amazon.co.uk/Hunger-Games-4-Book-Paperback-international/dp/0702313815/ref=sr_1_2?keywords=the+hunger+games&qid=1703349152&sr=8-2'
    },
    {
        id: 12,
        name: 'Maze Runner',
        author: 'James Dashner',
        genre: 'Sci-fi',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/91utoCkFviL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Runner-James-Dashner-Books-Collection/dp/1911490273/ref=sr_1_1?crid=SWW2UYUPPZG8&keywords=maze+runner&qid=1703348954&s=books&sprefix=maze+runner%2Cstripbooks%2C100&sr=1-1'
    },
    {
        id: 13,
        name: 'Check & Mate',
        author: 'Ali Hazelwood',
        genre: 'Romance',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/81V8qs75clL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Check-Mate-bestselling-author-Hypothesis/dp/1408727617/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703344548&sr=1-1'
    },
    {
        id: 14,
        name: 'The Pumpkin Spice Cafe',
        author: 'Romance',
        genre: 'Laurie Gilmore',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/81SY28F1TzL._AC_UY218_.jpg',
        link: 'https://www.amazon.co.uk/Pumpkin-Spice-Caf%C3%A9-sunshine-romantic/dp/0008610673/ref=sr_1_1?crid=S4RH5JZUVDOJ&keywords=the+pumpkin+spice+cafe&qid=1703344658&s=books&sprefix=the+pumpkin+spice%2Cstripbooks%2C91&sr=1-1'
    },
    {
        id: 15,
        name: 'Along for the Ride',
        author: 'Sarah Dessen',
        genre: 'Romance',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/81CgiOonl-L._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Along-Ride-Sarah-Dessen/dp/0141327480/ref=sr_1_6?crid=OH6GVNHCCDYT&keywords=sarah+dessen&qid=1703344728&s=books&sprefix=sarah+dessen%2Cstripbooks%2C82&sr=1-6'
    },
    {
        id: 16,
        name: 'The Cruel Prince',
        author: 'Holly Black',
        genre: 'Fantasy',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/91TwOUsfb4L._AC_UY218_.jpg',
        link: 'https://www.amazon.co.uk/Cruel-Prince-Folk-Air/dp/1471407276/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703348061&sr=8-1'
    },
    {
        id: 17,
        name: 'Children of Blood and Bone',
        author: 'Tomi Adeyemi',
        genre: 'Fantasy',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/91yR9j+YfaL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Children-Blood-Bone-Orisha-Legacy/dp/1509871357/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1703348242&sr=1-1'
    },
    {
        id: 18,
        name: 'Red Queen',
        author: 'Victoria Aveyard',
        genre: 'Fantasy',
        who: 'Young Adults',
        image: 'https://m.media-amazon.com/images/I/517Iw+RkgiL._SY342_.jpg',
        link: 'https://www.amazon.co.uk/Red-Queen-Victoria-Aveyard/dp/1409150720/ref=sr_1_1?crid=2GMLR2C9G097F&keywords=red+queen&qid=1703348909&s=books&sprefix=red+queen%2Cstripbooks%2C92&sr=1-1'
    }
]

// filter books based on user's selected filters
function activeBooks() {
    const selectedAge = document.getElementById('readers-age').value
    const selectedGenre = document.getElementById('genre').value 
    const selectedSort = document.getElementById('sort').value

const filteredBooks = books.filter(book => {
    if(selectedAge && book.who != selectedAge) {
        return false
    } 
    else if(selectedGenre && book.genre != selectedGenre) {
        return false
    }
    else {
        return true
    }
})

    displayBooks(filteredBooks)
}
// have the user's choice of options reflect on the page
function displayBooks(books) {
    const bookListContained = document.getElementById('bookList')
    bookListContained.innerHTML = '';

    books.forEach(book => {
        const bookImg = document.createElement('img')
        bookImg.src = book.img;
        bookImg.alt = `image of ${book.name} by ${book.author}`
        bookListContained.appendChild(bookImg)

        const bookDesc = document.createElement('div')
        bookDesc.textContent = `${book.name} by ${book.author}`
        bookListContained.appendChild(bookDesc)
    })
}
// sort book titles based on alphabetical order

// event listeners that listen to change of events of each dropdown
document.getElementById('readers-age').addEventListener('change', activeBooks)
document.getElementById('genre').addEventListener('change', activeBooks)
document.getElementById('sort').addEventListener('change', activeBooks)
// display books without any filters
displayBooks(books);

//params - user filters can be displayed when pasting word/link in address box instead of clicking/choosing filters from dropdowns/selects
