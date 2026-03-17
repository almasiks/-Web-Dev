n = int(input())
arr = []

for i in range(n):
    num = int(input())
    arr.append(num)

for i in range(len(arr)):
    if i%2==0:
        print(arr[i], end=' ')
