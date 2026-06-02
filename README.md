### SNU AI Challenge Homepage
## 설정
Ruby와 Jekyll 설치 후 로컬 환경에서 페이지를 띄울 수 있습니다.
```
sudo apt update
sudo apt install rbenv
rbenv install 3.1.2
rbenv global 3.1.2
gem install jekyll bundler
bundle install
bundle exec jekyll serve --port 20942 --host=0.0.0.0 # 로컬 20942 포트로 페이지 띄우기
```

수정 완료 후 git push 해주시면 수 분 후에 업데이트 된 내용이 github page에 반영됩니다.


## Note
- 페이지 전체적인 설정은 `_config.yml` 파일에서 할 수 있습니다.
- 각 페이지별 내용은 `_pages/xxx.md` 에서 수정하시면 됩니다.
- 이미지 등 추가하고 싶으시면 `assets/img`에 파일 추가하신 후 링크를 거시면 됩니다.