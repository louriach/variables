// Script to copy all hex values of a selection in Figma. Run this in the console

// Get the current selection
const selection = figma.currentPage.selection;

// Function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join('');
}

// Array to store hex values
let hexValues = [];

// Loop through each selected node
selection.forEach(node => {
    if (node.fills && node.fills.length > 0) {
        // For each fill, check if it's a solid color
        node.fills.forEach(fill => {
            if (fill.type === 'SOLID') {
                const { r, g, b } = fill.color;
                // Convert RGB (0-1) to (0-255) and then to hex
                const hex = rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
                // Add the hex value to the array
                hexValues.push(hex);
            }
        });
    }
});

// Print the hex values as a comma-separated string
console.log(hexValues.join(', '));
