// Mock teacher credentials (replace with actual authentication system in production)
const teachers = [
    { id: 'Govardhan05', password: 'GovardhanRajulapati@DreamTeam' },
    { id: 'Srinu01', password: 'Srinu@123' },
    { id: 'Rakesh0880', password: 'Rakesh@0880' },
    { id: 'Gagan781199', password: 'Gagan@781199' },
    { id: 'Guru6303', password: 'Guru@6303' }
];

// Mock student data (replace with actual data fetching in production)


// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

// Check login status
function checkLoginStatus() {
    const storedTeacher = JSON.parse(localStorage.getItem('teacher'));
    if (storedTeacher) {
        const teacher = teachers.find(t => t.id === storedTeacher.id);
        if (teacher) {
            showAttendancePage();
        } else {
            logout();
        }
    } else {
        showLoginPage();
    }
}

// Show login page
function showLoginPage() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('attendancePage').style.display = 'none';
}

// Show attendance page
function showAttendancePage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('attendancePage').style.display = 'block';
    loadAttendanceTable();
}

// Logout function
function logout() {
    localStorage.removeItem('teacher');
    localStorage.removeItem('loginTime');
    showLoginPage();
}

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('userID').value;
    const password = document.getElementById('userPassword').value;

    const teacher = teachers.find(t => t.id === id && t.password === password);
    if (teacher) {
        localStorage.setItem('teacher', JSON.stringify({ id: teacher.id }));
        localStorage.setItem('loginTime', new Date().toISOString());
        showAttendancePage();
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Load attendance table
function loadAttendanceTable() {
    const branchFilter = document.getElementById('branchFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();

    const filteredStudents = students.filter(student => 
        (branchFilter === '' || student.branch === branchFilter) &&
        (yearFilter === '' || student.year === yearFilter) &&
        (student.name.toLowerCase().includes(searchTerm) || student.rollNo.toLowerCase().includes(searchTerm))
    );

    const tableBody = document.getElementById('attendanceTableBody');
    tableBody.innerHTML = '';

    filteredStudents.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = student.rollNo;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.branch;
        row.insertCell(3).textContent = student.year;
        
        const attendanceCell = row.insertCell(4);
        attendanceCell.innerHTML = `
            <label><input type="radio" name="attendance_${student.rollNo}" value="present"> P</label>
            <label><input type="radio" name="attendance_${student.rollNo}" value="absent"> A</label>
        `;

        // Add click event listeners to the radio buttons
        const radioButtons = attendanceCell.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('click', function() {
                if (this.classList.contains('checked')) {
                    this.checked = false;
                    this.classList.remove('checked');
                    row.style.backgroundColor = ''; // Reset background color
                } else {
                    radioButtons.forEach(r => r.classList.remove('checked'));
                    this.classList.add('checked');
                    row.style.backgroundColor = this.value === 'present' ? '#90EE90' : '#FFB6C6'; // Light green for present, light red for absent
                }
            });
        });

        // Add click event listener to the row for highlighting
        row.addEventListener('click', function(e) {
            if (e.target.type !== 'radio') {
                this.style.backgroundColor = this.style.backgroundColor === 'orange' ? '' : 'orange';
            }
        });
    });
}


// Event listeners for filters and search
document.getElementById('branchFilter').addEventListener('change', loadAttendanceTable);
document.getElementById('yearFilter').addEventListener('change', loadAttendanceTable);
document.getElementById('searchBar').addEventListener('input', loadAttendanceTable);

