// 페이지 로드가 완료되면 실행
document.addEventListener('DOMContentLoaded', function() {
    TitleLink();
    if (window.location.pathname.includes('/Address')) {
        AddAddressModal();
    } else if (window.location.pathname.includes('/CUnit')) {
        AddCUnitModal();
    } else if (window.location.pathname.includes('/AI')) {
        AddAI();
    }
    AddViewCount();
});

function TitleLink() {
    const title = document.querySelector('.md-header__topic');
    title.addEventListener('click', function() {
        window.location.href = '/';
    });
}

function AddAddressModal() {
    // 모달을 활성화할 버튼 생성
    const openModalButton = document.createElement('button');
    openModalButton.innerText = '전체 목록 보기';
    openModalButton.className = 'md-button custom-button'; // MkDocs Material 테마 버튼 스타일 적용

    // 모달 엘리먼트들 생성
    const modal = document.createElement('div');
    modal.className = 'custom-modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'custom-modal-content';

    const closeModalButton = document.createElement('span');
    closeModalButton.className = 'custom-modal-close';
    closeModalButton.innerHTML = '&times;'; // 'x' 모양

    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.setAttribute('viewBox', '0 0 448 512');
    svgIcon.innerHTML = '<path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>';
    svgIcon.classList.add('modal-header-icon');


    const modalHeader = document.createElement('h2');
    modalHeader.className = 'custom-modal-header';

    const modalHeaderTitle = document.createElement('div');
    modalHeaderTitle.className = 'custom-modal-title';
    modalHeaderTitle.innerText = '전체 목록';

    const modalList = document.createElement('ul');
    modalList.className = 'custom-modal-list';

    // 생성한 엘리먼트들을 조립
    modalHeaderTitle.prepend(svgIcon);
    modalHeader.appendChild(modalHeaderTitle);
    modalHeader.appendChild(closeModalButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalList);
    modal.appendChild(modalContent);

    const targetElement = document.querySelector('.md-content__inner'); // 본문 영역에 버튼 추가
    if (targetElement) {
        targetElement.insertBefore(openModalButton, targetElement.firstChild);
    }
    document.body.appendChild(modal);

    // '목록 보기' 버튼 클릭 시
    openModalButton.addEventListener('click', function() {
        // 기존 목록을 비우고 새로 채움
        modalList.innerHTML = '';

        // 1단계에서 생성된 window.addressList 배열을 사용
        if (window.addressList && window.addressList.length > 0) {
            window.addressList.forEach(file => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.innerText = file.title;
                link.href = `/${file.path}/`; // MkDocs 링크 형식에 맞게 경로 설정
                listItem.appendChild(link);
                modalList.appendChild(listItem);
            });
        } else {
            modalList.innerHTML = '<li>목록을 불러올 수 없습니다.</li>';
        }

        modal.style.display = 'block'; // 모달 보이기
    });

    // 'x' 버튼 클릭 시
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none'; // 모달 숨기기
    });

    // 모달 바깥 영역 클릭 시
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // 모달 숨기기
        }
    });
}

