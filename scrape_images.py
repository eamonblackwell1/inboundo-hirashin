#!/usr/bin/env python3
"""
Image scraper for Ryokan Hirashin website
Scrapes images from specified URLs and saves them to scraped_images folder
"""

import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

# Target URLs to scrape
TARGET_URLS = [
    "http://www.hirashin.co.jp/",
    "http://www.hirashin.co.jp/en/",
    "http://www.hirashin.co.jp/en/facilities/index.html",
    "http://www.hirashin.co.jp/en/cuisine/index.html",
    "http://www.hirashin.co.jp/en/guestroom/index.html",
]

# Configuration
OUTPUT_DIR = "scraped_images"
MIN_FILE_SIZE = 10 * 1024  # 10KB in bytes
REQUEST_DELAY = 1  # Delay between requests in seconds

def create_output_dir():
    """Create output directory if it doesn't exist"""
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")

def get_image_extension(url):
    """Extract file extension from URL, default to .jpg"""
    parsed = urlparse(url)
    path = parsed.path
    if '.' in path:
        ext = os.path.splitext(path)[1].lower()
        # Map common image extensions
        if ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']:
            return ext if ext != '.jpeg' else '.jpg'
    return '.jpg'

def download_image(url, output_path):
    """Download an image from URL and save to output_path"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30, stream=True)
        response.raise_for_status()
        
        # Check file size
        content_length = response.headers.get('Content-Length')
        if content_length and int(content_length) < MIN_FILE_SIZE:
            return False
        
        # Download and check size
        image_data = response.content
        if len(image_data) < MIN_FILE_SIZE:
            return False
        
        # Save image
        with open(output_path, 'wb') as f:
            f.write(image_data)
        
        return True
    except Exception as e:
        print(f"  Error downloading {url}: {e}")
        return False

def scrape_images_from_url(url):
    """Scrape all images from a given URL"""
    print(f"\nScraping: {url}")
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        img_tags = soup.find_all('img')
        
        print(f"  Found {len(img_tags)} image tags")
        
        image_urls = []
        for img in img_tags:
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
            if src:
                # Resolve relative URLs
                absolute_url = urljoin(url, src)
                image_urls.append(absolute_url)
        
        return image_urls
    
    except Exception as e:
        print(f"  Error scraping {url}: {e}")
        return []

def main():
    """Main function to orchestrate the scraping process"""
    print("Starting image scraping for Ryokan Hirashin...")
    
    create_output_dir()
    
    # Collect all unique image URLs
    all_image_urls = set()
    
    for url in TARGET_URLS:
        image_urls = scrape_images_from_url(url)
        all_image_urls.update(image_urls)
        time.sleep(REQUEST_DELAY)  # Be polite to the server
    
    print(f"\nTotal unique images found: {len(all_image_urls)}")
    
    # Download images
    downloaded_count = 0
    skipped_count = 0
    
    for idx, image_url in enumerate(sorted(all_image_urls), start=1):
        ext = get_image_extension(image_url)
        output_filename = f"hirashin_{idx}{ext}"
        output_path = os.path.join(OUTPUT_DIR, output_filename)
        
        # Skip if file already exists
        if os.path.exists(output_path):
            print(f"  [{idx}] Skipping (already exists): {output_filename}")
            skipped_count += 1
            continue
        
        print(f"  [{idx}] Downloading: {image_url}")
        if download_image(image_url, output_path):
            file_size = os.path.getsize(output_path)
            print(f"       Saved: {output_filename} ({file_size / 1024:.1f} KB)")
            downloaded_count += 1
        else:
            skipped_count += 1
            if os.path.exists(output_path):
                os.remove(output_path)  # Remove file if it was too small
        
        time.sleep(REQUEST_DELAY)  # Be polite to the server
    
    print(f"\n=== Summary ===")
    print(f"Downloaded: {downloaded_count}")
    print(f"Skipped: {skipped_count}")
    print(f"Total processed: {len(all_image_urls)}")

if __name__ == "__main__":
    main()


