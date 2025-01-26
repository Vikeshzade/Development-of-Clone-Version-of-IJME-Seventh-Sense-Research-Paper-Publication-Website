function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isExpanded = content.style.display === "block";
  
    // Close all accordion contents
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.style.display = "none";
    });
  
    // Toggle the current accordion
    document.querySelectorAll(".accordion-header").forEach((header) => {
      header.textContent = header.textContent.replace("−", "+");
    });
  
    if (!isExpanded) {
      content.style.display = "block";
      button.textContent = button.textContent.replace("+", "−");
    } else {
      content.style.display = "none";
      button.textContent = button.textContent.replace("−", "+");
    }
  }