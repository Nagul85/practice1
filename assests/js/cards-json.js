const data = [
    {
        "image": "assests/img/Aroma-Garden.png",
        "title": "Web Development",
    },
    {
        "image": "assests/img/Aroma-Garden.png",
        "title": "Web Development",
    },
    {
        "image": "assests/img/Aroma-Garden.png",
        "title": "Web Development",
    },
    {
        "image": "assests/img/Aroma-Garden.png",
        "title": "Web Development",
    },  
    {
        "image": "assests/img/Aroma-Garden.png",
        "title": "Web Development",
    },
   
];

$(document).ready(function() {
    const container = $('#cards-container');
    const itemsPerSlide = 3;  // Adjust the number of items per slide
    let cardGroup = '';

    data.forEach((item, index) => {
        if (index % itemsPerSlide === 0) {
            if (index !== 0) {
                cardGroup += '</div>';
            }
            cardGroup += `<div class="carousel-item${index === 0 ? ' active' : ''}">
                            <div class="row">`;
        }

        cardGroup += `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="Card Image">
                    <div class="card-body d-flex flex-column services-col">
                        <h5 class="card-title servies-heading">${item.title}</h5>
                       
                       
                    </div>
                </div>
            </div>
        `;

        if (index === data.length - 1) {
            cardGroup += '</div></div>';
        }
    });

    container.append(cardGroup);
});