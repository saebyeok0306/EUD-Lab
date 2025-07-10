import re
import json
import mkdocs_gen_files
from pathlib import Path

# MkDocs 설정에서 네비게이션 정보를 가져옵니다.
source_path = Path("docs/Address")
file_list = []

# 'all-pages.md' 라는 이름으로 가상의 마크다운 파일을 생성합니다.
with mkdocs_gen_files.open("Address/index.md", "w") as fd:
    hex_pattern = r'0x[0-9a-fA-F]+'

    for path in sorted(source_path.rglob("*.md")):
        
        # 파일 경로에서 'docs/' 부분을 제외하여 MkDocs가 인식하는 링크를 만듭니다.
        # as_posix()는 윈도우에서도 웹 경로 형식(/)을 사용하게 해줍니다.
        relative_path = path.relative_to("docs").as_posix()

        # 파일이 'index.md'가 아닌 경우에만 처리합니다.
        if relative_path.endswith("index.md"):
            continue

        with mkdocs_gen_files.open(relative_path, "r") as f:
            content = f.read()

            # 첫번째 헤더의 내용을 제목으로 사용합니다.
            if content.startswith("# "):
                # 첫번째 헤더를 추출하고, '# '를 제거합니다.
                page_title = content.splitlines()[0][2:].strip()
                # 0x 로 시작하는 문자를 하나 추출.
                address = re.findall(hex_pattern, content)
                page_title = f"{address[0]} {page_title}"

                # 마크다운 리스트 형식으로 링크를 추가합니다.
                file_list.append({"title": page_title, "path": f"../{relative_path}"})

js_content = f"window.addressList = {json.dumps(file_list, ensure_ascii=False)};"

with mkdocs_gen_files.open("javascripts/address_list.js", "w", encoding="utf-8") as fs:
    fs.write(js_content)

print("Generated address_list.js with file list for JavaScript.")