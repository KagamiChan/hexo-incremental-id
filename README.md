# Hexo incremental id

I can eat glass, it doesn't hurt me.

A script that adds an incremental id to __all your pages__, for those who prefer using fixed ids in permalink.

__Attention!__ This script will scan all your markdown files under `sources` folder every time you create new post, and all the methods are synchronous, you may encounter
+ performance problems
+ some old md files modified because a missing id is saved

## Installation
__PLEASE BACKUP YOUR EXISTING FILES BEFORE USING THIS SCRIPT__
``` shell
npm install --save hexo-incremental-id
```

## FAQ
### This script is ugly
I agree with you. You may check this article for a better solution(I did not verify though): https://lqwang.net/32.html

### No test?
No, no test. I've wasted several hours reading hexo docs and writing this script, I can't afford more. And this script is so brute-force that no one is supposed to use it, except me.
