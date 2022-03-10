A = [10, 20, 30]
B = [0, 0, 0]

def f(i, N):
    if i == N:
        print(B)
        return
    B[i] = A[i]
    f(i + 1, N)

f(0, 3)