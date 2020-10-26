const element = document.getElementById("greeting");
const timeGreeting = () => {
    const today = new Date();
    const hours =  today.getHours();
    if (hours >= 17) {
        element.innerHTML = "Good Evening";
    } 
    if (hours >= 12) {
        element.innerHTML = "Good Afternoon";
    }
    if (hours >= 5) {
        element.innerHTML = "Good Morning";
    }

    element.innerHTML = "Good Evening";
};

export default timeGreeting

