# AI에게 물어보기

- <mark>LLM + RAG 기술</mark>을 활용하여 EUD(epScript)에 관한 질문에 특화된 AI입니다.
- 비용문제로 현재는 3시간마다 10회의 질문을 하실 수 있습니다.
- AI는 잘못된 정보나 오래된 정보를 제공할 수 있습니다.
- AI의 답변보다는 함께 제공되는 `Reference`를 참고하세요.

<br>

<div id="question-box" style="margin-top: 1em; margin-bottom: 1em;">
  <label for="user-question"><strong>질문을 입력하세요:</strong></label><br>
  <input type="text" id="user-question" class="md-search__input" placeholder="" style="width: 60%; padding: 8px; margin-top: 5px;" />
  <button id="submit-question" class="md-button" style="padding: 8px 12px; margin-left: 10px;">보내기</button>
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