a = int(input())
arr = []

for i in range(a):
    num = int(input())
    arr.append(num)
found = False
for i in range(len(arr)-1):
    if arr[i] * arr[i+1] > 0:
        found = True
        break
        
if found:
    print('Yes')
else:
    print('NO')
