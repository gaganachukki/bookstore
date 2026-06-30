
document.addEventListener('DOMContentLoaded', () => {
    // Shared styling variables
    const textColor = '#554c44';
    const gridColor = '#e5e0d8';
    const fontFam = "'Inter', sans-serif";

    // Admin Dashboard Charts
    const adminBarCtx = document.getElementById('adminBarChart');
    if (adminBarCtx) {
        new Chart(adminBarCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [12500, 15000, 11000, 18000, 16500, 18500],
                    backgroundColor: '#df7a3e',
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { family: fontFam } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor, font: { family: fontFam } }
                    }
                }
            }
        });
    }

    const adminPieCtx = document.getElementById('adminPieChart');
    if (adminPieCtx) {
        new Chart(adminPieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#df7a3e', '#5a4634', '#a68b75', '#d4c5b9'],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: textColor, font: { family: fontFam } }
                    }
                },
                cutout: '70%'
            }
        });
    }

    // User Dashboard Charts
    const userBarCtx = document.getElementById('userBarChart');
    if (userBarCtx) {
        new Chart(userBarCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Books Read',
                    data: [2, 3, 1, 4, 2, 5],
                    backgroundColor: '#5a4634',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor },
                        ticks: { stepSize: 1, color: textColor, font: { family: fontFam } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor, font: { family: fontFam } }
                    }
                }
            }
        });
    }

    const userPieCtx = document.getElementById('userPieChart');
    if (userPieCtx) {
        new Chart(userPieCtx, {
            type: 'pie',
            data: {
                labels: ['Fantasy', 'Thriller', 'Biography'],
                datasets: [{
                    data: [60, 25, 15],
                    backgroundColor: ['#df7a3e', '#a68b75', '#e5e0d8'],
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: textColor, font: { family: fontFam } }
                    }
                }
            }
        });
    }
});
