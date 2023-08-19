const courses = [
    {
        title: "Introduction to Painting",
        description: "Learn the basics of painting techniques.",
        lessons: [
            "Choosing the right brushes",
            "Color mixing and blending",
            "Creating different textures"
        ]
    }, {
        title: "Digital Photography",
        description: "Explore the world of digital photography.",
        lessons: [
            "Camera settings and exposure",
            "Composition and framing",
            "Editing photos with software"
        ]
    },{
        title:"Mental Health",
        description: "How to keep our mental health in good condition",
        lessons:[
            'Why mental health is important',
            'How can we improve our mental Health',
            'meditation',
            'Benefits of meditation'
        ]
    }

];

// Display the course catalog
function displayCourseCatalog() {
    const catalogSection = document.querySelector(".course-catalog");
    catalogSection.innerHTML = "<h2>Course Catalog</h2>";
    
    courses.forEach((course, index) => {
        const courseItem = document.createElement("div");
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
        courseItem.addEventListener("click", () => displayCourseDetails(index));
        catalogSection.appendChild(courseItem);
    });
}
function displayCourseDetails(courseIndex) {
    const detailsSection = document.querySelector(".course-details");
    detailsSection.innerHTML = `<h2>${courses[courseIndex].title}</h2><p>${courses[courseIndex].description}</p>`;
    
    const lessonsList = document.createElement("ul");
    courses[courseIndex].lessons.forEach(lesson => {
        const lessonItem = document.createElement("li");
        lessonItem.textContent = lesson;
        lessonsList.appendChild(lessonItem);
    });
    detailsSection.appendChild(lessonsList);
}
// Initialize the app
function initApp() {
    displayCourseCatalog();
}

initApp();

