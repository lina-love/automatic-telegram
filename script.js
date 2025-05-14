function handleClick() {
  console.log("Button clicked. Checking Usercentrics and consent status...");

  if (!window.Usercentrics) {
    console.warn("Usercentrics is not loaded.");
    return;
  }

  const services = window.Usercentrics.getServicesBaseInfo();
  console.log("Retrieved services from Usercentrics:", services);

  const analyticsService = services.find(
    (s) => s.templateId === "google-analytics"
  );

  if (!analyticsService) {
    console.warn("Google Analytics service not found in Usercentrics.");
    return;
  }

  if (analyticsService.isConsentGiven) {
    console.log("Analytics consent granted. Sending event to GA4...");

    gtag("event", "button_click", {
      event_category: "User",
      event_label: "Hello Button"
    });

    console.log("Custom GA4 event 'button_click' sent.");
  } else {
    console.warn("Consent for Google Analytics not granted. Event not sent.");
  }
}
