function isPalindrome(str){
    const cleaned = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    return cleaned === str.split('').reverse().join();
}
console.log(isPalindrome("assa"))