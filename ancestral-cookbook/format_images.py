# Function to create lighter miniatures and update Recettes.csv
import csv
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
MAX_WIDTH = 2000
ASPECT_RATIO = 2 / 1
MINIATURE_DIVIDER = 4 # miniatures are 4 times smaller than original images

def process_miniatures(csv_path):
    rows = []
    updated = False
    with open(csv_path, 'r', encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            miniature_path = row.get('Miniature', '').strip()
            # Always create miniature if it doesn't exist
            orig_path = miniature_path
            if not os.path.exists(orig_path) or not miniature_path:
                print(f"Creating miniature for {row.get('Title', 'Unknown Title')}")
                # Try to get original image from Images column
                images_field = row.get('Images', '').strip()
                # Use first image in Images field
                if images_field:
                    first_img = images_field.split(',')[0].strip()
                    orig_path = first_img
                    if not os.path.exists(orig_path):
                        orig_path = os.path.join(IMG_DIR, os.path.basename(first_img))
            else:
                if not os.path.exists(orig_path):
                    orig_path = os.path.join(IMG_DIR, os.path.basename(miniature_path))
            if os.path.exists(orig_path):
                print(f"Processing miniature from {orig_path}")
                im = Image.open(orig_path)
                width, height = im.size
                # Always create a copy resized to 1/4 original size
                new_size = (max(1, width // MINIATURE_DIVIDER), max(1, height // MINIATURE_DIVIDER))
                im_resized = im.resize(new_size, Image.LANCZOS)
                # Save new miniature with '_mini' suffix before extension
                base, ext = os.path.splitext(os.path.basename(orig_path))
                new_filename = base + '_mini.jpg'
                new_path = os.path.join(IMG_DIR, new_filename)
                im_resized.save(new_path, 'JPEG', quality=80)
                # Update CSV reference
                row['Miniature'] = os.path.join(IMG_DIR, new_filename).replace('\\', '/')
                updated = True
            rows.append(row)
    # Write updated CSV if any changes
    if updated:
        print(f"Updating {csv_path} with new miniatures.")
        with open(csv_path, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)


for filename in os.listdir(IMG_DIR):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.webp')):
        path = os.path.join(IMG_DIR, filename)
        im = Image.open(path)
        width, height = im.size
        # Only process if aspect ratio is not 2:1
        if abs((width / height) - ASPECT_RATIO) > 0.01:
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
process_miniatures('Recettes.csv')
