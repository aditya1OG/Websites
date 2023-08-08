package binary;

public class MountainSearch {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 3, 1 };
        int target = 5;
        int ans = Mountain(arr);
        System.out.println(ans);
    }

    static int Mountain(int[] arr) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] > arr[mid + 1]) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        // return start or end both are same start == end ;
        return start;
    }
}
