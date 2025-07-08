import json
import pickle

with open('C:\\Programming\\Python\\EUD-Lab\\docs\\assets\\EUDDB.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('en.pkl', 'rb') as f:
    descriptions_list = pickle.load(f)

with open('ko.pkl', 'rb') as f:
    descriptions_list2 = pickle.load(f)

last = 33


header = data['header']
for idx, content in enumerate(data['content']):
    address, deaths, version, name, size, length, scr, desc = content
    address2 = hex(int(address, 16))
    address3 = address2[:2] + address2[2:].upper() # 0x00000000
    print(f"{idx}: {hex(int(address, 16)).upper()} {address} {deaths} {version} {name} {size} {length} {scr}")
    with open(f"offset{idx:03}.md", "w", encoding="utf-8") as f:
        md = f"# {name}\n\n"
        # md += "| Method      | Description                          |\n"
        # md += "| ----------- | ------------------------------------ |\n"
        # md += f"| `Address` | {address3} |\n"
        # md += f"| `Player ID` | {deaths} |\n"
        # md += f"| `Version` | {version} |\n"
        # md += f"| `Size` | {size} |\n"
        # md += f"| `Length` | {length} |\n"
        # md += f"| `SCR` | {'None' if scr == '' else scr} |\n\n"

        md += "| `Address` | `Player ID` | `Version` | `Size` | `Length` | `SCR` |\n"
        md += "| ---------- | ----------- | --------- | ------ | -------- | ---- |\n"
        md += f"| {address3} | {deaths} | {version} | {size} | {length} | {'None' if scr == '' else scr} |\n\n"

        # md += f"* Address: {address2}\n"
        # md += f"* Player ID: {deaths}\n"
        # md += f"* Version: {version}\n"
        # md += f"* Size: {size}\n"
        # md += f"* Length: {length}\n"
        # md += f"* SCR: {scr}\n\n"
        md += f"# Description\n\n"
        if descriptions_list[idx] != "":
            md += f"{descriptions_list[idx]}\n\n<br>\n"
        if descriptions_list2[idx] != "":
            md += f"{descriptions_list2[idx]}"
        md += "\n\n<br>\n> 해당 내용은 인공지능을 통해 번역 및 작성되었습니다."
        f.write(md)

    if last <= idx:
        break
