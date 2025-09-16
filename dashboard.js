// Dashboard Module - Events and Student Profiles Display
class DashboardModule {
    constructor() {
        this.events = [];
        this.customers = [];
        this.filteredEvents = [];
        this.filteredCustomers = [];
        this.currentUser = null;
        
        this.init();
    }

    init() {
        this.checkAuthentication();
        this.loadData();
        this.setupEventListeners();
        this.renderDashboard();
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

    // Load sample data (in real app, this would come from an API)
    loadData() {
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
        this.filteredCustomers = [...this.customers];
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
    }

    // Render dashboard
    renderDashboard() {
        this.updateStats();
        this.renderEvents();
        this.renderCustomers();
    }

    // Update statistics
    updateStats() {
        const totalEvents = this.events.length;
        const totalCustomers = this.customers.length;
        const upcomingEvents = this.events.filter(event => new Date(event.date) >= new Date()).length;

        document.getElementById('totalEvents').textContent = totalEvents;
        document.getElementById('totalCustomers').textContent = totalCustomers;
        document.getElementById('upcomingEvents').textContent = upcomingEvents;
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
            this.filteredCustomers = [...this.customers];
        } else {
            const searchTerm = query.toLowerCase();
            this.filteredCustomers = this.customers.filter(customer => 
                customer.name.toLowerCase().includes(searchTerm) ||
                customer.email.toLowerCase().includes(searchTerm) ||
                customer.phone.toLowerCase().includes(searchTerm)
            );
        }

        this.renderCustomers();
    }

    // Render events
    renderEvents() {
        const container = document.getElementById('eventsContainer');
        
        if (this.filteredEvents.length === 0) {
            container.innerHTML = '<div class="loading">No events found</div>';
            return;
        }

        container.innerHTML = this.filteredEvents.map(event => `
            <div class="event-card" onclick="dashboardModule.showEventDetails(${event.id})">
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
            <div class="customer-card" onclick="dashboardModule.showCustomerDetails(${customer.id})">
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

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboardModule = new DashboardModule();
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DashboardModule;
}
