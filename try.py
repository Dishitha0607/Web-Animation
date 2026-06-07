n = 2
str_n = str(n)
b = int(str_n[::-1])

if (b == 0) or (b == 1):
  print(n)

else:
  print(n ** b)