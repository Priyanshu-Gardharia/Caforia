// Enhanced Dashboard Module - Events and Student Profiles Display
// This version demonstrates loading data from external JSON files with enhanced design
class EnhancedDashboardModule {
    constructor() {
        this.events = [];
        this.customers = []; // Changed from students to customers
        this.filteredEvents = [];
        this.filteredCustomers = []; // Changed from filteredStudents to filteredCustomers
        this.currentUser = null;
        this.dataSource = 'embedded'; // 'embedded' or 'external'
        
        this.init();
    }

    init() {
        this.checkAuthentication();
        this.setupEventListeners();
        this.loadDataFromSource();
        this.renderDashboard();
        this.addVisualEnhancements();
    }

    // Check if user is authenticated and is admin
    checkAuthentication() {
        const userData = localStorage.getItem('userData');
        
        if (!userData) {
            window.location.href = 'login.html';
            return;
        }

        this.currentUser = JSON.parse(userData);
        if (!this.currentUser.isLoggedIn) {
            window.location.href = 'login.html';
            return;
        }

        // Check if user is admin
        if (!this.currentUser.isAdmin || this.currentUser.email !== 'priyanshugardharia@gmail.com') {
            alert('Access Denied: Dashboard is only available to administrators.');
            window.location.href = 'index.html';
            return;
        }

        // Update UI with admin user info
        document.getElementById('userName').textContent = `Admin: ${this.currentUser.name}`;
        document.getElementById('userNameDisplay').textContent = this.currentUser.name;
    }

    // Load data from different sources
    async loadDataFromSource() {
        try {
            // Try to load from external JSON file first
            await this.loadExternalData();
            this.dataSource = 'external';
            console.log('Data loaded from external JSON file');
        } catch (error) {
            console.log('External data loading failed, using embedded data');
            this.loadEmbeddedData();
            this.dataSource = 'embedded';
        }
    }

    // Load data from external JSON file
    async loadExternalData() {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch external data');
        }
        
        const data = await response.json();
        this.events = data.events || [];
        this.customers = data.customers || []; // Changed from this.students to this.customers
        
