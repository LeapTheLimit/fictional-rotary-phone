(function() {
  const WIDGET_ID = 'finlit-widget-container';
  
  // Create a container div if it doesn't already exist
  if (!document.getElementById(WIDGET_ID)) {
    const widgetContainer = document.createElement('div');
    widgetContainer.id = WIDGET_ID;
    widgetContainer.style.width = '100%'; // You can adjust these styles as needed
    widgetContainer.style.height = '500px';
    widgetContainer.style.position = 'relative'; 
    document.body.appendChild(widgetContainer);
  }

  // Load the widget script from the provided URL
  const script = document.createElement('script');
  script.src = "https://leapthelimit.github.io/finlit-wed/updated_widget/src/App.js"; // Make sure to replace with the right path to your bundled app JS
  script.async = true;

  // Append the script tag to the widget container
  document.getElementById(WIDGET_ID).appendChild(script);
})();
