---
layout: page
permalink: /gallery/
title: Gallery
description: 2026 SNU AI Challenge 본선 현장 스케치
nav: true
nav_order: 5
---

{% assign photos = site.static_files | where_exp: "f", "f.path contains '/assets/img/gallery/thumb/'" | sort: "name" %}

<style>
  .gallery-lead {
    color: #555;
    margin: 4px 0 20px;
    line-height: 1.7;
  }
  .gallery-lead .gallery-count {
    color: #0F0F70;
    font-weight: 700;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 14px;
    margin: 8px 0 24px;
  }
  @media (max-width: 600px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
  }
  .gallery-item {
    margin: 0;
    overflow: hidden;
    border-radius: 12px;
    background: #f4f6fb;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.3s ease;
  }
  .gallery-item img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  .gallery-item:hover {
    box-shadow: 0 8px 20px rgba(15, 15, 112, 0.14);
  }
  .gallery-item:hover img {
    transform: scale(1.07);
  }
</style>

<p class="gallery-lead">
  2026 SNU AI Challenge 본선 현장의 뜨거운 열기를 사진으로 만나보세요.
  총 <span class="gallery-count">{{ photos | size }}</span>장의 사진을 담았습니다.
</p>

<div class="gallery-grid">
{% for photo in photos %}
  <figure class="gallery-item">
    <img src="{{ photo.path | relative_url }}" loading="lazy" alt="2026 SNU AI Challenge 본선 현장 사진">
  </figure>
{% endfor %}
</div>
