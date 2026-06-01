function tampilkanPortofolio() {
    const workGrid = document.getElementById('work-grid');
    
    for (let i = 0; i < worksData.length; i++) {
        const item = worksData[i];
        const card = document.createElement('div');
        card.className = 'card';

        let mediaHTML = '';
        
        if (item.type === 'video') {
            mediaHTML = `
                <video controls>
                    <source src="${item.src}" type="video/mp4">
                </video>
            `;
        } else {
            mediaHTML = `<img src="${item.src}" alt="${item.title}">`;
        }

        card.innerHTML = `
            ${mediaHTML}
            <h4>${item.title}</h4>
            <p class="company">${item.company}</p>
            <p>${item.desc}</p>
        `;

        workGrid.appendChild(card);
    }
}

tampilkanPortofolio();