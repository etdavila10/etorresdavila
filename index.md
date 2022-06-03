---
layout: default
---

## About Me

<img class="profile-picture" src="assets/images/square_profile_picture.jpg" alt="profile picture">

Hello and welcome to my website! My name is Eduardo and I am currently a third-year math PhD student at the [University of Minnesota](https://twin-cities.umn.edu/). I graduated in May 2020 with a Bachelors of Science in Applied Mathematics and a minor in Computer Science from [San Diego State University](https://www.sdsu.edu/). I really enjoy to code in Python. I mainly use it to write small scripts that make my life just a little bit easier. I have also used it to make some nice projects related to research papers that I have worked on in the past.

I am also one of many leaders of the *Council for the Advancement of Underrepresented Scientists and Engineers* (CAUSE) at the University of Minnesota. We are dedicated to the recruitment, retention, and professional development of graduate students of color and first generation college students within the College of Science and Engineering. To learn more head over to our [website](http://cause.umn.edu/).

Outside of academics, my main hobby is climbing. After a long day, there is nothing better than turning your brain off and attacking some difficult bouldering problems. I was initially introduced to the world of bouldering, but recently I have been attempting more top-roping routes which I have been enjoying more than bouldering. So far, I have only climbed indoors, but I hope to go outdoor climbing very soon! Aside from climbing I enjoy learning new things, reading, and camping.

## What I'm Doing Now

I am about to enter my third year of my PhD program. For the Summer of 2022, I plan to study for the Complex Preliminary Exam which I will be taking in the Fall of 2022. I will also be a mentor for the [PolyMath Jr.](https://geometrynyc.wixsite.com/polymathreu) REU. In particular, I will be involved in the special topic this year on [Ramsey Theory](https://geometrynyc.wixsite.com/polymathreu/ramsey2022).

## Some of My Skills
* Python Development
* SageMath Development
* Web Development (HTML/CSS/Javascript)
* LaTeX typesetting
* Math Teaching/Tutoring
* Bilingual (English/Spanish)

## A Glimpse Into My World

<div id="imagesCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    {% for slide in site.car_images %}
      {% if forloop.first == true %}
        <button type="button" data-bs-target="#imagesCarousel" data-bs-slide-to="{{ forloop.index0 }}" class="active" aria-current="true" aria-label="Slide {{ forloop.index0 }}"></button>
      {% else %}
        <button type="button" data-bs-target="#imagesCarousel" data-bs-slide-to="{{ forloop.index0 }}" aria-label="Slide {{ forloop.index0 }}"></button>
      {% endif %}
    {% endfor %}
  </div>
  <div class="carousel-inner">
    {% for slide in site.car_images %}
      {% if forloop.first == true %}
        <div class="carousel-item active">
          <img class="d-block w-100" src="{{ slide.link }}" alt="slide">
        </div>
      {% else %}
        <div class="carousel-item">
          <img class="d-block w-100" src="{{ slide.link }}" alt="slide">
        </div>
      {% endif %}
    {% endfor %}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#imagesCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#imagesCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

