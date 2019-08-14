const getSailAnchor = () => {
  // плавная прокрутка до якоря 
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const ourId = item.getAttribute('href');
      if (ourId == '#') {
        return false;
      }
      document.querySelector('' + ourId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  // плавная прокрутка до верха страницы
  const smootUp = document.getElementById('totop');
  smootUp.addEventListener('click', () => {
    const smoothJumpUp = () => {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(smoothJumpUp, 10);
      }
    };
    smoothJumpUp();
  });

    
};

export default getSailAnchor;