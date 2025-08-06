document.addEventListener('DOMContentLoaded', function() {
    // Dashboard elements
    const actionButtons = document.querySelectorAll('.action-btn');
    const viewAllBtn = document.querySelector('.view-all-btn');
    const statCards = document.querySelectorAll('.stat-card');
    const activityItems = document.querySelectorAll('.activity-item');

    // Dashboard interactions
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            console.log('Action clicked:', action);
            
            // Show action feedback
            const originalText = this.querySelector('span').textContent;
            this.querySelector('span').textContent = 'Loading...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.querySelector('span').textContent = originalText;
                this.style.opacity = '1';
                
                // Show success message
                showNotification(`${action} action completed successfully!`);
            }, 1500);
        });
    });

    // View all activities button
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            console.log('View all activities clicked');
            showNotification('Opening all activities...');
        });
    }

    // Stat cards hover effects
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Activity items click handlers
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.activity-title').textContent;
            console.log('Activity clicked:', title);
            showNotification(`Viewing details for: ${title}`);
        });
    });

    // Show notification function
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b6b, #ff4757);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add some interactive background elements
    function createBackgroundElements() {
        const backgroundDesign = document.querySelector('.background-design');
        
        // Add more dynamic lines
        for (let i = 0; i < 3; i++) {
            const line = document.createElement('div');
            line.style.position = 'absolute';
            line.style.height = '1px';
            line.style.width = Math.random() * 100 + 50 + 'px';
            line.style.background = `linear-gradient(90deg, #ff6b6b${Math.random() * 0.5 + 0.5}, #ff8e8e)`;
            line.style.top = Math.random() * 80 + 10 + '%';
            line.style.left = Math.random() * 80 + 10 + '%';
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            line.style.opacity = '0.3';
            backgroundDesign.appendChild(line);
        }
    }

    // Initialize background elements
    createBackgroundElements();

    // Add hover effects to dashboard elements
    const dashboardElements = document.querySelectorAll('.stat-card, .activity-item, .action-btn');
    dashboardElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Simulate real-time updates
    function simulateUpdates() {
        // Update stat numbers randomly
        setInterval(() => {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const currentValue = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
                const newValue = Math.max(0, currentValue + change);
                
                if (stat.textContent.includes('%')) {
                    stat.textContent = Math.min(100, Math.max(0, parseFloat(stat.textContent) + (Math.random() - 0.5) * 2)).toFixed(1) + '%';
                } else if (stat.textContent.includes('h')) {
                    stat.textContent = (parseFloat(stat.textContent) + (Math.random() - 0.5) * 0.5).toFixed(1) + 'h';
                } else {
                    stat.textContent = newValue.toLocaleString();
                }
            });
        }, 10000); // Update every 10 seconds
    }

    // Start simulation
    simulateUpdates();

    // Fix n8n chat button styling
    function fixChatButtonStyling() {
        // Wait for n8n chat widget to load
        setTimeout(() => {
            const sendButtons = document.querySelectorAll('#n8n-chat-widget button.chat-input-send-button');
            sendButtons.forEach(button => {
                // Force apply styles
                button.style.setProperty('background', '#ff4757', 'important');
                button.style.setProperty('color', '#ffffff', 'important');
                button.style.setProperty('border', 'none', 'important');
                button.style.setProperty('border-radius', '50%', 'important');
                button.style.setProperty('width', '44px', 'important');
                button.style.setProperty('height', '44px', 'important');
                button.style.setProperty('display', 'flex', 'important');
                button.style.setProperty('align-items', 'center', 'important');
                button.style.setProperty('justify-content', 'center', 'important');
                button.style.setProperty('cursor', 'pointer', 'important');
                button.style.setProperty('transition', 'all 0.2s ease', 'important');
                button.style.setProperty('opacity', '1', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('box-shadow', '0 2px 8px rgba(255, 107, 107, 0.3)', 'important');

                // Add event listeners for dynamic styling
                button.addEventListener('mouseenter', function() {
                    this.style.setProperty('background', '#ff6b6b', 'important');
                    this.style.setProperty('box-shadow', '0 4px 12px rgba(255, 107, 107, 0.4)', 'important');
                });

                button.addEventListener('mouseleave', function() {
                    if (!this.disabled) {
                        this.style.setProperty('background', '#ff4757', 'important');
                        this.style.setProperty('box-shadow', '0 2px 8px rgba(255, 107, 107, 0.3)', 'important');
                    }
                });

                // Monitor disabled state
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
                            if (button.disabled) {
                                button.style.setProperty('background', '#e9ecef', 'important');
                                button.style.setProperty('color', '#6c757d', 'important');
                                button.style.setProperty('opacity', '0.6', 'important');
                                button.style.setProperty('cursor', 'not-allowed', 'important');
                                button.style.setProperty('box-shadow', 'none', 'important');
                            } else {
                                button.style.setProperty('background', '#ff4757', 'important');
                                button.style.setProperty('color', '#ffffff', 'important');
                                button.style.setProperty('opacity', '1', 'important');
                                button.style.setProperty('cursor', 'pointer', 'important');
                                button.style.setProperty('box-shadow', '0 2px 8px rgba(255, 107, 107, 0.3)', 'important');
                            }
                        }
                    });
                });

                observer.observe(button, {
                    attributes: true,
                    attributeFilter: ['disabled']
                });
            });
        }, 2000); // Wait 2 seconds for widget to load
    }

    // Apply chat button styling
    fixChatButtonStyling();

    console.log('Patuh PDP Dashboard loaded successfully!');
}); 