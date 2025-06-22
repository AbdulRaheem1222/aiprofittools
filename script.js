
// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Prompt Builder Functionality
function generatePrompt() {
    const role = document.getElementById('role').value;
    const goal = document.getElementById('goal').value;
    const topic = document.getElementById('topic').value;
    
    if (!role || !goal || !topic) {
        alert('Please fill in all fields to generate a prompt.');
        return;
    }
    
    const prompt = `Act as a ${role} and help me ${goal} related to ${topic}. Provide a step-by-step response with actionable insights and specific examples. Make your response practical and immediately implementable.`;
