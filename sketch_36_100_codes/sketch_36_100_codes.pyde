list = [1,2,1,2,3,4,5,1,1,2,5,6,7,8,9,9] 
 
new = []  
for a in list: 

    n = list.count(a) 

    if n > 1:        
 
        if new.count(a) == 0:  
 
            new.append(a)
 
print(new)
 