function AddCUnitModal() {
    // 모달을 활성화할 버튼 생성
    const openModalButton = document.createElement('button');
    openModalButton.innerText = '전체 목록 보기';
    openModalButton.className = 'md-button custom-button'; // MkDocs Material 테마 버튼 스타일 적용

    // 모달 엘리먼트들 생성
    const modal = document.createElement('div');
    modal.className = 'custom-modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'custom-modal-content';

    const closeModalButton = document.createElement('span');
    closeModalButton.className = 'custom-modal-close';
    closeModalButton.innerHTML = '&times;'; // 'x' 모양

    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.setAttribute('viewBox', '0 0 448 512');
    svgIcon.innerHTML = '<path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>';
    svgIcon.classList.add('modal-header-icon');

    const modalHeader = document.createElement('h2');
    modalHeader.className = 'custom-modal-header';

    const modalHeaderTitle = document.createElement('div');
    modalHeaderTitle.className = 'custom-modal-title';
    modalHeaderTitle.innerText = '전체 목록';

    const modalList = document.createElement('ul');
    modalList.className = 'custom-modal-list';

    // 생성한 엘리먼트들을 조립
    modalHeaderTitle.prepend(svgIcon);
    modalHeader.appendChild(modalHeaderTitle);
    modalHeader.appendChild(closeModalButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalList);
    modal.appendChild(modalContent);

    const targetElement = document.querySelector('.md-content__inner'); // 본문 영역에 버튼 추가
    if (targetElement) {
        targetElement.insertBefore(openModalButton, targetElement.firstChild);
    }
    document.body.appendChild(modal);

    // '목록 보기' 버튼 클릭 시
    openModalButton.addEventListener('click', function() {
        // 기존 목록을 비우고 새로 채움
        modalList.innerHTML = '';

        // 1단계에서 생성된 window.addressList 배열을 사용
        if (window.cunitList && window.cunitList.length > 0) {
            window.cunitList.forEach(file => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.innerText = file.title;
                link.href = `/${file.path}/`; // MkDocs 링크 형식에 맞게 경로 설정
                listItem.appendChild(link);
                modalList.appendChild(listItem);
            });
        } else {
            modalList.innerHTML = '<li>목록을 불러올 수 없습니다.</li>';
        }

        modal.style.display = 'block'; // 모달 보이기
    });

    // 'x' 버튼 클릭 시
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none'; // 모달 숨기기
    });

    // 모달 바깥 영역 클릭 시
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // 모달 숨기기
        }
    });
}

function AddViewCount() {
    const path = window.location.pathname;
    const hashedPath = btoa(path);

    const apiUrl = `https://view.devlog.run/api/cnt/v1/eudlab/post/${hashedPath}`;

    // 페이지의 article을 찾습니다.
    const allArticles = document.querySelectorAll('article');
    const article = allArticles[allArticles.length - 1];
    const viewCountElement = document.createElement('span');
    viewCountElement.className = 'view-count md-source-viewcount';

    const viewCountText = document.createElement('span');
    viewCountText.textContent = `조회수 0`;

    const viewCountIcon = document.createElement('span');
    viewCountIcon.className = 'md-icon';
    viewCountIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M360-160q-19 0-34-11t-22-28l-92-241H40v-80h228l92 244 184-485q7-17 22-28t34-11q19 0 34 11t22 28l92 241h172v80H692l-92-244-184 485q-7 17-22 28t-34 11Z"/></svg>';
    viewCountElement.appendChild(viewCountIcon);
    viewCountElement.appendChild(viewCountText);


    const mdSourceFile = article.querySelector('.md-source-file');
    if (mdSourceFile) {
        viewCountElement.className = 'view-count md-source-file__fact'
        mdSourceFile.insertBefore(viewCountElement, mdSourceFile.firstChild);
    } else {
        article.appendChild(viewCountElement);
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const viewCount = data.data.count;

            viewCountText.textContent = `조회수 ${viewCount}`;
        })
        .catch(error => {
            console.error('Error fetching view count:', error);
        });
}

// 기본 로더 제어 함수
function showLoader(loaderId, messageId) {
    const loader = document.getElementById(loaderId);
    const message = document.getElementById(messageId);

    loader.classList.remove('hidden');
    message.classList.add('hidden');
}

function hideLoader(loaderId, messageId) {
    const loader = document.getElementById(loaderId);
    const message = document.getElementById(messageId);

    loader.classList.add('hidden');
    message.classList.remove('hidden');
}


