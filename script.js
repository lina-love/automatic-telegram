function handleClick() {
  console.log('Button clicked');
  
  gtag('event', 'button_click', {
    'event_category': 'interaction',
    'event_label': 'Click Me Button'
  });
}
