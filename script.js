// Mock teacher credentials (replace with actual authentication system in production)
const teachers = [
    { id: 'teacher1', password: 'password1' },
    { id: 'teacher2', password: 'password2' }
];

// Mock student data (replace with actual data fetching in production)
let students = [
    { rollNo: '24B21A42A0', name: 'CHELLUBOYINA NAGA LOKESH', branch: 'CSM', year: '1st year' },
    { rollNo: '24B21A4502', name: 'SASI SPANDANA BALLA', branch: 'AID', year: '1st year' },
    { rollNo: '246Q1A4505', name: 'Jangala Arvind Kumar', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4558', name: 'Choutapalli sumanth nihal', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4538', name: 'Pokuru Ramakrishna chari', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4557', name: 'Cheeday Pujith sai', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4626', name: 'ALLU VENKATA SAI MANIKANTA', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4619', name: 'karry joshi chandra', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4571', name: 'SAHU NARENDRA', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4616', name: 'Kagita Naga venkateswaro', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '246Q1A4605', name: 'Mopada Purna Durga satyam naidu', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4615', name: 'M.balaji sai swaroop', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4601', name: 'K Mrudula', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4536', name: 'Dwarampudi Bhargava Sai Rakesh Reddy', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4230', name: 'Suthapalli Durga Prasad', branch: 'CSM', year: '1st year' },
    { rollNo: '246Q1A4504', name: 'PITCHIKA REVANTH SATYA NAGA SRINIVAS', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4617', name: 'Bitra.Liladhayr', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4504', name: 'GRANDHI.RAMYA', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4539', name: 'Koyilada prem venkata satya Siva naidu', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4631', name: 'P.Ram Charan', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '246Q1A4602', name: 'Gandepalli Maruthi Venkatesh', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4511', name: 'Yasa.Divya naga durga pavani', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4518', name: 'Pathivada Pujitha', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4519', name: 'L.PUSHYA AASHRITHA', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4212', name: 'Samayamanthula Aasritha', branch: 'CSM', year: '1st year' },
    { rollNo: '24B21A4461', name: 'Manipati Sri Anand', branch: 'CSD', year: '1st year' },
    { rollNo: '24B21A4520', name: 'Hasini Addanki', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4329', name: 'Pilli.shanmukha sai venkata raju', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4307', name: 'Anitha Chowdary', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4522', name: 'Hemavathi saidhu', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4655', name: 'NUKALA PAVAN KARTHIK', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4607', name: 'B.Reshma sri', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A4606', name: 'Jyothika', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '24B21A45D5', name: 'yeduru abhiram', branch: 'AID', year: '1st year' },
    { rollNo: '24B21A4481', name: 'Guthula vinay', branch: 'CSD', year: '1st year' },
    { rollNo: '246Q1A4307', name: 'B. Yuvaraj', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4369', name: 'Dasari.asritha', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4370', name: 'MUGADA PAVAN SANTHOSH', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4479', name: 'Indugupalli Dinesh', branch: 'CSD', year: '1st year' },
    { rollNo: '246Q1A4311', name: 'KALLA VEERA VENKATA SATYA SAI', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4396', name: 'Athili Mounika devi', branch: 'CAI', year: '1st year' },
    { rollNo: '246Q1A4210', name: 'BYREDDY GURU VISHNU REDDY', branch: 'CSM', year: '1st year' },
    { rollNo: '24B21A4579', name: 'MUNURU SRAVANI', branch: 'AID', year: '1st year' },
    { rollNo: '246Q1A4316', name: 'Geesala Harshini', branch: 'CAI', year: '1st year' },
    { rollNo: '24B21A4435', name: 'yaswanth jada', branch: 'CSD', year: '1st year' },
    { rollNo: '24B21A4231', name: 'Kavati Eswararao', branch: 'CSM', year: '1st year' },
    { rollNo: '24B21A4389', name: 'MANEPALLI RAMESH', branch: 'CAI', year: '1st year' },
    { rollNo: '23B21A4531', name: 'Pranathi', branch: 'AID', year: '2nd year' },
    { rollNo: '236Q1A4504', name: 'Sanapathi susmitha', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4522', name: 'GADDAM MANASA PRIYA', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4504', name: 'Koyya bhavya akshaya', branch: 'AID', year: '2nd year' },
    { rollNo: '236Q1A4506', name: 'K Surya Praveen', branch: 'AID', year: '2nd year' },
    { rollNo: '237Q1A4505', name: 'Vijjina Rama Krishna', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4553', name: 'SURADA DHANESH', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4518', name: 'v.syamala', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4410', name: 'Vallam Reddy Allabhi Reddy', branch: 'CSD', year: '2nd year' },
    { rollNo: '23B21A4530', name: 'G. DEVI SRI', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4482', name: 'N.Pushpa Latha', branch: 'CSD', year: '2nd year' },
    { rollNo: '236Q1A4503', name: 'DASAMSETTI ABHI CHANDANA', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4412', name: 'K.vyshnavi', branch: 'CSD', year: '2nd year' },
    { rollNo: '23B21A4411', name: 'G.SAI PAVANI', branch: 'CSD', year: '2nd year' },
    { rollNo: '22B21A4276', name: 'TENELA BHAVANI', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A4279', name: 'Poojitha Karanam', branch: 'CSM', year: '3rd year' },
    { rollNo: '226Q1A4516', name: 'P N S S S ANAND', branch: 'AID', year: '3rd year' },
    { rollNo: '226Q1A4519', name: 'Udata Rama Koti Satya Pavan Kumar', branch: 'AID', year: '3rd year' },
    { rollNo: '23B21A4442', name: 'CHODISETTI SIVA NAGA SATYANARAYANA', branch: 'CSD', year: '2nd year' },
    { rollNo: '24B25A4507', name: 'A.Moksha Varshitha', branch: 'AID', year: '1st year' },
    { rollNo: '24B25A4504', name: 'Ayyanki Thanusha', branch: 'AID', year: '1st year' },
    { rollNo: '226Q1A4529', name: 'BalaRaja Chelikani', branch: 'AID', year: '3rd year' },
    { rollNo: '23B21A4413', name: 'T.Rishitha Sree', branch: 'CSD', year: '2nd year' },
    { rollNo: '22B21A4214', name: 'MUMMIDI YUVA VISHNU GOWRINADH', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A4287', name: 'D Vijaya Durga Prasad', branch: 'CSM', year: '3rd year' },
    { rollNo: '226Q1A4559', name: 'Nimmagadda Manikanata', branch: 'AID', year: '3rd year' },
    { rollNo: '226Q1A4510', name: 'Burela sivaramavenkatakrishna', branch: 'AID', year: '3rd year' },
    { rollNo: '24B25A4209', name: 'Y. Jaswanth Sai varma', branch: 'CSM', year: '1st year' },
    { rollNo: '22B21A4409', name: 'RAJANA SWATHI', branch: 'CSD', year: '3rd year' },
    { rollNo: '22B21A4335', name: 'MAGI SRI RAMA SATYA GANESH', branch: 'CAI', year: '3rd year' },
    { rollNo: '22B21A4355', name: 'P siva sai hanuaman', branch: 'CAI', year: '3rd year' },
    { rollNo: '22B21A4293', name: 'Ch.devi Vara Prasad', branch: 'CSM', year: '3rd year' },
    { rollNo: '226Q1A4410', name: 'Nittala Sai Vara Prasad Gupta', branch: 'CSD', year: '3rd year' },
    { rollNo: '24B25A4214', name: 'DARLA SATYANARAYANA', branch: 'CSM', year: '1st year' },
    { rollNo: '22B21A4320', name: 'A.mounika', branch: 'CAI', year: '3rd year' },
    { rollNo: '246Q5A4201', name: 'Vadlamuri Pardhiv', branch: 'CSM', year: '1st year' },
    { rollNo: '24B25A4210', name: 'K.Venkat Sai Tejesh', branch: 'CSM', year: '1st year' },
    { rollNo: '23B25A4211', name: 'NANDIKOLLA SATYA SURYA KIRAN', branch: 'CSM', year: '2nd year' },
    { rollNo: '22B21A4231', name: 'POLISETTI CHIRANJEEVI NAGA VENKATA SIVA SRAVAN KUMAR', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A4221', name: 'PENDYALA SATISH', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A4220', name: 'Madimetla Yashodhar', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A4312', name: 'YARRAM TEJASWINI', branch: 'CAI', year: '3rd year' },
    { rollNo: '22B21A4245', name: 'Dosakayalapati Tarun', branch: 'CSM', year: '3rd year' },
    { rollNo: '226Q1A4301', name: 'Roselin Katuri', branch: 'CAI', year: '3rd year' },
    { rollNo: '22B21A4575', name: 'Kanda Durga Veera Sai', branch: 'AID', year: '3rd year' },
    { rollNo: '22B21A4592', name: 'Pepakayala Meghana Ratna Maruthi', branch: 'AID', year: '3rd year' },
    { rollNo: '24B21A4673', name: 'Surampudimounika', branch: 'Cyber Security', year: '1st year' },
    { rollNo: '22B21A4246', name: 'KANDA NAGA DATTA', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A44D5', name: 'N kanaka Rathna chari', branch: 'CSD', year: '3rd year' },
    { rollNo: '22B21A42B8', name: 'REDDY NAGENDRA SWAMY', branch: 'CSM', year: '3rd year' },
    { rollNo: '22B21A4227', name: 'Madavarapu Sai Harshavardhan', branch: 'CSM', year: '3rd year' },
    { rollNo: '23B21A4538', name: 'PECHETTI SRIRAMA CHANDRA MURTHI', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4537', name: 'KOMMULA VENKATA SAI JAGADEESH', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4533', name: 'K. Lokesh', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4535', name: 'GUBBALA KUMAR PAVAN MANIKANTHA', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4554', name: 'Pechetti Lakshman kumar', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4502', name: 'GUBBALA RAMYA SRI LAKSHMI', branch: 'AID', year: '2nd year' },
    { rollNo: '23B21A4503', name: 'NANGI LALITHA', branch: 'AID', year: '2nd year' },
    { rollNo: '226Q1A4602', name: 'Pooja Gogineni', branch: 'Cyber Security', year: '3rd year' },
    { rollNo: '23B21A4322', name: 'GEESALA VEERA VENKATA GANAPATHI', branch: 'CAI', year: '2nd year' },
    { rollNo: '22B21A4309', name: 'SAKA.GLORIA', branch: 'CAI', year: '3rd year' },
    { rollNo: '22B21A4582', name: 'JALADURGA AKKISHETTI', branch: 'AID', year: '3rd year' },
    { rollNo: '226Q1A4528', name: 'Hima bindu Ramadevu', branch: 'AID', year: '3rd year' },
    { rollNo: '23B21A45D6', name: 'ANDHE AAKASH', branch: 'AID', year: '2nd year' },
    { rollNo: '22B21A4589', name: 'POOJA VISWANADUNI', branch: 'AID', year: '3rd year' },
    { rollNo: '22B21A4587', name: 'B.Umadevi', branch: 'AID', year: '3rd year' },
    { rollNo: '22B21A4586', name: 'G Mary prameela', branch: 'AID', year: '3rd year' },
    { rollNo: '23B21A4560', name: 'GUTTULA MOHAN DURGA', branch: 'AID', year: '2nd year' }
];

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
        (student.name.toLowerCase().includes(searchTerm) || student.rollNo.includes(searchTerm))
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
            <label><input type="radio" name="attendance_${student.rollNo}" value="present"> Present</label>
            <label><input type="radio" name="attendance_${student.rollNo}" value="absent"> Absent</label>
        `;
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
        const attendanceRadio = document.querySelector(`input[name="attendance_${rollNo}"]:checked`);
        
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

// Add logout button event listener
document.getElementById('logoutButton').addEventListener('click', logout);