document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const carTypeFilter = document.getElementById('car-type');
    const speedFilter = document.getElementById('speed-range');
    const manufacturerFilter = document.getElementById('manufacturer');
    const carItems = document.querySelectorAll('.car-item');
    
    function filterCars() {
        const selectedType = carTypeFilter.value;
        const selectedSpeed = speedFilter.value;
        const selectedManufacturer = manufacturerFilter.value;
        
        carItems.forEach(item => {
            const itemType = item.getAttribute('data-type');
            const itemSpeed = parseInt(item.getAttribute('data-speed'));
            const itemManufacturer = item.getAttribute('data-manufacturer');
            
            const typeMatch = selectedType === 'all' || itemType === selectedType;
            const speedMatch = selectedSpeed === 'all' || itemSpeed >= parseInt(selectedSpeed);
            const manufacturerMatch = selectedManufacturer === 'all' || itemManufacturer === selectedManufacturer;
            
            if (typeMatch && speedMatch && manufacturerMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    carTypeFilter.addEventListener('change', filterCars);
    speedFilter.addEventListener('change', filterCars);
    manufacturerFilter.addEventListener('change', filterCars);
    
    // View details functionality
    const viewButtons = document.querySelectorAll('.view-details-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const carItem = this.closest('.car-item');
            const carName = carItem.querySelector('h3').textContent;
            
            // In a real application, you would fetch detailed info from a database
            alert(`Detailed specifications for ${carName} would be displayed here.\n\nThis would typically open a modal or expand a section with:\n- Full technical specifications\n- Performance data\n- Gallery\n- Pricing information`);
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            carItems.forEach(item => {
                item.style.display = 'block';
            });
            return;
        }
        
        carItems.forEach(item => {
            const carName = item.querySelector('h3').textContent.toLowerCase();
            
            if (carName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});