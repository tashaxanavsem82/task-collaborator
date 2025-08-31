const socket = io();

// Code to handle real-time collaboration and task management will go here.

socket.on('connect', () => {
    console.log('Connected to the server');
});

socket.on('connect_error', (err) => {
    console.error('Connection failed:', err);
});

socket.on('disconnect', (reason) => {
    console.warn('Disconnected from the server. Reason:', reason);
});

socket.on('reconnect_attempt', () => {
    console.log('Attempting to reconnect...');
});