function AddHistory(history) {
    history.innerHTML = "";
    const input = document.getElementById("user-question");
    const answerBox = document.getElementById("answer-box");
    const answerContent = document.getElementById("answer-content");


    const historyJson = localStorage.getItem("history") || "[]";
    const historyList = JSON.parse(historyJson);

    const historyTop = document.createElement('h3');
    historyTop.textContent = `History (${historyList.length})`;
    history.appendChild(historyTop);

    if (historyList.length > 0) {
        for (let i = 0; i < historyList.length; i++) {
            const historyContent = historyList[i];
            const historyWrapper = document.createElement('div');
            historyWrapper.style.display = "flex";

            const historyRemover = document.createElement('div');
            historyRemover.textContent = "X";
            historyRemover.style.marginLeft = "10px";
            historyRemover.style.marginTop = ".625em";
            historyRemover.style.color = "var(--md-typeset-a-color)";
            historyRemover.style.cursor = "pointer";
            // historyRemover.style.fontSize = "0.8rem";
            historyRemover.dataset.historyId = i.toString();

            // 👉 삭제 기능
            historyRemover.addEventListener("click", (e) => {
                e.stopPropagation();
                const historyId = parseInt(e.target.dataset.historyId);
                historyList.splice(historyId, 1); // 해당 항목 제거
                localStorage.setItem("history", JSON.stringify(historyList));
                AddHistory(history); // 다시 렌더링
            });

            const historyItem = document.createElement('a');
            historyItem.href = "#";
            historyItem.className = "md-nav__link";
            historyItem.dataset.historyId = i.toString();
            historyItem.textContent = historyContent["question"];

            historyItem.addEventListener("click", (e) => {
                e.stopPropagation();
                const historyId = e.target.dataset.historyId;
                const content = historyList[historyId];
                console.log(content);
                input.value = content["question"];
                answerBox.style.display = "block";
                answerContent.innerHTML = content["answer"];
            });

            // 요소 조립
            historyWrapper.appendChild(historyItem);
            historyWrapper.appendChild(historyRemover);
            history.appendChild(historyWrapper);
        }
    }
    else {
        const historyItem = document.createElement('div');
        historyItem.textContent = "히스토리가 비어있습니다.";
        history.appendChild(historyItem);
    }
}


function AddAI() {
    const historyMaxSize = 20;
    const input = document.getElementById("user-question");
    const button = document.getElementById("submit-question");
    const answerBox = document.getElementById("answer-box");
    const answerContent = document.getElementById("answer-content");
    const nav = document.getElementsByClassName("md-nav--secondary");

    if (!input || !button || !answerBox || !answerContent || !nav.length) {
        return;
    }

    const history = nav[0];
    AddHistory(history);
    
    const last = localStorage.getItem("last-question");
    if (last) {
        const lastQuestion = JSON.parse(last);
        input.value = lastQuestion.question;
        answerBox.style.display = "block";
        answerContent.innerHTML = lastQuestion.answer;
    }

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            button.click();
        }
    })

    button.addEventListener("click", () => {
        const question = input.value.trim();

        if (!question) {
            alert("질문을 입력하세요.");
            return;
        }
        if (button.disabled) {
            return;
        }

        input.disabled = true;
        button.disabled = true;
        answerBox.style.display = "block";
        showLoader('typing', 'answer-content');

        fetch("https://eudai.devlog.run/api/v1/llm/question", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "message":question })
        })
            .then(res => res.json())
            .then(data => {
                const message = data?.message;
                let html = marked.parse(message?.answer || "오류가 발생했습니다."); // Markdown → HTML 변환
                html += `\n\n${message?.reference || ""}\n${message?.usage || ""}`

                answerContent.innerHTML = html;
                localStorage.setItem("last-question", JSON.stringify({ question: question, answer: html }));

                const historyJson = localStorage.getItem("history") || "[]";
                const historyList = JSON.parse(historyJson);
                if (historyList.length > historyMaxSize) {
                    historyList.pop();
                }

                historyList.unshift({
                    "question": question,
                    "answer": html
                });
                localStorage.setItem("history", JSON.stringify(historyList));

                AddHistory(history);
            })
            .catch(err => {
                answerContent.innerHTML = `<p>에러: ${err.message}</p>`;
            })
            .finally(() => {
                hideLoader('typing', 'answer-content');
                button.disabled = false;
                input.disabled = false;
            });
    });
}