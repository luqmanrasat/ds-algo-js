"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and 
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""

def binary_search(input_array, value):
    """Your code goes here."""
    length = len(input_array)
    first_index = 0
    while length > 0:
        half = int(length / 2)
        middle_index = first_index + half
        current_value = input_array[middle_index]
        length = half
        
        if current_value == value:
            return middle_index
            
        if current_value < value:
            first_index = middle_index + 1
            continue
    return -1

test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
print binary_search(test_list, test_val1)
print binary_search(test_list, test_val2)