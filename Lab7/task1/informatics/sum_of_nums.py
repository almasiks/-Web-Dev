a = int(input())
total = 0

while a > 0:
    total += a % 10
    a = a // 10

print(total)