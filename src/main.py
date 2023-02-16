import cv2

# 定义人脸检测函数
def face_check(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    face_category = cv2.CascadeClassifier("../xml/cascade.xml")
    face = face_category.detectMultiScale(gray)
    for x, y, w, h in face:
        cv2.rectangle(img, (x, y), (x+w, y+h), (0, 0, 255), 2)
    cv2.imshow("result", image)

# 读取图片
img = cv2.imread("./image_test/tu_2.jpg")
face_check(img)

while True:
    if cv2.waitKey() == ord("q"):
        break
cv2.destroyAllWindows()