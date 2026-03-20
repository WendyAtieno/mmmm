// Dummy data for courses
const coursesData = [
    {
        id: 1,
        code: "CS101",
        title: "Introduction to Programming",
        instructor: "Dr. John Smith",
        description: "An introductory course to programming concepts and problem-solving using Python.",
        credits: 3,
        schedule: "Mon/Wed 10:00 AM - 11:30 AM",
        location: "Tech Building, Room 305",
        color: "blue"
    },
    {
        id: 2,
        code: "MATH201",
        title: "Calculus II",
        instructor: "Dr. Emily Chen",
        description: "Continuation of Calculus I covering integration techniques, infinite series, and differential equations.",
        credits: 4,
        schedule: "Tue/Thu 1:00 PM - 2:30 PM",
        location: "Science Hall, Room 210",
        color: "green"
    },
    {
        id: 3,
        code: "PHYS101",
        title: "Introduction to Physics",
        instructor: "Dr. Robert Johnson",
        description: "Fundamental principles of mechanics, waves, and thermodynamics with practical applications.",
        credits: 4,
        schedule: "Mon/Wed/Fri 9:00 AM - 10:00 AM",
        location: "Science Hall, Room 110",
        color: "red"
    },
    {
        id: 4,
        code: "ENG220",
        title: "Technical Writing",
        instructor: "Prof. Lisa Wang",
        description: "Development of writing skills focused on technical documentation, reports, and professional communication.",
        credits: 3,
        schedule: "Tue/Thu 3:00 PM - 4:30 PM",
        location: "Arts Building, Room 405",
        color: "yellow"
    },
    {
        id: 5,
        code: "CS230",
        title: "Data Structures and Algorithms",
        instructor: "Dr. Michael Brown",
        description: "Implementation and analysis of data structures and algorithms for solving computational problems.",
        credits: 3,
        schedule: "Mon/Wed 1:00 PM - 2:30 PM",
        location: "Tech Building, Room 401",
        color: "purple"
    },
    {
        id: 6,
        code: "BUS110",
        title: "Introduction to Business",
        instructor: "Prof. Sarah Miller",
        description: "Overview of business concepts, organizational structures, and operational processes in modern enterprises.",
        credits: 3,
        schedule: "Fri 10:00 AM - 1:00 PM",
        location: "Business Hall, Room 120",
        color: "orange"
    }
];

// Dummy data for finance
const financeData = {
    accountBalance: 1250.00,
    financialAid: {
        total: 8500.00,
        applied: 7250.00,
        remaining: 1250.00,
        awards: [
            {
                id: 1,
                name: "Federal Pell Grant",
                amount: 4500.00,
                semester: "Fall 2024",
                status: "Disbursed"
            },
            {
                id: 2,
                name: "State Scholarship",
                amount: 2000.00,
                semester: "Fall 2024",
                status: "Disbursed"
            },
            {
                id: 3,
                name: "University Merit Scholarship",
                amount: 2000.00,
                semester: "Fall 2024",
                status: "Pending"
            }
        ]
    },
    tuitionBreakdown: [
        {
            id: 1,
            description: "Tuition (Full-time, 12+ credits)",
            amount: 8500.00,
            semester: "Fall 2024"
        },
        {
            id: 2,
            description: "Student Activity Fee",
            amount: 150.00,
            semester: "Fall 2024"
        },
        {
            id: 3,
            description: "Technology Fee",
            amount: 200.00,
            semester: "Fall 2024"
        },
        {
            id: 4,
            description: "Health Services Fee",
            amount: 250.00,
            semester: "Fall 2024"
        },
        {
            id: 5,
            description: "Library Fee",
            amount: 100.00,
            semester: "Fall 2024"
        }
    ],
    paymentHistory: [
        {
            id: 1,
            date: "2024-09-15",
            description: "Payment - Credit Card",
            amount: 500.00,
            status: "Completed",
            method: "Visa ending in 4532"
        },
        {
            id: 2,
            date: "2024-08-20",
            description: "Financial Aid Disbursement",
            amount: 4500.00,
            status: "Completed",
            method: "Direct Deposit"
        },
        {
            id: 3,
            date: "2024-08-15",
            description: "Payment - Bank Transfer",
            amount: 2000.00,
            status: "Completed",
            method: "ACH Transfer"
        },
        {
            id: 4,
            date: "2024-07-10",
            description: "Financial Aid Disbursement",
            amount: 2000.00,
            status: "Completed",
            method: "Direct Deposit"
        }
    ],
    paymentMethods: [
        {
            id: 1,
            type: "Credit Card",
            details: "Visa ending in 4532",
            isDefault: true,
            expiryDate: "12/2026"
        },
        {
            id: 2,
            type: "Bank Account",
            details: "Checking •••• 7890",
            isDefault: false,
            bankName: "First National Bank"
        }
    ],
    nextPaymentDue: {
        date: "2024-10-15",
        amount: 1250.00,
        description: "Remaining balance for Fall 2024"
    }
};

