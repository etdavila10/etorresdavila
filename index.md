---
layout: default
---

## About Me

<img class="profile-picture" src="assets/images/square_profile_picture.jpg" alt="profile picture">

Hello and welcome to my website! My name is Eduardo and I am currently a third-year math PhD student at the University of Minnesota. I graduated in May 2020 with a Bachelors of Science in Applied Mathematics and a minor in Computer Science from San Diego State University. I really enjoy to code in Python mainly using it to write small scripts that make my life easier. I have also used it to make some nice projects related to research papers that I have worked on in the past. Outside of academics, I am definitely a dog person and on my free time I usually hang out with friends or climb.

* My affiliation to CAUSE

## What I am Doing Now

I am about to enter my third year of my PhD program. For the Summer of 2022 I plan to study for the Complex Preliminary Exam which I will be taking in the Fall of 2022. I will also be a mentor for the PolyMath Jr. REU. In particular, I will be involved in the special topic this year on Ramsey Theory.

## Some of my Skills
* Python Development
* SageMath Development
* Web Development (HTML/CSS/Javascript)
* LaTeX typesetting
* Calculus Teaching
* Bilingual (English/Spanish)

## Glimpse Into My World

<div id="imagesCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for slide in site.car_images %}
      {% if forloop.first == true %}
        <li data-target="#imagesCarousel" data-slide-to="{{ forloop.index0 }}" class="active"></li>
      {% else %}
        <li data-target="#imagesCarousel" data-slide-to="{{ forloop.index0 }}"></li>
      {% endif %}
    {% endfor %}
  </ol>
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
  <a class="carousel-control-prev" href="#imagesCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#imagesCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

