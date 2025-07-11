import os
import requests

TOKEN = os.getenv('GITHUB_TOKEN')

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
        # contributors = get_contributors()
        contributors = [{
            "login": "saebyeok0306",
            "id": 67100702,
            "node_id": "MDQ6VXNlcjY3MTAwNzAy",
            "avatar_url": "https://avatars.githubusercontent.com/u/67100702?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/saebyeok0306",
            "html_url": "https://github.com/saebyeok0306",
            "followers_url": "https://api.github.com/users/saebyeok0306/followers",
            "following_url": "https://api.github.com/users/saebyeok0306/following{/other_user}",
            "gists_url": "https://api.github.com/users/saebyeok0306/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/saebyeok0306/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/saebyeok0306/subscriptions",
            "organizations_url": "https://api.github.com/users/saebyeok0306/orgs",
            "repos_url": "https://api.github.com/users/saebyeok0306/repos",
            "events_url": "https://api.github.com/users/saebyeok0306/events{/privacy}",
            "received_events_url": "https://api.github.com/users/saebyeok0306/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": False,
            "contributions": 26
        }]
        contributors = [contributors[0], contributors[0], contributors[0], contributors[0], contributors[0]]
        
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
            contrib_md = f'\n\n<div class="contributors-list">{''.join(avatar_html_list)}</div>'

            # 기존 Markdown 내용의 끝에 기여자 목록 추가
            return markdown + contrib_md
            
    return markdown