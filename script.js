document.addEventListener("DOMContentLoaded", function() {
    const holidayStatus = document.getElementById('holiday-status');
    const currentDate = new Date();
    const holidays = [
        '2024-01-01', // New Year's Day
        '2024-04-07', // Good Friday
        '2024-04-10', // Easter Monday
        '2024-05-01', // Labour Day
        '2024-05-09', // Ascension Day
        '2024-06-20', // Whit Monday
        '2024-10-03', // Day of German Unity
        '2024-12-25', // Christmas Day
        '2024-12-26'  // Boxing Day
    ];

    // Get current date in 'YYYY-MM-DD' format
    const today = currentDate.toLocaleDateString('en-GB');  // Using 'en-GB' ensures the date format is DD/MM/YYYY

    // Adjust format to YYYY-MM-DD to match the format in holidays array
    const todayFormatted = today.split('/').reverse().join('-');  // Convert to 'YYYY-MM-DD'

    if (holidays.includes(todayFormatted)) {
        holidayStatus.innerText = "Yes, today is a holiday!";
    } else {
        holidayStatus.innerText = "No, today is not a holiday.";
    }
});
