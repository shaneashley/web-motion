const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const loc = document.querySelector('.loc')

const testimonials = [
  {
    name: 'Leigh P.',
    location: 'London',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'Jessi Chen',
    location: 'Manchester',
    photo: 'https://randomuser.me/api/portraits/women/35.jpg',
    text:
      "Thanks to Web Motion, we've just launched our 5th website!",
  },
  {
    name: 'Anna Penn',
    location: 'Liverpool',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "They are all hard workers. Communication was also very good with them and they were very responsive all the time, something not easy to find in many agencies. We'll definitely repeat with them.",
  },
  {
    name: 'Hannah Cole',
    location: 'Blackpool',
    photo: 'https://randomuser.me/api/portraits/women/77.jpg',
    text:
      "They do everything the can to get the job done and done right. This is the second time I've worked with them, and I cannot wait to work with them again in the future.",
  },
  {
    name: 'Justin Peter',
    location: 'Camden',
    photo: 'https://randomuser.me/api/portraits/men/23.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Kylie Kim',
    location: 'Shoreditch',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Web Motion have the top notch designers and developers. they communicate well, work fast and produce quality work. We have been lucky to work with Them!',
  },
  {
    name: 'Logan Moore',
    location: 'Brixton',
    photo: 'https://randomuser.me/api/portraits/men/73.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, location, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  loc.innerHTML = location

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}