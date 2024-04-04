const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// variable
let prevNextBtnCourses = $$('#courses .prev_next_button button');
let coursesBlock = $('#courses .bottom');
let reviewList = $('#reviews');
let blogList = $('#blog .posts');
let listBtnBlog = $('#blog .list');
// let reviewPerson = $$('#reviews .person');
// let reviewBtnActive = $$('#reviews .person.active .list p');

// event DOM
prevNextBtnCourses.forEach(btn => {
    btn.addEventListener('click', prevNextClick);
});

reviewList.addEventListener('click', switchList);
listBtnBlog.addEventListener('click', switchList);


// function
function prevNextClick(e) {
    coursesBlock.style.scrollBehavior = "smooth";
    let currPosition = coursesBlock.scrollLeft;
    if (e.target.closest('.prev')) {
        coursesBlock.scrollLeft = currPosition - 400;
    } else {
        coursesBlock.scrollLeft = currPosition + 400;
    };
};

function switchList(e) {
    reviewList.style.scrollBehavior = "smooth";
    blogList.style.scrollBehavior = "smooth";

    let listBtn = [];
    if (e.target.parentElement.classList.contains('list')) {
        listBtn = Array.from(e.target.parentElement.children)
        listBtn.forEach(btn => {
            btn.classList.remove('active')
        })
    };
    
    listBtn.forEach((btn, index) => {
        if (btn === e.target) {
            if (e.target.closest('#reviews')) {
                // scroll
                reviewList.scrollLeft = reviewList.offsetWidth * index;
                // add class active to list
                let nextReviewBtn;
                nextReviewBtn = $$('#reviews .list')[index];
                nextReviewBtn.children[index].classList.add('active');
            } else {
                blogList.scrollLeft = blogList.offsetWidth * index;
                btn.classList.add('active')
            };
        };
    });
};