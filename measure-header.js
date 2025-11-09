// Run this in the browser console to measure exact header height
// Copy and paste into browser dev tools console when the page is loaded

setTimeout(() => {
  const header = document.querySelector('header')?.parentElement;
  if (header && header.classList.contains('sticky')) {
    const height = header.offsetHeight;
    console.log('======================');
    console.log('HEADER HEIGHT:', height + 'px');
    console.log('======================');
    console.log('Update filter sections to use: top-[' + height + 'px]');
    console.log('======================');

    // Also log individual parts
    const topBar = header.querySelector('.bg-gray-900');
    const mainHeader = header.querySelector('header');
    if (topBar) console.log('Top Bar Height:', topBar.offsetHeight + 'px');
    if (mainHeader) console.log('Main Header Height:', mainHeader.offsetHeight + 'px');
  } else {
    console.log('Header not found or not sticky');
  }
}, 1000);
