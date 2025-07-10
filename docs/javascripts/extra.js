// 페이지 로드가 완료되면 실행
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/Address')) {
        AddAddressModal();
    }
    AddViewCount();
});

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

    const modalHeader = document.createElement('h2');
    modalHeader.innerText = '전체 목록';

    const modalList = document.createElement('ul');
    modalList.className = 'custom-modal-list';

    // 생성한 엘리먼트들을 조립
    modalContent.appendChild(closeModalButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalList);
    modal.appendChild(modalContent);

    // 버튼과 모달을 body에 추가 (버튼은 원하는 위치에 추가하도록 수정 가능)
    // 예: 특정 div에 추가
    const targetElement = document.querySelector('.md-content__inner'); // 본문 영역에 버튼 추가
    if (targetElement) {
        targetElement.insertBefore(openModalButton, targetElement.firstChild);
    }
    document.body.appendChild(modal);

    // --- 이벤트 리스너 설정 ---

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

/*
.md-source-file__fact {
    align-items: center;
    color: var(--md-default-fg-color--light);
    display: inline-flex
;
    font-size: .68rem;
    gap: .3rem;
}
*/

function AddViewCount() {
    const path = window.location.pathname;
    const hashedPath = btoa(path);

    const apiUrl = `http://view.devlog.run/api/cnt/v1/eudlab/post/${hashedPath}`;

    // 페이지의 article을 찾습니다.
    const article = document.querySelector('article');
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
            // 응답이 성공적이지 않으면 여기서 중단합니다.
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 응답받은 데이터에서 조회수(count)를 추출합니다.
            const viewCount = data.data.count;

            viewCountText.textContent = `조회수 ${viewCount}`;
        })
        .catch(error => {
            // API 호출에 실패하면 콘솔에 에러를 출력합니다.
            console.error('Error fetching view count:', error);
            // 실패 시 사용자에게는 아무것도 표시하지 않거나, 에러 메시지를 표시할 수 있습니다.
        });
}