console.log('App Initialized');

// Navigation Logic
function switchTab(tabName) {
    // Hide all views
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => view.classList.add('hidden'));

    // Remove active state from all nav buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active', 'text-purple-500'));
    navBtns.forEach(btn => btn.classList.add('text-gray-500'));

    // Show selected view
    if (tabName === 'messages') {
        // Just a placeholder for now
        alert('قسم الرسائل قيد التطوير');
        document.getElementById('view-home').classList.remove('hidden');
        return;
    }

    const selectedView = document.getElementById(`view-${tabName}`);
    if (selectedView) {
        selectedView.classList.remove('hidden');
    }

    // Update nav button style
    // Find the button that calls this function with this tabName
    // Simple workaround: loop and find by onclick attribute or index
    // Better: use event delegation, but for simplicity here:
    const activeBtn = Array.from(navBtns).find(btn => btn.getAttribute('onclick').includes(tabName));
    if (activeBtn) {
        activeBtn.classList.add('active', 'text-purple-500');
        activeBtn.classList.remove('text-gray-500');
    }
}

// Room Logic
function openRoom(roomId) {
    const overlay = document.getElementById('room-overlay');
    overlay.classList.remove('hidden');
    // Small timeout to allow removing 'hidden' to take effect before translating
    setTimeout(() => {
        overlay.classList.remove('translate-y-full');
    }, 10);
    
    console.log(`Joined room: ${roomId}`);
}

function closeRoom() {
    const overlay = document.getElementById('room-overlay');
    overlay.classList.add('translate-y-full');
    
    // Wait for transition to finish before hiding
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300);
}

// Mock Chat Auto-Scroll
document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    if (chatLog) {
        chatLog.scrollTop = chatLog.scrollHeight;
    }
});