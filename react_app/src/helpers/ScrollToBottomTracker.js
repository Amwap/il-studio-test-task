import React, { useEffect } from 'react';

function ScrollToBottomTracker() {
  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById('chat-body');

      // Check if the user has scrolled to the bottom
      if (element.scrollTop + element.clientHeight === element.scrollHeight) {
        console.log('Scrolled to the bottom of chat-body!');
        // Perform any desired actions here
      }
    }

    const element = document.getElementById('chat-body');
    element.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="chat-body" style={{ height: '200px', overflow: 'auto' }}>
      Scroll inside chat-body...
    </div>
  );
}

export default ScrollToBottomTracker;