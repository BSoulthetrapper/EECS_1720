
test_list = [["J", "good"], ["is", "for"], ["Best"]]

print("The original list : " + str(test_list))

res = []
N = 0
while N != len(test_list):
    temp = ''
    for idx in test_list:

        try: temp = temp + idx[N]
        except IndexError: pass
    res.append(temp)
    N = N + 1
  
res = [ele for ele in res if ele]
  
# printing result 
print("List after column Concatenation : " + str(res))
