# Reference: BPM to Milliseconds Conversion

Since **Fruity Delay** uses manual "Steps" or "MS" (in older versions/Patcher), use this table to find perfect rhythmic sync.

### Formula
`60,000 / BPM = 1 Quarter Note (4 Steps)`

### 140 BPM (Standard Trap)
| Note Value | Steps | Milliseconds |
| :--- | :--- | :--- |
| 1/4 Note | 4.00 | 428.5 ms |
| 1/8 Note | 2.00 | 214.2 ms |
| 1/16 Note | 1.00 | 107.1 ms |
| 1/8 Dotted | 3.00 | 321.4 ms |
| 1/4 Triplet | 2.66 | 285.7 ms |

### 90 BPM (Boom Bap)
| Note Value | Steps | Milliseconds |
| :--- | :--- | :--- |
| 1/4 Note | 4.00 | 666.6 ms |
| 1/8 Note | 2.00 | 333.3 ms |
| 1/16 Note | 1.00 | 166.6 ms |

### How to use in Fruity Delay
1.  Check your project BPM.
2.  Right-click the **Time** knob -> **Type Value**.
3.  Enter the "Steps" value (e.g., `3.0` for a 1/8 dotted feel). [SRC: IL-MAN]
