## 1. 페이지 소개
### 요고 다이렉트 페이지
<img width="200" alt="image" src="https://github.com/user-attachments/assets/7e269de7-af55-45f2-b70b-1231b404f904">
<p>- 이미지 슬라이더</p>
<img width="200" alt="image" src="https://github.com/user-attachments/assets/d30f2ab8-a699-4f28-84e3-dcf62c2b0a38">

### 요고 가입 혜택
<img width="500" alt="image" src="https://github.com/user-attachments/assets/4dad8ca1-bd0c-4256-a404-fdd778475a67">
<p>  - 증감 슬라이더 
</p>

### 요고 브랜드 스토리 
<img width="500" alt="image" src="https://github.com/user-attachments/assets/a76d9a90-57a6-42fa-8a41-52e63387300b">

### 요금제 변경 페이지
<img width="500" alt="image" src="https://github.com/user-attachments/assets/0be2384b-2a1a-4b34-9b17-ef89bc4e75ba">
<p>  - 탭</p>
<p>  - 필터링</p>

### 비교함 페이지
구현중...

### 챗봇 (시나리오봇)
구현중...

## 2. 프로젝트 구조
```
📦KT-FE
	┣ 📂public
	┃  ┗ 📂images
	┗ 📂src
	 ┣ 📂app
	 ┃ ┣ 📂(yogo)
	 ┃ ┃ ┣ 📂(home)
	 ┃ ┃ ┣ 📂chatBot
	 ┃ ┃ ┣ 📂yogoBrand
	 ┃ ┃ ┣ 📂yogoChange
	 ┃ ┃ ┣ 📂yogoCompare
	 ┃ ┃ ┗  📂yogoEvent
	 ┃ ┗ 📜globals.css
	 ┗ 📂components
	 ┃ ┣ 📂change
	 ┃ ┣ 📂checkBox
	 ┃ ┣ 📂dropdown
	 ┃ ┣ 📂plusMinusSlider
	 ┃ ┣ 📂scrollButton
	 ┃ ┣ 📂slider
	 ┃ ┗ 📂tab
```
- 전체적으로 Next.js의 App Router 방식을 취함
- 재사용 가능성이 있는 컴포넌트는 components 폴더 내 위치

## 3. 버전
**Dependencies**
    - **Next.js**: v14.2.15
    - **React**: v18.3.1
    - **React DOM**: v18.3.1
    - **Slick Carousel**: v1.8.1
    - **Sharp**: v0.33.5
**Dev Dependencies**
    - **TailwindCSS**: v3.4.1
    - **ESLint**: v8.x
