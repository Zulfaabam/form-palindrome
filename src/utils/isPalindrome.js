export function isPalindrome(str) {
  if (!str) return false;

  let processedStr = str?.replace(" ", "")?.toLowerCase();

  let left = 0;
  let right = processedStr?.length - 1;

  while (left < right) {
    if (processedStr[left] !== processedStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
