
// Array of quotes
const quotes = [
    "“Sometimes life gives us moments to fix what was broken. Let’s build a new chapter, stronger and more beautiful.”",
    "“Love is not about possession. Love is about appreciation.”",
    "“In the end, we only regret the chances we didn’t take.”",
    "“Every moment spent with you is a beautiful memory.”",
    "“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”",
    "“Love is composed of a single soul inhabiting two bodies.”",
    "“We are most alive when we’re in love.”",
    "“The best thing to hold onto in life is each other.”",
    "“Love is not something you find. Love is something that finds you.”",
    "“You make me feel like I’m living a teenage dream.”"
];

// Display a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('loveQuote').innerText = randomQuote;

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Emotional support messages
const emotionalSupport = [
    {
        reason: "Feeling overwhelmed with studies",
        message: "Akshata, I know your studies can sometimes feel like an endless mountain to climb. But remember, you don’t have to scale it all in one day. Take it one step at a time. I’m proud of how hard you’re working, and I know that you’re going to conquer this. Whenever you feel lost or overwhelmed, I’m here to remind you that you’re capable, intelligent, and resilient. We can take this on together, one page, one chapter, one day at a time. I’ve got your back."
    },
    {
        reason: "Experiencing anxiety",
        message: "Akshata, I know anxiety can be such a heavy weight to carry, making everything seem harder than it is. But you don’t have to face it alone. When the world feels too much, I’m here to be your calm, to remind you to breathe, to just focus on one thing at a time. It’s okay to feel anxious—it doesn’t make you weak. You’re stronger than you think, and whenever you need someone to lean on or just a quiet presence, I’m right here for you."
    },
    {
        reason: "Feeling unmotivated",
        message: "Akshata, I know there are days when the motivation just isn’t there, and everything feels like an uphill battle. It’s okay to feel like that. You don’t always have to be full of energy or drive. What matters is that you’re still trying, even when it’s hard. I’m here to remind you of the amazing things you’re working towards and to cheer you on, even when you don’t feel like moving forward. Rest if you need to, and when you’re ready, I’ll be right here to help you take the next step."
    },
    {
        reason: "Struggling with self-esteem",
        message: "Akshata, I want you to know that you are more incredible than you give yourself credit for. It breaks my heart that you don’t see the beauty, intelligence, and strength that I see in you every single day. Please remember, your worth isn’t based on any external measures. It’s in the kindness you show, the love you give, and the amazing person you are. You are enough, just as you are. I’ll be here to remind you of that, for as long as you need me to."
    },
    {
        reason: "Feeling lonely",
        message: "Akshata, loneliness can be such a painful feeling, especially when it feels like no one understands. But you’re not alone—I’m here, always. I may not be able to take away the loneliness, but I can promise that I’ll always be beside you, ready to listen, ready to hold your hand through whatever you’re going through. Whenever you feel isolated, know that you can always reach out to me. I’m never more than a heartbeat away."
    },
    {
        reason: "Facing pressure to succeed",
        message: "Akshata, I know the pressure to succeed can feel overwhelming, like the weight of the world is on your shoulders. But you don’t have to carry it alone. I believe in your abilities and the passion that drives you. No matter the outcome, I’m here to remind you that you’re more than your achievements. Your worth isn’t measured by what you accomplish but by the heart and effort you put into everything. You’re amazing just the way you are, and I’m proud of you."
    },
    {
        reason: "Dealing with exhaustion or burnout",
        message: "Akshata, I see how much you’re pushing yourself, and I just want to remind you that it’s okay to take a break. You’ve been so strong, but even the strongest hearts need rest. I’m here for you, to hold you up when you’re too tired to keep going. Let me help you recharge, whether it’s by listening to your thoughts, taking time to relax together, or simply reminding you how loved you are. You deserve peace and rest, and I’ll be right here with you through it all."
    },
    {
        reason: "Coping with self-doubt",
        message: "Akshata, I know self-doubt can creep in, making you question everything, but I want you to remember how incredible you truly are. You’ve accomplished so much, even when you didn’t believe in yourself. Whenever you doubt your worth, know that I see the real you—the beautiful, intelligent, and resilient person who can overcome anything. I’m here to remind you that you’re capable of amazing things, and I’ll always be by your side, believing in you, especially when you find it hard to believe in yourself."
    }
];


// Display the reasons as clickable buttons
const supportReasonsDiv = document.getElementById('supportReasons');
emotionalSupport.forEach((item, index) => {
    const reasonButton = document.createElement('button');
    reasonButton.innerText = item.reason;
    reasonButton.classList.add('reason-button');
    reasonButton.onclick = () => openModalWithAnimation(index); // Bind click event
    supportReasonsDiv.appendChild(reasonButton);
});

// Function to open the modal and display the support message with animation
function openModalWithAnimation(index) {
    const modal = document.getElementById('supportModal');
    const messageParagraph = document.getElementById('modalSupportMessage');
    const button = document.querySelector(`.reason-button:nth-child(${index + 1})`);

    // Set initial state
    modal.style.display = "block";
    modal.style.opacity = 0; // Set initial opacity
    messageParagraph.innerText = emotionalSupport[index].message;
    modal.setAttribute('data-index', index); // Store the index

    // Animation
    const timeLine = new TimelineMax({ paused: false });
    
    timeLine
        .to(button, 0.6, { opacity: 0 }) // Fade out button
        .to(button, 0.8, { height: 0.2, opacity: 0.5, boxShadow: "0px 0px 35px 7px #cd28fa", delay: 0.25 })
        .to(button, 0.1, { opacity: 0.5, background: "#26ff92" })
        .to(button, 0.3, { height: 1000, y: -1500, boxShadow: "0px 0px 85px 17px #fa2856", delay: 0.2 })
        .to(modal, 0, { display: "block" }) // Show modal immediately
        .to(modal, 1, { opacity: 1, delay: 0.3 }); // Fade in modal
}

