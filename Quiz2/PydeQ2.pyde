#Minkyu Kim
numRobots = 10


robots = [0]*numRobots;


currentRobot = 0; 


def setup():
  size(600,600);
  smooth();
  global numRobots, robots;
  for i in range(numRobots):
    colour = color(random(255), random(255), random(255)); 
    robots[i] = ClassyRobot(0, [], False, 'WRONG', 2, 2); 

def draw():
  global numRobots, robots;
  background(random(255),random(255),random(255)); 
 
  img = loadImage("rap.jpeg")

  image(img, 0, 0, width/3, height/3)

  for i in range(numRobots):
    
    robots[i].display(); 



def mousePressed():
  global numRobots, currentRobot;
  robots[currentRobot].start(mouseX, mouseY,); 
  currentRobot += 1;
  if (currentRobot >= numRobots):
    currentRobot = 0;
  name(currentRobot);


def save(i):
  global numRobots;
  with open('data/robot.rtf', 'a+') as textFile:
    textFile.write("\nRobot %s name is:" %i + robots[i].name) 

def load(i):
  pass;

def name(i):
  global numRobots, currentRobot;
  robots[i].name = 'Migos' 
  print('My name is: `%s`' %i, robots[i].name);
  if currentRobot > 5:
    robots[currentRobot].shbam = True;
  else:
    save(i); 
    load(i); 


class ClassyRobot(object):
  
  def __init__(self, param, params, shbam, Migos, x, y):
    self.param = param;
    self.params = params;
    self.shbam = shbam;
    self.Migos = Migos; 
    self.x = x;
    self.y = y;
    #...;


  def start(self, xpos, ypos):
    self.x = xpos;
    self.y = ypos;



  def display(self):
    if (self.shbam == True):
      noFill();
      strokeWeight(3);
      stroke(255, 255);

      rect(self.x, self.y, 5, 5);

  def sound():
    pass 
