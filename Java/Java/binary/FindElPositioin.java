package binary;

public class FindElPositioin {
    public static void main(String[] args) {
        int[] arr = { 5, 7, 7, 8, 8, 10 };
        int target = 8;
        int ans = findPositionOfElement(arr, target);
        System.out.println(ans);
    }

    static int findPositionOfElement(int[] arr, int target) {

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
    }
}
