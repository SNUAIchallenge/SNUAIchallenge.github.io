---
layout: default
title: About
permalink: /
subtitle: Universality, Robustness, and Generalizability for EnhancemeNT

profile:
  align: right
  image: 
  image_circular: false # crops the image to make it circular
  address: >

news: true  # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page

bibliography: about.bib
---


<img alt="introduction" src="/SNUAIchallenge/assets/img/대회주제_소개이미지.jpg" style="max-width: 100%;"/>

<!-- <p>We can also cite <d-cite key="VoiceFixer-Liu2022"></d-cite> external publications.</p>

<d-math block>
  \mathbb{E}_{z \sim q_\phi(z|x)}
</d-math>

Hi <d-footnote>This is a footnote.</d-footnote> how are you?

<d-code block language="python">
import torch

if isinstance(speech_mix, np.ndarray):
    speech_mix = torch.as_tensor(speech_mix)
</d-code> -->

# 텍스트로 읽는 씬의 재구성
## Overview
서울대학교 데이터사이언스 대학원에서는 최신 인공지능 연구의 최전선에서 기존 모델의 한계를 극복하고 다양한 상황에서의 일반화 성능 향상을 위해 활발히 연구를 진행하고 있습니다. 뿐만 아니라, 이러한 연구 성과가 좀 더 확산되고, 보다 많은 사람들이 인공지능 연구에 관심을 가질 수 있도록 하는 데에도 많은 노력을 기울이고 있습니다. 이러한 노력의 일환으로 저희 대학원에서 자체적으로 수집한 데이터를 공개하여 국내외 대학 학부생들이 최신 인공지능 모델을 직접 개발해보고 성능을 겨루어 볼 수 있는 경연의 장을 마련하였습니다.

## Description
**1. 과제 정의: 텍스트로 읽는 씬의 재구성**
주어진 스토리라인(캡션)에 맞게 4개의 이미지 프레임을 올바른 순서로 재배열하는 문제.

**2. 문제 배경 및 중요성**
이 과제는 이미지와 캡션을 개별적으로 인식하는 수준을 넘어, 여러 장면(frames)을 스토리 라인 (캡션)의 맥락 속에서 재구성하여 올바른 시간적 전개 순서를 복원하는 멀티모달 이해 능력을 평가함.

**3. 입력(Input) 및 출력(Output) 형식:** 

- 입력: { "text": "자연어 문장", "frames": [image_3, image_1, image_4, image_2] } 형식의 데이터
- 출력: [1, 3, 0, 2] 와 같이 원본 프레임의 인덱스를 올바른 시간 순서로 나열한 배열

**4. 대회 진행 절차** 본 경진대회는 예선과 본선으로 나누어 진행됩니다. 

 a. 예선기간동안 참가자들은 제공된 학습 데이터를 바탕으로 모델을 개발하고, 모델의 추론 결과를 제출하여 순위를 결정하게 됩니다. 예선기간중 리더보드는 **전체 테스트 데이터의 70%** (Public data)만 이용하여 업데이트됩니다.

 b. 예선이 종료되면, 테스트 데이터 전체 (Public + Private data)를 활용하여 예선 순위가 결정됩니다. 코드 검증을 통과한 상위 10명 내외를 본선에 진출하게 합니다. 

 c. 본선은 오프라인 발표평가로 이루어집니다. 예선기간중에 모델개발했던 과정을 정리하여 심사위원분들께 발표하고, 예선시 달성한 모델의 성능 점수와 발표점수를 합산하여 최종 우승자를 결정합니다. 점수배정은 다음과 같습니다.

| **항목** | **설명** | **점수** |
| --- | --- | --- |
| 모델 성능 점수 | 예선 Test set에 대한 성능 점수 | 40 |
| 데이터 활용 | 데이터 전처리 | 15 |
| 모델 설계 및 학습 방법론 | 문제 특성에 맞춘 모델 구조 선택 및 학습 방법론 적용 | 15 |
| 최적화 방법론 | 추론 환경 제약에 맞춘 모델 성능 최적화 | 10 |
| 자원 효율성 | 태스크 수행 시 필요한 피크 메모리와 응답 속도(지연 시간)에 대한 평가 | 10 |
| 구축 비용 | 시스템 구축 시 요구되는 연산량 (학습) 및 데이터 전처리 비용 (외부 api 사용 등) | 10 |
| 총합 |  | 100 |

**5. 대회 규칙** Rules 탭을 참고하여 주시기 바랍니다. 규칙을 준수하지 않는 경우 실격처리될 수 있습니다.

**6. 참가 자격** 국내외 대학 학부 재학생 또는 휴학생 ※ 전공 및 학년 제한 없음 

※ 단, 상금은 **국내 은행 계좌로만 입금** 가능하며, 참가 자격 관련 추가 문의는 담당자에게 문의 바랍니다.

[주최/운영] 서울대학교 데이터사이언스 대학원

## Evaluation

예선 순위는 Exact Match Accuracy (제출한 순서와 정답 순서가 완전히 일치하는 경우만 정답으로 인정)를 기준으로 결정됩니다. 즉, 각 문제에 대해 올바르게 재배열한 이미지의 순서가 [0,3,1,2]일 경우 [0,3,1,2]를 정확히 맞춘 경우만 정답으로 처리되며 다른 순서는 정답으로 인정되지 않습니다.
