package binary;

public class SearchRange {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 7, 7, 7, 7, 8, 8, 9, 9 };
        int target = 8;
        int res = patterns(nums, target);
        System.out.println(res);
    }

    public static int patterns(int[] nums, int target) {
        int[] ans = { -1, -1 };
        ans[0] = SearchInfo(nums, target, true);
        if (ans[0] != -1) {
            ans[1] = SearchInfo(nums, target, false);
        }
        return SearchInfo(nums, target, true);
    }

    static int SearchInfo(int[] nums, int target, boolean findStartIndex) {
        int ans = -1;
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target <= nums[mid]) {
                end = mid - 1;
            } else if (target >= nums[mid]) {
                start = mid + 1;
            } else {
                ans = mid;
                if (findStartIndex) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return ans;
    }
}
