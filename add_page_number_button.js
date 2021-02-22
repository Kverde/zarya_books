let showPageNumbers = true

let bookPageButton = document.createElement('div');
bookPageButton.innerHTML = '<a href="">pn</a>';
bookPageButton.classList.add('page-number-button-container');

let element = document.querySelector('.search-box');
element.parentNode.insertBefore(bookPageButton, element.nextSibling);

function bookPageButtonClick(event) { 
    event.preventDefault()

    showPageNumbers = !showPageNumbers
    
    if (showPageNumbers) {
        let pageNumberList = document.querySelectorAll('.book-page-number')
        
        for (let i = 0; i < pageNumberList.length; i++) {
            pageNumber = pageNumberList[i]
            pageNumber.classList.remove('hide')
        }
    } else {
        let pageNumberList = document.querySelectorAll('.book-page-number')
        
        for (let i = 0; i < pageNumberList.length; i++) {
            pageNumber = pageNumberList[i]
            pageNumber.classList.add('hide')
        }
    }
    
}

bookPageButton.addEventListener('click', bookPageButtonClick)