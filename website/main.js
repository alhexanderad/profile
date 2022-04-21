/**Para menu burger */
const navbar = document.querySelector('.header .navbar');
const menubutton = document.querySelector('.header .menu');

menubutton.addEventListener('click', () =>{
  navbar.classList.toggle('show');
})

/**Navbar */
document.onscroll = () =>{
  navbar.classList.remove('show');
  
  if (window.scrollY > 0){
  document.querySelector('.header').classList.add('active');
}
else{
  document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () =>{
  if (window.scrollY > 0){
  document.querySelector('.header').classList.add('active');
}
else{
  document.querySelector('.header').classList.remove('active');
  }
};
