# Personal Portfolio Website

Head over to my [website](https://etdavila10.github.io).

This website is in the process of being developed with [Astro](https://astro.build/)

This website was last updated on June 25, 2023.

---

# Documentation

## How to add a new link to navigation

1. Find the dom element that you want to scroll to upon pressing navigation link.
2. Add the class `section` or `sub-section` to dom element.
3. Add the attribute `data-link-name` and give it a descriptive name. This attribute
   will be used as the text for the resulting navigation item.
4. Your item should now appear on the navigation bar.

Notes:
1. Currently navigation bar only supports sections and sub-sections.
2. A sub-section must be within a section. If a sub-section is not a
   child of a section it will not appear in the navigation bar.
