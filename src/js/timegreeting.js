const element = document.getElementById("greeting");
const timeGreeting = () => {
    const today = new Date();
    const hours = today.getHours();
    
    if (hours <= 24) {
        element.innerHTML = "Goedenavond";
    }

    if (hours <= 17) {
        element.innerHTML = "Goedemiddag";
    }

    if (hours <= 6) {
        element.innerHTML = "Goedemorgen";
    }

    if (hours <= 5) {
        element.innerHTML = "Goedenavond";
    }

};

export default timeGreeting

