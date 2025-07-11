const coursesData = [
  {
    id: 1,
    title: "Full Stack Development",
    subtitle: "Complete web development from frontend to backend",
    category: "full-stack",
    level: "beginner",
    format: "Online : Via ZOOM",
    instructor: {
      name: "Gowtham Raj",
      title: "Senior Full Stack Developer",
      avatar: "GR",
    },
    date: "2025-02-01",
    time: "10:00 AM",
    duration: "6 months",
    venue: "Offline : [Coimbatore]",
    capacity: 25,
    enrolled: 18,
    price: 1299,
    description:
      "Master full stack web development from beginner to advanced level. Learn HTML, CSS, JavaScript, React, Node.js, databases, and deployment. Build real-world projects and get job-ready skills.",
    curriculum: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+ & DOM Manipulation",
      "React.js & Component Architecture",
      "Node.js & Express.js Backend",
      "Database Design & MongoDB",
      "RESTful APIs & Authentication",
      "Git Version Control",
      "Deployment & DevOps Basics",
      "Real-world Project Portfolio",
    ],
  },
  {
    id: 2,
    title: "Data Analysis",
    subtitle: "Transform data into actionable business insights",
    category: "data-analysis",
    level: "beginner",
    format: "Online : Via ZOOM",
    instructor: {
      name: "Gowtham Raj",
      title: "Data Science Lead",
      avatar: "GR",
    },
    date: "2025-02-05",
    time: "2:00 PM",
    duration: "4 months",
    venue: "Offline : [Coimbatore]",
    capacity: 30,
    enrolled: 22,
    price: 1999,
    description:
      "Comprehensive data analysis course covering statistical analysis, data visualization, and business intelligence. Learn Python, SQL, Excel, and popular data analysis tools from beginner to advanced level.",
    curriculum: [
      "Statistics & Probability Fundamentals",
      "Excel Advanced Functions & Pivot Tables",
      "SQL Database Querying",
      "Python for Data Analysis (Pandas, NumPy)",
      "Data Visualization (Matplotlib, Seaborn)",
      "Business Intelligence Tools",
      "Statistical Analysis & Hypothesis Testing",
      "Data Cleaning & Preprocessing",
      "Real Business Case Studies",
    ],
  },
  {
    id: 3,
    title: "Cyber Security",
    subtitle: "Protect systems and defend against cyber threats",
    category: "cybersecurity",
    level: "beginner",
    format: "Online : Via ZOOM",
    instructor: {
      name: "Gowtham Raj",
      title: "Cybersecurity Specialist",
      avatar: "GR",
    },
    date: "2025-02-10",
    time: "6:00 PM",
    duration: "5 months",
    venue: "Offline : [Coimbatore]",
    capacity: 20,
    enrolled: 15,
    price: 1499,
    description:
      "Complete cybersecurity training from fundamentals to advanced techniques. Learn ethical hacking, network security, incident response, and security frameworks. Hands-on labs and real-world scenarios included.",
    curriculum: [
      "Cybersecurity Fundamentals",
      "Network Security & Protocols",
      "Ethical Hacking & Penetration Testing",
      "Malware Analysis & Reverse Engineering",
      "Incident Response & Forensics",
      "Security Frameworks (NIST, ISO 27001)",
      "Risk Assessment & Management",
      "Security Tools & Technologies",
      "Compliance & Governance",
    ],
  },
  {
    id: 4,
    title: "Python Programming",
    subtitle: "Master Python from basics to advanced applications",
    category: "programming",
    level: "beginner",
    format: "Online : Via ZOOM",
    instructor: {
      name: "Gowtham Raj ",
      title: "Python Developer & Trainer",
      avatar: "GR",
    },
    date: "2025-02-15",
    time: "11:00 AM",
    duration: "3 months",
    venue: "Offline : [Coimbatore]",
    capacity: 35,
    enrolled: 28,
    price: 1999,
    description:
      "Comprehensive Python programming course covering fundamentals to advanced topics. Learn web development, data science applications, automation, and more. Perfect for beginners with no prior programming experience.",
    curriculum: [
      "Python Syntax & Fundamentals",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "File Handling & Exception Management",
      "Web Development with Django/Flask",
      "Data Science Libraries (Pandas, NumPy)",
      "API Development & Integration",
      "Automation & Scripting",
      "Testing & Debugging Techniques",
    ],
  },
  {
    id: 5,
    title: "C++ Programming",
    subtitle: "System programming and software development with C++",
    category: "programming",
    level: "beginner",
    format: "Online : Via ZOOM",
    instructor: {
      name: "Gowtham Raj",
      title: "Software Engineer & C++ Expert",
      avatar: "GR",
    },
    date: "2025-02-20",
    time: "9:00 AM",
    duration: "4 months",
    venue: "Offline : [Coimbatore]",
    capacity: 25,
    enrolled: 19,
    price: 1499,
    description:
      "Master C++ programming from beginner to advanced level. Learn system programming, game development, and high-performance applications. Includes hands-on projects and competitive programming techniques.",
    curriculum: [
      "C++ Fundamentals & Syntax",
      "Memory Management & Pointers",
      "Object-Oriented Programming Concepts",
      "STL (Standard Template Library)",
      "Data Structures & Algorithms",
      "File I/O & Stream Processing",
      "Multi-threading & Concurrency",
      "Game Development Basics",
      "Performance Optimization Techniques",
    ],
  },
  {
    id: 6,
    title: "Java Programming",
    subtitle: "Enterprise application development with Java",
    category: "programming",
    level: "beginner",
    format: "Online : Via ZOOM",
    instructor: {
      name: "Gowtham Raj",
      title: "Java Architect & Trainer",
      avatar: "GR",
    },
    date: "2025-02-25",
    time: "3:00 PM",
    duration: "4 months",
    venue: "Offline : [Coimbatore]",
    capacity: 30,
    enrolled: 24,
    price: 1999,
    description:
      "Complete Java programming course from basics to enterprise development. Learn core Java, Spring Framework, database connectivity, and web development. Build scalable applications and prepare for Java certifications.",
    curriculum: [
      "Java Fundamentals & OOP Concepts",
      "Collections Framework & Generics",
      "Exception Handling & I/O Operations",
      "JDBC & Database Connectivity",
      "Spring Framework & Spring Boot",
      "RESTful Web Services",
      "JUnit Testing & Debugging",
      "Maven & Build Tools",
      "Enterprise Application Development",
    ],
  }
]


