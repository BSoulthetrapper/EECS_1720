  
yPos = 0.0

def setup(): 
    size(200, 200)
    frameRate(30)

def draw():  
    background(204)
    yPos = yPos - 1.0
    if yPos < 0:
        yPos = height
    line(0, yPos, width, yPos)
def setup():
    size(200, 200)


def draw():
    pass

def mousePressed():
    line(mouseX, 10, mouseX, 90)
