a = int(input())
arr = []
cnt = 0
for i in range(a):
    num = int(input())
    arr.append(num)

for i in range(len(arr) - 1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        cnt += 1

print(cnt)