// DOM elements
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")
const levelFilter = document.getElementById("levelFilter")
const formatFilter = document.getElementById("formatFilter")
const durationFilter = document.getElementById("durationFilter")
const resultsCount = document.getElementById("resultsCount")
const timelineView = document.getElementById("timelineView")
const gridView = document.getElementById("gridView")
const timeline = document.querySelector(".timeline")
const courseGrid = document.querySelector(".course-grid")
const modal = document.getElementById("courseModal")
const syllabusModal = document.getElementById("syllabusModal")
const closeModal = document.querySelector(".close")

// State
let currentView = "timeline"
let currentTab = "upcoming"
let filteredCourses = [...coursesData]

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeEventListeners()
  initializeNavigation()
  renderCourses()
  updateResultsCount()
})

// Initialize navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".content-section")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Remove active class from all links and sections
      navLinks.forEach((l) => l.classList.remove("active"))
      sections.forEach((s) => s.classList.remove("active"))

      // Add active class to clicked link
      link.classList.add("active")

      // Show corresponding section
      const sectionId = link.dataset.section + "-section"
      const targetSection = document.getElementById(sectionId)
      if (targetSection) {
        targetSection.classList.add("active")
      }

      // Close mobile menu if open
      const nav = document.querySelector(".nav")
      const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
      nav.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    })
  })
}

// Event listeners
function initializeEventListeners() {
  // Mobile menu
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector(".nav")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })
  }

  // Tab switching
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")
      currentTab = tab.dataset.tab
      filterAndRenderCourses()
    })
  })

  // View toggle
  const viewBtns = document.querySelectorAll(".view-btn")
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentView = btn.dataset.view
      toggleView()
    })
  })

  // Filters
  if (searchInput) searchInput.addEventListener("input", debounce(filterAndRenderCourses, 300))
  if (categoryFilter) categoryFilter.addEventListener("change", filterAndRenderCourses)
  if (levelFilter) levelFilter.addEventListener("change", filterAndRenderCourses)
  if (formatFilter) formatFilter.addEventListener("change", filterAndRenderCourses)
  if (durationFilter) durationFilter.addEventListener("change", filterAndRenderCourses)

  // Modal event listeners
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
    if (e.target === syllabusModal) {
      syllabusModal.style.display = "none"
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none"
      syllabusModal.style.display = "none"
    }
  })
}

