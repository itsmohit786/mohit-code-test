fetch('./json/code-test.json')
    .then(res => res.json())
    .then(data => {
        const articles = data.articles;
        let htmlContent = "";

        for (let i in articles) {
            htmlContent += '<li class="cs-item">';
            htmlContent += ' <div class="cs-section-left"><a href="" class="cs-cat" href="' + articles[i].link + '" target="_blank" class="category">' + articles[i].primarySectionRouteName + '</a>';
            htmlContent += '<h3 class="cs-heading">' + articles[i].headline + '</h3>';
            htmlContent += '<p class="cs-para">' + articles[i].standfirst + '</p></div>';
            htmlContent += '<div class="cs-section-right"><image class="thumbnail" src="' + articles[i].thumbnail.src + '" /></div>';
            htmlContent += '</li>';
        }
        document.getElementById("articles-container").insertAdjacentHTML('beforeend', htmlContent);
    });