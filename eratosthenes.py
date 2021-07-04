import math

upper = 70

table = [[j * 10 + i + 1 for i in range(10)] for j in range(upper // 10)]

config = """
style {
  .group{margin: 0; padding: 0; label: '';}
  .node{margin: 0; width: 45; height: 45}
  .group .node .label {dy: 14px; dx: 8px}
  #primes {width: auto; margin: 30px 0px;}
}

primes[label='prime list:', t='[]'];
"""

print(config)
for row in table:
    print('group g' + str(row[0]) + 'to' + str(row[-1]) + ' {')
    s_row = [str(column) + ';' if column != 1 else '1[visibility=hidden]' for column in row]
    print(' ', ''.join(s_row))
    print('};')
print('---')

colors = list(reversed([
    '#7f7fff',
    '#84c1ff',
    '#89ffff',
    '#8effc6',
    '#93ff93',
    '#ccff99',
    '#ffff9e',
    '#ffd1a3',
    '#ffa8a8',
    '#ffadd6',
    '#ffb2ff',
    '#dbb7ff'
]))

primes = []
painted = set()

for i in range(2, int(math.sqrt(upper) + 1)):
    if i in painted:
        continue

    primes.append(i)
    print('primes[t="{0}"];'.format(primes))
    print('{0}[fill="{1}"];'.format(i, colors[-1]))
    print('---')

    #j = 2


    #while i * j <= upper:
    for j in range(i * 2, upper + 1, i):
        painted.add(j)
        #print('{0}[fill="{1}"];'.format(i * j, colors[-1]))
        print('{0}[fill="{1}"];'.format(j, colors[-1]))
        #j += 1
    print('---')
    colors.pop()

for i in range(2, upper + 1):
    if i not in painted:
        primes.append(i)

print('primes[t="{0}"];'.format(primes))
