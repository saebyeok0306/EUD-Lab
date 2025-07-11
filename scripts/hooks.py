import os
import requests

try:
    from dotenv import load_dotenv
    load_dotenv()
except:
    pass

TOKEN = os.getenv('TOKEN')

# 기여자 목록을 가져올 GitHub 리포지토리 정보
REPO_OWNER = "saebyeok0306"
REPO_NAME = "EUD-Lab"
TARGET_PAGE = "index.md" 
# ------------------------------------

def get_contributors():
    """GitHub API를 호출하여 기여자 목록을 가져옵니다."""
    if not TOKEN:
        print("경고: API 요청 제한이 있을 수 있습니다.")
        headers = {}
    else:
        headers = {"Authorization": f"Bearer {TOKEN}"}
    
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contributors"
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # 200 OK가 아니면 예외 발생
        contributors = response.json()
        return contributors
    except requests.exceptions.RequestException as e:
        print(f"오류: GitHub API에서 기여자 정보를 가져오는 데 실패했습니다 - {e}")
        return None

def on_page_markdown(markdown, page, config, files):
    """페이지가 렌더링되기 전에 Markdown 내용을 수정하는 함수."""
    
    if page.file.src_path == TARGET_PAGE:
        print(f"'{TARGET_PAGE}'에 기여자 목록을 추가합니다.")
        contributors = get_contributors()
        
        if contributors:

            avatar_html_list = []
            for i, c in enumerate(contributors):
                login = c['login']
                avatar_url = c['avatar_url']
                html_url = c['html_url']
                
                # 아바타 이미지를 작게 표시하고, 클릭 시 GitHub 프로필로 이동
                avatar_html = f"""
                <a href="{html_url}" class="contributor-link" target="_blank" rel="noopener">
                    <img src="{avatar_url}&s=96" class="contributor-avatar" alt="{login}">
                    <span class="tooltip">@{login}</span>
                </a>
                """
                avatar_html_list.append(avatar_html)
            
            total_contributors = len(contributors)
            contrib_md = f'\n\n---\n\n## 프로젝트에 기여한 분들\n\n이 프로젝트는 열정적인 분들의 도움으로 만들어졌습니다. 모두에게 감사드립니다!\n<div class="contributors-list">{"".join(avatar_html_list)}</div>'

            # 기존 Markdown 내용의 끝에 기여자 목록 추가
            return markdown + contrib_md
            
    return markdown