// Close the modal when the close button is clicked
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(closeButton => {
    closeButton.onclick = function() {
        const modal = this.closest('.modal');
        modal.style.opacity = 0; // Fade out effect
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after the fade-out
        }, 300); // Match this delay with the animation duration
    }
});;

// Close the modal when clicking anywhere outside of the modal content
window.addEventListener("click", function(event) {
    const modal = document.getElementById('supportModal');
    if (event.target === modal) {
        closeModalWithAnimation(modal);
    }
});

function closeModalWithAnimation(modal) {
    const index = modal.getAttribute('data-index');
    const button = document.querySelector(`.reason-button:nth-child(${parseInt(index) + 1})`);
  
    // Animation for closing
    const timeline = gsap.timeline({ paused: false });
  
    timeline
      .to(modal, 0.5, { opacity: 0 }) // Fade out modal
      .set(modal, { display: 'none' }) // Hide modal after fading out
      .to(button, 0.5, { 
        opacity: 1, 
        height: "auto", 
        y: 0, 
        boxShadow: "none", 
        background: "", 
        clearProps: "all" // Reset all GSAP-applied CSS properties
      })
      .to(button, 0.3, { scale: 1 }) // Restore button to its original size
      .to(button, 0.2, { y: 0 }); // Return button to its original position
  
    // Ensure button styles are fully reset after the modal is closed
    button.style.transform = "none"; // Reset any transformations applied during the animation
    button.style.transition = "none"; // Remove any transitions
    button.style.opacity = 1;         // Ensure opacity is back to 1
    button.style.height = "auto";     // Reset the height
}

// Reset button styles on load
window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.reason-button');
    buttons.forEach(button => {
        button.style.height = "auto"; // Ensure height is auto initially
        button.style.opacity = 1; // Ensure opacity is 1 initially
    });
});









// Get the modal for MCQ's Preparation
const mcqsModal = document.getElementById('mcqsModal');
const mcqsPreparationBtn = document.getElementById('mcqsPreparationBtn');
const closeMcqsModal = document.getElementById('closeTopicModal');
const mcqTopicButtons = document.querySelectorAll('.mcq-topic-btn');

// Open the modal when "MCQ's Preparation" is clicked
mcqsPreparationBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    mcqsModal.style.display = 'block'; // Show the modal
});

// Close the modal when "Close" is clicked
closeMcqsModal.addEventListener('click', () => {
    mcqsModal.style.display = 'none'; // Hide the modal
});

// Handle topic selection for MCQ's Preparation
mcqTopicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const topic = button.getAttribute('data-topic');
        let url = '';
        // Assign URLs based on the topic
        switch (topic) {
            case 'economy':
                url = 'https://unacademy.com/content/upsc/mcqs/economy/';
                break;
            case 'polity':
                url = 'https://unacademy.com/content/upsc/mcqs/polity/';
                break;
            case 'current-affairs':
                url = 'https://unacademy.com/content/upsc/mcqs/current-affairs/';
                break;
            case 'international-relations':
                url = 'https://unacademy.com/content/upsc/mcqs/international-relations/';
                break;
            case 'world-history':
                url = 'https://unacademy.com/content/upsc/mcqs/world-history/';
                break;
            case 'anthropology':
                url = 'https://unacademy.com/content/upsc/mcqs/anthropology/';
                break;
            case 'ancient-history':
                url = 'https://unacademy.com/content/upsc/mcqs/ancient-history/';
                break;
            case 'modern-indian-history':
                url = 'https://unacademy.com/content/upsc/mcqs/modern-indian-history/';
                break;
            case 'indian-geography':
                url = 'https://unacademy.com/content/upsc/mcqs/indian-geography/';
                break;
            case 'sociology':
                url = 'https://unacademy.com/content/upsc/mcqs/sociology/';
                break;
            default:
                console.error('Invalid topic selected');
                return;
        }

        // Redirect to the assigned URL
        window.open(url, '_blank');
    });
});


window.addEventListener("click", function(event) {
    if (event.target === mcqsModal) {
        mcqsModal.style.display = 'none'; // Hide the modal
    }
})











// Get the modal for Take Test
const topicModal = document.getElementById('topicModal');
const takeTestModal = document.getElementById('takeTestModal');
const takeTestBtn = document.getElementById('takeTestBtn');
const closeTakeTestModal = document.getElementById('closeTakeTestModal');
const testTopicButtons = document.querySelectorAll('.topic-btn');

// Open the modal when "Take Test" is clicked
takeTestBtn.addEventListener('click', () => {
    takeTestModal.style.display = 'block';
});

// Close the modal when "Close" is clicked
closeTakeTestModal.addEventListener('click', () => {
    takeTestModal.style.display = 'none';
});

// Handle topic selection for Take Test
testTopicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const topic = button.getAttribute('data-topic');
        // Redirect to the test page for the selected topic
        window.location.href = `test/quiz-${topic}.html`;
    });
});

// Single click event listener for closing modals
window.addEventListener("click", function(event) {
    if (event.target === takeTestModal) {
        takeTestModal.style.display = 'none'; // Hide Take Test modal
    }
});













