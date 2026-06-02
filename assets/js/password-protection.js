// /**
//  * Password Protection for Website
//  * This script protects the entire website with a password
//  */

// (function() {
//   'use strict';

//   // 비밀번호 설정 (여기를 원하는 비밀번호로 변경하세요)
//   const CORRECT_PASSWORD = 'chal2025!';
//   const SESSION_KEY = 'site_authenticated';

//   // 이미 인증되었는지 확인
//   if (sessionStorage.getItem(SESSION_KEY) === 'true') {
//     return; // 인증됨, 스크립트 종료
//   }

//   // 페이지 내용 숨기기
//   document.documentElement.style.visibility = 'hidden';

//   // 비밀번호 입력 화면 생성
//   function createPasswordPrompt() {
//     const overlay = document.createElement('div');
//     overlay.id = 'password-overlay';
//     overlay.style.cssText = `
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       z-index: 9999;
//       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
//     `;

//     overlay.innerHTML = `
//       <div style="
//         background: white;
//         padding: 40px;
//         border-radius: 12px;
//         box-shadow: 0 20px 60px rgba(0,0,0,0.3);
//         max-width: 400px;
//         width: 90%;
//         text-align: center;
//       ">
//         <h1 style="
//           margin: 0 0 10px 0;
//           font-size: 28px;
//           color: #333;
//           font-weight: 600;
//         ">🔒 Password Required</h1>
        
//         <p style="
//           margin: 0 0 30px 0;
//           color: #666;
//           font-size: 14px;
//         ">Please enter the password to access this website</p>
        
//         <div style="margin-bottom: 20px;">
//           <input 
//             type="password" 
//             id="password-input" 
//             placeholder="Enter password"
//             autocomplete="off"
//             style="
//               width: 100%;
//               padding: 12px 16px;
//               border: 2px solid #ddd;
//               border-radius: 8px;
//               font-size: 16px;
//               box-sizing: border-box;
//               transition: border-color 0.3s;
//               outline: none;
//             "
//           />
//         </div>
        
//         <button 
//           id="password-submit" 
//           style="
//             width: 100%;
//             padding: 12px 16px;
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             color: white;
//             border: none;
//             border-radius: 8px;
//             font-size: 16px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: transform 0.2s, box-shadow 0.2s;
//           "
//           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)';"
//           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';"
//         >
//           Submit
//         </button>
        
//         <div 
//           id="error-message" 
//           style="
//             margin-top: 15px;
//             color: #e74c3c;
//             font-size: 14px;
//             display: none;
//           "
//         >
//           ❌ Incorrect password. Please try again.
//         </div>
//       </div>
//     `;

//     document.body.appendChild(overlay);

//     // 이벤트 리스너 추가
//     const input = document.getElementById('password-input');
//     const button = document.getElementById('password-submit');
//     const errorMessage = document.getElementById('error-message');

//     // 입력 필드에 포커스 스타일 추가
//     input.addEventListener('focus', function() {
//       this.style.borderColor = '#667eea';
//     });

//     input.addEventListener('blur', function() {
//       this.style.borderColor = '#ddd';
//     });

//     // 비밀번호 확인 함수
//     function checkPassword() {
//       const enteredPassword = input.value;
      
//       if (enteredPassword === CORRECT_PASSWORD) {
//         // 비밀번호 맞음
//         sessionStorage.setItem(SESSION_KEY, 'true');
//         overlay.style.opacity = '0';
//         overlay.style.transition = 'opacity 0.3s';
//         setTimeout(() => {
//           overlay.remove();
//           document.documentElement.style.visibility = 'visible';
//         }, 300);
//       } else {
//         // 비밀번호 틀림
//         errorMessage.style.display = 'block';
//         input.value = '';
//         input.focus();
        
//         // 입력 필드 흔들기 애니메이션
//         input.style.animation = 'shake 0.5s';
//         setTimeout(() => {
//           input.style.animation = '';
//         }, 500);
//       }
//     }

//     // 버튼 클릭
//     button.addEventListener('click', checkPassword);

//     // Enter 키 입력
//     input.addEventListener('keypress', function(e) {
//       if (e.key === 'Enter') {
//         checkPassword();
//       }
//     });

//     // 입력 시 에러 메시지 숨기기
//     input.addEventListener('input', function() {
//       errorMessage.style.display = 'none';
//     });

//     // 입력 필드에 자동 포커스
//     setTimeout(() => input.focus(), 100);
//   }

//   // CSS 애니메이션 추가
//   const style = document.createElement('style');
//   style.textContent = `
//     @keyframes shake {
//       0%, 100% { transform: translateX(0); }
//       10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
//       20%, 40%, 60%, 80% { transform: translateX(8px); }
//     }
//   `;
//   document.head.appendChild(style);

//   // DOM이 로드되면 비밀번호 프롬프트 생성
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', createPasswordPrompt);
//   } else {
//     createPasswordPrompt();
//   }
// })();
