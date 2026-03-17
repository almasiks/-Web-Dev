import math
a = int(input())
b = int(input())

for i in range(a, b+1):
    num = math.isqrt(i)
    if num * num == i:
        print(i, end=' ')
