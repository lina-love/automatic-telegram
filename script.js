function handleClick() {
  if (
    window.Usercentrics &&
    window.Usercentrics.getServicesBaseInfo().some(
      (s) => s.templateId === "google-analytics" && s.isConsentGiven
    )
  ) {
    gtag("event", "button_click", {
      event_category: "User",
      event_label: "Hello Button"
    });
  } else {
    console.log("Consent not granted. Event not sent.");
  }
}
