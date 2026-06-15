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
<img alt="introduction" src="/assets/img/로고 최종본_컬러-투명 배경.png" style="max-width: 20%; display: block; margin: 0 auto;"/>
<h2 style="text-align: center; font-weight: 800; color: #0F0F70;">텍스트로 풀어보는 장면의 재구성</h2>
<h4 style="text-align: center; font-weight: bold; color: #555555;">미션: 단서를 활용해 4장의 이미지를 재구성하라</h4>
<h5 style="text-align: center; font-weight: bold; color: #555555;">서울대학교 AI Challenge</h5>
<img alt="introduction" src="/assets/img/퀴즈예시.png" style="max-width: 100%; border: 2px solid #0F0F70;"/>
<br>
<br>

<h2 style="text-align: center; font-weight:bold; color: #0F0F70;">Overview</h2>
---
[서울대학교 데이터사이언스 대학원](https://gsds.snu.ac.kr)에서는 최신 인공지능 연구의 최전선에서 기존 모델의 한계를 극복하고 다양한 상황에서의 일반화 성능 향상을 위해 활발히 연구를 진행하고 있습니다. 뿐만 아니라, 이러한 연구 성과가 좀 더 확산되고, 보다 많은 사람들이 인공지능 연구에 관심을 가질 수 있도록 하는 데에도 많은 노력을 기울이고 있습니다. 이러한 노력의 일환으로 **저희 대학원에서 자체적으로 가공한 데이터를 공개하여 국내외 대학 학부생들이 최신 인공지능 모델을 직접 개발해보고 성능을 겨루어 볼 수 있는 경연의 장을 마련하였습니다.**
<br>
<br>


<h2 style="text-align: center; font-weight:bold; color: #0F0F70;">Challenge Description</h2>
---
### **1. 과제 정의: 텍스트로 풀어보는 장면의 재구성**
주어진 스토리라인 (캡션)에 맞게 4개의 이미지 프레임을 올바른 순서로 재배열하는 문제를 해결해야 합니다.

<img alt="introduction" src="/assets/img/대회_소개이미지_activitynet.jpg" style="max-width: 100%;"/>

### **2. 문제 배경 및 중요성**
이 과제는 이미지와 캡션을 개별적으로 인식하는 수준을 넘어, 여러 장면 (frames)을 스토리 라인 (캡션)의 맥락 속에서 재구성하여 올바른 시간적 전개 순서를 복원하는 멀티모달 이해 능력을 평가합니다.

### **3. 입력 및 출력 형식** 
입출력 형식에 관한 간단한 설명은 다음과 같습니다. 
- 입력: 자연어 문장과 여러 장의 프레임으로 구성된 데이터
  (예: { "text": "자연어 문장", "frames": [image_3, image_1, image_4, image_2] })
- 출력: 정답 순서대로 다시 배열하였을 때 각 프레임의 위치.
  (예: [3, 4, 1, 2], 정답 순서대로 다시 배열하였을 때 첫번째 프레임은 3번째에 위치, 두번째 프레임은 4번째에 위치,...)

### **4. 대회 일정** 
- 사전 참가 신청 시작: 2026년 6월 15일
- 예선 (온라인 경진대회): 2026년 6월 29일 ~ 2026년 7월 24일
- 본선 (공개 발표 평가): 2026년 8월 7일

※ **참가 신청은 7/17에 마감**되니, 참여를 희망하시는 모든 팀들은 그 전에 신청하시기 바랍니다.

상세 일정은 [Timeline](/timeline) 탭을 참고하여 주시기 바랍니다. 



### **5. 대회 진행 절차** 

본 경진대회는 예선과 본선으로 나누어 진행됩니다. 

  - 예선 기간 동안 참가자들은 제공된 학습 데이터를 바탕으로 모델을 개발하고, 테스트 데이터에 대한 모델의 추론 결과를 제출하여 모델 성능을 겨루게 됩니다. 예선 기간 중 리더보드는 **전체 테스트 데이터의 70%** (Public data)만을 이용하여 업데이트됩니다.

  - **예선이 종료되면, 테스트 데이터 전체에 대한 모델 성능 기준 상위 순위팀을 대상으로 코드 검증 및 보고서 검토를 수행합니다. 코드 검증 및 보고서 검토를 거쳐 예선 점수가 확정**되고, 상위 10개 내외 팀이 본선에 진출합니다. 
    - 참가팀들의 성능 달성 수준에 따라 예선 종료 후 외부 데이터셋을 기반으로 한 성능 평가가 별도로 진행될 수 있습니다.

  - **본선은 오프라인 발표평가**로 진행됩니다. 참가자는 예선 기간 중 모델을 개발한 과정을 정리하여 심사위원께 발표하며, 예선에서 달성한 모델의 정량/정성 평가 점수와 본선 발표 점수를 종합적으로 고려하여 최종 우승자를 결정합니다. 본선에서의 점수 배정은 다음과 같습니다.

<div style="display: flex; justify-content: center;">
<table style="border-collapse: collapse; width: auto;">
<thead>
<tr style="border-top: 3px solid #000; border-bottom: 1px solid #000;">
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>항목</strong></th>
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>설명</strong></th>
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>점수</strong></th>
</tr>
</thead>
<tbody>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">예선 점수</td>
<td style="border-left: 0; border-right: 0; padding: 8px;">
예선 테스트 데이터에 대한 추론 정확도
<br> 
과제 해결 전략의 논리적 타당성, 효율성 및 독창성 (보고서 기반 서면 평가)
</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">40</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">데이터 활용</td>
<td style="border-left: 0; border-right: 0; padding: 8px;">데이터 전처리 및 활용 전략의 적절성</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">15</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">모델 설계 및 학습 방법론</td>
<td style="border-left: 0; border-right: 0; padding: 8px;">문제 특성에 부합하는 모델 구조 선택 및 학습 방법론의 선택과 적용</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">15</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">최적화 방법론</td>
<td style="border-left: 0; border-right: 0; padding: 8px;">추론 환경 제약에 맞춘 모델 성능 최적화 수준</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">10</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">자원 효율성</td>
<td style="border-left: 0; border-right: 0; padding: 8px;">태스크 수행 시 필요한 메모리 사용량 및 응답 속도(지연 시간)</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">10</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">구축 비용</td>
<td style="border-left: 0; border-right: 0; padding: 8px;">시스템 구축 시 요구되는 연산량(학습) 및 데이터 전처리 비용(외부 API 사용 등)</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">10</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 3px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>총합</strong></td>
<td style="border-left: 0; border-right: 0; padding: 8px;"></td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>100</strong></td>
</tr>
</tbody>
</table>
</div>
<br>
    
### **6. 시상 및 혜택** 

<h4 style="font-weight: 600; text-align: center; color: #000000;"> 총 상금: <span style="color: #d4af37;">2,300만원</span> </h4>

<div style="display: flex; justify-content: center;">
<table style="border-collapse: collapse; width: auto;">
<thead>
<tr style="border-top: 3px solid #000; border-bottom: 1px solid #000;">
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>시상 훈격</strong></th>
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>구분</strong></th>
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>시상팀 수</strong></th>
<th style="border-left: 0; border-right: 0; padding: 8px; text-align: center;"><strong>상금</strong></th>
</tr>
</thead>
<tbody>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td rowspan="5" style="border-left: 0; border-right: 0; padding: 8px; text-align: center; vertical-align: middle;"><strong>서울대학교 총장상</strong></td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">대상</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">1</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">1,000만원</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">금상</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">1</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">500만원</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">은상</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">1</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">300만원</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 1px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">동상</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">1</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">200만원</td>
</tr>
<tr style="border-top: 1px solid #000; border-bottom: 3px solid #000;">
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">장려상</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">3</td>
<td style="border-left: 0; border-right: 0; padding: 8px; text-align: center;">100만원</td>
</tr>
</tbody>
</table>
</div>
<br>


### **7. 대회 규칙** 
[Rules](/rules) 탭을 참고하여 주시기 바랍니다. 규칙을 준수하지 않는 경우 실격처리될 수 있습니다.

### **8. 참가 자격** 

국내외 대학 학부 재학생 또는 휴학생 
<br>
※ 전공 및 학년 제한 없음 
<br>
※ 단, 상금은 **국내 은행 계좌로만 입금** 가능하며, 참가 자격 관련 추가 문의는 담당자에게 문의 바랍니다.


<!-- <br>
<h2 style="text-align: center; font-weight:bold; color: #0F0F70;">Evaluation</h2>
---
예선 순위는 **Exact Match Accuracy**를 기준으로 결정됩니다.  제출한 이미지 순서가 정답 순서와 완전히 동일한 경우에만 정답으로 인정되며, 순서가 하나라도 다를 경우 오답으로 처리되며 별도의 부분 점수는 부여하지 않습니다. 예를 들어 정답이 [1, 4, 2, 3]일 때, [1, 4, 2, 3]만 정답으로 처리되며 그 외의 모든 순서는 오답으로 간주됩니다. -->
---
<br>
<br>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: start; margin-top: 8px;">
  <div style="text-align: center; font-weight: 700; font-size: 1.25rem;">주최</div>
  <div style="text-align: center; font-weight: 700; font-size: 1.25rem;">주관</div>

  <div style="text-align: center;">
    <div style="font-weight: 700; margin-bottom: 8px;">서울대학교</div>
    <img alt="GSDS 로고" src="/assets/img/서울대로고.png" style="height: 70px; max-width: 100%;"/>
  </div>
  <div style="text-align: center;">
    <div style="font-weight: 700; margin-bottom: 8px;">서울대학교<br>데이터사이언스 대학원</div>
    <a href="https://gsds.snu.ac.kr" target="_blank" rel="noopener noreferrer">
      <img alt="GSDS 로고" src="/assets/img/GSDS로고_2.png" style="height: 70px; max-width: 100%;"/>
    </a>
  </div>  
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: start; margin-top: 8px;">  
  <div style="grid-column: 1 / 3; text-align: center; font-weight: 700; font-size: 1.25rem;">후원</div>  
  <div style="text-align: center;">
    <div style="font-weight: 700; margin-bottom: 8px;">(주) 모레</div>
    
    <a href="https://moreh.io/" target="_blank" rel="noopener noreferrer">
      <img alt="(주) 모레 로고" src="/assets/img/Moreh_Logo.png" style="height: 50px; max-width: 100%;"/>
    </a>
  </div>
  <div style="text-align: center;">
    <div style="font-weight: 700; margin-bottom: 8px;">(주) 모티프테크놀로지스</div>
    <a href="https://motiftech.io/ko/" target="_blank" rel="noopener noreferrer">
      <img alt="(주) 모티프테크놀로지스 로고" src="/assets/img/Motif_Logo.png" style="height: 70px; max-width: 100%;"/>
    </a>
  </div>
</div>
<div style="display: grid; grid-template-columns: minmax(0, 1fr); gap: 24px; align-items: start; margin-top: 8px;">
  <!-- <div style="text-align: center; font-weight: 700; font-size: 1.25rem;">BK21</div> -->
  <div style="text-align: center;">
    <img alt="BK21 로고" src="/assets/img/BK21_로고.png" style="height: 70px; max-width: 100%;"/>
  </div>
</div>
