
document.addEventListener("DOMContentLoaded", () => {
    const eventsList = document.getElementById("events-list");
    const form = document.getElementById("event-form");
    const eventName = document.getElementById("event-name");
    const eventDate = document.getElementById("event-date");
    const eventCategory = document.getElementById("event-category");
    const loading = document.getElementById("loading");
    
    const events = [
        { name: "Nairobi Music Festival", date: "2025-03-15", category: "Music" },
        { name: "Marathon for Charity", date: "2025-03-16", category: "Sports" },
        { name: "Tech Innovators Meetup", date: "2025-03-15", category: "Tech" },
        { name: "Nairobi Art Exhibition", date: "2025-03-16", category: "Art" },
        { name: "Food & Wine Festival", date: "2025-03-15", category: "Food" },
        { name: "Startup Pitch Battle", date: "2025-03-16", category: "Tech" },
        { name: "Jazz Night at The Hub", date: "2025-03-15", category: "Music" },
        { name: "Community Cleanup Drive", date: "2025-03-16", category: "Community" },
        { name: "Yoga in the Park", date: "2025-03-15", category: "Health" },
        { name: "Gaming Convention Nairobi", date: "2025-03-16", category: "Tech" },
        { name: "Poetry Slam Competition", date: "2025-03-15", category: "Art" },
        { name: "Fashion Showcase Nairobi", date: "2025-03-15", category: "Fashion" },
        { name: "Coding Bootcamp", date: "2025-03-16", category: "Tech" },
        { name: "Cultural Dance Fiesta", date: "2025-03-15", category: "Culture" }
    ];
    
    function renderEvents() {
        eventsList.innerHTML = "";
        events.forEach(event => {
            const li = document.createElement("li");
            li.classList.add("event");
            li.innerHTML = `<span>${event.name} - ${event.date} (${event.category})</span>`;
            eventsList.appendChild(li);
        });
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newEvent = {
            name: eventName.value,
            date: eventDate.value,
            category: eventCategory.value
        };
        events.push(newEvent);
        renderEvents();
        form.reset();
    });
    
    renderEvents();
});document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("attractions-list");
    const form = document.getElementById("attraction-form");

    async function fetchAttractions() {
        const res = await fetch("https://api.example.com/attractions");
        const attractions = await res.json();
        list.innerHTML = attractions.map(a => `<li>${a.name} - ${a.location}</li>`).join("");
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        await fetch("https://api.example.com/attractions", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: { "Content-Type": "application/json" }
        });
        fetchAttractions(); 
        form.reset();
    });

    fetchAttractions();
});
