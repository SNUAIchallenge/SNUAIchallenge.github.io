---
layout: page
permalink: /data/
title: Data
description:  
nav: true
nav_order: 3

bibliography: data.bib
---
---

### **1. 데이터셋 개요**

본 대회는 비디오 프레임의 시간적 순서를 예측하는 과제입니다. 참가자는 뒤섞인 4개의 비디오 프레임 이미지와 해당 비디오에 대한 텍스트 설명(Sentence)을 바탕으로, 원본 비디오의 올바른 시간 순서를 복원해야 합니다.

데이터셋은 학습용(`train`)과 평가용(`test`)으로 구분되어 제공됩니다. 각 샘플은 고유한 `Id`를 가지며, 이에 대응하는 이미지 폴더와 메타데이터가 CSV 파일로 제공됩니다. 별도의 검증용(`Validation`) 데이터셋은 제공되지 않으며, 참가자들은 학습용(`train`) 데이터셋에서 일부를 검증용으로 사용할 수 있습니다.

비디오 프레임을 추출하기 위한 원본 비디오는 다양한 원천으로부터 수집되었습니다. 일부 프레임은 생성형 인공지능을 이용하여 생성되었습니다. 비디오 프레임에 대응하는 텍스트는 사람이 직접 작성하거나, 생성형 인공지능을 이용하여 생성되었습니다. 학습용 데이터에는 정제되지 않은 데이터가 포함되어 있습니다. 즉, 비디오 프레임만으로는 정답을 하나로 특정할 수 없거나, 텍스트와 관련없는 프레임 (검은색 프레임 등)이 포함되어 있을 수 있습니다. 이러한 데이터에 대한 전처리를 수행하는 것이 모델의 성능을 향상시킬 수 있을 것이며, 효과적인 전처리 적용 여부가 본선 평가 기준에 포함됩니다. 

### **2. 문제 예시**
경진대회 문제 중 일부를 예시로 보여드리면 다음과 같습니다.


<img alt="data" src="/assets/img/문제예시1_new.jpg" style="max-width: 100%;"/>


<img alt="data" src="/assets/img/문제예시2_new.jpg" style="max-width: 100%;"/>

<img alt="data" src="/assets/img/문제예시3_new.jpg" style="max-width: 100%;"/>

<img alt="data" src="/assets/img/문제예시4_new_넘버링.jpg" style="max-width: 100%;"/>

<img alt="data" src="/assets/img/문제예시5_new.jpg" style="max-width: 100%;"/>