// Dummy data for announcements
const announcementsData = [
    {
        id: 1,
        title: "Campus Closure Notice",
        date: "2025-05-15",
        content: "All classes will be canceled on Friday, May 17th due to scheduled maintenance of the campus electrical systems. Please plan your study schedule accordingly. Regular classes will resume on Monday.",
        category: "Administrative",
        important: true
    },
    {
        id: 2,
        title: "CS101 Midterm Schedule Change",
        date: "2025-05-14",
        content: "The midterm exam for CS101: Introduction to Programming has been rescheduled from this Friday to next Wednesday, May 22nd. The exam will cover all material up through Chapter 7 in the textbook. Review sessions will be held Monday and Tuesday evenings at 7 PM in Tech Building Room 305.",
        category: "Course",
        courseCode: "CS101",
        important: true
    },
    {
        id: 3,
        title: "Library Extended Hours for Finals Week",
        date: "2025-05-10",
        content: "The university library will be extending its hours during finals week (May 24-30). The library will be open 24/7 with additional study spaces available in the west wing. Free coffee service will be available from 8 PM to 6 AM.",
        category: "Administrative",
        important: false
    },
    {
        id: 4,
        title: "Summer Research Opportunity",
        date: "2025-05-08",
        content: "The Computer Science department is accepting applications for summer research positions. This is a paid opportunity to work with faculty on cutting-edge research projects. Applications are due by May 25th. Please contact Dr. Michael Brown for more information.",
        category: "Department",
        important: false
    },
    {
        id: 5,
        title: "MATH201 Extra Office Hours",
        date: "2025-05-05",
        content: "Dr. Chen will be holding extra office hours this week to help students prepare for the upcoming final exam. The additional hours are Tuesday and Thursday from 3-5 PM in her office (Science Hall 225).",
        category: "Course",
        courseCode: "MATH201",
        important: false
    }
];

// DOM elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');
const navLinkButtons = document.querySelectorAll('.nav-link-button');
const pages = document.querySelectorAll('.page');
const themeToggle = document.getElementById('theme-toggle');
const profileThemeToggle = document.getElementById('profile-theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const headerThemeToggle = document.getElementById('header-theme-toggle');
const coursesGrid = document.getElementById('courses-grid');
const announcementsList = document.getElementById('announcements-list');
const courseModal = document.getElementById('course-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const accountBalance = document.getElementById('account-balance');
const financialAidAmount = document.getElementById('financial-aid-amount');
const nextPaymentDate = document.getElementById('next-payment-date');
const tuitionBreakdown = document.getElementById('tuition-breakdown');
const paymentHistory = document.getElementById('payment-history');
const financialAidInfo = document.getElementById('financial-aid-info');
const paymentMethods = document.getElementById('payment-methods');

// Function to toggle sidebar on mobile
menuToggle.addEventListener('click', () => {
    const isOpening = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when sidebar is open
    if (isOpening) {
        document.body.classList.add('sidebar-open');
        // Animate nav links with stagger when opening
        setTimeout(() => {
            animateNavLinks();
        }, 100);
    } else {
        document.body.classList.remove('sidebar-open');
    }
});

// Close sidebar when clicking overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
});

