# Importing Image class from PIL module
from PIL import Image
import os

# Function to replace every '.png' with '.jpg' in 'recettes.csv'
def replace_png_with_jpg_in_csv(csv_path):
    with open(csv_path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = content.replace('.png', '.jpg')
    with open(csv_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

IMG_DIR = r"img"
MAX_WIDTH = 1000
ASPECT_RATIO = 2 / 1

for filename in os.listdir(IMG_DIR):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.webp')):
        path = os.path.join(IMG_DIR, filename)
        im = Image.open(path)
        width, height = im.size
        # Calculate new crop dimensions for 2:1 aspect ratio, centered
        new_width = width
        new_height = int(width / ASPECT_RATIO)
        if new_height > height:
            new_height = height
            new_width = int(height * ASPECT_RATIO)
        left = (width - new_width) // 2
        top = (height - new_height) // 2
        right = left + new_width
        bottom = top + new_height
        im_cropped = im.crop((left, top, right, bottom))
        # Resize if width > MAX_WIDTH
        if new_width > MAX_WIDTH:
            im_cropped = im_cropped.resize((MAX_WIDTH, int(MAX_WIDTH / ASPECT_RATIO)), Image.LANCZOS)
        # Convert to RGB if not already (for JPEG)
        if im_cropped.mode in ("RGBA", "P"):
            im_cropped = im_cropped.convert("RGB")
        # Save as JPEG (overwrite original, change extension)
        new_filename = os.path.splitext(filename)[0] + ".jpg"
        new_path = os.path.join(IMG_DIR, new_filename)
        im_cropped.save(new_path, "JPEG", quality=90)
        # Optionally, remove the original file if it was not .jpg
        if not filename.lower().endswith('.jpg'):
            os.remove(path)
        print(f"Processed {filename} -> {new_filename}: {im_cropped.size}")


replace_png_with_jpg_in_csv('Recettes.csv')
