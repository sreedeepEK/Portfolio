function formatCodeBlocks() {
    document.querySelectorAll('pre code').forEach((block) => {
        // Add the 'language-' prefix if it's missing
        if (!block.className.startsWith('language-')) {
            block.className = 'language-' + block.className;
        }
        Prism.highlightElement(block);
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', formatCodeBlocks);