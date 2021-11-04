import os.path
import os
from pathlib import Path
from PIL import Image, ImageDraw
import aggdraw
from PIL import Image, ImageFont
from PIL import ImageDraw, ImageFilter

#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#


def add_corners(image, radius):
    """generate round corner for image"""
    mask = Image.new('L', image.size)
    draw = aggdraw.Draw(mask)
    brush = aggdraw.Brush('white')
    width, height = mask.size
    draw.pieslice((0, 0, radius*2, radius*2), 90, 180, 255, brush)
    draw.pieslice((width - radius*2, 0, width, radius*2), 0, 90, None, brush)
    draw.pieslice((0, height - radius * 2, radius *
                   2, height), 180, 270, None, brush)
    draw.pieslice((width - radius * 2, height - radius *
                   2, width, height), 270, 360, None, brush)
    draw.rectangle((radius, radius, width - radius, height - radius), brush)
    draw.rectangle((radius, 0, width - radius, radius), brush)
    draw.rectangle((0, radius, radius, height-radius), brush)
    draw.rectangle((radius, height-radius, width-radius, height), brush)
    draw.rectangle((width-radius, radius, width, height-radius), brush)
    draw.flush()
    image = image.convert('RGBA')
    image.putalpha(mask)
    return image


def round_images(image_path_name):
    image = Image.open(image_path_name)
    image = add_corners(image, 25)
    image.save(image_path_name)


def add_margin(pil_img, top, right, bottom, left, color):
    width, height = pil_img.size
    new_width = width + right + left
    new_height = height + top + bottom
    result = Image.new(pil_img.mode, (new_width, new_height), color)
    result.paste(pil_img, (left, top))
    return result
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#


def create_one_no_bg(image_name, number):
    round_images('images/' + image_name)
    image = Image.open('images/' + image_name)
    im_new = add_margin(image, 25, 25, 25, 25, (255, 255, 255, 0))
    im_new.save('no-bg/no-bg-' + number + ".png", quality=95)


def create_one_code_ready(image_name, number):
    round_images('images/' + image_name)
    image = Image.open('images/' + image_name)
    new_image = Image.new("RGBA", image.size, "WHITE")
    new_image.paste(image, (0, 0), image)
    new_image.convert('RGB')
    im_new = add_margin(new_image, 25, 25, 25, 25, (255, 255, 255))
    im_new.save('code-ready/code-' + number + ".png", quality=95)
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#


def create_all_code_ready(first_post_number):
    current_directory = os.getcwd() + "/images/"
    array_of_images = os.listdir(current_directory)
    if(".DS_Store" in array_of_images):
        array_of_images.remove(".DS_Store")
    for i in range(len(array_of_images)):
        create_one_code_ready(array_of_images[i], str(first_post_number + i))


def create_all_no_bg(first_post_number):
    current_directory = os.getcwd() + "/images/"
    array_of_images = os.listdir(current_directory)
    if(".DS_Store" in array_of_images):
        array_of_images.remove(".DS_Store")
    for i in range(len(array_of_images)):
        create_one_no_bg(array_of_images[i], str(first_post_number + i))


def create_both_above(first_post_number):
    create_all_no_bg((first_post_number))
    create_all_code_ready((first_post_number))
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#


def print_invalid():
    print("\n! ! !\tInvalid Input\t! ! !")


def delete_no_bg():
    current_directory = os.getcwd() + "/no-bg/"
    array_of_images = os.listdir(current_directory)
    for i in range(len(array_of_images)):
        os.remove("no-bg/" + array_of_images[i])
    print("\nSuccessfully deleted all files in no-bg")


def delete_code_ready():
    current_directory = os.getcwd() + "/code-ready/"
    array_of_images = os.listdir(current_directory)
    for i in range(len(array_of_images)):
        os.remove("code-ready/" + array_of_images[i])
    print("\nSuccessfully deleted all files in code-ready")


def delete_both_above():
    delete_code_ready()
    delete_no_bg()
    print("\nSuccessfully deleted all files in no-bg & code-ready")


def delete_images():
    current_directory = os.getcwd() + "/images/"
    array_of_images = os.listdir(current_directory)
    for i in range(len(array_of_images)):
        os.remove("images/" + array_of_images[i])
    print("\nSuccessfully deleted all files in images")


