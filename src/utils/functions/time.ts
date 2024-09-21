export function timeAgo(timestamp: number | string): string {
    const now = new Date();
    const then = new Date(timestamp);
    const days = Math.floor((now.getTime() - then.getTime()) / 86400000); // Calculate the difference in days

    if (days === 0) {
        return 'Today'; // If the event is today
    } else if (days === 1) {
        return 'Yesterday'; // If the event was yesterday
    } else {
        return `${days} days ago`; // Return the number of days ago
    }
}



// Example usage:
const timestamp = new Date('2023-09-15T10:00:00Z').getTime(); // Replace with your timestamp
console.log(timeAgo(timestamp));