// Debounce function for search
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Filter and render courses
function filterAndRenderCourses() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
  const category = categoryFilter ? categoryFilter.value : "all"
  const level = levelFilter ? levelFilter.value : "all"
  const format = formatFilter ? formatFilter.value : "all"
  const duration = durationFilter ? durationFilter.value : "all"

  filteredCourses = coursesData.filter((course) => {
    // Search filter
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.subtitle.toLowerCase().includes(searchTerm) ||
      course.instructor.name.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm)

    // Category filter
    const matchesCategory = category === "all" || course.category === category

    // Level filter
    const matchesLevel = level === "all" || course.level === level

    // Format filter
    const matchesFormat = format === "all" || course.format.toLowerCase().includes(format.toLowerCase())

    // Duration filter
    let matchesDuration = true
    if (duration !== "all") {
      const months = Number.parseInt(course.duration)
      switch (duration) {
        case "short":
          matchesDuration = months <= 3
          break
        case "medium":
          matchesDuration = months > 3 && months <= 6
          break
        case "long":
          matchesDuration = months > 6
          break
      }
    }

    return matchesSearch && matchesCategory && matchesLevel && matchesFormat && matchesDuration
  })

  renderCourses()
  updateResultsCount()
}

// Render courses
function renderCourses() {
  if (currentView === "timeline") {
    renderTimelineView()
  } else {
    renderGridView()
  }
}

// Render timeline view
function renderTimelineView() {
  if (!timeline) return

  timeline.innerHTML = ""

  if (filteredCourses.length === 0) {
    timeline.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 3rem; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>No courses found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `
    return
  }

  filteredCourses.forEach((course, index) => {
    const timelineItem = createTimelineItem(course, index)
    timeline.appendChild(timelineItem)
  })
}

// Render grid view
function renderGridView() {
  if (!courseGrid) return

  courseGrid.innerHTML = ""

  if (filteredCourses.length === 0) {
    courseGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>No courses found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `
    return
  }

  filteredCourses.forEach((course, index) => {
    const courseCard = createCourseCard(course, index)
    courseGrid.appendChild(courseCard)
  })
}

// Create timeline item
function createTimelineItem(course, index) {
  const timelineItem = document.createElement("div")
  timelineItem.className = "timeline-item fade-in"
  timelineItem.style.animationDelay = `${index * 0.1}s`

  const formattedDate = formatDate(course.date)
  const enrollmentPercentage = (course.enrolled / course.capacity) * 100

  timelineItem.innerHTML = `
        <div class="timeline-date">${formattedDate}</div>
        <div class="course-card" data-course-id="${course.id}">
            <div class="course-header">
                <div class="course-category">${course.category.replace("-", " ")}</div>
                <div class="course-level level-${course.level}">${course.level}</div>
            </div>
            
            <div class="course-title">
                <h3>${course.title}</h3>
                <p class="course-subtitle">${course.subtitle}</p>
            </div>

            <div class="instructor-section">
                <div class="instructor-avatar">${course.instructor.avatar}</div>
                <div class="instructor-info">
                    <h4>${course.instructor.name}</h4>
                    <p class="instructor-title">${course.instructor.title}</p>
                </div>
            </div>

            <div class="course-meta">
                <div class="meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(course.date)}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${course.time} • ${course.duration}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${course.venue}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-laptop"></i>
                    <span>${course.format.toUpperCase()}</span>
                </div>
            </div>

            <div class="course-stats">
                <div class="stat-group">
                    <span class="stat-value">${course.enrolled}/${course.capacity}</span>
                    <span class="stat-label">Enrolled</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${enrollmentPercentage}%"></div>
                    </div>
                </div>
                <div class="stat-group">
                    <span class="stat-value">${course.duration}</span>
                    <span class="stat-label">Duration</span>
                </div>
                <div class="stat-group">
                    <span class="stat-value">${course.level}</span>
                    <span class="stat-label">Level</span>
                </div>
            </div>

            <div class="course-actions">
                <div class="price-tag">
                    <span class="currency">₹</span>${course.price}
                </div>
                <button class="btn-secondary" onclick="showCourseDetails(${course.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                <button class="btn-primary" onclick="enrollInCourse(${course.id})" 
                        ${course.enrolled >= course.capacity ? "disabled" : ""}>
                    <i class="fas fa-user-plus"></i> 
                    ${course.enrolled >= course.capacity ? "Full" : "Enroll Now"}
                </button>
            </div>
        </div>
    `

  return timelineItem
}

