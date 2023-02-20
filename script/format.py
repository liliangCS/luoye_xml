import os
import cv2
 
def format_image(input_dir, output_dir):
  width = 50
  height = 50
  if not os.path.exists(output_dir):
      os.makedirs(output_dir)
  index = 1
  for (path, dirnames, filenames) in os.walk(input_dir):
    for filename in filenames:
        if filename.endswith('.jpg'):
            print(f'正在处理第 {index} 张图片')
            img_path = path + '/' + filename
            img = cv2.imread(img_path)
            image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            new_img = cv2.resize(image, (width, height))
            cv2.imwrite(output_dir + '/' + str(index) + '.jpg', new_img)
            index += 1
  print("图片已全部格式化")

# 正样本格式化
input_dir1 = "pos_raw"
output_dir1 = "pos"
format_image(input_dir1, output_dir1)
# 负样本格式化
input_dir1 = "neg_raw"
output_dir1 = "neg"
format_image(input_dir1, output_dir1)
