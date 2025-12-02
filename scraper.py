import os

import requests

from bs4 import BeautifulSoup

from urllib.parse import urljoin

import urllib3



urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)



# TARGET: The hidden backend server for Seikoro

BASE_URL = "http://www.tenawan.ne.jp/u/seikoro-e/sp/"

TARGET_DIR = "./public/images"



# Known pages on the backend server

PAGES = [

    "index.html",

    "facility3.html", # Public Bath

    "dish1.html",     # Cuisine

    "room1.html",     # Rooms

    "guide.html"

]



def setup_directories():

    if not os.path.exists(TARGET_DIR):

        os.makedirs(TARGET_DIR)

        print(f"📂 Saving to: {TARGET_DIR}")



def download_image(url, filename):

    try:

        # Pretend to be a mobile browser (since we are targeting the /sp/ site)

        headers = {

            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'

        }

        response = requests.get(url, headers=headers, stream=True, verify=False, timeout=10)

        

        if response.status_code == 200:

            filepath = os.path.join(TARGET_DIR, filename)

            with open(filepath, 'wb') as f:

                for chunk in response.iter_content(1024):

                    f.write(chunk)

            print(f"✅ Saved: {filename}")

            return True

        return False

    except Exception as e:

        print(f"⚠️ Error: {e}")

        return False



def scrape_hidden_server():

    setup_directories()

    print("🕵️‍♀️ Connecting to Hidden Server (tenawan.ne.jp)...")

    

    count = 0

    seen = set()

    

    for page in PAGES:

        full_url = urljoin(BASE_URL, page)

        print(f"   Scanning: {full_url}")

        

        try:

            res = requests.get(full_url, verify=False)

            soup = BeautifulSoup(res.text, 'html.parser')

            images = soup.find_all('img')

            

            for img in images:

                src = img.get('src')

                if not src: continue

                

                # Filter out navigation/icons

                if any(x in src for x in ['btn', 'nav', 'icon', 'line', 'arrow']):

                    continue

                    

                img_url = urljoin(BASE_URL, src)

                if img_url in seen: continue

                seen.add(img_url)

                

                # Name them nicely

                filename = f"seikoro_v5_{count}.jpg"

                if download_image(img_url, filename):

                    count += 1

                    

        except Exception as e:

            print(f"   ❌ Failed to access {page}")



    print(f"\n🎉 OPERATION COMPLETE. {count} images secured.")



if __name__ == "__main__":

    scrape_hidden_server()
