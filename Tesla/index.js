const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
  }
  const closingMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
  }
  
  
  document.getElementById('menu').onclick=e=>{
    e.preventDefault();
    openMenu()
  }
  document.getElementById('close').onclick=e=>{
    e.preventDefault()
    closingMenu()
  }
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    })
  })
  const hiddenEl=document.querySelectorAll('.content');
  hiddenEl.forEach((el)=>observer.observe(el));