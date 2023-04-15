
file1_path = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\output.txt"
file2_path = r"C:\Users\sunil\Desktop\Electhon-2023\Maps\PSCodes_JSON.txt"

with open(file1_path, "r") as f1, open(file2_path, "r") as f2:
    file1_set = set(map(str.strip, f1.readlines()))
    file2_set = set(map(str.strip, f2.readlines()))

file1_unique_set = file1_set.difference(file2_set)

with open('final.txt', "w") as f_out:
    f_out.write("\n".join(sorted(file1_unique_set)))
