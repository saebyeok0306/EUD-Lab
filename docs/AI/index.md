# AI에게 물어보기

!!! note ""

    - [x] <mark>LLM + RAG 기술</mark>을 활용하여 EUD(epScript)에 관한 질문에 특화된 AI입니다.
    - [x] 비용문제로 현재는 <mark>3시간마다 20회의 질문</mark>을 하실 수 있습니다.
    - [x] AI는 잘못된 정보나 오래된 정보를 제공할 수 있습니다.
    - [x] AI의 답변보다는 함께 제공되는 `Reference`를 참고하세요.

<div id="question-box" style="margin-top: 1em; margin-bottom: 1em;">
  <label for="user-question" style="display: block; margin-bottom: 6px;">
    <strong>질문을 입력하세요:</strong>
  </label>
  <div style="display: flex; gap: 10px; align-items: center;">
    <input
      type="text"
      id="user-question"
      class="md-search__input"
      placeholder=""
      style="padding: 8px 16px;"
    />
    <button id="submit-question" class="md-button" style="min-width: 4rem; padding: 8px 12px;">보내기</button>
  </div>
</div>



<div id="answer-box" style="margin-top: 1.5em; margin-bottom: 1em; display: none;">
  <div id="typing" class="typing-loader hidden">
    <div class="typing-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <p id="answer-content"></p>
</div>