// Create course card for grid view
function createCourseCard(course, index) {
  const courseCard = document.createElement("div")
  courseCard.className = "course-card fade-in"
  courseCard.style.animationDelay = `${index * 0.1}s`
  courseCard.dataset.courseId = course.id

  const enrollmentPercentage = (course.enrolled / course.capacity) * 100

  courseCard.innerHTML = `
        <div class="course-header">
            <div class="course-category">${course.category.replace("-", " ")}</div>
            <div class="course-level level-${course.level}">${course.level}</div>
        </div>
        
        <div class="course-title">
            <h3>${course.title}</h3>
            <p class="course-subtitle">${course.subtitle}</p>
        </div>

        <div class="instructor-section">
            <div class="instructor-avatar">${course.instructor.avatar}</div>
            <div class="instructor-info">
                <h4>${course.instructor.name}</h4>
                <p class="instructor-title">${course.instructor.title}</p>
            </div>
        </div>

        <div class="course-meta">
            <div class="meta-item">
                <i class="fas fa-calendar"></i>
                <span>${formatDate(course.date)}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-clock"></i>
                <span>${course.time} • ${course.duration}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${course.venue}</span>
            </div>
            <div class="meta-item">
                <i class="fas fa-laptop"></i>
                <span>${course.format.toUpperCase()}</span>
            </div>
        </div>

        <div class="course-stats">
            <div class="stat-group">
                <span class="stat-value">${course.enrolled}/${course.capacity}</span>
                <span class="stat-label">Enrolled</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${enrollmentPercentage}%"></div>
                </div>
            </div>
            <div class="stat-group">
                <span class="stat-value">${course.duration}</span>
                <span class="stat-label">Duration</span>
            </div>
            <div class="stat-group">
                <span class="stat-value">${course.level}</span>
                <span class="stat-label">Level</span>
            </div>
        </div>

        <div class="course-actions">
            <div class="price-tag">
                <span class="currency">₹</span>${course.price}
            </div>
            <button class="btn-secondary" onclick="showCourseDetails(${course.id})">
                <i class="fas fa-info-circle"></i> Details
            </button>
            <button class="btn-primary" onclick="enrollInCourse(${course.id})" 
                    ${course.enrolled >= course.capacity ? "disabled" : ""}>
                <i class="fas fa-user-plus"></i> 
                ${course.enrolled >= course.capacity ? "Full" : "Enroll Now"}
            </button>
        </div>
    `

  return courseCard
}

// Toggle between timeline and grid view
function toggleView() {
  if (currentView === "timeline") {
    timelineView.classList.add("active")
    gridView.classList.remove("active")
  } else {
    timelineView.classList.remove("active")
    gridView.classList.add("active")
  }
  renderCourses()
}

