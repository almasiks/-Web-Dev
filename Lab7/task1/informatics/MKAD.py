v = int(input())
t = int(input())
if t * v >= 109:
    print((t*v) % 109)
elif v<0:
    print(abs(t*v) % 109)
else:
    print(v*t)
