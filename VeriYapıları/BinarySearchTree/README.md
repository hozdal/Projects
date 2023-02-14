# Binary Search Tree 
---
## [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

* root -> x , sağ -> y , sol -> z
---
### İlk Aşama
* x=3, z=1, y=6
* 1=[z=0,y=2] | 6=[z=5,y=8]
* 0 | 2 | 5=[z=4] | 8=[z=7,y=9]
---
### İkinci Aşama
* 3
* 1 6
* 0 2 5 8
* 4 7 9
---
### Son Aşama
* Big O Notation: O (logn)