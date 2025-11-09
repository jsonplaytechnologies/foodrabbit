// Paste this in your browser console to debug sticky positioning
// Usage: Just paste and press Enter, then scroll the page

(function() {
  // Create debug overlay
  const debugDiv = document.createElement('div');
  debugDiv.id = 'sticky-debug-overlay';
  debugDiv.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.9);
    color: #0f0;
    padding: 15px;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    z-index: 99999;
    min-width: 300px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  `;

  const updateDebug = () => {
    // Find header elements
    const headerWrapper = document.querySelector('div.sticky.top-0.z-50') ||
                         document.querySelector('header')?.parentElement;
    const topBar = document.querySelector('.bg-gray-900.text-white');
    const mainHeader = document.querySelector('header.bg-white');

    // Find filter sections
    const filterSections = document.querySelectorAll('[class*="sticky top-"]');

    let html = '<div style="color: #0ff; font-weight: bold; margin-bottom: 10px;">🔍 STICKY DEBUG INFO</div>';
    html += '<div style="border-top: 1px solid #333; padding-top: 10px;">';

    // Scroll position
    html += `<div style="color: #ff0;">📍 Scroll Y: <span style="color: #fff;">${Math.round(window.scrollY)}px</span></div>`;
    html += '<div style="height: 8px;"></div>';

    // Header measurements
    html += '<div style="color: #0f0; font-weight: bold;">HEADER:</div>';
    if (headerWrapper) {
      html += `  Total Height: <span style="color: #fff;">${headerWrapper.offsetHeight}px</span><br>`;
      const rect = headerWrapper.getBoundingClientRect();
      html += `  Position: <span style="color: #fff;">${Math.round(rect.top)}px from top</span><br>`;
    }
    if (topBar) {
      html += `  Top Bar: <span style="color: #fff;">${topBar.offsetHeight}px</span><br>`;
    }
    if (mainHeader) {
      html += `  Main Header: <span style="color: #fff;">${mainHeader.offsetHeight}px</span><br>`;
    }
    html += '<div style="height: 8px;"></div>';

    // Filter sections
    html += '<div style="color: #0f0; font-weight: bold;">FILTER SECTIONS:</div>';
    filterSections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(section);
      const topValue = computedStyle.getPropertyValue('top');
      const isSticky = computedStyle.position === 'sticky';

      html += `  [${i + 1}] Top value: <span style="color: ${isSticky ? '#0f0' : '#f00'};">${topValue}</span><br>`;
      html += `      Current pos: <span style="color: #fff;">${Math.round(rect.top)}px from top</span><br>`;
      html += `      Is sticky: <span style="color: ${isSticky ? '#0f0' : '#f00'};">${isSticky}</span><br>`;
    });
    html += '<div style="height: 8px;"></div>';

    // Recommendations
    if (headerWrapper) {
      const recommendedTop = headerWrapper.offsetHeight;
      html += '<div style="color: #ff0; font-weight: bold;">💡 RECOMMENDATION:</div>';
      html += `  Filter sections should use:<br>`;
      html += `  <span style="color: #0ff; font-weight: bold;">top-[${recommendedTop}px]</span><br>`;

      // Check if current values match
      let allMatch = true;
      filterSections.forEach(section => {
        const computedStyle = window.getComputedStyle(section);
        const topValue = parseInt(computedStyle.getPropertyValue('top'));
        if (Math.abs(topValue - recommendedTop) > 2) {
          allMatch = false;
        }
      });

      if (allMatch && filterSections.length > 0) {
        html += `  <span style="color: #0f0;">✅ All sections aligned correctly!</span>`;
      } else if (filterSections.length > 0) {
        html += `  <span style="color: #f00;">❌ Sections need adjustment</span>`;
      }
    }

    html += '</div>';
    debugDiv.innerHTML = html;
  };

  // Add to page
  document.body.appendChild(debugDiv);

  // Update on scroll and resize
  window.addEventListener('scroll', updateDebug);
  window.addEventListener('resize', updateDebug);

  // Initial update
  updateDebug();

  // Add close button
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '✖';
  closeBtn.style.cssText = `
    position: absolute;
    top: 5px;
    right: 8px;
    cursor: pointer;
    color: #f00;
    font-weight: bold;
    font-size: 16px;
  `;
  closeBtn.onclick = () => {
    debugDiv.remove();
    window.removeEventListener('scroll', updateDebug);
    window.removeEventListener('resize', updateDebug);
  };
  debugDiv.appendChild(closeBtn);

  console.log('✅ Sticky Debug Tool activated! Scroll to see measurements.');
  console.log('Click the ✖ button to close the debug overlay.');
})();
