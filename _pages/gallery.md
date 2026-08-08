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
    position: relative;
    margin: 0;
    overflow: hidden;
    border-radius: 12px;
    background: #f4f6fb;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    cursor: zoom-in;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .gallery-item img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }
  .gallery-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(15, 15, 112, 0.16);
  }
  .gallery-item:hover img {
    transform: scale(1.05);
  }
  /* magnifier hint on hover */
  .gallery-item::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(15, 15, 112, 0.55) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cline x1='16.5' y1='16.5' x2='21' y2='21'/%3E%3C/svg%3E") center / 18px no-repeat;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.25s ease, transform 0.25s ease;
    pointer-events: none;
  }
  .gallery-item:hover::after {
    opacity: 1;
    transform: scale(1);
  }
</style>

<p class="gallery-lead">
  2026 SNU AI Challenge 본선 현장의 뜨거운 열기를 사진으로 만나보세요.
  총 <span class="gallery-count">{{ photos | size }}</span>장의 사진을 담았습니다.
  사진을 클릭하면 크게 볼 수 있습니다.
</p>

<div class="gallery-grid">
{% for photo in photos %}
  {% assign full = photo.path | replace: '/thumb/', '/full/' %}
  <figure class="gallery-item">
    <img src="{{ photo.path | relative_url }}" data-zoomable data-zoom-src="{{ full | relative_url }}" loading="lazy" alt="2026 SNU AI Challenge 본선 현장 사진">
  </figure>
{% endfor %}
</div>
