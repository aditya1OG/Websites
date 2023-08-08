package binary;

public class MoutainArray {
    public static void main(String[] args) {
        int[] arr = { 0, 1, 2, 0 };
        System.out.println(moutain(arr));
    }

    static int moutain(int[] arr) {
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
