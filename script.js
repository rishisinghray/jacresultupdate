// JAC Result Update - Common Scripts
// Most logic is inline in HTML pages for Firebase integration

// Utility: format date
function formatDate(ts) {
  if (!ts) return '';
  const d = new Date(ts.seconds ? ts.seconds * 1000 : ts);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Share post
function sharePost(title, url) {
  if (navigator.share) {
    navigator.share({ title, url: url || window.location.href });
  } else {
    navigator.clipboard.writeText(url || window.location.href)
      .then(() => alert('Link copied!'));
  }
}

// Copy text
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied: ' + text);
  });
}

// Lazy load images
document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    const imgs = document.querySelectorAll('img[data-src]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.src = e.target.dataset.src;
          io.unobserve(e.target);
        }
      });
    });
    imgs.forEach(img => io.observe(img));
  }
});

console.log('JAC Result Update | jacresultupdate.com');