// Function to animate nav links with stagger effect
function animateNavLinks() {
    navLinks.forEach((link, index) => {
        // Reset animation
        link.style.animation = 'none';
        link.style.opacity = '0';
        link.style.transform = 'translateX(-100%)';
        
        // Force reflow
        void link.offsetWidth;
        
        // Apply staggered animation
        setTimeout(() => {
            link.style.animation = `slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
            link.style.animationDelay = `${index * 0.1}s`;
            link.classList.add('slide-in');
        }, 50);
    });
}

// Navigate between pages
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');
        
        showPage(targetPage);
        
        // Update active state
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu after navigation (mobile only)
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }, 300);
        }
    });
});

// Navigation from buttons in content
navLinkButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPage = button.getAttribute('data-page');
        showPage(targetPage);
        
        // Update active state in nav
        navLinks.forEach(navLink => {
            if (navLink.getAttribute('data-page') === targetPage) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });
});

// Footer navigation links
const footerLinks = document.querySelectorAll('.footer-links a[data-page]');
footerLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');
        showPage(targetPage);
        
        // Update active state in nav
        navLinks.forEach(navLink => {
            if (navLink.getAttribute('data-page') === targetPage) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });
});

// Function to show a specific page
function showPage(pageId) {
    pages.forEach(page => {
        if (page.id === `${pageId}-page`) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
    
    // Load page specific content
    if (pageId === 'courses') {
        renderCourses();
    } else if (pageId === 'announcements') {
        renderAnnouncements();
    } else if (pageId === 'finance') {
        renderFinance();
    }
    
    // Save last visited page to localStorage
    localStorage.setItem('lastVisitedPage', pageId);
}

// Theme toggle functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Update all toggle switches
    themeToggle.checked = isDarkMode;
    profileThemeToggle.checked = isDarkMode;
    
    // Update icon
    if (isDarkMode) {
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (headerThemeToggle) {
            headerThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (headerThemeToggle) {
            headerThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

themeToggle.addEventListener('change', toggleDarkMode);
profileThemeToggle.addEventListener('change', toggleDarkMode);
mobileThemeToggle.addEventListener('click', toggleDarkMode);
if (headerThemeToggle) {
    headerThemeToggle.addEventListener('click', toggleDarkMode);
}

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    themeToggle.checked = true;
    profileThemeToggle.checked = true;
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (headerThemeToggle) {
        headerThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Render courses in the courses page
function renderCourses() {
    coursesGrid.innerHTML = '';
    
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'card course-card rounded-lg overflow-hidden shadow-sm flex flex-col';
        courseCard.dataset.courseId = course.id;
        
        courseCard.innerHTML = `
            <div class="bg-${course.color}-100 dark:bg-${course.color}-900 px-4 py-2">
                <h3 class="font-bold text-${course.color}-800 dark:text-${course.color}-200">${course.code}</h3>
            </div>
            <div class="p-4 flex-grow">
                <h3 class="font-semibold text-lg mb-2">${course.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <i class="fas fa-user-tie mr-1"></i> ${course.instructor}
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    ${course.description}
                </p>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                    <p class="flex items-center mb-1">
                        <i class="fas fa-clock mr-2 w-4"></i> ${course.schedule}
                    </p>
                    <p class="flex items-center">
                        <i class="fas fa-map-marker-alt mr-2 w-4"></i> ${course.location}
                    </p>
                </div>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-2 bg-gray-50 dark:bg-gray-800">
                <div class="flex justify-between items-center">
                    <span class="text-sm">${course.credits} Credits</span>
                    <button class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
        
        courseCard.addEventListener('click', () => {
            showCourseDetails(course);
        });
        
        coursesGrid.appendChild(courseCard);
    });
}

// Render announcements in the announcements page
function renderAnnouncements() {
    announcementsList.innerHTML = '';
    
    announcementsData.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors';
        
        // Format date
        const date = new Date(announcement.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        announcementItem.innerHTML = `
            <div class="flex items-start">
                ${announcement.important ? '<div class="text-red-500 mr-2"><i class="fas fa-exclamation-circle"></i></div>' : ''}
                <div class="flex-grow">
                    <h3 class="font-semibold text-lg">${announcement.title}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>${formattedDate}</span>
                        ${announcement.courseCode ? `<span class="ml-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">${announcement.courseCode}</span>` : ''}
                        <span class="ml-2 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">${announcement.category}</span>
                    </p>
                    <p class="text-gray-600 dark:text-gray-400">${announcement.content}</p>
                </div>
            </div>
        `;
        
        announcementsList.appendChild(announcementItem);
    });
}

// Render finance page
function renderFinance() {
    // Update account balance
    if (accountBalance) {
        accountBalance.textContent = `$${financeData.accountBalance.toFixed(2)}`;
    }
    
    // Update financial aid amount
    if (financialAidAmount) {
        financialAidAmount.textContent = `$${financeData.financialAid.total.toFixed(2)}`;
    }
    
    // Update next payment due date
    if (nextPaymentDate) {
        const dueDate = new Date(financeData.nextPaymentDue.date);
        const formattedDate = dueDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        nextPaymentDate.textContent = formattedDate;
    }
    
    // Render tuition breakdown
    if (tuitionBreakdown) {
        let totalTuition = 0;
        tuitionBreakdown.innerHTML = '';
        
        financeData.tuitionBreakdown.forEach(item => {
            totalTuition += item.amount;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-0';
            itemDiv.innerHTML = `
                <div>
                    <p class="font-medium">${item.description}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">${item.semester}</p>
                </div>
                <p class="font-semibold">$${item.amount.toFixed(2)}</p>
            `;
            tuitionBreakdown.appendChild(itemDiv);
        });
        
        // Add total
        const totalDiv = document.createElement('div');
        totalDiv.className = 'flex justify-between items-center py-3 mt-2 pt-3 border-t-2 border-gray-300 dark:border-gray-600';
        totalDiv.innerHTML = `
            <p class="text-lg font-bold">Total</p>
            <p class="text-lg font-bold">$${totalTuition.toFixed(2)}</p>
        `;
        tuitionBreakdown.appendChild(totalDiv);
    }
    
    // Render payment history
    if (paymentHistory) {
        paymentHistory.innerHTML = '';
        
        if (financeData.paymentHistory.length === 0) {
            paymentHistory.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-center py-4">No payment history available</p>';
        } else {
            financeData.paymentHistory.forEach(payment => {
                const date = new Date(payment.date);
                const formattedDate = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
                
                const paymentItem = document.createElement('div');
                paymentItem.className = 'flex justify-between items-start py-4 border-b border-gray-200 dark:border-gray-700 last:border-0';
                paymentItem.innerHTML = `
                    <div class="flex-grow">
                        <p class="font-medium">${payment.description}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${payment.method}</p>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">${formattedDate}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-semibold text-green-600 dark:text-green-400">+$${payment.amount.toFixed(2)}</p>
                        <span class="inline-block mt-1 px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">${payment.status}</span>
                    </div>
                `;
                paymentHistory.appendChild(paymentItem);
            });
        }
    }
    
    // Render financial aid information
    if (financialAidInfo) {
        financialAidInfo.innerHTML = '';
        
        financeData.financialAid.awards.forEach(award => {
            const awardDiv = document.createElement('div');
            awardDiv.className = 'mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0';
            awardDiv.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <p class="font-medium">${award.name}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${award.semester}</p>
                    </div>
                    <p class="font-semibold">$${award.amount.toFixed(2)}</p>
                </div>
                <span class="inline-block px-2 py-0.5 ${award.status === 'Disbursed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'} rounded-full text-xs">${award.status}</span>
            `;
            financialAidInfo.appendChild(awardDiv);
        });
        
        // Add summary
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700';
        summaryDiv.innerHTML = `
            <div class="flex justify-between mb-2">
                <span class="text-gray-600 dark:text-gray-400">Total Awarded:</span>
                <span class="font-semibold">$${financeData.financialAid.total.toFixed(2)}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="text-gray-600 dark:text-gray-400">Applied to Account:</span>
                <span class="font-semibold">$${financeData.financialAid.applied.toFixed(2)}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-gray-600 dark:text-gray-400">Remaining:</span>
                <span class="font-semibold text-green-600 dark:text-green-400">$${financeData.financialAid.remaining.toFixed(2)}</span>
            </div>
        `;
        financialAidInfo.appendChild(summaryDiv);
    }
    
    // Render payment methods
    if (paymentMethods) {
        paymentMethods.innerHTML = '';
        
        financeData.paymentMethods.forEach(method => {
            const methodDiv = document.createElement('div');
            methodDiv.className = 'flex justify-between items-center p-3 mb-3 bg-gray-50 dark:bg-gray-800 rounded-lg';
            methodDiv.innerHTML = `
                <div class="flex items-center">
                    <i class="fas ${method.type === 'Credit Card' ? 'fa-credit-card' : 'fa-university'} text-indigo-600 dark:text-indigo-400 mr-3"></i>
                    <div>
                        <p class="font-medium">${method.type}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${method.details}</p>
                    </div>
                </div>
                ${method.isDefault ? '<span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs">Default</span>' : ''}
            `;
            paymentMethods.appendChild(methodDiv);
        });
    }
}

// Show course details modal
function showCourseDetails(course) {
    modalTitle.textContent = `${course.code}: ${course.title}`;
    
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-1">Instructor</p>
                <p class="font-medium">${course.instructor}</p>
            </div>
            <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-1">Credits</p>
                <p class="font-medium">${course.credits} Credits</p>
            </div>
            <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-1">Schedule</p>
                <p class="font-medium">${course.schedule}</p>
            </div>
            <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-1">Location</p>
                <p class="font-medium">${course.location}</p>
            </div>
        </div>

        <div class="mb-6">
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-1">Description</p>
            <p>${course.description}</p>
        </div>
        
        <div class="mb-6">
            <h3 class="font-semibold mb-2">Course Materials</h3>
            <ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>Introduction to Programming (Main textbook)</li>
                <li>Python Programming Guide (Reference)</li>
                <li>Course slides and lecture notes</li>
            </ul>
        </div>
        
        <div>
            <h3 class="font-semibold mb-2">Share Course</h3>
            <div class="flex gap-2">
                <button class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                    <i class="fab fa-facebook-f"></i>
                </button>
                <button class="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full">
                    <i class="fab fa-twitter"></i>
                </button>
                <button class="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
                    <i class="fas fa-envelope"></i>
                </button>
            </div>
        </div>
    `;
    
    courseModal.classList.add('active');
    
    // Save last viewed course to localStorage
    localStorage.setItem('lastViewedCourse', course.id);
}

// Close course details modal
closeModalBtn.addEventListener('click', () => {
    courseModal.classList.remove('active');
});

// Close modal when clicking outside the content
courseModal.addEventListener('click', (e) => {
    if (e.target === courseModal) {
        courseModal.classList.remove('active');
    }
});

// Load last visited page from localStorage or default to dashboard
document.addEventListener('DOMContentLoaded', () => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage') || 'dashboard';
    
    // Animate nav links on page load with delay
    setTimeout(() => {
        animateNavLinks();
    }, 300);
    
    showPage(lastVisitedPage);
    
    // Update active state in nav
    navLinks.forEach(navLink => {
        if (navLink.getAttribute('data-page') === lastVisitedPage) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});

// Keyboard accessibility for closing the modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && courseModal.classList.contains('active')) {
        courseModal.classList.remove('active');
    }
    
    // Open accessibility menu with CTRL+U
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        toggleAccessibilityWidget();
    }
});

// Accessibility Widget Functionality
const accessibilityWidget = document.getElementById('accessibility-widget');
const accessibilityToggle = document.getElementById('accessibility-toggle');
const closeAccessibility = document.getElementById('close-accessibility');
const resetAccessibility = document.getElementById('reset-accessibility');
const accessibilityOptions = document.querySelectorAll('.accessibility-option');

// Toggle accessibility widget
function toggleAccessibilityWidget() {
    accessibilityWidget.classList.toggle('active');
}

// Close accessibility widget
function closeAccessibilityWidget() {
    accessibilityWidget.classList.remove('active');
}

// Accessibility features state
const accessibilityState = {
    'dark-contrast': false,
    'highlight-links': false,
    'bigger-text': false,
    'text-spacing': false,
    'play-animations': true,
    'hide-images': false,
    'dyslexia-friendly': false,
    'cursor': false,
    'tooltips': false,
    'line-height': false,
    'text-align': false,
    'saturation': false
};

// Load saved accessibility preferences
function loadAccessibilityPreferences() {
    const saved = localStorage.getItem('accessibilityPreferences');
    if (saved) {
        const preferences = JSON.parse(saved);
        Object.keys(preferences).forEach(feature => {
            if (preferences[feature]) {
                accessibilityState[feature] = true;
                applyAccessibilityFeature(feature, true);
                const option = document.querySelector(`[data-feature="${feature}"]`);
                if (option) {
                    option.classList.add('active');
                }
            }
        });
    }
}

// Apply accessibility feature
function applyAccessibilityFeature(feature, enable) {
    const body = document.body;
    
    switch(feature) {
        case 'dark-contrast':
            if (enable) {
                body.classList.add('accessibility-dark-contrast');
            } else {
                body.classList.remove('accessibility-dark-contrast');
            }
            break;
            
        case 'highlight-links':
            if (enable) {
                body.classList.add('accessibility-highlight-links');
            } else {
                body.classList.remove('accessibility-highlight-links');
            }
            break;
            
        case 'bigger-text':
            if (enable) {
                body.classList.add('accessibility-bigger-text');
            } else {
                body.classList.remove('accessibility-bigger-text');
            }
            break;
            
        case 'text-spacing':
            if (enable) {
                body.classList.add('accessibility-text-spacing');
            } else {
                body.classList.remove('accessibility-text-spacing');
            }
            break;
            
        case 'play-animations':
            if (!enable) {
                body.classList.add('accessibility-no-animations');
            } else {
                body.classList.remove('accessibility-no-animations');
            }
            break;
            
        case 'hide-images':
            if (enable) {
                body.classList.add('accessibility-hide-images');
            } else {
                body.classList.remove('accessibility-hide-images');
            }
            break;
            
        case 'dyslexia-friendly':
            if (enable) {
                body.classList.add('accessibility-dyslexia-friendly');
            } else {
                body.classList.remove('accessibility-dyslexia-friendly');
            }
            break;
            
        case 'cursor':
            if (enable) {
                body.classList.add('accessibility-bigger-cursor');
            } else {
                body.classList.remove('accessibility-bigger-cursor');
            }
            break;
            
        case 'line-height':
            if (enable) {
                body.classList.add('accessibility-line-height');
            } else {
                body.classList.remove('accessibility-line-height');
            }
            break;
            
        case 'text-align':
            if (enable) {
                body.classList.add('accessibility-text-align');
            } else {
                body.classList.remove('accessibility-text-align');
            }
            break;
            
        case 'saturation':
            if (enable) {
                body.classList.add('accessibility-saturation');
            } else {
                body.classList.remove('accessibility-saturation');
            }
            break;
    }
    
    // Save preferences
    localStorage.setItem('accessibilityPreferences', JSON.stringify(accessibilityState));
}

// Toggle accessibility option
accessibilityOptions.forEach(option => {
    option.addEventListener('click', () => {
        const feature = option.getAttribute('data-feature');
        const isActive = option.classList.contains('active');
        
        if (isActive) {
            option.classList.remove('active');
            accessibilityState[feature] = false;
            applyAccessibilityFeature(feature, false);
        } else {
            option.classList.add('active');
            accessibilityState[feature] = true;
            applyAccessibilityFeature(feature, true);
        }
    });
});

// Reset all accessibility settings
resetAccessibility.addEventListener('click', () => {
    accessibilityOptions.forEach(option => {
        option.classList.remove('active');
        const feature = option.getAttribute('data-feature');
        accessibilityState[feature] = false;
        applyAccessibilityFeature(feature, false);
    });
    
    // Re-enable animations by default
    accessibilityState['play-animations'] = true;
    body.classList.remove('accessibility-no-animations');
    
    // Clear localStorage
    localStorage.removeItem('accessibilityPreferences');
});

// Event listeners
accessibilityToggle.addEventListener('click', toggleAccessibilityWidget);
closeAccessibility.addEventListener('click', closeAccessibilityWidget);

// Close widget when clicking outside
document.addEventListener('click', (e) => {
    if (accessibilityWidget.classList.contains('active') && 
        !accessibilityWidget.contains(e.target) && 
        !accessibilityToggle.contains(e.target)) {
        closeAccessibilityWidget();
    }
});

// Load accessibility preferences on page load
document.addEventListener('DOMContentLoaded', () => {
    loadAccessibilityPreferences();
});

// AI Chatbot Functionality - DOM elements
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMinimize = document.getElementById('minimize-chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotNotification = document.getElementById('chatbot-notification');
const quickActionButtons = document.querySelectorAll('.quick-action-btn');

// Chatbot Training Data (Bogus Training Data)
const chatbotTrainingData = {
    // Error-related responses
    errors: {
        'page not found': {
            response: "I see you're having trouble finding a page. Let me help you navigate:\n\n• Use the sidebar menu to access Dashboard, Courses, Announcements, Finance, or Profile\n• Check if you're logged in properly\n• Try refreshing the page (F5 or Ctrl+R)\n\nWould you like me to guide you to a specific section?",
            keywords: ['page not found', '404', 'cannot find', 'missing page', 'page error']
        },
        'login error': {
            response: "For login issues, try these steps:\n\n1. Check your username and password\n2. Clear your browser cache\n3. Try a different browser\n4. Contact IT support if the problem persists\n\nIf you're already logged in, try refreshing the page.",
            keywords: ['login', 'sign in', 'authentication', 'cannot login', 'login failed', 'password']
        },
        'payment error': {
            response: "Payment errors can occur for several reasons:\n\n• Check your payment method details\n• Ensure sufficient funds or credit limit\n• Verify your internet connection\n• Try a different payment method\n• Contact the finance office at finance@university.edu\n\nYou can also check your payment history in the Finance section.",
            keywords: ['payment', 'transaction failed', 'payment error', 'cannot pay', 'payment declined', 'billing']
        },
        'course error': {
            response: "Course-related issues? Here's what you can do:\n\n• Check if the course is still available\n• Verify your enrollment status\n• Clear your browser cache\n• Try accessing from a different device\n• Contact your academic advisor\n\nYou can view all your courses in the Courses section.",
            keywords: ['course', 'enrollment', 'cannot access course', 'course missing', 'registration']
        },
        'profile error': {
            response: "Profile update issues? Try these solutions:\n\n• Make sure all required fields are filled\n• Check your internet connection\n• Save changes one section at a time\n• Clear browser cache and try again\n• Contact registrar office if data is incorrect\n\nYour profile information is in the Profile section.",
            keywords: ['profile', 'cannot update', 'profile error', 'save failed', 'information']
        },
        'loading error': {
            response: "If pages are loading slowly or not at all:\n\n• Check your internet connection\n• Clear browser cache (Ctrl+Shift+Delete)\n• Disable browser extensions temporarily\n• Try a different browser\n• Check if the site is under maintenance\n\nYou can also try refreshing the page.",
            keywords: ['loading', 'slow', 'not loading', 'timeout', 'connection', 'network']
        }
    },
    
    // Navigation help
    navigation: {
        'how to navigate': {
            response: "Here's how to navigate the system:\n\n• **Sidebar Menu**: Click any item (Dashboard, Courses, etc.) to switch pages\n• **Header**: Shows system title and theme toggle\n• **Footer**: Contains quick links and support information\n• **Mobile**: Use the hamburger menu (☰) in the top-left\n\nWhat section would you like to access?",
            keywords: ['navigate', 'navigation', 'how to use', 'menu', 'where is', 'how do i']
        },
        'dashboard': {
            response: "The Dashboard shows:\n\n• Summary cards (Enrolled Courses, Assignments, Announcements)\n• Recent courses you've accessed\n• Latest announcements\n• Quick overview of your academic progress\n\nClick 'Dashboard' in the sidebar to go there now!",
            keywords: ['dashboard', 'home', 'main page', 'overview']
        },
        'courses': {
            response: "The Courses section includes:\n\n• All your enrolled courses\n• Course details (instructor, schedule, location)\n• Search and filter options\n• Click any course card to see full details\n\nAccess it from the sidebar menu!",
            keywords: ['courses', 'classes', 'enrollment', 'subjects']
        },
        'finance': {
            response: "The Finance section provides:\n\n• Account balance overview\n• Payment history\n• Tuition breakdown\n• Financial aid information\n• Payment methods\n• Quick actions (Make Payment, View Statements)\n\nNavigate to Finance from the sidebar!",
            keywords: ['finance', 'payment', 'tuition', 'fees', 'billing', 'financial aid']
        }
    },
    
    // Feature help
    features: {
        'accessibility': {
            response: "Accessibility features available:\n\n• **Dark Contrast**: Increases contrast for better visibility\n• **Bigger Text**: Increases font sizes\n• **Text Spacing**: Improves readability\n• **Dyslexia Friendly**: Special font for easier reading\n• **Hide Images**: Reduces visual clutter\n• **And more!**\n\nClick the accessibility button (bottom-right) or press CTRL+U to access these features.",
            keywords: ['accessibility', 'access', 'settings', 'preferences', 'options']
        },
        'dark mode': {
            response: "To toggle dark mode:\n\n• **Desktop**: Use the theme toggle in the header or sidebar\n• **Mobile**: Tap the moon/sun icon in the top bar\n• Your preference is saved automatically\n\nDark mode reduces eye strain in low-light environments!",
            keywords: ['dark mode', 'theme', 'dark', 'light', 'appearance']
        },
        'search': {
            response: "Search functionality:\n\n• **Courses**: Use the search bar in the Courses page\n• **Announcements**: Search bar available in Announcements page\n• Type keywords to filter results instantly\n• Use dropdown filters for more specific results\n\nTry it out in any section with a search bar!",
            keywords: ['search', 'find', 'filter', 'look for']
        }
    },
    
    // General responses
    general: {
        'hello': {
            response: "Hello! 👋 I'm here to help you with any questions or issues you might have. What can I assist you with today?",
            keywords: ['hello', 'hi', 'hey', 'greetings']
        },
        'help': {
            response: "I can help you with:\n\n• **Errors & Troubleshooting**: Login issues, page errors, payment problems\n• **Navigation**: How to use different sections\n• **Features**: Accessibility, dark mode, search\n• **Account**: Profile, courses, finance questions\n\nJust ask me anything!",
            keywords: ['help', 'assist', 'support', 'guide']
        },
        'thanks': {
            response: "You're welcome! 😊 If you need anything else, just ask. Have a great day!",
            keywords: ['thanks', 'thank you', 'appreciate', 'grateful']
        },
        'goodbye': {
            response: "Goodbye! Feel free to come back anytime if you need assistance. Take care! 👋",
            keywords: ['goodbye', 'bye', 'see you', 'farewell']
        }
    },
    
    // Default fallback
    default: {
        response: "I understand you're asking about something. Let me help you:\n\n• If you're experiencing an error, describe it and I'll help troubleshoot\n• For navigation help, ask 'how to navigate' or 'where is [section]'\n• For features, ask about 'accessibility', 'dark mode', or 'search'\n• Type 'help' to see what I can assist with\n\nWhat would you like to know?",
        keywords: []
    }
};

// Error detection patterns
const errorPatterns = [
    { pattern: /error|failed|broken|not working|doesn't work/i, category: 'errors' },
    { pattern: /login|sign in|password|authentication/i, category: 'errors' },
    { pattern: /payment|transaction|billing|fee/i, category: 'errors' },
    { pattern: /course|enrollment|class|subject/i, category: 'navigation' },
    { pattern: /navigate|menu|where|how to/i, category: 'navigation' },
    { pattern: /accessibility|settings|preferences/i, category: 'features' },
    { pattern: /dark mode|theme|appearance/i, category: 'features' },
    { pattern: /search|find|filter/i, category: 'features' }
];

// Chat history
let chatHistory = [];

// Toggle chatbot
function toggleChatbot() {
    chatbotContainer.classList.toggle('active');
    chatbotNotification.classList.remove('active');
    if (chatbotContainer.classList.contains('active')) {
        chatbotInput.focus();
    }
}

// Minimize chatbot
function minimizeChatbot() {
    chatbotContainer.classList.toggle('minimized');
    if (chatbotContainer.classList.contains('minimized')) {
        chatbotMessages.style.display = 'none';
    } else {
        chatbotMessages.style.display = 'flex';
    }
}

// Close chatbot
function closeChatbot() {
    chatbotContainer.classList.remove('active');
    chatbotContainer.classList.remove('minimized');
    chatbotMessages.style.display = 'flex';
}

// Add message to chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = isUser ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    // Format message with line breaks and lists
    const formattedText = formatMessage(text);
    content.innerHTML = formattedText;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Save to history
    chatHistory.push({ text, isUser, timestamp: new Date() });
}

// Format message text
function formatMessage(text) {
    // Convert markdown-style formatting
    let formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Convert line breaks
    formatted = formatted.split('\n').map(line => {
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return line;
        }
        return `<p>${line || '&nbsp;'}</p>`;
    }).join('');
    
    // Convert lists
    formatted = formatted.replace(/(<p>•.*?<\/p>)/g, (match) => {
        const items = match.split(/<p>•/).filter(item => item.trim());
        if (items.length > 1) {
            const listItems = items.map(item => 
                `<li>${item.replace('</p>', '').trim()}</li>`
            ).join('');
            return `<ul>${listItems}</ul>`;
        }
        return match;
    });
    
    return formatted;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = '<span></span><span></span><span></span>';
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(content);
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Process user message and generate response
function processMessage(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate thinking delay
    setTimeout(() => {
        removeTypingIndicator();
        
        let response = null;
        let category = null;
        
        // Check training data categories
        for (const [cat, data] of Object.entries(chatbotTrainingData)) {
            if (cat === 'default') continue;
            
            for (const [key, value] of Object.entries(data)) {
                const keywords = value.keywords || [];
                if (keywords.some(keyword => message.includes(keyword)) || 
                    message.includes(key)) {
                    response = value.response;
                    category = cat;
                    break;
                }
            }
            if (response) break;
        }
        
        // Check error patterns
        if (!response) {
            for (const errorPattern of errorPatterns) {
                if (errorPattern.pattern.test(message)) {
                    category = errorPattern.category;
                    // Find matching response in category
                    const categoryData = chatbotTrainingData[category];
                    if (categoryData) {
                        for (const [key, value] of Object.entries(categoryData)) {
                            if (value.keywords.some(kw => message.includes(kw))) {
                                response = value.response;
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }
        
        // Default response if no match
        if (!response) {
            response = chatbotTrainingData.default.response;
        }
        
        // Add contextual suggestions based on category
        if (category === 'errors' && !response.includes('Would you like')) {
            response += "\n\nWould you like me to guide you through troubleshooting this issue?";
        }
        
        addMessage(response, false);
        
        // Show notification if chatbot is minimized
        if (chatbotContainer.classList.contains('minimized')) {
            chatbotNotification.classList.add('active');
        }
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    chatbotInput.value = '';
    
    // Process and respond
    processMessage(message);
}

// Event listeners
if (chatbotToggle) chatbotToggle.addEventListener('click', toggleChatbot);
if (chatbotClose) chatbotClose.addEventListener('click', closeChatbot);
if (chatbotMinimize) chatbotMinimize.addEventListener('click', minimizeChatbot);
if (chatbotSend) chatbotSend.addEventListener('click', sendMessage);

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Auto-detect errors and suggest chatbot
let errorDetectionActive = true;

function detectPotentialErrors() {
    if (!errorDetectionActive) return;
    
    // Monitor for common error scenarios
    const checkForErrors = () => {
        // Check for console errors (simulated)
        const hasNetworkError = navigator.onLine === false;
        const hasSlowConnection = performance.timing && 
            (performance.timing.loadEventEnd - performance.timing.navigationStart) > 5000;
        
        if (hasNetworkError && !chatbotContainer.classList.contains('active')) {
            chatbotNotification.classList.add('active');
            chatbotNotification.textContent = '!';
        }
    };
    
    // Check periodically
    setInterval(checkForErrors, 30000); // Every 30 seconds
}

// Initialize error detection
detectPotentialErrors();

// Keyboard shortcut for chatbot (CTRL+J)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'j') {
        e.preventDefault();
        toggleChatbot();
    }
});

