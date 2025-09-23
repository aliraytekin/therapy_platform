(function(){
    const bg = document.querySelectorAll('.reveal-slow')
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, i) => {
        if(entry.isIntersecting){
          entry.target.style.transitionDelay = `${i * 90}ms`;
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    bg.forEach(bg => io.observe(bg));
    els.forEach(el => io.observe(el));
  })();
