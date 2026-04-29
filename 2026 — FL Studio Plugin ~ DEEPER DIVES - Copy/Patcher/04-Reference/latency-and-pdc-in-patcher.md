# Latency and PDC in Patcher

## The Challenge
When you split a signal into parallel paths inside Patcher, one path might have more plugins (and thus more latency) than the other.

## How Patcher Handles Latency
- **Internal PDC:** Patcher automatically calculates the delay of every node in the map.
- **Path Alignment:** It delays the "faster" paths to match the "slowest" path, ensuring that when the signals sum back together at the output, they are perfectly in phase.
- **Reporting to Host:** Patcher reports the **Total Latency** of its slowest internal path to FL Studio's mixer, so the rest of the project stays in sync.

## Pitfalls
- **Lookahead:** Plugins with lookahead (like `Fruity Limiter` or `Maximus`) add significant latency. If you use them in a parallel path, the whole Patcher instance will have that latency.
- **Feedback Loops:** PDC cannot perfectly align feedback loops. Avoid creating paths that circle back into themselves within the map.
