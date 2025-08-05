# Patuh PDP Dashboard

A modern dashboard interface for data protection operations with an embedded n8n chat widget that connects to your webhook.

## Features

- **Dashboard Interface**: Complete dashboard with statistics, activities, and quick actions
- **n8n Chat Widget**: Embedded chat assistant using the official n8n chat widget
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design with Patuh PDP branding
- **Interactive Elements**: Hover effects, notifications, and real-time updates

## Files Structure

```
├── index.html          # Main HTML file with dashboard and n8n chat widget
├── styles.css          # CSS styling for dashboard
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Open the Application**: Simply open `index.html` in your web browser
2. **Dashboard Overview**: 
   - View statistics cards showing data requests, compliance rate, response time, and active users
   - Check recent activities for data protection operations
   - Use quick action buttons for common tasks
3. **n8n Chat Widget**: 
   - The n8n chat widget will appear automatically in the bottom-right corner
   - Click to open the chat interface
   - Type your message and press Enter or click the send button
   - The chat connects to your n8n webhook at: `https://n8n-xjrdisltisbw.ceri.sumopod.my.id/webhook/0f1be330-14ba-4774-ba99-f34e6d886cae/chat`

## Dashboard Components

### Statistics Cards
- **Data Requests**: Shows total number of data subject requests
- **Compliance Rate**: Displays current compliance percentage
- **Avg Response Time**: Average time to respond to requests
- **Active Users**: Number of active system users

### Recent Activities
- Data subject request processing
- Data deletion requests
- Data rectification activities
- Click any activity to view details

### Quick Actions
- **New Request**: Create new data protection request
- **Export Report**: Generate and download reports
- **Settings**: Access system configuration
- **Help**: Get assistance and documentation

## n8n Chat Widget Integration

The application uses the official n8n chat widget via CDN embed with custom styling and Indonesian language:

```html
<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<script type="module">
    import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

    createChat({
        webhookUrl: 'https://n8n-xjrdisltisbw.ceri.sumopod.my.id/webhook/0f1be330-14ba-4774-ba99-f34e6d886cae/chat',
        target: '#n8n-chat-widget',
        mode: 'window',
        showWelcomeScreen: true,
        defaultLanguage: 'id',
        initialMessages: [
            'Halo aku adalah Teman PDP yang memiliki wawasan seputar Pelindungan Data Pribadi di Indonesia, kamu boleh tanya apa aja seputar itu!'
        ],
        i18n: {
            id: {
                title: 'Teman PDP',
                subtitle: 'Asisten Pelindung Data Pribadi Indonesia',
                getStarted: 'Mulai Percakapan Baru',
                inputPlaceholder: 'Ketik pertanyaan Anda...',
            },
        },
        theme: {
            primaryColor: '#ff4757',
            secondaryColor: '#ff6b6b',
            backgroundColor: '#ffffff',
            textColor: '#333333',
            borderColor: '#e9ecef',
            borderRadius: '12px',
            shadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        }
    });
</script>
```

### Webhook Configuration

The chat widget sends messages to your n8n webhook with the following JSON structure:

```json
{
  "message": "user message",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "user_id": "web_user_1234567890"
}
```

The webhook should respond with:

```json
{
  "response": "bot response message"
}
```

## Customization

### Changing the Webhook URL
Edit the `webhookUrl` in the `createChat` function in `index.html`:

```javascript
createChat({
    webhookUrl: 'your-new-webhook-url'
});
```

### Styling
- Modify `styles.css` to change colors, fonts, and layout
- The main brand colors are red (`#ff4757`, `#ff6b6b`) and white
- The n8n chat widget handles its own styling

### Functionality
- Edit `script.js` to modify dashboard interactions
- The n8n chat widget handles all chat functionality automatically

## Interactive Features

- **Hover Effects**: Cards and buttons have smooth hover animations
- **Notifications**: Action feedback with sliding notifications
- **Real-time Updates**: Statistics update automatically every 10 seconds
- **Responsive Design**: Adapts to different screen sizes
- **n8n Chat Widget**: Professional chat interface with built-in features

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- This is a frontend-only application for demonstration purposes
- The dashboard simulates data protection operations
- The n8n chat widget requires your webhook to be active and responding
- All data is processed client-side with simulated updates
- The n8n chat widget provides a professional chat experience

## Troubleshooting

1. **Chat not working**: Check if your n8n webhook is active and responding
2. **Styling issues**: Ensure all CSS files are loaded properly
3. **Console errors**: Check browser console for any JavaScript errors
4. **Performance**: The dashboard includes animations and real-time updates
5. **n8n widget issues**: Check the n8n documentation for widget configuration

## Development

To modify the application:

1. Edit `index.html` for structure changes and webhook URL
2. Modify `styles.css` for visual changes  
3. Update `script.js` for functionality changes

The application uses vanilla HTML, CSS, and JavaScript with the n8n chat widget CDN - no build process required!

## Patuh PDP Branding

This application uses "Patuh PDP" branding with a professional data protection theme. The design focuses on data protection operations with a clean, modern interface and integrated n8n chat widget for seamless user assistance. 