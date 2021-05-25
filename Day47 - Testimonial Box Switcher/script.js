const testimonialContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Iv'e worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this girl. This girl is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "Juan Carlos",
    position: "Sales",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "His been attentive and has a great customer service. He really works hard and pays attention to customer needs.",
  },
  {
    name: "Aera Choi",
    position: "Manager",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "She has a unique way to handle and manage customer demands. She is very good to her co-workers.",
  },
  {
    name: "Dong Man",
    position: "Sales",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "She has a unique way to handle and manage customer demands. She is very good to her co-workers.",
  },
]


let idx = 1

function updateTestimonial() {
   const {name, position, photo, text} =  testimonials[idx]
    console.log(name);
   testimonial.innerHTML = text
   userImage.src = photo
   username.innerHTML = name
   role.innerHTML = position

   idx++

   if (idx > testimonials.length - 1) {
    idx = 0
   }
}

setInterval(updateTestimonial, 10000)