def delete_all_files():
    delete_both_above()
    delete_images()
    print("\nSuccessfully deleted all files")


while True:
    print("\nWhat do you want to do?\n")
    print("1. Create Files\n2. Delete Files\n3. Create Titles\n\n4. Quit\n")
    first_choice = (input(("Enter the number of your choice: ")))
    if(first_choice == "1"):
        # create files
        print("Create all files from images in:\n\t1 = no-bg\n\t2 = code-ready\n\t3 = no-bg & code-ready\nOr Create one file from images in:\n\t4 = no-bg\n\t5 = code-ready")
        create_choice = (input(("\nEnter the number of your choice: ")))
        if(create_choice == "1"):
            first_post_number = int(
                input("Enter the number of the current first post:"))
            create_all_no_bg(first_post_number)
        elif(create_choice == "2"):
            first_post_number = int(
                input("Enter the number of the current first post:"))
            create_all_code_ready(first_post_number)
        elif(create_choice == "3"):
            first_post_number = int(
                input("Enter the number of the current first post:"))
            create_both_above(first_post_number)
        elif(create_choice == "4"):
            image_name = input("\nEnter the full name of the image: ")
            image_number = input("\nEnter the number of the new file: ")
            create_one_no_bg(image_name, image_number)
        elif(create_choice == "5"):
            image_name = input("\nEnter the full name of the image: ")
            image_number = input("\nEnter the number of the new file: ")
            create_one_code_ready(image_name, image_number)
        else:
            print_invalid()
    elif(first_choice == "2"):
        # delete files
        print("\nDelete all files in:\n\t1 = no-bg\n\t2 = code-ready\n\t3 = images\n\t4 = no-bg & code-ready\n\t5 = every folder")
        delete_choice = (input(("\nEnter the number of your choice: ")))
        if(delete_choice == "1"):
            delete_no_bg()
        elif(delete_choice == "2"):
            delete_code_ready()
        elif(delete_choice == "3"):
            delete_images()
        elif(delete_choice == "4"):
            delete_both_above()
        elif(delete_choice == "5"):
            delete_all_files()
        else:
            print_invalid()
    elif(first_choice == "3"):
        post_number = input("\nEnter the number of your post: ")
        title_choice = input("\nEnter the title of your post: ")
        title_split = title_choice.split(" ")
        title = (" ".join(title_split[0])).upper() + \
            "  " + (" ".join(title_split[1])).upper()
        languages = ["c", "cpp", "java", "python"]

        for i in range(len(languages)):
            img = Image.open('languages/' + languages[i] + '.png')
            I1 = ImageDraw.Draw(img)
            W, H = (img.width, img.height)
            myFont = ImageFont.truetype("font.otf", 55)
            w, h = I1.textsize(title, myFont)
            I1.text(((W-w)/2, (H-h)/7), title,
                    font=myFont,  fill=(0, 0, 0),
                    stroke_fill="black")
            img.save("titles/title-" + post_number +
                     "-" + languages[i] + ".png")

    elif(first_choice == "4"):
        break
    else:
        print_invalid()


# current_directory = os.getcwd()
# folder_name_input = input("Enter folder name: ")


# def rename_images(images_count, folder_name, image_name):
#     for i in range((images_count)):
#         source = folder_name + '/' + str(i) + '.png'
#         dest = folder_name + '/' + image_name + str(i) + '.png'
#         os.rename(source, dest)
#         print("Picture", i, "successfully renamed.")


# if((Path(folder_name_input).is_dir())):
#     path, dirs, files = next(
#         os.walk(current_directory + "/" + folder_name_input))
#     number_of_images = len(files)
#     print("There is", number_of_images, "images in this folder.\n")
#     image_name = input("Enter new image name: ")
#     rounded = input("Do you want to round the corner of these images (Y/N): ")
#     if(rounded == "Y" or rounded == "y" or rounded == "yes" or rounded == "Yes"):
#         rename_images(number_of_images, folder_name_input, image_name)
#         for i in range((number_of_images)):
#             round_images(folder_name_input + "/" +
#                          image_name + str(i) + '.png')
#     elif(rounded == "N" or rounded == "n" or rounded == "no" or rounded == "No"):
#         rename_images(number_of_images, folder_name_input, image_name)
# else:
#     print("This folder doesn't exist.")