// Update results count
function updateResultsCount() {
  if (!resultsCount) return

  const total = coursesData.length
  const filtered = filteredCourses.length

  if (filtered === total) {
    resultsCount.textContent = `Showing all ${total} courses`
  } else {
    resultsCount.textContent = `Showing ${filtered} of ${total} courses`
  }
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

// Show course details in modal
function showCourseDetails(courseId) {
  const course = coursesData.find((c) => c.id === courseId)
  if (!course || !modal) return

  // Populate modal content
  const modalTitle = document.getElementById("modalTitle")
  const modalLevel = document.getElementById("modalLevel")
  const modalFormat = document.getElementById("modalFormat")
  const modalInstructorAvatar = document.getElementById("modalInstructorAvatar")
  const modalInstructor = document.getElementById("modalInstructor")
  const modalInstructorTitle = document.getElementById("modalInstructorTitle")
  const modalDate = document.getElementById("modalDate")
  const modalTime = document.getElementById("modalTime")
  const modalVenue = document.getElementById("modalVenue")
  const modalCapacity = document.getElementById("modalCapacity")
  const modalPrice = document.getElementById("modalPrice")
  const modalDescription = document.getElementById("modalDescription")
  const modalCurriculum = document.getElementById("modalCurriculum")

  if (modalTitle) modalTitle.textContent = course.title
  if (modalLevel) modalLevel.textContent = course.level.toUpperCase()
  if (modalFormat) modalFormat.textContent = course.format.toUpperCase()
  if (modalInstructorAvatar) modalInstructorAvatar.textContent = course.instructor.avatar
  if (modalInstructor) modalInstructor.textContent = course.instructor.name
  if (modalInstructorTitle) modalInstructorTitle.textContent = course.instructor.title
  if (modalDate) modalDate.textContent = formatDate(course.date)
  if (modalTime) modalTime.textContent = `${course.time} • ${course.duration}`
  if (modalVenue) modalVenue.textContent = course.venue
  if (modalCapacity) modalCapacity.textContent = `${course.enrolled}/${course.capacity} enrolled`
  if (modalPrice) modalPrice.textContent = `₹${course.price}`
  if (modalDescription) modalDescription.textContent = course.description

  // Populate curriculum
  if (modalCurriculum) {
    modalCurriculum.innerHTML = ""
    course.curriculum.forEach((item) => {
      const li = document.createElement("li")
      li.textContent = item
      modalCurriculum.appendChild(li)
    })
  }

  // Set up modal buttons
  const enrollBtn = document.getElementById("modalEnroll")
  const wishlistBtn = document.getElementById("modalWishlist")

  if (enrollBtn) {
    enrollBtn.onclick = () => enrollInCourse(courseId)
    enrollBtn.disabled = course.enrolled >= course.capacity
    enrollBtn.innerHTML =
      course.enrolled >= course.capacity
        ? '<i class="fas fa-times"></i> Course Full'
        : '<i class="fas fa-user-plus"></i> Enroll Now'
  }

  if (wishlistBtn) {
    wishlistBtn.onclick = () => addToWishlist(courseId)
  }

  // Show modal
  modal.style.display = "block"
}

// View syllabus function
function viewSyllabus(courseKey) {
  const syllabus = syllabusData[courseKey]
  if (!syllabus || !syllabusModal) return

  const syllabusModalTitle = document.getElementById("syllabusModalTitle")
  const syllabusModalContent = document.getElementById("syllabusModalContent")

  if (syllabusModalTitle) {
    syllabusModalTitle.textContent = syllabus.title + " - Detailed Syllabus"
  }

  if (syllabusModalContent) {
    syllabusModalContent.innerHTML = `
            <div class="syllabus-overview">
                <div class="syllabus-info">
                    <div class="info-item">
                        <strong>Duration:</strong> ${syllabus.duration}
                    </div>
                    <div class="info-item">
                        <strong>Level:</strong> ${syllabus.level}
                    </div>
                    <div class="info-item">
                        <strong>Total Modules:</strong> ${syllabus.modules.length}
                    </div>
                </div>
            </div>
            
            <div class="modules-container">
                ${syllabus.modules
                  .map(
                    (module, index) => `
                    <div class="module-card">
                        <div class="module-header">
                            <h3>${module.title}</h3>
                            <span class="module-duration">${module.duration}</span>
                        </div>
                        <div class="module-topics">
                            <h4>Topics Covered:</h4>
                            <ul>
                                ${module.topics.map((topic) => `<li>${topic}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `
  }

  syllabusModal.style.display = "block"
}

// Close syllabus modal
function closeSyllabusModal() {
  if (syllabusModal) {
    syllabusModal.style.display = "none"
  }
}

// Enroll in course
function enrollInCourse(courseId) {
  const course = coursesData.find((c) => c.id === courseId)
  if (!course || course.enrolled >= course.capacity) return

  // Simulate enrollment
  course.enrolled++

  // Show success message
  alert(
    `Successfully enrolled in "${course.title}"!\n\nYou will receive a confirmation email shortly with course details and access information.`,
  )

  // Update UI
  filterAndRenderCourses()

  // Close modal if open
  if (modal) modal.style.display = "none"

  // Simulate sending confirmation email (in real app, this would be an API call)
  setTimeout(() => {
    console.log(`Confirmation email sent for course: ${course.title}`)
  }, 1000)
}

// Add to wishlist (placeholder function)
function addToWishlist(courseId) {
  const course = coursesData.find((c) => c.id === courseId)
  if (!course) return

  alert(`"${course.title}" has been added to your wishlist!`)
}

// Simulate real-time enrollment updates
setInterval(() => {
  // Randomly update enrollment for some courses (5% chance per course)
  coursesData.forEach((course) => {
    if (Math.random() < 0.05 && course.enrolled < course.capacity) {
      course.enrolled++
    }
  })

  // Re-render if there are changes
  if (Math.random() < 0.1) {
    // 10% chance to re-render
    renderCourses()
  }
}, 15000) // Check every 15 seconds

// Global functions for onclick handlers
window.showCourseDetails = showCourseDetails
window.enrollInCourse = enrollInCourse
window.addToWishlist = addToWishlist
window.viewSyllabus = viewSyllabus
window.closeSyllabusModal = closeSyllabusModal
