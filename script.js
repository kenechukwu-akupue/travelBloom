
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    const data = {
        countries: ['India', 'Australia', 'Canada', 'Brazil'],
        beaches: ['Bondi Beach', 'Copacabana', 'Waikiki Beach', 'Bora Bora'],
        temples: ['Angkor Wat', 'Borobudur', 'Shwedagon Pagoda', 'Temple of Heaven']
    };

    for (const category in data) {
        data[category].forEach(item => {
            if (item.toLowerCase().includes(query)) {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                results.appendChild(listItem);
            }
        });
    }
});
