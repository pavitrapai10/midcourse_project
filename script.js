// Store the reference to the currently dragged element
let draggedElement = null;

document.addEventListener("dragstart", function(event) {
    // Set the draggedElement to the current target
    draggedElement = event.target;
    event.target.style.opacity = 0.5;
});

document.addEventListener("dragend", function(event) {
    // Reset the opacity of the dragged element
    event.target.style.opacity = "";
    draggedElement = null;
});

document.addEventListener("dragover", function(event) {
    // Prevent default to allow drop
    event.preventDefault();
});

document.addEventListener("dragenter", function(event) {
    // Highlight the potential drop target when the draggable element enters it
    if (event.target.className === "image") {
        event.target.classList.add("selected");
    }
});

document.addEventListener("dragleave", function(event) {
    // Reset the highlight when the draggable element leaves the potential drop target
    if (event.target.className === "image") {
        event.target.classList.remove("selected");
    }
});

document.addEventListener("drop", function(event) {
    // Prevent default action (open as link for some elements)
    event.preventDefault();
    if (event.target.className === "image" && draggedElement !== event.target) {
        // Swap the background images of the dragged and drop target elements
        let temp = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = temp;
    }
    // Remove the highlight from the drop target
    event.target.classList.remove("selected");
});
