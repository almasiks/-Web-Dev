a = int(input())
arr = []

for i in range(a):
    num = int(input())
    arr.append(num)

arr.reverse()
res = arr[::-1]
print(arr)