let currentSlide = 0;
//Ham thay doi slide
function changeSlide(step){
    currentSlide += step;
    showSlide(currentSlide);
}
//ham hien thi slide hien tai
function showSlide(slideIndex){
    const slides = document.querySelectorAll(".carousel-item");/*lay tat ca cac phan tu co class la carousel*/
    
    if(slideIndex >= slides.length){
        currentSlide = 0; // quay lai trang dau tien
    }else if(slideIndex < 0){
        currentSlide = slides.length - 1;// quay lai trang cuoi cung
    }else{
        currentSlide = slideIndex;
    }
    const offset = currentSlide * 100; // tinh offset cho slide
    document.getElementById("carouselImages").style.transform = `translateX(-${offset}%)`; //thay doi giao dien slide
}

function openTab(event, tabId) {
    //remove active class from all tabs buttons
    document.querySelectorAll(".tab-button").forEach(function(tabButton){
        tabButton.classList.remove("active");
    });

    //Hide all tab contents
    document.querySelectorAll(".tab-content").forEach(function(tabContent){
        tabContent.classList.remove("active");
    });

    //Show the clicked tab content
    document.getElementById(tabId).classList.add("active");

    //Add active class to the clicked tab button
    event.currentTarget.classList.add("active");
}

function viewDetails(blogId){
    //Get the clicked blog item
    const blogItem = document.getElementById(blogId);
    const modalContent = document.getElementById("modalContent");

    //set the modal content to the html of the blog item
    //modalContent.innerHTML = blogItem.innerHTML;//

    //show the modal
    document.getElementById("blogModal").style.display = "block";
}

//close the modal
function closeModal(){
    document.getElementById("blogModal").style.display = "none";
}

//close the modal when clicking outside the modal
window.onclick = function(event){
    const modal = document.getElementById("blogModal");
    if(event.target === modal){
        modal.style.display = "none";
    }
}
