s = """bledsoe,eric        pho  16  10  11   3   0   3
bledsoe,eric        pho  27  11  16   2   2   5
bryant,kobe         lak  12   5  13   2   0  10
bryant,kobe         lak  23  11  11   2   1   9
bryant,kobe         lak  31  11  12   0   1   2
carter-williams     phi  16  11  11   0   0   6
carter-williams     phi  17  10  10   1   1   5
carter-williams     phi  18  10  16   1   0   5
cousins,demarcus    sac  24  20  13   1   4   5
cousins,demarcus    sac  24  21  10   3   6   5
curry,stephen       gol  28   2  10   5   0  10
duncan,tim          san  14  10  10   0   2   2
evans,tyreke        nor  22  10  16   1   1   6
green,draymond      gol  16  11  13   2   2   2
harden,james        hou  16  11  10   1   1   6
harden,james        hou  24  10  10   1   2   3
harden,james        hou  31  11  10   1   4   3
harden,james        hou  38  12  12   1   0   7
hill,george         ind  15  10  12   2   1   2
horford,al          atl  21  10  10   0   1   2
jackson,reggie      det  11  11  10   0   0   5
jackson,reggie      det  26  11  10   1   0   3
james,lebron        cle  20  10  12   3   1   3
james,lebron        cle  21  10  11   2   1   1
james,lebron        cle  32  12  10   1   1   4
lowry,kyle          tor  13  11  10   1   0   4
lowry,kyle          tor  20  11  10   3   0   3
paul,chris          cli  13  10  12   2   1   2
payton,elfrid       orl  15  10  12   2   0   3
payton,elfrid       orl  22  10  10   4   0   1
rondo,rajon         bos  12  10  10   1   0   4
rondo,rajon         bos  13  10  15   0   0   5
rondo,rajon         bos  13  13  11   3   0   4
rubio,ricky         min  18  12  11   1   0   2
turner,evan         bos  10  12  10   0   0   1
turner,evan         bos  13  11  12   0   0   1
turner,evan         bos  19  10  12   0   1   2
westbrook,russel    okl  12  10  17   4   2   6
westbrook,russel    okl  17  15  17   4   0   3
westbrook,russel    okl  20  11  10   1   0   5
westbrook,russel    okl  25  11  14   4   1   2
westbrook,russel    okl  29  10  12   2   0   8
westbrook,russel    okl  30  11  17   4   1   9
westbrook,russel    okl  31  11  11   1   0   6
westbrook,russel    okl  36  10  14   1   0   6
westbrook,russel    okl  39  14  11   3   0   4
westbrook,russel    okl  40  11  13   0   0   4
westbrook,russel    okl  40  13  11   1   0   6
westbrook,russel    okl  49  16  10   3   1   4
whiteside,hassan    mia  14  13   0   0  12   0"""

rows = [row.split() for row in s.split("\n")] #split on (), empty it splits on any whitespace no matter how many

for r in rows:
    print ("<tr>")
    for i in r:
        print ("<td>" + i + "</td>")
    print ("</tr>")