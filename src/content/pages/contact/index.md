---
title: Contact
template: info
navGroup: Site-wide / Utility
description: Contact A-Game Sports in New Rochelle, NY — phone, email, address, hours, and directions.
heroEyebrow: We're easy to reach
heroHeadline: Call, email, or come see the building.
heroSub: Most questions get answered fastest by phone — but every path below reaches a real person.
ctaLabel: Call (914) 278-9477
ctaHref: tel:+19142789477
order: 1
---

## Visit us

**856 Main St, New Rochelle, NY 10801**

- Monday – Friday: 9:00am – 10:00pm
- Saturday – Sunday: 8:00am – 7:00pm

Additional hours are available by request. Summer hours vary and we're closed Sundays except for birthday parties and special events — call ahead to confirm before you drive over.

## Reach us directly

- **Phone:** [(914) 278-9477](tel:+19142789477)
- **General questions:** [info@agamesports.net](mailto:info@agamesports.net)
- **Camp forms specifically:** [nicolegoodrich5@gmail.com](mailto:nicolegoodrich5@gmail.com)

## Send a message

Prefer to write it out? Use the form below and let us know the best way to reach you back — email or phone. We typically respond within one business day.

<form
  name="contact"
  class="mt-4 grid gap-4 sm:grid-cols-2"
  aria-label="Contact form"
  method="POST"
  action="/contact/thank-you/"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden">
    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <div class="sm:col-span-1">
    <label for="name" class="block text-sm font-semibold text-turf-900">Name</label>
    <input id="name" name="name" type="text" autocomplete="name" required class="mt-1 w-full rounded-md border border-turf-100 px-3 py-2" />
  </div>
  <div class="sm:col-span-1">
    <label for="email" class="block text-sm font-semibold text-turf-900">Email</label>
    <input id="email" name="email" type="email" autocomplete="email" required class="mt-1 w-full rounded-md border border-turf-100 px-3 py-2" />
  </div>
  <div class="sm:col-span-1">
    <label for="phone" class="block text-sm font-semibold text-turf-900">Phone</label>
    <input id="phone" name="phone" type="tel" autocomplete="tel" class="mt-1 w-full rounded-md border border-turf-100 px-3 py-2" />
  </div>
  <div class="sm:col-span-1">
    <label for="preferred" class="block text-sm font-semibold text-turf-900">Preferred contact method</label>
    <select id="preferred" name="preferred" class="mt-1 w-full rounded-md border border-turf-100 px-3 py-2">
      <option>Email</option>
      <option>Phone</option>
    </select>
  </div>
  <div class="sm:col-span-2">
    <label for="message" class="block text-sm font-semibold text-turf-900">Message</label>
    <textarea id="message" name="message" rows="4" required class="mt-1 w-full rounded-md border border-turf-100 px-3 py-2"></textarea>
  </div>
  <div class="sm:col-span-2">
    <button type="submit" class="btn-primary">Send Message</button>
  </div>
</form>
