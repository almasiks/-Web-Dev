a = int(input())
arr = []

for i in range(a):
    num = int(input())
    arr.append(num)

for j in range(len(arr)):
    if arr[j] % 2 ==0:
        print(arr[j], end=' ')