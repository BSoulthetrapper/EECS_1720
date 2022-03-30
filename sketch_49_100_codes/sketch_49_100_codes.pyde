from operator import itemgetter

lis = [{ "name" : "J", "age" : 20}, 
{ "name" : "K", "age" : 20 },
{ "name" : "O" , "age" : 19 }]

print "The list printed sorting by age: "
print sorted(lis, key=itemgetter('age'))
  
print ("\r")

print "The list printed sorting by age and name: "
print sorted(lis, key=itemgetter('age', 'name'))
  
print ("\r")

print "The list printed sorting by age in descending order: "
print sorted(lis, key=itemgetter('age'),reverse = True)
