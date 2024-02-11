function navigateTo(page) {
    console.log("Navigating to:", page);

    
    const validPages = ['reactPage', 'salesPage1', 'VideoPage', 'TextPage', 'SankeyGraph', 'index']; 
    if (!validPages.includes(page)) {
        console.error('Invalid page requested');
        document.getElementById('content').innerHTML = '<p>Invalid page requested.</p>';
        return;
    }

    
    if (page === 'reactPage') {
        window.location.href = 'reactPage.html';
    } else if (page === 'salesPage1') {
        window.location.href = 'salesPage1.html';
    } else if (page === 'VideoPage') {
        window.location.href = 'VideoPage.html';
    } else if (page === 'TextPage') {
        window.location.href = 'TextPage.html';
    } else if (page === 'SankeyGraph') {
        window.location.href = 'SankeyGraph.html';
    } else if (page === 'index') {
        window.location.href = 'index.html';
    } else {
        fetch(page + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("text/html")) {
                throw new TypeError("Oops, we haven't got HTML!");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content').innerHTML = '<p>Error loading content. ' + error.message + '</p>';
        });
    }
}