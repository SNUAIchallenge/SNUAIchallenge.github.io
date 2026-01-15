---
layout: page
permalink: /faq/
title: FAQ
description:
nav: true
nav_order: 8
---

아래에 자주나오는 질문과 답변을 정리하였습니다. 추가적으로 궁금하신 부분은 편하게 연락주시면 됩니다. [contact us](/SNUAIChallenge/contact).

---
<!-- ## 참가자격 관련 문의 -->
#### Q. 해외 대학 재학 중인 학부생인데 참여 가능한가요?
네, 해외 대학 재학 중인 학부생도 참여 가능합니다. 다만, 상금은 국내 계좌로만 지급 가능하다는 점을 유의해 주세요.

#### Q. 고등학생이나 대학원생도 참여가 가능한가요?
아니요. 본 대회는 학부생을 대상으로 진행되며, 고등학생 및 대학원생은 참여할 수 없습니다.

#### Q. 학부생이지만 수료했습니다. 참여가 가능할까요?
네, 가능합니다. 단, 학부를 졸업하지 않았음을 확인할 수 있는 증빙이 필요할 수 있습니다.

---
<!-- ## 팀 구성 관련 문의 -->
#### Q. 팀 구성은 어떻게 이루어지나요?
개인(1인) 또는 팀(최대 4인)으로 참가할 수 있습니다. 팀 참가를 선택한 경우 팀 구성 마감일(경진대회 페이지 참조)까지 팀 등록을 완료해야 합니다.
또한 동일인의 다계정 참가(중복 등록)는 금지되며, 적발 시 실격 처리될 수 있습니다.

---
<!-- ## 학습 데이터 및 모델 -->
#### Q. 주어진 학습 데이터 외에 외부 데이터 사용이 가능한가요?
아니요. 대회에서 제공하는 데이터 외의 외부 데이터 사용은 금지됩니다.

#### Q. 사용 가능한 모델에 제한이 있나요?
네, 아래 기준을 만족해야 합니다.
2026년 3월 31일 이전에 오픈소스로 공개된 모델만 사용 가능
로컬 환경에서 실행 가능해야 함 (인터넷 연결 없이도 동작해야 함)
학습 및 추론 과정에서 외부 상용 API(예: ChatGPT, Gemini, Grok 등) 사용 금지
단, 데이터 전처리 목적에 한해 외부 상용 API 사용을 예외적으로 허용하며, 이 경우 총 사용 비용은 3만 원을 초과할 수 없습니다.

해석이 애매한 경우 대회 게시판을 통해 문의해 주세요. 자세한 내용은 Rules 페이지를 참고 바랍니다.

---
<!-- ## 재출 관련 사항 -->
#### Q. 제출 횟수 제한이 있나요?
네. 1일 최대 3회까지 제출할 수 있습니다.

#### Q. 제출 파일 형식이 꼭 CSV여야 하나요?
네. 제출물은 지정된 파일 형식(CSV)과 인코딩 방식을 반드시 따라야 합니다.
자세한 제출 규격(컬럼명, 행 수, 정렬 기준, 인코딩 등)은 Rules 페이지를 참고해 주세요.

---
<!-- ## 본선 진행 절차 관련 문의 -->
#### Q. 본선은 어디에서 진행하나요?
본선은 서울대학교 ##관에서 진행됩니다. (상세 일정 및 장소는 추후 공지될 수 있습니다.)

#### Q. 본선에서 발표 평가는 누가 하나요?
본선 발표 평가는 서울대학교 데이터사이언스대학원 소속 교수진이 심사합니다.

---
<!-- ## 최종 모델 제한 사항 관련 문의 -->
#### Q. 최종 제출 모델은 NVIDIA RTX 3090 GPU(VRAM 24GB) 환경에서 실행 가능해야 한다고 들었습니다. 해당 GPU가 없는데 실행 가능 여부는 어떻게 확인하나요?
예선 종료 후 순위권(본선/검증 대상)에 포함된 참가자에게는 NVIDIA RTX 3090 GPU 환경을 제공할 예정이며, 해당 환경에서 모델 세팅 및 실행 가능 여부를 직접 검증하실 수 있습니다.

---
<!-- ## 제출물의 권리 관련 문의 -->
#### Q. 대회에서 사용한 방법론으로 논문을 쓰고 싶은데 가능한가요?
대회에서 공개·제출되는 산출물의 지식재산권 및 사용 범위는 대회 규정(Rules)에 따르며, 대회 운영 측의 권리가 포함될 수 있습니다.
논문/대외 공개를 고려하시는 경우, 사전에 운영진에 문의해 주시기 바랍니다.

---





<!-- Below we summarize some frequently asked questions (FAQ) about the GSDS Challenge. If you have any other questions, please feel free to [contact us](/GSDSchallenge2026/contact).

#### 1. How can I check why my submission failed in the [leaderboard website](https://urgent-challenge.com/competitions/5)?

**Answer:** You could go to `Participate` → `Submit / View Results` and unfold the corresponding failed submission. Then click the text `View scoring error log` to download the error message file. It should display the detailed information about the failure.

<details><summary>expand to see instructions in a screenshot</summary><div>
<img alt="error_message" src="/GSDSchallenge2026/assets/img/error_log.png" style="max-width: 100%;"/>
</div></details>

#### 2. What does the following error message mean?

Message 1:
```
  data_pairs.append((uid, refs[uid], audio_path))
KeyError: 'fileid_10009'
```

**Answer:** Your submission contains an invalid file name that is not included in the provided test dataset. Please carefully check whether you are using the correct dataset corresponding to the current evaluation phase.

Message 2:
```
  assert ref.shape == inf.shape, (ref.shape, inf.shape)
AssertionError: ((315934,), (315936,))
```

**Answer:** You submission contains an audio sample that has a different length from the corresponding test sample provided in the official test dataset. Please carefully check your enhanced audios to make sure all sample lengths are consistent with the original audio length. Please also check whether you are using the correct test dataset corresponding to the current evaluation phase.

Message 3:
```
RuntimeError: Error : flac decoder lost sync.
```

**Answer:** You submission contains an invalid audio sample that cannot be properly decoded by the FLAC decoder on the server. Please validate the enhanced audios on your side. FLAC v1.4.3 is recommended.

Message 4:
```
RuntimeError: Error : unknown error in flac decoder.
```

**Answer:** You submission contains an invalid audio sample that cannot be properly decoded by the FLAC decoder on the server. Please validate the enhanced audios on your side. FLAC v1.4.3 is recommended.

Message 5:
```
slurmstepd: error: *** JOB 24880048 ON r288 CANCELLED AT 2024-08-02T04:17:40 DUE TO TIME LIMIT ***
```

or 

```
Timeout: The evaluation server is busy. Please try to resubmit later.
```

**Answer:** Evaluation jobs for your submission were killed due to a timeout. This may be caused by unexpected long queuing in our SLURM system on the server. Please contact us and we will rerun the evaluation for you.


Message 6:
```
RuntimeError: CUDA error: uncorrectable ECC error encountered
CUDA kernel errors might be asynchronously reported at some other API call, so the stacktrace below might be incorrect.
For debugging consider passing CUDA_LAUNCH_BLOCKING=1.
Compile with `TORCH_USE_CUDA_DSA` to enable device-side assertions.
```

**Answer:** Evaluation jobs for your submission were terminated likely due to a hardware issue of the specific node assigned to evaluate your submission. Please contact us and we will rerun the evaluation using another node for you. -->
