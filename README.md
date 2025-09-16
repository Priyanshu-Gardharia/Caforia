# Caforia Dashboard - Events & Student Profiles Module

A comprehensive web-based module that displays events and student profiles dynamically after successful user login. Built with modern JavaScript (ES6+), HTML5, and CSS3.

## Features

### 🔐 Authentication System
- Secure login with user validation
- Session management using localStorage
- Automatic redirect to dashboard after successful login
- Logout functionality

### 📊 Dashboard Overview
- Welcome section with personalized user greeting
- Statistics cards showing total events, students, and upcoming events
- Real-time data updates

### 🎯 Events Management
- Dynamic event display with filtering options
- Event categories (Workshop, Training, Networking, Education, Competition)
- Event details including date, time, location, capacity, and registration status
- Filter events by: All Events, Upcoming Events, Past Events
- Click on events to view detailed information in modal

### 👥 Student Profiles
- Student information display with search functionality
- Course enrollment details and progress tracking
- Student interests and contact information
- Search students by name, email, or course
- Click on student cards to view detailed profiles in modal

### 🔄 Data Management
- **Embedded Data**: Sample data included in JavaScript for immediate use
- **External JSON**: Load data from external `data.json` file
- Automatic fallback to embedded data if external loading fails
- Refresh data button to reload from source
- Real-time data source indicator

## File Structure

```
├── dashboard.html          # Main dashboard page
├── dashboard.css           # Dashboard styling
├── dashboard.js            # Basic dashboard functionality
├── dashboard-enhanced.js   # Enhanced version with external data loading
├── data.json              # Sample JSON data file
├── login.html             # Login page
├── login.js               # Login functionality
├── README.md              # This documentation
└── picture/               # Image assets
```

## Quick Start

### 1. Login
1. Open `login.html` in your browser
2. Use demo credentials:
   - **Email**: `demo@cafforia.com`
   - **Password**: `demo123`
3. Or create a new account through the signup page

### 2. Access Dashboard
After successful login, you'll be automatically redirected to the dashboard showing:
- Events overview
- Student profiles
- Statistics and metrics

### 3. Interact with Data
- **Filter Events**: Use the dropdown to filter events by type
- **Search Students**: Use the search bar to find specific students
- **View Details**: Click on any event or student card to see detailed information
- **Refresh Data**: Use the refresh button to reload data from source

## Data Structure

### Events JSON Format
```json
{
  "id": 1,
  "title": "Event Title",
  "description": "Event description",
  "date": "2024-02-15",
  "time": "14:00",
  "location": "Event Location",
  "capacity": 25,
  "registered": 18,
  "category": "Workshop",
  "image": "☕"
}
```

### Students JSON Format
```json
{
  "id": 1,
  "name": "Student Name",
  "email": "student@email.com",
  "course": "Course Name",
  "enrollmentDate": "2024-01-15",
  "progress": 75,
  "phone": "+1 (555) 123-4567",
  "interests": ["Interest 1", "Interest 2"]
}
```

## Customization

### Adding New Events
1. **External JSON**: Add new events to `data.json`
2. **Embedded**: Modify the `events` array in `dashboard.js`

### Adding New Students
1. **External JSON**: Add new students to `data.json`
2. **Embedded**: Modify the `students` array in `dashboard.js`

### Styling
- Modify `dashboard.css` to change colors, fonts, and layout
- The design uses CSS Grid and Flexbox for responsive layouts
- Custom CSS variables can be added for easy theming

### Data Source
- **Default**: System automatically tries to load from `data.json`
- **Fallback**: If external loading fails, uses embedded data
- **Manual Refresh**: Use the refresh button to reload data

## Browser Compatibility

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Features Used**: ES6 Classes, Arrow Functions, Template Literals, Fetch API
- **Fallbacks**: Basic functionality works in older browsers

## Security Features

- Authentication required to access dashboard
- Session validation on page load
- Automatic logout on authentication failure
- Secure redirect handling

## Performance Features

- Lazy loading of data
- Efficient DOM manipulation
- Responsive design for mobile devices
- Optimized event handling

## Troubleshooting

### Dashboard Not Loading
1. Check if you're logged in
2. Verify `dashboard.js` is properly linked
3. Check browser console for errors

### Data Not Displaying
1. Verify `data.json` exists and is valid JSON
2. Check browser console for fetch errors
3. Ensure proper file permissions

### Styling Issues
1. Verify `dashboard.css` is properly linked
2. Check for CSS conflicts with other stylesheets
3. Ensure proper CSS selector specificity

## Future Enhancements

- [ ] Real-time data updates via WebSocket
- [ ] Export functionality (PDF, Excel)
- [ ] Advanced filtering and sorting
- [ ] User role management
- [ ] Event registration system
- [ ] Student progress tracking
- [ ] Mobile app version

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or issues:
1. Check the troubleshooting section
2. Review browser console for errors
3. Verify file paths and permissions
4. Test with different browsers

---

**Built with ❤️ for the Caforia Coffee Academy**
