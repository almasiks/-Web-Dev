a = int(input())
arr = []
cnt = 0
for i in range(a):
    num = int(input())
    arr.append(num)

for i in range(len(arr)):
    if arr[i] > 0:
        cnt +=1

print(cnt)