// Submit attendance
document.getElementById('submitAttendance').addEventListener('click', function() {
    const storedTeacher = JSON.parse(localStorage.getItem('teacher'));
    if (!storedTeacher) {
        alert('Your session has expired. Please login again.');
        logout();
        return;
    }

    const loginTime = localStorage.getItem('loginTime');
    const closingTime = new Date().toISOString();
    const sessionDuration = (new Date(closingTime) - new Date(loginTime)) / 1000; // in seconds

    const allAttendanceData = getAttendanceData(storedTeacher.id, loginTime, closingTime, sessionDuration);

    // Group attendance data by year
    const groupedData = groupAttendanceDataByYear(allAttendanceData);

    // Send data to respective Google Sheets
    Object.entries(groupedData).forEach(([year, data]) => {
        const sheetID = getSheetIDForYear(year);
        sendAttendanceData(sheetID, data);
    });

    // Send all data to the default sheet
    const defaultSheetID = getSheetIDForYear('default');
    sendAttendanceData(defaultSheetID, allAttendanceData);

    alert('Attendance submitted successfully for all years!');
    resetAttendance();
});

// Get attendance data
// Get attendance data
function getAttendanceData() {
    const attendanceData = [];
    const rows = document.getElementById('attendanceTableBody').rows;
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    });

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        const rollNo = cells[0].textContent;
        const name = cells[1].textContent;
        const branch = cells[2].textContent;
        const year = cells[3].textContent;
        const attendanceRadio = document.querySelector(`input[name="attendance_${rollNo}"].checked`);
        
        // Only add data if attendance is explicitly marked
        if (attendanceRadio) {
            attendanceData.push({
                timestamp: timestamp,
                rollNo: rollNo,
                name: name,
                branch: branch,
                year: year,
                attendance: attendanceRadio.value
            });
        }
    }
    return attendanceData;
}
// Group attendance data by year
function groupAttendanceDataByYear(data) {
    return data.reduce((acc, item) => {
        const year = item.year.split(' ')[0]; // Extract year number (e.g., '1st' from '1st year')
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(item);
        return acc;
    }, {});
}

// Get Google Sheet ID based on year
function getSheetIDForYear(year) {
    switch (year) {
        case '1st':
        case '1st year': 
            return 'AKfycbwsVlClJsCCppGNJsJ-qwbRYBFITCzZ3-ytG2y27riUkkJ9bxeJUklD6C8yd7bN-NckVQ';
        case '2nd':
        case '2nd year': 
            return 'AKfycbzcswAf9U3LdYKsT7-I8ZyqHnP8WnAYGpfWKPkua3RGRgEVfEHSh5M1fVUNc32Y12Bl';
        case '3rd':
        case '3rd year': 
            return 'AKfycbx0JZBChhBK0dYl-rAAh7ncQ_XvQO0pzfqERUg8mWz3V7O89rkNp17Di7AuwCLMqnMH';
        default: 
            return 'AKfycbxdAxtDCOJU6ExD20ENCMi6CrQqyuVjGAIG1BfV3_QNnX_42_HPmpH1vST_UOi6F8FJ';
    }
}

function sendAttendanceData(sheetID, data) {
    const url = `https://script.google.com/macros/s/${sheetID}/exec`;

    console.log('Sending data to sheet:', sheetID);
    console.log('Data being sent:', data);

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => {
        console.log('Response received:', response);
        console.log('Attendance submitted successfully to sheet:', sheetID);
    })
    .catch((error) => {
        console.error('Error sending data to sheet:', sheetID, error);
    });
}

// Reset attendance
function resetAttendance() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.checked = false);
}

function toggleFullscreen() {
    const tableContainer = document.querySelector('.table-container');
    if (!document.fullscreenElement) {
        if (tableContainer.requestFullscreen) {
            tableContainer.requestFullscreen();
        } else if (tableContainer.mozRequestFullScreen) { // Firefox
            tableContainer.mozRequestFullScreen();
        } else if (tableContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            tableContainer.webkitRequestFullscreen();
        } else if (tableContainer.msRequestFullscreen) { // IE/Edge
            tableContainer.msRequestFullscreen();
        }
        // document.getElementById('fullscreenBtn').textContent = '❌';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        document.getElementById('fullscreenBtn').textContent = '🔍';
    }
}

// Add fullscreen button event listener
document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);

// Add logout button event listener
document.getElementById('logoutButton').addEventListener('click', logout);

