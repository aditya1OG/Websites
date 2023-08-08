//👍👍 find the number which is greater or equal to target numberL ceiling of num ;
// 👍ceiling : closest greater number in the array
package binary;

public class CeilingNum {
    public static void main(String[] args) {
        int[] arr = { 2, 3, 5, 9, 14, 16, 18 };
        int target = 15;
        int ans = findNum(arr, target);
        System.out.println(ans);
    }

    static int findNum(int[] arr, int target) {
        if (target > arr[arr.length - 1]) {
            return -1;
        }
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return start;
        // 👍👍 find the number which is less or equal to target number : floor of num
        // floor : closest smaller number in the array
        // return end;
    }
}
