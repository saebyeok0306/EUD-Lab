// 페이지 로드가 완료되면 실행
document.addEventListener('DOMContentLoaded', function() {
    
    if (!window.location.pathname.startsWith('/Address/')) {
        return;
    }
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
                link.href = `/${file.path.replace('.md', '')}`; // MkDocs 링크 형식에 맞게 경로 설정
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
});