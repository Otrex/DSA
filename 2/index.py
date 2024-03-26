"""
==================
Identical Twins
==================
For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

Examples
Array: [1, 2, 3, 2, 1]
Number of Identical Twins: 2
Explanation:
Identical Twins: [[1, 1], [2, 2]]
Indexes: (0, 4), (1, 3)

Array: [1, 2, 2, 3, 2, 1]
Number of Identical Twins: 4
Explanation:
Identical Twins: [[1, 1], [2, 2], [2, 2], [2, 2]]
Indexes: (0, 5), (1, 2), (1, 4), (2, 4)

Array: [1, 1, 1, 1]
Number of Identical Twins: 6
Explanation:
Identical Twins: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]
Indexes: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), (2, 3)
Given an array nums, find the number of identical twins.
"""

# def no_of_identical_twins(arr):
#   count = 0
#   for i, eli in enumerate(arr):
#     for j, elj in enumerate(arr):
#       if i < j and eli == elj:
#         count += 1
    
#   return count


# print(f"[1, 2, 3, 2, 1] ===> {no_of_identical_twins([1, 2, 3, 2, 1])}")
# print(f"[1, 2, 2, 3, 2, 1] ===> {no_of_identical_twins([1, 2, 2, 3, 2, 1])}")
# print(f"[1, 1, 1, 1] ===> {no_of_identical_twins([1, 1, 1, 1])}")


# def count_identical_twins(nums):
#   """
#   Counts the number of identical twins in an array with optimized nested loops.

#   Args:
#       nums: An array of integers.

#   Returns:
#       The number of identical twins in the array.
#   """
#   count = 0
#   for i in range(len(nums) - 1):
#     for j in range(i + 1, len(nums)):
#       if nums[i] == nums[j]:
#         count += 1
#   return count

# # Examples
# print(count_identical_twins([1, 2, 3, 2, 1]))  # Output: 2
# print(count_identical_twins([1, 2, 2, 3, 2, 1]))  # Output: 4
# print(count_identical_twins([1, 1, 1, 1]))  # Output: 6


from collections import defaultdict

def count_identical_twins_optimized(nums):
  """
  Counts the number of identical twins in an array with a modified hash table approach.

  Args:
      nums: An array of integers.

  Returns:
      The number of identical twins in the array.
  """
  freq = defaultdict(int)
  count = 0
  for num in nums:
    freq[num] += 1

  for val, f in freq.items():
    count += f * (f - 1) // 2  # nCr formula for calculating pairs

  return count

# Examples
print(count_identical_twins_optimized([1, 2, 3, 2, 1]))  # Output: 2
print(count_identical_twins_optimized([1, 2, 2, 3, 2, 1]))  # Output: 4
print(count_identical_twins_optimized([1, 1, 1, 1]))  # Output: 6