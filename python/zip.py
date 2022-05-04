numbers = [1, 2, 3]
letters = ["A", "B", "C"]

for pair in zip(numbers, letters):
    print(pair)

c = lambda x: x * 2
change = list(map(c, numbers))
print(change)