        this.filteredEvents = [...this.events];
        this.filteredCustomers = [...this.customers]; // Changed from this.filteredStudents to this.filteredCustomers
    }

    // Load embedded data (fallback)
    loadEmbeddedData() {
        // Sample data - Events and Customer Profiles
        this.events = [
            {
                id: 1,
                title: "Coffee Tasting Workshop",
                date: "2024-02-15",
                time: "2:00 PM",
                location: "Main Café",
                description: "Learn to identify different coffee flavors and origins",
                attendees: 25,
                maxAttendees: 30
            },
            {
                id: 2,
                title: "Barista Training Session",
                date: "2024-02-20",
                time: "10:00 AM",
                location: "Training Room",
                description: "Master the art of coffee brewing and latte art",
                attendees: 18,
                maxAttendees: 20
            },
            {
                id: 3,
                title: "Coffee Bean Roasting Demo",
                date: "2024-02-25",
                time: "3:00 PM",
                location: "Roasting Station",
                description: "Watch live coffee bean roasting process",
                attendees: 12,
                maxAttendees: 15
            },
            {
                id: 4,
                title: "Single-Origin Showcase",
                date: "2025-10-05",
                time: "11:00 AM",
                location: "Main Café",
                description: "Taste and compare premium single-origin coffees from around the world.",
                attendees: 10,
                maxAttendees: 30
            },
            {
                id: 5,
                title: "Latte Art Throwdown",
                date: "2025-11-12",
                time: "6:30 PM",
                location: "Training Room",
                description: "Friendly competition for best latte art. Spectators welcome!",
                attendees: 22,
                maxAttendees: 40
            },
            {
                id: 6,
                title: "Holiday Blend Launch Night",
                date: "2025-12-03",
                time: "7:00 PM",
                location: "Roasting Station",
                description: "Be the first to taste our limited-edition holiday blend with pairing bites.",
                attendees: 35,
                maxAttendees: 60
            }
        ];

        this.customers = [
            {
                id: 1,
                name: "Priya Sharma",
                email: "priya.sharma@email.com",
                phone: "+91 98765-43210",
                membershipLevel: "Gold",
                favoriteDrink: "Cappuccino",
                totalOrders: 45,
                joinDate: "2023-01-15"
            },
            {
                id: 2,
                name: "Arjun Patel",
                email: "arjun.patel@email.com",
                phone: "+91 87654-32109",
                membershipLevel: "Silver",
                favoriteDrink: "Espresso",
                totalOrders: 32,
                joinDate: "2023-03-20"
            },
            {
                id: 3,
                name: "Ananya Reddy",
                email: "ananya.reddy@email.com",
                phone: "+91 76543-21098",
                membershipLevel: "Platinum",
                favoriteDrink: "Latte",
                totalOrders: 67,
                joinDate: "2022-11-10"
            },
            {
                id: 4,
                name: "Vikram Singh",
                email: "vikram.singh@email.com",
                phone: "+91 65432-10987",
                membershipLevel: "Gold",
                favoriteDrink: "Americano",
                totalOrders: 38,
                joinDate: "2023-02-05"
            },
            {
                id: 5,
                name: "Meera Iyer",
                email: "meera.iyer@email.com",
                phone: "+91 54321-09876",
                membershipLevel: "Silver",
                favoriteDrink: "Mocha",
                totalOrders: 29,
                joinDate: "2023-04-12"
            },
            {
                id: 6,
                name: "Rahul Verma",
                email: "rahul.verma@email.com",
                phone: "+91 43210-98765",
                membershipLevel: "Gold",
                favoriteDrink: "Flat White",
                totalOrders: 41,
                joinDate: "2023-01-28"
            },
            {
                id: 7,
                name: "Kavya Nair",
                email: "kavya.nair@email.com",
                phone: "+91 32109-87654",
                membershipLevel: "Platinum",
                favoriteDrink: "Cortado",
                totalOrders: 73,
                joinDate: "2022-09-15"
            },
            {
                id: 8,
                name: "Aditya Kumar",
                email: "aditya.kumar@email.com",
                phone: "+91 21098-76543",
                membershipLevel: "Silver",
                favoriteDrink: "Ristretto",
                totalOrders: 26,
                joinDate: "2023-05-08"
            }
        ];

        this.filteredEvents = [...this.events];
        this.filteredCustomers = [...this.customers]; // Changed from this.filteredStudents to this.filteredCustomers
    }

    // Setup event listeners
    setupEventListeners() {
        // Logout button
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Event filter
        document.getElementById('eventFilter').addEventListener('change', (e) => {
            this.filterEvents(e.target.value);
        });

        // Customer search
        document.getElementById('customerSearch').addEventListener('input', (e) => {
            this.searchCustomers(e.target.value);
        });

        // Modal close buttons
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.target.closest('.modal').style.display = 'none';
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });

        // Add refresh data button functionality
        this.addRefreshButton();
    }

    // Add refresh data button
    addRefreshButton() {
        const headerContent = document.querySelector('.header-content');
        const refreshBtn = document.createElement('button');
        refreshBtn.className = 'refresh-btn';
        refreshBtn.innerHTML = '🔄 Refresh Data';
        
        refreshBtn.addEventListener('click', () => {
            this.refreshData();
        });

        headerContent.appendChild(refreshBtn);
    }

    // Add visual enhancements
    addVisualEnhancements() {
        // Add subtle animations to stats cards
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });

        // Add hover effects to coffee background elements
        const coffeeElements = document.querySelectorAll('.coffee-bg');
        coffeeElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.1)';
                element.style.opacity = '0.2';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
                element.style.opacity = element.classList.contains('coffee-cup') ? '0.10' : 
                                     element.classList.contains('coffee-beans') ? '0.12' : '0.09';
            });
        });
    }

    // Refresh data
    async refreshData() {
        const refreshBtn = document.querySelector('.refresh-btn');
        const originalText = refreshBtn.innerHTML;
        
        refreshBtn.innerHTML = '🔄 Loading...';
        refreshBtn.disabled = true;
        
        try {
            await this.loadDataFromSource();
            this.renderDashboard();
            
            // Show success message
            this.showNotification('Data refreshed successfully!', 'success');
        } catch (error) {
            this.showNotification('Failed to refresh data', 'error');
        } finally {
            refreshBtn.innerHTML = originalText;
            refreshBtn.disabled = false;
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Set background color based on type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #d4a574 0%, #8b4513 100%)';
        }

        document.body.appendChild(notification);

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Render dashboard
    renderDashboard() {
        this.updateStats();
        this.renderEvents();
        this.renderCustomers(); // Changed from renderStudents to renderCustomers
        this.updateDataSourceIndicator();
    }

    // Update data source indicator
    updateDataSourceIndicator() {
        const brand = document.querySelector('.brand p');
        brand.textContent = `Dashboard (${this.dataSource} data)`;
    }

    // Update statistics
    updateStats() {
        const totalEvents = this.events.length;
        const totalCustomers = this.customers.length; // Changed from totalStudents to totalCustomers
        const upcomingEvents = this.events.filter(event => new Date(event.date) >= new Date()).length;

        document.getElementById('totalEvents').textContent = totalEvents;
        document.getElementById('totalCustomers').textContent = totalCustomers; // Changed from totalStudents to totalCustomers
        document.getElementById('upcomingEvents').textContent = upcomingEvents;

        // Add animation to stats
        this.animateStats();
    }

    // Animate statistics
    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-card p');
        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 20;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    currentValue = finalValue;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(currentValue);
            }, 50);
        });
    }

    // Filter events
    filterEvents(filterType) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        switch (filterType) {
            case 'upcoming':
                this.filteredEvents = this.events.filter(event => new Date(event.date) >= today);
                break;
            case 'past':
                this.filteredEvents = this.events.filter(event => new Date(event.date) < today);
                break;
            default:
                this.filteredEvents = [...this.events];
        }

        this.renderEvents();
    }

    // Search customers
    searchCustomers(query) {
        if (!query.trim()) {
            this.filteredCustomers = [...this.customers]; // Changed from this.filteredStudents to this.filteredCustomers
        } else {
            const searchTerm = query.toLowerCase();
            this.filteredCustomers = this.customers.filter(customer => 
                customer.name.toLowerCase().includes(searchTerm) ||
                customer.email.toLowerCase().includes(searchTerm) ||
                customer.phone.toLowerCase().includes(searchTerm)
            );
        }

        this.renderCustomers(); // Changed from renderStudents to renderCustomers
    }

    // Render events
    renderEvents() {
        const container = document.getElementById('eventsContainer');
        
        if (this.filteredEvents.length === 0) {
            container.innerHTML = '<div class="loading">No events found</div>';
            return;
        }

        container.innerHTML = this.filteredEvents.map(event => `
            <div class="event-card" onclick="enhancedDashboardModule.showEventDetails(${event.id})">
                <div class="event-image">${event.image}</div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-date">${this.formatDate(event.date)} at ${event.time}</p>
                    <p class="event-description">${event.description}</p>
                    <div class="event-meta">
                        <span>📍 ${event.location}</span>
                        <span>👥 ${event.attendees}/${event.maxAttendees}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add animation to event cards
        this.animateCards('.event-card');
    }

    // Upcoming events list removed per request

    // Render customers
    renderCustomers() {
        const container = document.getElementById('customersContainer');
        
        if (this.filteredCustomers.length === 0) {
            container.innerHTML = '<div class="loading">No customers found</div>';
            return;
        }

        container.innerHTML = this.filteredCustomers.map(customer => `
            <div class="customer-card" onclick="enhancedDashboardModule.showCustomerDetails(${customer.id})">
                <div class="customer-avatar">${customer.name.charAt(0)}</div>
                <h3 class="customer-name">${customer.name}</h3>
                <p class="customer-email">${customer.email}</p>
                
                <div class="customer-details">
                    <div class="customer-detail">
                        <span class="detail-label">Membership</span>
                        <span class="detail-value">${customer.membershipLevel}</span>
                    </div>
                    <div class="customer-detail">
                        <span class="detail-label">Favorite Drink</span>
                        <span class="detail-value">${customer.favoriteDrink}</span>
                    </div>
                    <div class="customer-detail">
                        <span class="detail-label">Total Orders</span>
                        <span class="detail-value">${customer.totalOrders}</span>
                    </div>
                    <div class="customer-detail">
                        <span class="detail-label">Join Date</span>
                        <span class="detail-value">${this.formatDate(customer.joinDate)}</span>
                    </div>
                </div>
                
                <span class="membership-badge membership-${customer.membershipLevel.toLowerCase()}">${customer.membershipLevel}</span>
                <div class="customer-phone">📞 ${customer.phone}</div>
            </div>
        `).join('');

        // Add animation to customer cards
        this.animateCards('.customer-card');
    }

    // Animate cards
    animateCards(selector) {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Show event details in modal
    showEventDetails(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (!event) return;

        const modal = document.getElementById('eventModal');
        const content = document.getElementById('modalContent');

        content.innerHTML = `
            <h2>${event.title}</h2>
            <div class="event-image" style="margin: 1rem 0;">${event.image}</div>
            <p><strong>Date:</strong> ${this.formatDate(event.date)}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Capacity:</strong> ${event.registered}/${event.capacity} registered</p>
            <p><strong>Description:</strong></p>
            <p>${event.description}</p>
        `;

        modal.style.display = 'block';
    }

    // Show customer details in modal
    showCustomerDetails(customerId) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) return;

        const modal = document.getElementById('customerModal');
        const content = document.getElementById('customerModalContent');

        content.innerHTML = `
            <h2>${customer.name}</h2>
            <div class="customer-avatar" style="margin: 1rem 0;">${customer.name.charAt(0)}</div>
            <p><strong>Email:</strong> ${customer.email}</p>
            <p><strong>Phone:</strong> ${customer.phone}</p>
            <p><strong>Membership Level:</strong> ${customer.membershipLevel}</p>
            <p><strong>Favorite Drink:</strong> ${customer.favoriteDrink}</p>
            <p><strong>Total Orders:</strong> ${customer.totalOrders}</p>
            <p><strong>Join Date:</strong> ${this.formatDate(customer.joinDate)}</p>
        `;

        modal.style.display = 'block';
    }

    // Format date
    formatDate(dateString) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // Logout function
    logout() {
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    }
}

// Add CSS animations for enhanced experience
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }

    @keyframes fadeInUp {
        from { 
            opacity: 0; 
            transform: translateY(30px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
    }

    .coffee-bg {
        transition: all 0.3s ease;
    }

    .stat-card {
        animation: fadeInUp 0.8s ease forwards;
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Initialize enhanced dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.enhancedDashboardModule = new EnhancedDashboardModule();
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedDashboardModule;
}
