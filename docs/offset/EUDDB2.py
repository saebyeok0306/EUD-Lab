
list1 = []
list2 = []

if __name__ == "__main__":
    import json
    import pickle
    import google.generativeai as genai

    with open('C:\\Programming\\Python\\EUD-Lab\\docs\\assets\\EUDDB.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    api_key = "AIzaSyCt_PEQ3gzoEMAQAmf193jn4qEczTkmqVg"
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.5-flash')

    contents = data['content']

    print("model ready")

    for idx, content in enumerate(contents):
        if content[7] == "": continue
        while True:
            prompt = f"`{content[7]}`\nFormat the following sentences according to Markdown syntax and translate them into Korean. If a sentence is awkward to translate, leave it in English. Provide only the necessary answer in a JSON format with 'en' for the English sentences and 'ko' for the Korean translations. Do not divide the content into a list. You may use a Markdown table for content that is well-suited for it. For Ordered or Unordered Lists, start them on a new line. Do not use '#' for headings."
            response = model.generate_content(prompt)

            try:
                res = response.text.replace("```json", "").replace("```", "")
                json_data = json.loads(res)

                if json_data.get("en") is None or json_data.get("ko") is None:
                    print(f"Create Error: {idx} {res}")
                    continue
                print(f"{idx}: {json_data}")
                list1.append(json_data["en"])
                list2.append(json_data["ko"])
                break
            except Exception as e:
                print(f"Exception Error: {idx} {e}")
                continue

        with open("en.pkl", "wb") as f:
            pickle.dump(list1, f)
        with open("ko.pkl", "wb") as f:
            pickle.dump(list2, f)

        # if idx > 20: break

    with open("en.pkl", "wb") as f:
        pickle.dump(list1, f)
    with open("ko.pkl", "wb") as f:
        pickle.dump(list2, f)